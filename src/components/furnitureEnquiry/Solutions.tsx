export default function Solutions() {
 const items = [
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
    title: "False Ceiling",
    image: "/endtoend/9.svg",
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
        End-to-End Furniture Solutions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {items.map((item) => (
          <div key={item.title} className="text-center">
            {/* <img
              src={item.image}
              alt={item.title}
              className="
    mx-auto mb-4
    w-24 h-24
    sm:w-28 sm:h-28
    md:w-32 md:h-32
    lg:w-36 lg:h-36
    object-cover
    rounded-full
  "
              loading="lazy"
            /> */}

             <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 mx-auto mb-4"
              loading="lazy"
            />

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
