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
    { title: "TV unit", icon: FaTv },
    { title: "Sofa set", icon: FaCouch },
    { title: "Beds", icon: FaBed },
    { title: "Dining table", icon: FaUtensils },
    { title: "Center table", icon: FaTable },
    { title: "Crockery unit", icon: FaArchive },
    { title: "Foyer/console unit", icon: FaDoorOpen },
    { title: "Vanity unit", icon: FaChair },
    { title: "Study unit", icon: FaBook },
    { title: "Outdoor furniture", icon: FaUmbrellaBeach },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-3xl font-semibold mb-12 text-gray-800">
        End-to-End Furniture Solutions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto px-6">
        {items.map((item) => (
          <div key={item.title} className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <item.icon className="w-10 h-10 text-gray-700" />
            </div>
            <p className="text-gray-800 text-sm font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}