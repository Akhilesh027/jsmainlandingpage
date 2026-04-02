import { FaCouch, FaBed, FaUtensils } from "react-icons/fa";

export default function Solutions() {
  const items = [
    // Original items (using image paths)
    {
      title: "Storage and Wardrobe",
      image: "/endtoend/4.svg",
    },
    {
      title: "Crockery Units",
      image: "/endtoend/5.svg",
    },
    {
      title: "Space Saving Furniture",
      image: "/endtoend/6.svg",
    },
    {
      title: "Pooja Unit",
      image: "/endtoend/14.svg",
    },
    {
      title: "Foyer Designs",
      image: "/endtoend/15.svg",
    },
    {
      title: "Movable Furniture",
      image: "/endtoend/5.svg",
    },
    // New items with built‑in icons
    {
      title: "Sofa",
      icon: FaCouch,
    },
    {
      title: "Beds",
      icon: FaBed,
    },
    {
      title: "Dining Set",
      icon: FaUtensils,
    },
  ];

  return (
    <section className="py-20 bg-black/20 backdrop-blur-sm">
      <h2 className="text-center text-3xl font-semibold mb-12 text-white">
        End-to-End Furniture Solutions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto px-6">
        {items.map((item) => (
          <div key={item.title} className="text-center group">
            {/* Render either an image or an icon */}
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 p-3 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20"
                loading="lazy"
              />
            ) : (
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
                {item.icon && (
                  <item.icon className="w-10 h-10 text-yellow-400" />
                )}
              </div>
            )}
            <p className="text-white text-sm font-medium tracking-wide">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}