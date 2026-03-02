import React, { useMemo, useState } from "react";
import type { Step, FloorPlan, Purpose1 } from "../types/estimate";

/* STEP HEADERS – Furniture Context */
const STEP_TITLES: Record<Step, [string, string]> = {
  1: ["LET’S GET STARTED", "STEP 1 OF 4"],
  2: ["SELECT YOUR FURNITURE NEEDS", "STEP 2 OF 4"],
  3: ["ADD FLOORPLAN DETAILS", "STEP 3 OF 4"],
  4: ["YOUR FURNITURE ESTIMATE IS ALMOST READY", "STEP 4 OF 4"],
};

const FLOOR_PLANS: FloorPlan[] = ["1 BHK", "2 BHK", "3 BHK", "3+ BHK"];
const PURPOSES: Purpose1[] = ["Independent", "Apartment", "Villa", "Others"];

const MIN_COUNT = 0;

// ✅ set this in .env: VITE_API_BASE=https://api.jsgallor.com
const API_BASE = import.meta.env.VITE_API_BASE || "https://api.jsgallor.com";

type ApiResp<T> = { success: boolean; message?: string; data?: T };

const FurnitureEstimateFlow: React.FC = () => {
  // ---------------------------------------
  // Flow + Backend ID
  // ---------------------------------------
  const [step, setStep] = useState<Step>(1);
  const [estimateId, setEstimateId] = useState<string>("");

  // ---------------------------------------
  // Step 1
  // ---------------------------------------
  const [floorplan, setFloorplan] = useState<FloorPlan>("1 BHK");
  const [purpose, setPurpose] = useState<Purpose1>("Independent"); // propertyType

  // ---------------------------------------
  // Step 2
  // ---------------------------------------
  const [kitchen, setKitchen] = useState<boolean>(true);
  const [wardrobe, setWardrobe] = useState<number>(1);
  const [tvUnit, setTvUnit] = useState<number>(1);

  // ---------------------------------------
  // Step 3
  // ---------------------------------------
  const [plotSize, setPlotSize] = useState<string>("200 sq. yard");
  const [floorplanPdf, setFloorplanPdf] = useState<File | null>(null);
  const [floorplanImages, setFloorplanImages] = useState<File[]>([]);

  // ---------------------------------------
  // Step 4
  // ---------------------------------------
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [whatsappUpdates, setWhatsappUpdates] = useState<boolean>(true);
  const [city, setCity] = useState<string>("");

  // ---------------------------------------
  // UX
  // ---------------------------------------
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

  const headersJson = useMemo(() => ({ "Content-Type": "application/json" }), []);

  const increment =
    (setter: React.Dispatch<React.SetStateAction<number>>) => () =>
      setter((v) => v + 1);

  const decrement =
    (setter: React.Dispatch<React.SetStateAction<number>>) => () =>
      setter((v) => Math.max(MIN_COUNT, v - 1));

  const clearMsgs = () => {
    setError("");
    setSuccessMsg("");
  };

  const parseJsonSafe = async (res: Response) =>
    (await res.json().catch(() => ({}))) as any;

  const requireEstimateId = () => {
    if (!estimateId) {
      setError("Estimate ID missing. Please restart from Step 1.");
      return false;
    }
    return true;
  };

  // ---------------------------------------
  // API Calls per Step
  // ---------------------------------------
  const saveStep1AndNext = async () => {
    setLoading(true);
    clearMsgs();

    try {
      // Backend expects: floorplan, purpose, propertyType
      // We don't have "purpose" in furniture flow, so send purpose="Move In" as a safe default.
      const res = await fetch(`${API_BASE}/api/estimates`, {
        method: "POST",
        headers: headersJson,
        body: JSON.stringify({
          floorplan,
          purpose: "Move In", // ✅ default to satisfy backend required field
          propertyType: purpose, // ✅ your Purpose1
        }),
      });

      const json: ApiResp<{ estimateId: string }> = await parseJsonSafe(res);

      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to save Step 1");
      }

      const id = json.data?.estimateId;
      if (!id) throw new Error("estimateId not returned by backend");

      setEstimateId(id);
      setStep(2);
      setSuccessMsg("Step 1 saved ✅");
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const saveStep2AndNext = async () => {
    if (!requireEstimateId()) return;

    setLoading(true);
    clearMsgs();

    try {
      const res = await fetch(`${API_BASE}/api/estimates/${estimateId}/step2`, {
        method: "PATCH",
        headers: headersJson,
        body: JSON.stringify({
          kitchen,
          wardrobe,
          tvUnit,
        }),
      });

      const json: ApiResp<any> = await parseJsonSafe(res);
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to save Step 2");
      }

      setStep(3);
      setSuccessMsg("Step 2 saved ✅");
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const saveStep3AndNext = async () => {
    if (!requireEstimateId()) return;

    setLoading(true);
    clearMsgs();

    try {
      const fd = new FormData();
      fd.append("plotSize", plotSize);

      if (floorplanPdf) fd.append("floorplanPdf", floorplanPdf);
      floorplanImages.forEach((img) => fd.append("floorplanImages", img));

      const res = await fetch(`${API_BASE}/api/estimates/${estimateId}/step3`, {
        method: "PATCH",
        body: fd,
      });

      const json: ApiResp<any> = await parseJsonSafe(res);
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to save Step 3");
      }

      setStep(4);
      setSuccessMsg("Step 3 saved ✅");
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const submitStep4 = async () => {
    if (!requireEstimateId()) return;

    // basic validation
    if (!name.trim()) return setError("Please enter your name");
    if (!phone.trim()) return setError("Please enter mobile number");
    if (!city.trim()) return setError("Please select city");

    setLoading(true);
    clearMsgs();

    try {
      const res = await fetch(`${API_BASE}/api/estimates/${estimateId}/step4`, {
        method: "PATCH",
        headers: headersJson,
        body: JSON.stringify({
          name,
          phone,
          whatsappUpdates,
          city,
        }),
      });

      const json: ApiResp<any> = await parseJsonSafe(res);
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to submit estimate");
      }

      setSuccessMsg("✅ Your furniture estimate request is submitted!");
      // Optional: keep user in step 4 or reset
      // resetAll();
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const resetAll = () => {
    setStep(1);
    setEstimateId("");
    setPlotSize("200 sq. yard");
    setFloorplan("1 BHK");
    setPurpose("Independent");
    setKitchen(true);
    setWardrobe(1);
    setTvUnit(1);
    setFloorplanPdf(null);
    setFloorplanImages([]);
    setName("");
    setPhone("");
    setWhatsappUpdates(true);
    setCity("");
    clearMsgs();
  };

  // ---------------------------------------
  // UI
  // ---------------------------------------
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6">
      {/* Step Header */}
      <div className="text-center pt-24 sm:pt-28 mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold transition-all duration-300">
          {STEP_TITLES[step][0]}
        </h2>
        <span className="text-xs sm:text-sm text-gray-500">
          {STEP_TITLES[step][1]}
        </span>
      </div>

      {/* Messages */}
      {(error || successMsg) && (
        <div className="max-w-4xl mx-auto mb-4 space-y-2">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}
          {successMsg && (
            <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
              {successMsg}
            </div>
          )}
        </div>
      )}

      {/* Card */}
      <div className="max-w-4xl mx-auto bg-white border rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
        {/* STEP 1 */}
        {step === 1 && (
          <div className="flex flex-col lg:flex-row animate-fade">
            <div className="w-full lg:w-1/2 p-6 sm:p-10">
              <h3 className="font-semibold mb-4 text-lg">
                Select your home size
              </h3>

              <div className="flex flex-wrap gap-3 mb-8">
                {FLOOR_PLANS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFloorplan(item)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all
                      ${
                        floorplan === item
                          ? "bg-red-600 text-white shadow"
                          : "border border-red-600 text-red-600 hover:bg-red-50"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <h3 className="font-semibold mb-4 text-lg">Property Type</h3>

              <div className="flex flex-wrap gap-3 mb-10">
                {PURPOSES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setPurpose(item)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all
                      ${
                        purpose === item
                          ? "bg-red-600 text-white shadow"
                          : "border border-red-600 text-red-600 hover:bg-red-50"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button
                type="button"
                disabled={loading}
                onClick={saveStep1AndNext}
                className="w-full sm:w-auto bg-red-600 text-white px-10 py-3 rounded-lg font-medium hover:bg-red-700 transition disabled:opacity-60"
              >
                {loading ? "Saving..." : "NEXT"}
              </button>
            </div>

            <div className="hidden lg:flex w-1/2 p-10 bg-gray-50 items-center">
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Furniture That Fits Your Home
                </h4>
                <p className="text-gray-600">
                  Get accurate pricing based on your space and needs.
                </p>

                {estimateId && (
                  <p className="mt-4 text-xs text-gray-500">
                    Draft ID: {estimateId}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="flex flex-col lg:flex-row animate-fade">
            <div className="w-full lg:w-1/2 p-6 sm:p-10">
              <h3 className="font-semibold mb-8 text-lg">
                Furniture requirements for{" "}
                <span className="text-red-600">{floorplan}</span>
              </h3>

              <div className="flex justify-between items-center mb-6">
                <span>Modular Kitchen Cabinets</span>
                <input
                  type="checkbox"
                  checked={kitchen}
                  onChange={(e) => setKitchen(e.target.checked)}
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <span>Wardrobe Units</span>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={decrement(setWardrobe)}
                    className="w-8 h-8 border rounded hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="min-w-[20px] text-center">{wardrobe}</span>
                  <button
                    type="button"
                    onClick={increment(setWardrobe)}
                    className="w-8 h-8 border rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mb-10">
                <span>TV / Entertainment Units</span>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={decrement(setTvUnit)}
                    className="w-8 h-8 border rounded hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="min-w-[20px] text-center">{tvUnit}</span>
                  <button
                    type="button"
                    onClick={increment(setTvUnit)}
                    className="w-8 h-8 border rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="border border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={loading}
                  onClick={saveStep2AndNext}
                  className="bg-red-600 text-white px-10 py-3 rounded-lg hover:bg-red-700 transition disabled:opacity-60"
                >
                  {loading ? "Saving..." : "NEXT"}
                </button>
              </div>
            </div>

            <div className="hidden lg:flex w-1/2 p-10 bg-gray-50 items-center">
              <p className="text-gray-600">Beds, sofas, dining, storage & more.</p>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="flex flex-col lg:flex-row animate-fade">
            <div className="w-full lg:w-1/2 p-6 sm:p-10">
              <h3 className="font-semibold mb-6 text-lg">Floorplan Details</h3>

              <h4 className="font-medium mb-4">
                Floorplan Size <span className="text-red-600">*</span>
              </h4>

              <div className="flex gap-3 mb-8 flex-wrap">
                {["200 sq. yard", "450 sq. yard", "1000 sq. yard"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setPlotSize(size)}
                    className={`px-4 py-2 rounded-full text-sm transition-all
                      ${
                        plotSize === size
                          ? "bg-yellow-400 text-black shadow"
                          : "border border-yellow-400 text-black hover:bg-yellow-50"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block font-medium mb-2">Floorplan PDF</label>
                <input
                  type="file"
                  accept=".pdf"
                  className="w-full"
                  onChange={(e) => setFloorplanPdf(e.target.files?.[0] || null)}
                />
                {floorplanPdf && (
                  <p className="text-xs text-gray-500 mt-1">
                    Selected: {floorplanPdf.name}
                  </p>
                )}
              </div>

              <div className="mb-10">
                <label className="block font-medium mb-2">Floorplan Images</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="w-full"
                  onChange={(e) =>
                    setFloorplanImages(Array.from(e.target.files || []))
                  }
                />
                {floorplanImages.length > 0 && (
                  <p className="text-xs text-gray-500 mt-1">
                    {floorplanImages.length} image(s) selected
                  </p>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="border border-red-600 text-red-600 px-8 py-3 rounded-lg"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={loading}
                  onClick={saveStep3AndNext}
                  className="bg-red-600 text-white px-10 py-3 rounded-lg disabled:opacity-60"
                >
                  {loading ? "Uploading..." : "NEXT"}
                </button>
              </div>
            </div>

            <div className="hidden lg:flex w-1/2 bg-gray-100 items-center justify-center p-10 rounded-l-3xl">
              <span className="text-gray-600">Image side</span>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="flex flex-col lg:flex-row animate-fade">
            <div className="w-full lg:w-1/2 p-6 sm:p-10">
              <h3 className="font-semibold mb-8 text-lg">
                Get your furniture estimate
              </h3>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full border-b p-3 mb-6 outline-none focus:border-red-600"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Mobile number"
                className="w-full border-b p-3 mb-6 outline-none focus:border-red-600"
              />

              <label className="flex justify-between text-sm mb-6">
                <span>WhatsApp updates</span>
                <input
                  type="checkbox"
                  checked={whatsappUpdates}
                  onChange={(e) => setWhatsappUpdates(e.target.checked)}
                />
              </label>

              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border-b p-3 mb-8 outline-none focus:border-red-600"
              >
                <option value="">Select city</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
              </select>

              <button
                type="button"
                disabled={loading}
                onClick={submitStep4}
                className="w-full bg-red-600 text-white py-3 rounded-lg mb-4 hover:bg-red-700 transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "GET ESTIMATE"}
              </button>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-full border border-red-600 text-red-600 py-3 rounded-lg hover:bg-red-50 transition"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={resetAll}
                  className="w-full border py-3 rounded-lg hover:bg-gray-50 transition"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="hidden lg:flex w-1/2 bg-gray-100 items-center justify-center p-10">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-700">
                  Finalising your furniture pricing
                </h4>
                {estimateId && (
                  <p className="mt-2 text-xs text-gray-500">
                    Estimate ID: {estimateId}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {estimateId && (
        <div className="max-w-4xl mx-auto mt-4 text-xs text-gray-500">
          Estimate ID: {estimateId}
        </div>
      )}
    </div>
  );
};

export default FurnitureEstimateFlow;