 import type { onHandler } from "../../types/common";

export default function DesignerCTA({ onOpen }: onHandler) {
  return (
    <section className="relative bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Unsure Which Furniture Fits Your Space and Budget?
        </h2>
        <p className="text-xl mb-6">
          Talk to a furniture expert who helps you choose the right pieces — free.
        </p>
        <button
          onClick={onOpen}
          className="bg-yellow-400 px-10 py-4 rounded-md text-lg"
        >
          Talk to a Furniture Expert
        </button>
      </div>
    </section>
  );
}
