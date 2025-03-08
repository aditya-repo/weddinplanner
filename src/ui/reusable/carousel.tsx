"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useLayoutEffect, useState } from "react";

interface CarouselProps {
  desktop?: number;
  mobile?: number;
  initialSize: number;
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ desktop = 2.5, mobile = 1.2, children, initialSize }) => {
  const [emblaRef] = useEmblaCarousel({ align: "start" });
  const [slidesToShow, setSlidesToShow] = useState<number>(initialSize); 

  useLayoutEffect(() => {
    const isMobile = window.innerWidth < 768;
    setSlidesToShow(isMobile ? mobile : desktop);

    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? mobile : desktop);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [desktop, mobile]);

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div ref={emblaRef} className="overflow-hidden w-full">
      <div className="flex gap-3">
        {childrenArray.map((child, index) => (
          <div
            key={index}
            className="shrink-0 "
            style={{ flex: `0 0 ${100 / slidesToShow}%` }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
