"use client";
import { useState, useEffect } from "react";
import LazyLoader from "./components/Lazyloader/Lazyloader";
import Image from "next/image";
import Herosection from "./components/home/Herosection/Herosection";
import CompetitiveEdgePro from "./components/home/CompetitiveEdge/CompetitiveEdge";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);
  return loading ? (
    <LazyLoader />
  ) : (
    <div>
      <Herosection />
      <CompetitiveEdgePro />
    </div>
  );
}
