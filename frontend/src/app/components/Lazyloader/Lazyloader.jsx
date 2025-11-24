// "use client";
// export default function LogoLoader() {
//   const text = "Intellgus";

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         background: "white",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: 9999,
//       }}
//     >
//       <div style={{ display: "flex", gap: "3px" }}>
//         {text.split("").map((letter, index) => (
//           <span
//             key={index}
//             style={{
//               fontSize: "48px",
//               fontWeight: 800,
//               display: "inline-block",
//               opacity: 0,
//               transform: "translateY(20px) scale(0.95)",
//               color: letter === "I" || letter === "s" ? "#e50914" : "#111",
//               animation: `reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
//               animationDelay: `${index * 0.1}s`,
//             }}
//           >
//             {letter}
//           </span>
//         ))}
//       </div>

//       {/* Keyframes */}
//       <style>
//         {`
//         @keyframes reveal {
//           0% {
//             opacity: 0;
//             transform: translateY(20px) scale(0.95);
//           }
//           60% {
//             opacity: 1;
//             transform: translateY(-4px) scale(1);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0px) scale(1);
//           }
//         }
//       `}
//       </style>
//     </div>
//   );
// }



import styles from './LazyLoader.module.scss';

export default function LazyLoader() {
  const text = "Intellgus";

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.letterWrapper}>
        {text.split("").map((letter, index) => {
          const colorClass =
            letter === "I" || letter === "s" ? styles.colorRed : styles.colorBlack;
          return (
            <span
              key={index}
              className={`${styles.letter} ${colorClass}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          );
        })}
      </div>
    </div>
  );
}

