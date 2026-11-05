import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, budget, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Please provide your full name." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json({ error: "Please provide some details about your project (at least 5 characters)." }, { status: 400 });
    }

    // Optional third-party forwarders if keys are supplied
    const resendApiKey = process.env.RESEND_API_KEY;
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    const formspreeKey = process.env.FORMSPREE_ID;

    if (web3formsKey) {
      // Forward to Web3Forms
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `New Yadu Enterprises Inquiry from ${name}`,
            name,
            email,
            phone: phone || "Not provided",
            project_type: projectType,
            budget,
            message,
          }),
        });
      } catch (err) {
        console.error("Web3Forms forwarding error:", err);
      }
    } else if (resendApiKey) {
      // Forward to Resend API
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Yadu Enterprises <onboarding@resend.dev>",
            to: process.env.CONTACT_NOTIFICATION_EMAIL || "aditya43775@gmail.com",
            subject: `New Project Inquiry: ${projectType} from ${name}`,
            html: `
              <h2>New Project Inquiry - Yadu Enterprises</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p><strong>Project Type:</strong> ${projectType}</p>
              <p><strong>Budget Range:</strong> ${budget}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br/>")}</p>
            `,
          }),
        });
      } catch (err) {
        console.error("Resend API error:", err);
      }
    } else if (formspreeKey) {
      // Forward to Formspree
      try {
        await fetch(`https://formspree.io/f/${formspreeKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, projectType, budget, message }),
        });
      } catch (err) {
        console.error("Formspree forwarding error:", err);
      }
    }

    // Always log in development/production console for auditable records
    console.log("[INQUIRY_RECEIVED]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      projectType,
      budget,
      messageLength: message.length,
    });

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully received. We will respond within 2 business hours.",
    });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Server error processing your inquiry. Please contact us directly via WhatsApp." },
      { status: 500 }
    );
  }
}
