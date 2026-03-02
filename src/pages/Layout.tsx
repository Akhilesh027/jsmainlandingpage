
import Header from "../components/enquirypage/Header";
import { Outlet } from "react-router-dom";

const Enquiry = () => {
  return (
    <>
      {/* header  */}
      <Header />

      {/* child components  */}
      <Outlet />
    </>
  );
};

export default Enquiry;
