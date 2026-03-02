import type { onHandler } from "../../types/common";

export default function DesignerCTA({ onOpen }: onHandler) {
  return (
    <section className="relative bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Confused Between Styles, Layouts, and Costs?
        </h2>
        <p className="text-xl mb-6">
          Meet a designer who’ll bring it all together — free.
        </p>
        <button
          onClick={onOpen}
          className="bg-yellow-400 px-10 py-4 rounded-md text-lg"
        >
          Meet a Designer
        </button>
      </div>
    </section>
  );
}
