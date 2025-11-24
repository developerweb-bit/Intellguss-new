// 'use client';
// import { motion } from 'framer-motion';

// const team = [
//   { name: 'Rohan Gurbani', role: 'CEO & Co-Founder', image: '/team/rohan.jpg' },
//   { name: 'Shefali Jethani', role: 'HR Manager & Co-Founder', image: '/team/shefali.jpg' },
//   { name: 'Priyanshi Sharma', role: 'Senior Accounts Executive – US', image: '/team/priyanshi.jpg' },
// ];

// const values = [
//   { icon: '/icons/ethics.svg', title: 'Ethics', desc: 'We operate with integrity and honesty.' },
//   { icon: '/icons/quality.svg', title: 'Quality', desc: 'Relentless focus on premium service.' },
//   { icon: '/icons/trust.svg', title: 'Trust', desc: 'Building dependable client relationships.' },
//   { icon: '/icons/innovation.svg', title: 'Innovation', desc: 'Technology-empowered solutions.' },
// ];

// export default function page() {
//   const bgGradient = 'linear-gradient(to bottom, #ffffff 0%, #f3faff 40%, #dbeaee 75%, #f6eafd 100%)';

//   return (
//     <div
//       className="font-inter min-h-screen text-black"
//       style={{ background: bgGradient }}
//     >
//       {/* Hero Section */}
//       <section className="relative flex flex-col justify-center items-center text-center py-24" style={{ background: bgGradient }}>
//         <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="text-5xl font-bold tracking-tight mb-4 font-bossa text-[#fd0100]">
//           About Us
//         </motion.h1>
//         <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9 }} className="max-w-xl mx-auto text-lg text-gray-700">
//           We optimize the effectiveness, accuracy, and transparency of our services to ensure our customers gain the highest-quality support.
//         </motion.p>
//       </section>

//       {/* Who We Are Section */}
//       <section className="py-20 container mx-auto px-4 grid md:grid-cols-2 items-center gap-12">
//         <motion.img
//           src="/images/about-professional.jpg"
//           alt="Professional Team"
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="rounded-xl shadow-lg w-full max-h-[25rem] object-cover"
//         />
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-gray-800"
//         >
//           <h2 className="text-3xl font-semibold font-bossa mb-4 text-[#fd0100]">Who We Are</h2>
//           <p>
//             For 40+ years, we’ve helped accounting firms staff qualified offshore talent from India.<br /><br />
//             Founded by financial experts and visionary entrepreneurs, we deliver exceptional accounting solutions empowered by technology and tailored to client’s requirements. With unwavering focus on customer satisfaction, we’re your trusted partners in navigating the complexities of finance.
//           </p>
//         </motion.div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section className="py-20" style={{ background: bgGradient }}>
//         <div className="container mx-auto px-4 grid gap-8 md:grid-cols-2">
//           {[
//             { heading: 'Mission', text: "To be trusted partners in our client's financial success, delivering growth and prosperity for businesses worldwide." },
//             { heading: 'Vision', text: 'To redefine accounting and financial management through innovation, integrity, and a commitment to quality.' },
//           ].map((item, idx) => (
//             <motion.div
//               key={item.heading}
//               className="bg-white/80 rounded-xl p-8 shadow"
//               whileHover={{ scale: 1.045, y: -6 }}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.2, duration: 0.7 }}
//             >
//               <h3 className="text-xl font-semibold text-[#fd0100] mb-2">
//                 {item.heading}
//               </h3>
//               <p className="text-gray-800">{item.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Our Values Section */}
//       <section className="container mx-auto px-4 py-20">
//         <h2 className="text-3xl font-semibold font-bossa mb-10 text-[#fd0100]">Our Values</h2>
//         <motion.div
//           className="grid grid-cols-2 md:grid-cols-4 gap-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             visible: { transition: { staggerChildren: 0.15 } },
//             hidden: {},
//           }}
//         >
//           {values.map((v, i) => (
//             <motion.div
//               key={v.title}
//               className="bg-white/90 p-6 rounded-xl flex flex-col items-center shadow"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.04 }}
//             >
//               <img src={v.icon} className="w-12 h-12 mb-4" alt={v.title} />
//               <div className="font-semibold text-[#333] mb-2">{v.title}</div>
//               <div className="text-gray-600 text-center text-sm">{v.desc}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 border-y border-gray-300 container mx-auto px-4">
//         <h2 className="text-3xl font-semibold font-bossa mb-8 text-[#fd0100]">Why Choose Us</h2>
//         <ul>
//           {[
//             'Skilled offshore talent',
//             'Innovative technology solutions',
//             'Strong business values and ethics',
//             'Customer-centric approach',
//           ].map((point, i) => (
//             <motion.li
//               key={point}
//               className="text-gray-700 mb-4 text-lg flex items-center gap-3"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.12, duration: 0.65 }}
//             >
//               <span className="w-3 h-3 rounded-full inline-block bg-[#fd0100] animate-pulse"></span>
//               {point}
//             </motion.li>
//           ))}
//         </ul>
//       </section>

//       {/* Team Section */}
//       <section className="container mx-auto px-4 py-20">
//         <h2 className="text-3xl font-semibold font-bossa mb-10 text-[#fd0100]">Our Team</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {team.map((member, i) => (
//             <motion.div
//               key={member.name}
//               className="bg-white/90 rounded-xl p-6 flex flex-col items-center group shadow-lg"
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.04, y: -4 }}
//               transition={{ delay: i * 0.12, duration: 0.58 }}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-[#fd0100]"
//               />
//               <div className="font-semibold text-gray-900 text-lg mb-1">
//                 {member.name}
//               </div>
//               <div className="text-gray-600 text-sm mb-2">
//                 {member.role}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="relative py-24 flex flex-col items-center justify-center text-center overflow-hidden" style={{ background: bgGradient }}>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10"
//         >
//           <h2 className="text-3xl font-bold mb-6 font-bossa text-[#fd0100]">
//             Partner with us for financial excellence.
//           </h2>
//           <a
//             href="/contact"
//             className="bg-[#fd0100] px-8 py-4 rounded-full font-semibold text-lg text-white hover:bg-white hover:text-[#fd0100] transition"
//           >
//             Schedule a Meeting
//           </a>
//         </motion.div>
//         {/* Optional animated background */}
//         <motion.div
//           className="absolute inset-0 z-0"
//           style={{
//             background: 'linear-gradient(270deg, #fd0100, #f0f7ff, #dbeaee, #f6eafd)',
//             backgroundSize: '800% 800%',
//             animation: 'gradientMove 30s ease infinite',
//             pointerEvents: 'none'
//           }}
//         ></motion.div>

//         <style>{`
//           @keyframes gradientMove {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
//         `}</style>
//       </section>
//     </div>
//   );
// }

// app/about-us/page.js
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
// import { aboutContent } from "../../lib/aboutContent"; // agar pehle content object create kiya ho

export default function page() {
  const { scrollY } = useScroll();
  // Parallax effect for background
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);

  // lib/aboutContent.js
  const aboutContent = {
    title: "About us",
    hero: "Trusted Outsourced Accounting Services",
    introParagraphs: [
      "For 40+ years, we’ve helped accounting firms staff qualified offshore talent from India.",
      "We made a vision to redefine accounting and financial management. The company was founded by financial experts and visionary entrepreneurs who had a clear focus: to give exceptional accounting solutions empowered by technology and tailored to fit client’s requirements.",
      "With that vision in mind and a focus on customer satisfaction, today, we proudly stand as your trusted partner in helping you solve the complexities of finance and achieve your business goals.",
    ],
    visionTitle: "Vision",
    visionText:
      "Our vision is to be at the forefront of financial innovation and provide explicit accounting solutions to our clients. Our clients are our priority. We aspire to redefine the excellence standards with our services for them using technology, expertise, and tailored solutions for their sustainable growth all around the globe.",
    missionTitle: "Mission",
    missionText:
      "Our mission is to deliver exceptional financial management solutions that meet each customer’s unique requirements. We optimize the effectiveness, accuracy, and transparency of our services, ensuring that our customers gain the highest-quality support. With innovation, integrity, and a commitment to quality, we aspire to be trusted partners in our client’s financial success, delivering growth and prosperity for businesses worldwide.",
    cta: {
      text: "Grow your business sustainably with accounting, bookkeeping, and tax services with Intellgus.",
      button: "Schedule a Meeting",
    },
    coreValues: [
      {
        title: "Integrity",
        desc: "We build bonds with our clients in an environment of honesty.",
      },
      {
        title: "Transparency",
        desc: "We prefer direct and open communication to keep you informed.",
      },
      {
        title: "Excellence",
        desc: "At Intellgus, excellence is the only option. We aim to innovate to deliver the best results.",
      },
    ],
    whyChoose: [
      "Tailored Solutions",
      "Expertise-Driven Approach",
      "Cutting-Edge Technology",
      "Client-Centric Focus",
      "Commitment to Excellence",
    ],
    testimonialsIntro:
      "Real stories of success and satisfaction — Read authentic feedback from our satisfied clients and their success stories.",
    team: [
      { name: "Rohan Gurbani", role: "Co-Founder" },
      { name: "Nikita Rohira", role: "Co-Founder" },
      { name: "Rajesh Gurbani", role: "Founder" },
    ],
    services: [
      "Bookkeeping & Accounting",
      "Tax Planning & Preparation",
      "Tax Resolution",
      "Audit",
    ],
    contact: {
      email: "info@intellgus.com",
      phone: "+1 210-338-9577",
      addresses: [
        "700 Central Expressway, South Allen, Texas 75013",
        "1409 Prairie Clover Road, Prosper, TX 75078 United States",
        "66 W Flagler Street, Suite 900, PMB 11911, Miami, FL 33130",
      ],
    },
    footer: "Copyright © 2025 Intellgus. All rights reserved.",
  };

  return (
    <div className="relative overflow-hidden">
      {/* Parallax background layer */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-gradient-to-tr from-gray-50 via-white to-gray-100"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 py-16 md:px-20 lg:px-32 space-y-20"
      >
        {/* Hero / Intro */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-gray-900"
          >
            {aboutContent.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-700"
          >
            {aboutContent.hero}
          </motion.p>

          {aboutContent.introParagraphs.map((para, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.2, duration: 0.6 }}
              className="text-gray-700"
            >
              {para}
            </motion.p>
          ))}
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              {aboutContent.visionTitle}
            </h2>
            <p className="text-gray-700">{aboutContent.visionText}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              {aboutContent.missionTitle}
            </h2>
            <p className="text-gray-700">{aboutContent.missionText}</p>
          </motion.div>
        </section>

        {/* Core Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutContent.coreValues.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-6 bg-white backdrop-blur-md bg-opacity-70 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {val.title}
              </h3>
              <p className="mt-2 text-gray-700">{val.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Why Choose Us */}
        <section className="space-y-6">
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="space-y-4"
          >
            {aboutContent.whyChoose.map((item, idx) => (
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="pl-4 border-l-4 border-red-600 text-gray-800"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        {/* Team Section */}
        <section className="text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-gray-900"
          >
            Our Team
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8">
            {aboutContent.team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="w-40 p-4 bg-white rounded-lg shadow-md"
              >
                <div className="text-lg font-medium text-gray-900">
                  {member.name}
                </div>
                <div className="text-sm text-gray-600">{member.role}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services / Summary */}
        <section className="space-y-4 text-gray-700">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We specialize in providing transformative financial services and
            solutions.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="list-disc list-inside space-y-2"
          >
            {aboutContent.services.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </motion.ul>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
          >
            {aboutContent.cta.button}
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-2 text-gray-700"
          >
            {aboutContent.cta.text}
          </motion.p>
        </section>

        {/* Contact / Footer Info */}
        <section className="bg-gray-50 p-8 rounded-xl shadow-inner space-y-4 text-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-semibold">Say Hi</h3>
            <p>Email: {aboutContent.contact.email}</p>
            <p>Phone: {aboutContent.contact.phone}</p>
            {aboutContent.contact.addresses.map((addr, idx) => (
              <p key={idx}>{addr}</p>
            ))}
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}
