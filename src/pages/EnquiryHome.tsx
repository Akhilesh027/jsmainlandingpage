import Hero from "../components/enquirypage/Hero";
import Modal from "../components/enquirypage/Modal";
import CTASection from "../components/enquirypage/CTASection";
import InteriorsCarousel from "../components/enquirypage/InteriorsCarousel";
import Solutions from "../components/enquirypage/Solutions";
import Footer from "../components/enquirypage/Footer";
import { useState } from "react";

const EnquiryHome = () => {
  const [open, setOpen] = useState(false);

  // WhatsApp number with country code (India +91)
  const whatsappNumber = "917075848516";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="select-none">
      <Hero onOpen={() => setOpen(!open)} />
      <Modal open={open} onOpen={() => setOpen(false)} />
      <CTASection onOpen={() => setOpen(!open)} />
      <InteriorsCarousel />
      <Solutions />
      <Footer />

      {/* Floating WhatsApp Icon */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label="Chat with us on WhatsApp"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="WhatsApp"
          className="w-6 h-6 md:w-7 md:h-7"
        />
      </a>
    </div>
  );
};

export default EnquiryHome;