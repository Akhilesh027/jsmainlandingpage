import type { onHandler } from "../../types/common";

export default function Hero({ onOpen }: onHandler) {
  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center pt-20"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c)",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-xl px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Your Hyderabad Home.
          <br />
          <span className="text-yellow-300">
            Furnished. Delivered. Installed.
          </span>
        </h1>
        <p className="mb-6 text-lg">
          Premium furniture solutions for every room — from design to delivery.
        </p>
        <button
          onClick={onOpen}
          className="bg-yellow-400 text-black px-8 py-4 rounded-md font-medium"
        >
          Get Furniture Quote →
        </button>
      </div>
    </section>
  );
}
