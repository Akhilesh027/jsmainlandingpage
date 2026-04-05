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
    { title: "Kitchen", icon: MdOutlineKitchen },
    { title: "Wardrobes", icon: GiClothes },
    { title: "False Ceiling", icon: FaTachometerAlt },
    { title: "Electrical works", icon: MdElectricalServices },
    { title: "Painting", icon: FaPaintRoller },
    { title: "Curtains & Blinds", icon: FaWindowMaximize },
    { title: "Wall panelling", icon: FaBorderAll },
    { title: "Glass partitions", icon: GiWindow },
    { title: "Lighting", icon: FaLightbulb },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-100 to-gray-200">
      <h2 className="text-center text-3xl font-semibold mb-12 text-gray-800">
        End-to-End Furniture Solutions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto px-6">
        {items.map((item) => (
          <div key={item.title} className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/60 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-gray-300">
              <item.icon className="w-10 h-10 text-gray-700" />
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