import { Link } from "react-router-dom";
import type { CollectionCircleProps } from "../../types/ui";

export const CollectionCircle: React.FC<CollectionCircleProps> = ({
  collection,
}) => {
  const isNoNav = !collection.link || collection.link === "#" || collection.link === "javascript:void(0)";

  const content = (
    <div
      className="
        relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64
        rounded-full
        border border-primary
        bg-cover bg-center
        cursor-pointer
        overflow-hidden
        transition-all duration-500
      "
      style={{
        backgroundImage: `url(${collection.image})`,
        boxShadow: "0 0 40px rgba(255, 210, 77, 0.2)",
      }}
    >
      {/* Overlay */}
      <div
        className="
         absolute inset-0 rounded-full border border-yellow-400
    bg-black/50
    transition-all duration-300
   group-hover:bg-yellow-500/30"
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-end justify-center pb-4 md:pb-6">
        <div className="relative z-10 text-center transition-colors duration-300">
          <div
            className="
              font-extrabold text-lg md:text-xl
              text-white
              group-hover:text-black
            "
          >
            {collection.title}
          </div>

          <div
            className="
              text-xs md:text-sm
              text-white/80
              mt-1
              group-hover:text-black/80
            "
          >
            {collection.subtitle}
          </div>
        </div>
      </div>
    </div>
  );

  if (isNoNav) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={(e) => {
          e.preventDefault();
        }}
        className="group select-none"
      >
        {content}
      </div>
    );
  }

  if (collection.link.startsWith("http")) {
    return (
      <a href={collection.link} className="group" target="_self" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link to={collection.link} className="group">
      {content}
    </Link>
  );
};
