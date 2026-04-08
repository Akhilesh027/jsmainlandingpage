import {
  FaTv,
  FaCouch,
  FaBed,
  FaUtensils,
  FaTable,
  FaArchive,
  FaDoorOpen,
  FaChair,
  FaBook,
  FaUmbrellaBeach,
} from "react-icons/fa";

export default function Solutions() {
  const items = [
    { title: "TV unit", icon: FaTv, color: "#FF6B6B" },      // coral red
    { title: "Sofa set", icon: FaCouch, color: "#4ECDC4" },  // turquoise
    { title: "Beds", icon: FaBed, color: "#FFB347" },        // orange
    { title: "Dining table", icon: FaUtensils, color: "#A8E6CF" }, // mint
    { title: "Center table", icon: FaTable, color: "#FF8C94" },     // pink
    { title: "Crockery unit", icon: FaArchive, color: "#C7B9FF" },   // lavender
    { title: "Foyer/console unit", icon: FaDoorOpen, color: "#6C5CE7" }, // deep purple
    { title: "Vanity unit", icon: FaChair, color: "#FDCB6E" },        // golden
    { title: "Study unit", icon: FaBook, color: "#00CEC9" },          // teal
    { title: "Outdoor furniture", icon: FaUmbrellaBeach, color: "#FF9F4A" }, // warm apricot
  ];

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-3xl font-semibold mb-12 text-gray-800">
        End-to-End Furniture Solutions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto px-6">
        {items.map((item) => (
          <div key={item.title} className="text-center group">
            {/* Icon container with soft background matching icon color */}
            <div
              className="w-20 h-20 mx-auto mb-4 rounded-full shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
              style={{ backgroundColor: `${item.color}20` }} // 20 = 12% opacity
            >
              <item.icon
                className="w-10 h-10"
                style={{ color: item.color }}
              />
            </div>
            <p className="text-gray-800 text-sm font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}