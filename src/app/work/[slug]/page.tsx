import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data/site-config";
import { CaseStudyView } from "@/components/CaseStudyView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SITE_CONFIG.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = SITE_CONFIG.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | YADU-ENTERPRISES",
    };
  }

  return {
    title: `${project.title} | Case Study | YADU-ENTERPRISES`,
    description: project.summary,
    openGraph: {
      title: `${project.title} - Case Study`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = SITE_CONFIG.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = SITE_CONFIG.projects.filter((p) => p.slug !== slug);

  return <CaseStudyView project={project} otherProjects={otherProjects} />;
}
