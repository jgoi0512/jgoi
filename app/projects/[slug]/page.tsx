import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

// Required for Static Export to work correctly on Cloudflare
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
    <article className="py-8 max-w-2xl mx-auto">
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
        <h1 className="text-4xl font-bold tracking-tight mb-6">{project.title}</h1>
        
        {project.projectUrl && (
          <a 
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-4 py-2 rounded-md font-medium text-sm hover:bg-zinc-700 dark:hover:bg-zinc-300 transition"
          >
            View Project <ExternalLink size={14} />
          </a>
        )}
      </header>

      <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed">
        <p className="whitespace-pre-wrap">{project.content}</p>
      </div>
    </article>
  );
}