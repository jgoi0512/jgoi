import { PROJECTS } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="py-8">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 transition"
      >
        <ArrowLeft size={16} /> Back to Home
      </Link>
      
      <h1 className="text-3xl font-bold mb-8">All Projects</h1>
      
      <div className="grid gap-6">
        {PROJECTS.map((project) => (
          <Link 
            key={project.slug} 
            href={`/projects/${project.slug}`}
            className="group block"
          >
            <article className="border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 transition bg-zinc-50 dark:bg-zinc-900/50">
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-2">
                <h2 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {project.title}
                </h2>
                <span className="text-sm font-mono text-zinc-500">{project.date}</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}