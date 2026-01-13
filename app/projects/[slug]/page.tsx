import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// This function generates the static paths for export
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectLayout({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-8">
      <Link 
        href="/projects" 
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 transition"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>
      
      <header className="mb-10">
        <div className="flex items-center gap-4 text-sm text-zinc-500 font-mono mb-4">
          <span>{project.date}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
      </header>

      <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
        {/* In a real app, this would likely be Markdown rendering */}
        <p>{project.content}</p>
        <p>{project.description}</p>
      </div>
    </article>
  );
}