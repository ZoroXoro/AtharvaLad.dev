"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CARD_WIDTH = "w-[460px]"; // change to w-[320px], w-[400px], etc.

export function ProjectCard({
  title,
  description,
  tags = [],
  href,
  image,
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`block ${CARD_WIDTH} mx-auto rounded-xl overflow-hidden border border-gray-700 bg-gray-900 hover:shadow-lg hover:-translate-y-1 transition transform`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Thumbnail */}
      {image && (
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 360px, 360px"
            priority={false}
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-purple-400">{title}</h3>
        <p className="mt-2 text-gray-300 text-sm line-clamp-4">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2 py-1 rounded-md text-xs bg-purple-700/30 border border-purple-600 text-purple-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
