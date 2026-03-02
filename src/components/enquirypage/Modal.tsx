import { Link } from "react-router-dom";
import type { ModalProps } from "../../types/common";

export default function Modal({ open , onOpen}: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-md rounded-xl p-6 relative animate-scaleIn"
      >
        <button onClick={onOpen} className="absolute right-4 top-3 text-2xl">×</button>

        <h2 className="text-xl font-semibold mb-4">
          Meet a JS GALLOR Designer
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border p-3 rounded-md"
          />

          <div className="flex items-center border rounded-md">
            <span className="px-3">🇮🇳</span>
            <input
              type="tel"
              placeholder="Mobile number"
              className="w-full p-3 outline-none"
            />
          </div>

          <select className="w-full border p-3 rounded-md">
            <option>Select your property city</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
            <option>Mumbai</option>
            <option>Chennai</option>
          </select>

          <Link to="/enquiry/interior/estimate" className="w-full bg-yellow-400 py-3 block text-center rounded-md font-medium">
            Book 3D Design Session →
          </Link>

          <p className="text-xs text-center text-gray-500">
            By submitting, you agree to our{" "}
            <span className="text-yellow-500">privacy policy</span> and{" "}
            <span className="text-yellow-500">terms</span>.
          </p>
        </form>
      </div>
    </div>
  );
}
