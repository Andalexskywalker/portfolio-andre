"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
    images: string[];
    title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="space-y-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 shadow-2xl">
                <Image
                    src={activeImage}
                    alt={`Screenshot of ${title}`}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveImage(image)}
                        className={cn(
                            "relative aspect-video w-32 shrink-0 overflow-hidden rounded-lg border border-white/10 transition-all hover:opacity-100",
                            activeImage === image ? "ring-2 ring-primary opacity-100" : "opacity-60"
                        )}
                    >
                        <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
