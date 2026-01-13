import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/data";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { Github, Linkedin, Mail } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300`}>
        <Providers>
          <div className="flex flex-col min-h-screen max-w-4xl mx-auto px-6">
            
            {/* Header / Navigation */}
            <header className="flex justify-between items-center py-8">
              <Link href="/" className="font-bold text-xl tracking-tight">
                {SITE_CONFIG.name}
              </Link>
              <nav className="flex items-center gap-6 text-sm font-medium">
                <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link>
                <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</Link>
                <ThemeToggle />
              </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col justify-center">
              {children}
            </main>

            {/* Footer */}
            <footer className="py-8 mt-12 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center text-zinc-500 dark:text-zinc-400 text-sm">
              <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition"><Linkedin size={18} /></a>
                <a href={SITE_CONFIG.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition"><Github size={18} /></a>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-zinc-900 dark:hover:text-white transition"><Mail size={18} /></a>
              </div>
            </footer>

          </div>
        </Providers>
      </body>
    </html>
  );
}