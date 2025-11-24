import Image from "next/image";
import Herosection from "./components/home/Herosection/Herosection";
import CompetitiveEdgePro from "./components/home/CompetitiveEdge/CompetitiveEdge";

export default function Home() {
  return (
    <div >
      <Herosection />
      <CompetitiveEdgePro />
    </div>
  );
}
