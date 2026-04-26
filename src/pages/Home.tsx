import { useState } from "react";
import { ecommerce_websites } from "../jsondata/e-com-data";
import { CollectionCircle } from "../components/mainpage/CollectionCircle";
import { HelpModal } from "../components/modals/HelpModal";
import { Link } from "react-router-dom";
import SidePortalSwitcher from "../components/mainpage/SidePortalSwitcher";
import video from '../images/furniture stores.mp4';

// Simple FAQ Modal component
const FaqModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;

  const faqs = [
    { q: "What materials do you use for your furniture?", a: "We use high-quality materials such as teak wood, Solid wood, Pine wood, Engineering wood and premium fabrics - Velvet, Chenille, Microfiber, Suede (or Faux Suede) ensuring durability, strength, and long-lasting performance." },
    { q: "Do you offer customization?", a: "Yes, we provide full customization including size, design, color, and fabric based on your requirements." },
    { q: "How is the price determined?", a: "Pricing depends on size, design, materials, and level of customization. We offer direct manufacturer pricing, making it more affordable." },
    { q: "What is the delivery time?", a: "Delivery usually takes 7–15 days, depending on the product and customization requirements." },
    { q: "Do you have a physical showroom?", a: "Currently, we operate as an online business, which helps us provide better pricing without showroom costs. Our Warehouse and deliveries are operating from the manufacturing unit only." },
    { q: "How can I see the product before ordering?", a: "We share real product images, videos, and design details via WhatsApp before order confirmation." },
    { q: "Do you deliver across India?", a: "Yes, we offer delivery across Pan India." },
    { q: "What payment methods do you accept?", a: "We accept online payments and bank transfers." },
    { q: "Do you provide a warranty?", a: "Yes, we provide a quality assurance, and warranty details vary depending on the product." },
    { q: "Can I make changes after placing an order?", a: "No. However, minor changes can be made before production begins." },
    { q: "Do you provide installation support?", a: "Yes, we provide guidance and support for installation, if required." },
    { q: "Is your furniture durable for long-term use?", a: "Yes, our furniture is built using strong materials like teak wood, Solid wood, Pine wood, Engineering wood and high-quality components, ensuring durability and long-term performance." },
    { q: "Can I choose my own fabric or color combination?", a: "Absolutely. We offer a wide range of fabric and color options, and you can choose what best matches your home interior." },
    { q: "How do you ensure product quality before delivery?", a: "We conduct quality checks at every stage of production and share final images/videos with customers before dispatch." }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-[#1a1a1a] rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-yellow-500/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#1a1a1a] p-4 border-b border-white/10 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Frequently Asked Questions</h2>
          <button onClick={onClose} className="text-white/70 hover:text-white text-2xl leading-none">&times;</button>
        </div>
        <div className="p-5 space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10 pb-4 last:border-0">
              <h3 className="text-yellow-400 font-semibold text-base mb-1">❓ {faq.q}</h3>
              <p className="text-white/80 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsHelpOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-[-2]"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/40 z-[-1]" />
      <div className="fixed inset-0 bg-black/60 z-[-1]" />

      {/* Header */}
      <header className="flex flex-wrap justify-center md:justify-between items-center gap-5 p-5 md:p-8 lg:p-10">
        <Link
          to="/enquiry/furniture"
          className="px-6 py-3 order-2 rounded-full bg-transparent backdrop-blur-sm border border-yellow-500 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:-translate-y-1 hover:shadow-md hover:shadow-yellow-500 relative overflow-hidden group"
        >
          <span className="relative z-10">Enquiry for Furniture →</span>
          <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
        </Link>

        <div className="flex items-center gap-3 md:order-1">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary flex items-center justify-center font-bold text-primary-foreground text-xl hover:rotate-360 transition-transform duration-700">
            <img src="/jsgallor.png" className="w-11.25 h-11.25 transition-transform duration-700 ease-in-out hover:rotate-360" alt="JSGALLOR Logo" />
          </div>
          <div>
            <div className="font-semibold text-lg text-white">JSGALLOR</div>
            <div className="text-[11px] text-yellow-400 tracking-wide">Jaghsora Luxore Private Limited</div>
            <div className="text-xs text-gray-400">Furniture & Interiors</div>
          </div>
        </div>

        <Link
          to="/enquiry/interior"
          className="px-6 py-3 rounded-full bg-transparent backdrop-blur-sm border border-yellow-500 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:-translate-y-1 hover:shadow-md hover:shadow-yellow-500 relative overflow-hidden group"
        >
          <span className="relative z-10">Enquiry for Interior →</span>
          <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
        </Link>
      </header>

      <main className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 px-5 py-10 min-h-[calc(100vh-120px)]">
        {ecommerce_websites.map((c) => (
          <CollectionCircle key={c.id} collection={c} />
        ))}
      </main>

      {/* Side Portal Switcher (Vendor/Manufacture section) */}
      <SidePortalSwitcher />

      {/* Buttons - Help and FAQ, mobile friendly */}
      <div className="fixed left-5 bottom-20 md:left-8 md:bottom-8 flex flex-col gap-3 z-50">
        <button
          onClick={() => setIsHelpOpen(true)}
          className="flex items-center gap-3 px-4 py-2 rounded-2xl border border-primary/70 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md text-white text-sm font-light tracking-wide transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg group"
        >
          Help
          <div className="w-6 h-6 rounded-xl bg-black/20 flex items-center justify-center text-yellow-500 font-bold text-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-360">
            i
          </div>
        </button>

        <button
          onClick={() => setIsFaqOpen(true)}
          className="flex items-center gap-3 px-4 py-2 rounded-2xl border border-primary/70 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md text-white text-sm font-light tracking-wide transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg group"
        >
          FAQ
          <div className="w-6 h-6 rounded-xl bg-black/20 flex items-center justify-center text-yellow-500 font-bold text-sm transition-transform duration-300 group-hover:scale-110">
            ?
          </div>
        </button>
      </div>

      {/* Modals */}
      <HelpModal
        open={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
      <FaqModal open={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
    </div>
  );
};

export default Home;