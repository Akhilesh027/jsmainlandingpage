import { ArrowRight } from "lucide-react";

const SidePortalSwitcher = () => {
  return (
    <div className="fixed bottom-5 right-5 md:right-8 md:bottom-8 z-50 group">
      <div
        className="
         flex items-center
    h-12
    bg-black/90
    border border-yellow-500/30
    rounded-full
    overflow-hidden
    shadow-xl shadow-black/50
    transition-all duration-300 ease-out
    w-12 group-hover:w-[18rem]


        "
      >
        {/* Arrow */}
        <div
          className="
            w-12 h-12
            flex items-center justify-center
            bg-yellow-500
            text-black
            shrink-0
          "
        >
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>

        {/* Links */}
        <div
          className="
            flex items-center gap-3
            pl-3 pr-4
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300 delay-100
            whitespace-nowrap
          "
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
