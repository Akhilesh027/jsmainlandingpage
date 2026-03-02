import { useState } from "react";
import Hero from "../components/furnitureEnquiry/Hero";
import Modal from "../components/furnitureEnquiry/Modal";
import CTASection from "../components/furnitureEnquiry/CTASection";
import InteriorsCarousel from "../components/furnitureEnquiry/InteriorsCarousel";
import Solutions from "../components/furnitureEnquiry/Solutions";
import DesignerCTA from "../components/furnitureEnquiry/DesignerCTA";
import Footer from "../components/furnitureEnquiry/Footer";

 

const FurnitureEnquiryHome = () => {
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
}

export default FurnitureEnquiryHome