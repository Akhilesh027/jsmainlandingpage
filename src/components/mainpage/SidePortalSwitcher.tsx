import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

const SidePortalSwitcher = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 md:right-8 md:bottom-8 z-50">
      <div
        className={`
          flex items-center
          h-12
          bg-black/90
          border border-yellow-500/30
          rounded-full
          overflow-hidden
          shadow-xl shadow-black/50
          transition-all duration-300 ease-out
          ${open ? "w-[18rem]" : "w-12"}
          md:hover:w-[18rem]
        `}
      >
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="
            w-12 h-12
            flex items-center justify-center
            bg-yellow-500
            text-black
            shrink-0
          "
          aria-label="Toggle portal switcher"
        >
          {open ? (
            <X className="w-5 h-5" />
          ) : (
            <ArrowRight className="w-5 h-5 transition-transform duration-300" />
          )}
        </button>

        <div
          className={`
            flex items-center gap-3
            pl-3 pr-4
            whitespace-nowrap
            transition-opacity duration-300
            ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
            md:group-hover:opacity-100
            md:pointer-events-auto
          `}
        >
          <a
            href="https://vendor.jsgallor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-1.5
              rounded-full
              border border-yellow-500
              text-yellow-400
              text-sm font-semibold
              hover:bg-yellow-500 hover:text-black
              transition-colors
            "
          >
            Vendor
          </a>

          <a
            href="https://jsgallormanufacture.jsgallor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-1.5
              rounded-full
              border border-yellow-500
              text-yellow-400
              text-sm font-semibold
              hover:bg-yellow-500 hover:text-black
              transition-colors
            "
          >
            Manufacturer
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidePortalSwitcher;