import { PROJECTS } from "@/lib/data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">All Projects</h1>
      <div className="grid gap-6">
        {PROJECTS.map((project) => (
          <Link 
            key={project.slug} 
            href={`/projects/${project.slug}`}
            className="group block"
          >
            <article className="border-b border-zinc-200 dark:border-zinc-800 py-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition -mx-4 px-4 rounded-lg">
              <span className="text-xs font-mono text-zinc-500 mb-2 block">{project.date}</span>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {project.title}
              </h2>
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