
import Hero from "../components/enquirypage/Hero";
import Modal from "../components/enquirypage/Modal";
import CTASection from "../components/enquirypage/CTASection";
import InteriorsCarousel from "../components/enquirypage/InteriorsCarousel";
import Solutions from "../components/enquirypage/Solutions";
import DesignerCTA from "../components/enquirypage/DesignerCTA";
import Footer from "../components/enquirypage/Footer";
import { useState } from "react";

const EnquiryHome = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="select-none">
      <Hero onOpen={() => setOpen(!open)}/>
      <Modal open={open} onOpen={() => setOpen(false)} />
      <CTASection onOpen={() => setOpen(!open)} />
      <InteriorsCarousel />
      <Solutions />
      <DesignerCTA onOpen={() => setOpen(!open)} />
      <Footer />
    </div>
  );
};

export default EnquiryHome;
