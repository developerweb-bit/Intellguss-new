import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ConsultationPopup = ({ open, setOpen }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_e2gor63",
        "template_smtx6u2",
        formData,
        "XLK9quhxjFC2ey6vd"
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
        },
        () => {
          setLoading(false);
          alert("Error, please try again.");
        }
      );
  };

  const closeAll = () => {
    setOpen(false);
    setSubmitted(false);
    setFormData({ date: "", time: "", name: "", email: "" });
  };

  if (!open) return null;

  return (
    <>
      {/* Trigger button */}
      {/* <button
        onClick={() => setOpen(true)}
        className="px-5 py-2 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20 transition"
      >
        Book Consultation
      </button> */}

      {/* Overlay + Modal */}
      {open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-xl">
          {/* Click outside to close */}
          <div className="absolute inset-0" onClick={closeAll} />

          {/* Glassy Card */}
          <div className="relative z-50 w-full max-w-md mx-4">
            <div className="rounded-3xl bg-white/15 border border-white/25 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl p-6 md:p-8 text-white">
              {/* Close button */}
              <button
                onClick={closeAll}
                className="absolute right-4 top-4 text-white/70 hover:text-white"
              >
                ✕
              </button>

              {!submitted ? (
                <>
                  <h2 className="text-xl md:text-2xl font-semibold mb-1">
                    Schedule a consultation
                  </h2>
                  <p className="text-sm text-white/70 mb-5">
                    Pick a date &amp; time and share your details.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs mb-1 text-white/70">
                          Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full rounded-xl bg-white/10 border border-white/25 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/40"
                        />
                      </div>
                      <div>
                        <label className="block text-xs mb-1 text-white/70">
                          Time
                        </label>
                        <input
                          type="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full rounded-xl bg-white/10 border border-white/25 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs mb-1 text-white/70">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full rounded-xl bg-white/10 border border-white/25 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/40 placeholder:text-white/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs mb-1 text-white/70">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-xl bg-white/10 border border-white/25 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/40 placeholder:text-white/40"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-2 rounded-full bg-white text-slate-900 py-2.5 text-sm font-medium shadow-lg shadow-black/30 hover:bg-slate-100 active:scale-[0.98] transition disabled:opacity-60"
                    >
                      {loading ? "Sending..." : "Confirm booking"}
                    </button>
                  </form>
                </>
              ) : (
                // Animated Thank You state
                <div className="flex flex-col items-center text-center space-y-3 animate-[fadeInUp_0.6s_ease-out]">
                  {/* Simple illustration / icon */}
                  <div className="w-20 h-20 rounded-3xl bg-emerald-400/90 flex items-center justify-center shadow-xl shadow-emerald-500/40 animate-[softBounce_1.4s_ease-in-out_infinite]">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold">Thank you!</h3>
                  <p className="text-sm text-white/75">
                    Your consultation request has been received. You will get a
                    confirmation on email shortly.
                  </p>
                  <button
                    onClick={closeAll}
                    className="mt-2 px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-medium shadow hover:bg-slate-100"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Keyframe styles (Tailwind + custom) */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes softBounce {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default ConsultationPopup;
