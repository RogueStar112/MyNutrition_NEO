import Image from "next/image";
import { figtree } from "./layout";
import { figtree_bold } from "./layout";
import logo from "@/public/mynutritionlogo_upscaled.png"
import Motto from "./components/Motto";
import Navbar from "./components/Navbar";


export default function LandingPage() {

  return (
    <div className={`bg-radial to-white from-orange-300 from-40% to-250% dark:bg-radial dark:from-orange-200 dark:from-40% dark:to-150% dark:to-white ${figtree} min-h-screen w-full`}>

      <div className={`flex flex-col mx-auto max-w-7xl text-[#CF4B0A] ${figtree.className}`}>
        
        <Navbar />

        <Motto />
      </div>

    </div>
  );
}
