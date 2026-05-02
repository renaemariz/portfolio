import React, { useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Image from "next/image";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";
import { Portal } from "./Portal";
import Autoplay from "embla-carousel-autoplay";

export type Slide = {
  id: number;
  url: string;
  alt: string;
};
type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
  initialIndex: number;
  onClose: () => void;
};

const ModalSlider = ({ slides, initialIndex, onClose }: PropType) => {
  const [emblaRef] = useEmblaCarousel({
    startIndex: initialIndex,
    loop: true,
  });

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-8 h-10 w-10 z-50 text-white text-xl bg-black/50 rounded-full"
      >
        ✕
      </button>

      {/* MODAL CAROUSEL VIEWPORT */}
      <div className="w-full h-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_100%] min-w-0 flex items-center justify-center p-4"
            >
              <motion.div
                layoutId={`img-${slide.id}`} // Matches the main carousel ID
                className="relative w-full max-w-4xl aspect-video"
              >
                <Image
                  fill
                  className="object-cover"
                  src={slide.url}
                  alt={slide.alt}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ModalSlider;
