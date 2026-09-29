import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ModalProps } from "../../types/common";

const API_BASE = import.meta.env.VITE_API_BASE || "https://api.jsgallor.com";

export default function Modal({ open, onOpen }: ModalProps) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Hyderabad");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setLoading(true);
    try {
      await fetch(`${API_BASE}/api/interior/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          city: city.trim() || "Hyderabad",
          formType: "consultation",
          bhk: "3 BHK",
          notes: "Booked via Main Landing Page - Meet a Designer",
        }),
      });
    } catch (err) {
      console.error("Failed to save consultation inquiry:", err);
    } finally {
      setLoading(false);
      onOpen();
      navigate("/enquiry/interior/estimate");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-md rounded-xl p-6 relative animate-scaleIn text-black"
      >
        <button
          onClick={onOpen}
          type="button"
          className="absolute right-4 top-3 text-2xl hover:opacity-70"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4">
          Meet a JS GALLOR Designer
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-yellow-400">
            <span className="px-3">🇮🇳</span>
            <input
              type="tel"
              required
              maxLength={10}
              placeholder="Mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              className="w-full p-3 outline-none"
            />
          </div>

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
          >
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 block text-center rounded-md font-medium transition-colors disabled:opacity-60"
          >
            {loading ? "Booking Session..." : "Book 3D Design Session →"}
          </button>

          <p className="text-xs text-center text-gray-500">
            By submitting, you agree to our{" "}
            <span className="text-yellow-600">privacy policy</span> and{" "}
            <span className="text-yellow-600">terms</span>.
          </p>
        </form>
      </div>
    </div>
  );
}
