import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl text-yellow-400 font-bold tracking-wide">
          JS <span className="text-yellow-400">GALLOR</span>
        </div>

        {location.pathname !== "/enquiry/furniture" ? (
          <Link
            to="/enquiry/furniture"
            className="bg-yellow-400 px-6 py-2 rounded-md text-sm font-medium"
          >
            Back
          </Link>
        ) : (
          <Link
            to="/enquiry/furniture/estimate"
            className="bg-yellow-400 px-6 py-2 rounded-md text-sm font-medium"
          >
            Get Free Estimate
          </Link>
        )}
      </div>
    </header>
  );
}
