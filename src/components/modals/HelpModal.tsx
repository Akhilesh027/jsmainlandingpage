import { X, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import type { HelpModalProps } from "../../types/ui";


export const HelpModal:React.FC<HelpModalProps> = ({
  open,
  onClose,
  formData,
  setFormData,
  onSubmit,
}) => {
  if (!open) return null;

  return (
  <div
  className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
  onClick={(e) => e.target === e.currentTarget && onClose()}
>
  <div className="glass-card w-full max-w-md p-6 animate-fade-in relative m-3
bg-black/80 border border-yellow-500/20 rounded-2xl
max-h-[95vh] overflow-y-auto hide-scrollbar">
    <h2 className="text-xl font-bold text-white mb-2">Contact Us</h2>
    <p className="text-gray-400 text-sm mb-5">
      Please fill out this form to request help or contact our support team.
    </p>

    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="
          bg-[#1a1a1a]
          text-white
          placeholder:text-gray-400
          border border-yellow-500/20
          focus:border-yellow-500
          focus:ring-2 focus:ring-yellow-500/40
        "
      />

      <Input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="
          bg-[#1a1a1a]
          text-white
          placeholder:text-gray-400
          border border-yellow-500/20
          focus:border-yellow-500
          focus:ring-2 focus:ring-yellow-500/40
        "
      />

      <Input
        type="tel"
        placeholder="Your Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="
          bg-[#1a1a1a]
          text-white
          placeholder:text-gray-400
          border border-yellow-500/20
          focus:border-yellow-500
          focus:ring-2 focus:ring-yellow-500/40
        "
      />

      <textarea
        placeholder="How can we assist you?"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        className="
          w-full px-4 py-3 rounded-lg
          bg-[#1a1a1a]
          text-white
          placeholder:text-gray-400
          border border-yellow-500/20
          focus:border-yellow-500
          focus:ring-2 focus:ring-yellow-500/40
          focus:outline-none
          resize-none h-24
        "
      />

      <Button
        type="submit"
        className="
          w-full
          bg-yellow-400
          text-black font-semibold
          hover:bg-yellow-300
          active:bg-yellow-500
          shadow-lg shadow-yellow-500/30
        "
      >
        Submit Request
      </Button>
    </form>

    <div className="mt-6 pt-5 border-t border-yellow-500/20 space-y-2 text-sm text-gray-400">
      <p className="flex items-center gap-2">
        <Mail className="w-4 h-4 text-yellow-400" />
        support@jsgalore.com
      </p>
      <p className="flex items-center gap-2">
        <Phone className="w-4 h-4 text-yellow-400" />
        +91 94931 20108
      </p>
      <p className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-yellow-400" />
        Hyderabad
      </p>
    </div>

    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-gray-400 hover:text-white"
    >
      <X className="w-5 h-5" />
    </button>
  </div>
</div>

  );
};
