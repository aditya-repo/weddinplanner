"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SwipeCarouselProps {
    desktop?: number;
    mobile?: number;
    children: React.ReactNode
}

const Carousel: React.FC<SwipeCarouselProps> = ({
    desktop = 3,
    mobile = 1,
    children
}) => {


    const childrenArray = Array.isArray(children) ? children : [children];

    if (!children) {
        return <div>Null</div>
    }

    const totalCard = childrenArray.length
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(desktop);

    useEffect(() => {
        const updateCards = () => {
            setVisibleCards(window.innerWidth <= 768 ? mobile : desktop);
        };
        updateCards();
        window.addEventListener("resize", updateCards);
        return () => window.removeEventListener("resize", updateCards);
    }, [desktop, mobile]);

    const totalSlides = Math.ceil(totalCard / visibleCards);
    // const totalSlides = totalCard;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };



    return (
        <div className="relative w-full mx-auto overflow-hidden px-3">
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10" onClick={prevSlide}>
                <ChevronLeft size={18} />
            </button>

            <div className="w-full flex justify-center overflow-hidden">
                <motion.div
                    className="flex gap-0"
                    animate={{ x: `-${currentIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                        width: `${totalSlides * 100}%`,
                        display: "flex",
                    }}
                >
                    {Array.from({ length: totalCard }).map((_, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 px-1 overflow-hidden"
                            style={{
                                width: `calc(100% / ${visibleCards})`, 
                            }}
                        >
                            {childrenArray[index % childrenArray.length]}
                        </div>
                    ))}
                </motion.div>
            </div>

            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10"
                onClick={nextSlide}
            >
                <ChevronRight size={18} />
            </button>
        </div>
    );
};

export default Carousel;
