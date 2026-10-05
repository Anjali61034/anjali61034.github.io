import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
  { id: 1, title: 'AgedArc', image: 'https://via.placeholder.com/800x600.png?text=AgedArc+Placeholder' },
  { id: 2, title: 'Allbirds', image: 'https://via.placeholder.com/800x600.png?text=Allbirds+Placeholder' },
  { id: 3, title: 'Dopamean', image: 'https://via.placeholder.com/800x600.png?text=Dopamean+Placeholder' },
  { id: 4, title: 'FTGrails', image: 'https://via.placeholder.com/800x600.png?text=FTGrails+Placeholder' },
];

export const ImageBooklet = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[600px] flex flex-col items-center justify-center py-20 text-foreground">
      <h3 className="text-4xl font-bold mb-8">Featured Experience</h3>
      <div className="relative w-full h-full bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
        {/* Placeholder for 3D Booklet */}
        <div className="absolute inset-0 flex items-center justify-center">
            <img 
                src={slides[currentIndex].image} 
                alt={slides[currentIndex].title} 
                className="object-cover w-full h-full opacity-80 dark:opacity-70 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-black/20 dark:bg-black/50 flex items-center justify-center">
                <h4 className="text-white text-5xl font-black uppercase tracking-widest">{slides[currentIndex].title}</h4>
            </div>
        </div>

        <button 
            onClick={prevSlide}
            className="absolute left-4 p-4 bg-black/50 hover:bg-black text-white rounded-full transition-colors z-10"
        >
            <ChevronLeft size={32} />
        </button>

        <button 
            onClick={nextSlide}
            className="absolute right-4 p-4 bg-black/50 hover:bg-black text-white rounded-full transition-colors z-10"
        >
            <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};
