"use client";

import { SITE_CONFIG, PROJECTS } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Show only the first 3 projects on home page
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="space-y-20 py-12">
      
      {/* Introduction */}
      <section>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
        >
          Hi, I'm {SITE_CONFIG.name}.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed"
        >
          {SITE_CONFIG.description}
        </motion.p>
      </section>

      {/* Projects Preview */}
      <section>
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <Link href="/projects" className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`} className="block group border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 transition bg-zinc-50 dark:bg-zinc-900/50">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
                  <h3 className="text-lg font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>
                  <span className="text-sm text-zinc-500 font-mono">{project.date}</span>
                </div>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}