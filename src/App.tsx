import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import EnquiryHome from "./pages/EnquiryHome";
import EstimateFlow from "./pages/EstimateFlow";
import FurnitureEnquiryLayout from "./pages/FurnitureEnquiryLayout";
import FurnitureEnquiryHome from "./pages/FurnitureEnquiryHome";
import FurnitureEstimateFlow from "./pages/FurnitureEstimateFlow";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* enquiry for interior routes  */}
      <Route path="/enquiry/interior" element={<Layout />}>
        <Route index element={<EnquiryHome />} />
        <Route path="estimate" element={<EstimateFlow />} />
      </Route>

      {/* enquiry for furniture routes  */}
      <Route path="/enquiry/furniture" element={<FurnitureEnquiryLayout />}>
        <Route index element={<FurnitureEnquiryHome />} />
        <Route path="estimate" element={<FurnitureEstimateFlow />} />
      </Route>
    </Routes>
  );
}

export default App;
