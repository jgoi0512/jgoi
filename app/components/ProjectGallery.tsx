"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import clsx from "clsx";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, isLightboxOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-12">
      <h3 className="text-2xl font-bold mb-8">Project Gallery</h3>
      
      <div className="relative group select-none">
        {/* Main Carousel View */}
        <div 
          className="relative aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 cursor-zoom-in"
          onClick={() => setIsLightboxOpen(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <Image
                src={images[index]}
                alt={`${title} image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/10 dark:bg-white/5">
             <span className="bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md flex items-center gap-2 shadow-lg">
               <ZoomIn size={16} /> Expand
             </span>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg border border-zinc-200 dark:border-zinc-700"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg border border-zinc-200 dark:border-zinc-700"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Indicators */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={clsx(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index 
                    ? "bg-zinc-800 dark:bg-zinc-200 w-8" 
                    : "bg-zinc-300 dark:bg-zinc-700 w-2 hover:bg-zinc-400 dark:hover:bg-zinc-600"
                )}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition p-2 z-[110]"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <div 
              className="relative w-full h-full p-4 md:p-12 flex items-center justify-center" 
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full h-full max-w-7xl max-h-[85vh]"
              >
                <Image
                  src={images[index]}
                  alt={`${title} full size ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={95}
                />
              </motion.div>

              {/* Lightbox Navigation */}
               {images.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 transition hover:bg-white/10 rounded-full"
                  >
                    <ChevronLeft size={48} />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 transition hover:bg-white/10 rounded-full"
                  >
                    <ChevronRight size={48} />
                  </button>
                </>
              )}
            </div>
            
            {/* Caption/Counter */}
            <div className="absolute bottom-6 left-0 right-0 text-center text-white/50 text-sm font-mono">
                {index + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}