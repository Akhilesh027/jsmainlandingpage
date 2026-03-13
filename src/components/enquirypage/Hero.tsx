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

      <div className="relative max-w-2xl px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
          Your Hyderabad Home.
          <br />
          <span className="text-yellow-300">
            Designed, Managed, Delivered by Recognised Vastu Experts.
          </span>
        </h1>

        <p className="mb-6 text-lg text-white/90 max-w-xl">
          End-to-end luxury interiors crafted with thoughtful design, seamless
          execution, and trusted Vastu expertise for harmonious living.
        </p>

        <button
          onClick={onOpen}
          className="bg-yellow-400 text-black px-8 py-4 rounded-md font-medium hover:bg-yellow-300 transition-colors"
        >
          Book 3D Design Session →
        </button>
      </div>
    </section>
  );
}