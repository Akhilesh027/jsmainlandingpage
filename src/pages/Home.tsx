import { useState } from "react";
import { ecommerce_websites } from "../jsondata/e-com-data";
import { CollectionCircle } from "../components/mainpage/CollectionCircle";
import { HelpModal } from "../components/modals/HelpModal";
import { Link } from "react-router-dom";
import SidePortalSwitcher from "../components/mainpage/SidePortalSwitcher";

const Home = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // submit form
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsHelpOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center z-[-2]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80)",
          filter: "brightness(0.65)",
        }}
      />
      <div className="fixed inset-0 bg-black/60 z-[-1]" />

      {/* Header */}
      <header className="flex flex-wrap justify-center md:justify-between items-center gap-5 p-5 md:p-8 lg:p-10">
        <Link
          to="/enquiry/furniture"
          className="px-6 py-3 order-2  rounded-full bg-transparent backdrop-blur-sm border border-yellow-500 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:-translate-y-1 hover:shadow-md hover:shadow-yellow-500 relative overflow-hidden group"
        >
          <span className="relative z-10">Enquiry for Furniture →</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
        </Link>

        <div className="flex items-center gap-3 md:order-1">
          {/* logo  */}
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary  flex items-center justify-center font-bold text-primary-foreground text-xl hover:rotate-[360deg] transition-transform duration-700">
            <img
              src="/jsgallor.png"
              className="w-[45px] h-[45px]  transition-transform duration-700 ease-in-out hover:rotate-360"
            />
          </div>
          <div>
            <div className="font-semibold text-lg text-white">JS GALLOR</div>
            <div className="text-xs text-gray-300">Furniture & Interiors</div>
          </div>
        </div>

        <Link
          to="/enquiry/interior"
          className="px-6 py-3 rounded-full bg-transparent backdrop-blur-sm border border-yellow-500 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:-translate-y-1 hover:shadow-md hover:shadow-yellow-500 relative overflow-hidden group"
        >
          <span className="relative z-10">Enquiry for Interior →</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
        </Link>
      </header>

      {/* ecommerce websites section */}
      <main className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 px-5 py-10 min-h-[calc(100vh-120px)]">
        {ecommerce_websites.map((c) => (
          <CollectionCircle key={c.id} collection={c} />
        ))}
      </main>

      {/* side portal card section  */}
      <SidePortalSwitcher />

      <button
        onClick={() => setIsHelpOpen(true)}
        className="fixed border border-yellow-400 left-5 bottom-18 md:left-8 md:bottom-8 flex items-center gap-3 px-4 py-2 rounded-2xl border border-primary/70 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md text-white text-sm font-light tracking-wide transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg group z-50"
      >
        Help
        <div className="w-6 h-6 rounded-xl bg-black/20 flex items-center justify-center text-yellow-500 font-bold text-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[360deg]">
          i
        </div>
      </button>

      <HelpModal
        open={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Home;
