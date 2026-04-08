import {
  MdOutlineKitchen,
  MdElectricalServices,
} from 'react-icons/md';
import { GiClothes, GiWindow } from 'react-icons/gi';
import {
  FaTachometerAlt,
  FaPaintRoller,
  FaWindowMaximize,
  FaBorderAll,
  FaLightbulb,
} from 'react-icons/fa';

export default function Solutions() {
  const items = [
    { title: "Kitchen", icon: MdOutlineKitchen, color: "#FF6B6B" },        // coral
    { title: "Wardrobes", icon: GiClothes, color: "#4ECDC4" },             // turquoise
    { title: "False Ceiling", icon: FaTachometerAlt, color: "#FFB347" },   // orange
    { title: "Electrical works", icon: MdElectricalServices, color: "#A8E6CF" }, // mint
    { title: "Painting", icon: FaPaintRoller, color: "#FF8C94" },          // pink
    { title: "Curtains & Blinds", icon: FaWindowMaximize, color: "#C7B9FF" }, // lavender
    { title: "Wall panelling", icon: FaBorderAll, color: "#6C5CE7" },      // deep purple
    { title: "Glass partitions", icon: GiWindow, color: "#FDCB6E" },       // golden
    { title: "Lighting", icon: FaLightbulb, color: "#00CEC9" },            // teal
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-100 to-gray-200">
      <h2 className="text-center text-3xl font-semibold mb-12 text-gray-800">
        End-to-End Furniture Solutions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto px-6">
        {items.map((item) => (
          <div key={item.title} className="text-center group">
            <div
              className="w-20 h-20 mx-auto mb-4 rounded-full shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
              style={{ backgroundColor: `${item.color}20` }} // 20 = 12% opacity
            >
              <item.icon
                className="w-10 h-10"
                style={{ color: item.color }}
              />
            </div>
            <p className="text-gray-700 text-sm font-medium tracking-wide">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}