import type { onHandler } from "../../types/common";



 const CTASection:React.FC<onHandler> = ({ onOpen }) => {

  const features = [
    { label: "Delivery in 45 days*", value: "45" },
    { label: "No Hidden Costs", value: "₹" },
    { label: "10-Year Warranty", value: "10" },
    { label: "Easy EMIs", value: "%" },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)",
      }}
    >
      <div className="absolute inset-0 bg-white/90" />
      <div className="relative max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold mb-12">
          Why Hyderabad Homeowners Love JS GALLOR
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {features.map((f) => (
            <div key={f.label}>
              <div className="w-16 h-16 mx-auto border-2 border-yellow-400 rounded-full flex items-center justify-center text-yellow-400 font-bold mb-3">
                {f.value}
              </div>
              <p>{f.label}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onOpen}
          className="bg-yellow-400 px-10 py-4 rounded-md font-medium"
        >
          Book Free Consultation
        </button>
      </div>
    </section>
  );
}


export default CTASection