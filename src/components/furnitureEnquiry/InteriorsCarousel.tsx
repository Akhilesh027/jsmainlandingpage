 import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


type CarouselItem = {
  title: string;
  image: string;
};

const items: CarouselItem[] = [
  {
    title: "Bed with Modular Wardrobe",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
  {
    title: "6-Seater Dining Table Set",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
  {
    title: "Modern Wooden Bed Frame",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  },
  {
    title: "Luxury Sofa Set",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
  },
  {
    title: "Modular Kitchen Cabinets",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
];


const CARD_WIDTH = 340;

const InteriorsCarousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const maxIndex = items.length - 1;

  const prev = () => {
    setIndex((i) => Math.max(i - 1, 0));
  };

  const next = () => {
    setIndex((i) => Math.min(i + 1, maxIndex));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
          End-to-End Furniture — Delivered Seamlessly
        </h2>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* LEFT ARROW */}
          <button
            onClick={prev}
            disabled={index === 0}
            className={`
              absolute left-0 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full
              bg-white shadow-lg border
              flex items-center justify-center
              transition
              ${
                index === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }
            `}
          >
            <span className="text-2xl"><ChevronLeft/></span>
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            disabled={index === maxIndex}
            className={`
              absolute right-0 top-1/2 -translate-y-1/2 z-10
              w-12 h-12 rounded-full
              bg-white shadow-lg border
              flex items-center justify-center
              transition
              ${
                index === maxIndex
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }
            `}
          >
            <span className="text-2xl"><ChevronRight/></span>
          </button>

          {/* VIEWPORT */}
          <div className="overflow-hidden px-14">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${index * CARD_WIDTH}px)`,
              }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className="min-w-[320px] sm:min-w-[340px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 sm:h-64 w-full object-cover rounded-xl"
                  />

                  <p className="mt-4 text-sm sm:text-base font-medium text-gray-800">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DOT INDICATORS */}
          <div className="flex justify-center mt-8 gap-2">
            {items.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition
                  ${
                    i === index
                      ? "bg-black"
                      : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorsCarousel;
