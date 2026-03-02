export default function Solutions() {
 const items = [
  {
    title: "Modular Kitchen",
    image: "/endtoend/3.svg",
  },
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
    title: "TV Units",
    image: "/endtoend/7.svg",
  },
  {
    title: "Study Tables",
    image: "/endtoend/8.svg",
  },
  {
    title: "False Ceiling",
    image: "/endtoend/9.svg",
  },
  {
    title: "Lights",
    image: "/endtoend/10.svg",
  },
  {
    title: "Wallpaper",
    image: "/endtoend/11.svg",
  },
  {
    title: "Wall Paint",
    image: "/endtoend/12.svg",
  },
  {
    title: "Bathroom",
    image: "/endtoend/13.svg",
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
  {
    title: "Kids Bedroom",
    image: "/endtoend/16.svg",
  },
];

  return (
    <section className="py-20">
      <h2 className="text-center text-3xl font-semibold mb-12">
        End-to-End Interior Solutions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {items.map((item) => (
          <div key={item.title} className="text-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
