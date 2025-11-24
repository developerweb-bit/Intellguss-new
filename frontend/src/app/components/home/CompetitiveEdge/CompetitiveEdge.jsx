"use client";
import { motion } from "framer-motion";

// Feature Data
const features = [
  {
    icon: (
      <svg width="40" height="40" className="mx-auto">
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#fd0100" />
            <stop offset="0.7" stopColor="#FFB321" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18" fill="url(#gold)" />
        <text x="20" y="28" fontSize="22" textAnchor="middle" fill="#fff">
          ★
        </text>
      </svg>
    ),
    title: "7-Day Free Trial",
    desc: "Try risk-free and discover our results-driven approach.",
  },
  {
    icon: (
      <svg width="40" height="40" className="mx-auto">
        <defs>
          <linearGradient id="blue" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#237ffe" />
            <stop offset="0.7" stopColor="#36d1dc" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18" fill="url(#blue)" />
        <text x="20" y="28" fontSize="18" textAnchor="middle" fill="#fff">
          👔
        </text>
      </svg>
    ),
    title: "Multi-Expert Interviews",
    desc: "Choose your team from the best global talent pool.",
  },
  {
    icon: (
      <svg width="40" height="40" className="mx-auto">
        <defs>
          <linearGradient id="green" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#3ee08f" />
            <stop offset="0.7" stopColor="#36d1dc" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18" fill="url(#green)" />
        <text x="20" y="28" fontSize="21" textAnchor="middle" fill="#fff">
          $
        </text>
      </svg>
    ),
    title: "Transparent Pricing",
    desc: "Elite quality service at optimal, predictable costs.",
  },
  {
    icon: (
      <svg width="40" height="40" className="mx-auto">
        <defs>
          <linearGradient id="purple" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#a259e6" />
            <stop offset="0.7" stopColor="#237ffe" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18" fill="url(#purple)" />
        <text x="20" y="28" fontSize="19" textAnchor="middle" fill="#fff">
          ⇔
        </text>
      </svg>
    ),
    title: "Seamless Scalability",
    desc: "Expand or optimize your workforce—no delays.",
  },
  {
    icon: (
      <svg width="40" height="40" className="mx-auto">
        <defs>
          <linearGradient id="red" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#fd0100" />
            <stop offset="0.7" stopColor="#a259e6" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18" fill="url(#red)" />
        <text x="20" y="28" fontSize="20" textAnchor="middle" fill="#fff">
          🔗
        </text>
      </svg>
    ),
    title: "Direct Access",
    desc: "Work direct, without layers or barriers.",
  },
];

// Animation Variants
const cardVariants = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.34, ease: "linear" } },
});

export default function CompetitiveEdgePro() {
  return (
    <section className="relative py-16 px-0 bg-gradient-to-tr from-white via-[#f4f9fd] to-[#daf2ff] min-h-[70vh] flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.36, ease: "linear" }}
        className="w-full max-w-2xl mx-auto text-center rounded-3xl bg-white/70 backdrop-blur-lg py-8 px-7 shadow-md mb-10"
      >
        <h2 className="font-semibold text-4xl md:text-5xl text-[#18243A] tracking-tight mb-3">
          A Smarter Competitive Edge
        </h2>
        <p className="mb-2 text-gray-700 text-lg">
          Premium outsourcing—engineered for results and growth. Discover a
          next-level experience for your CPA firm.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-7 w-full max-w-6xl px-4">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants(idx % 2 === 0 ? "left" : "right")}
            initial="hidden"
            animate="visible"
            whileHover={{
              y: -8,
              scale: 1.05,
              borderColor: "#fd0100",
              boxShadow: "0 8px 32px #fd010033",
              transition: { duration: 0.13, ease: "linear" },
            }}
            className="group flex flex-col items-center text-center rounded-xl border border-[#d1e3ee] bg-white/40 backdrop-blur-md px-6 py-8 shadow transition"
          >
            <div className="mb-3">{feature.icon}</div>
            <div className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#fd0100] transition">
              {feature.title}
            </div>
            <div className="text-sm text-gray-600">{feature.desc}</div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.32, ease: "linear" }}
        className="mt-16 bg-gradient-to-r from-[#fd0100] via-[#36d1dc] to-[#237ffe] text-white px-9 py-6 rounded-2xl shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-3"
      >
        <div className="text-xl font-medium">
          <span className="text-white/90">
            Unlock better staffing and business outcomes
          </span>
          <span className="font-bold text-white">
            — Schedule your free consultation now!
          </span>
        </div>
        <a
          href="/contact"
          className="ml-5 px-7 py-3 bg-white text-[#fd0100] rounded-lg font-semibold text-lg shadow hover:bg-[#fff1f1] transition"
        >
          🚀 Get Started
        </a>
      </motion.div>
      <style>{`
        .group:hover .icon-gradient {
          filter: drop-shadow(0 2px 14px #fd010088);
        }
      `}</style>
    </section>
  );
}
