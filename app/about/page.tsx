import { SITE_CONFIG } from "@/lib/data";

export default function About() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      
      <div className="prose dark:prose-invert">
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          I am a passionate developer with a keen eye for design and a drive for creating 
          seamless user experiences. My background involves full-stack development using 
          modern technologies like React, Node.js, and Cloud infrastructures.
        </p>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          When I'm not coding, I enjoy exploring new technologies, contributing to open source, 
          and refining my craft.
        </p>
      </div>

      <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-8">
        <h2 className="text-xl font-semibold mb-4">Connect</h2>
        <ul className="space-y-3">
          <li>
            <a href={SITE_CONFIG.socials.linkedin} className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
          </li>
          <li>
            <a href={SITE_CONFIG.socials.github} className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
          </li>
          <li>
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">Email</a>
          </li>
        </ul>
      </div>
    </div>
  );
}