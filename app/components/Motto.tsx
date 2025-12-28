import { figtree, figtree_bold } from "../layout";
import Image from "next/image";
import diet_img from "@/public/dietimage_cropped.png";
import exercise_img from "@/public/exerciseimage_cropped.png"
import fork_img from "@/public/Fork.png"
import knife_png from "@/public/Knife.png"

export default function Motto() {
    return (
        <div className={`self-start flex flex-col sm:flex-row text-7xl sm:text-8xl font-extrabold text-center ${figtree.className} mx-auto relative` }>
      
                  <div className="max-w-5xl flex flex-col gap-4 ">
                    <div className="rotate-[-4deg] flex flex-row justify-center gap-4">


                        <div className="desktop-motto hidden sm:flex relative">
                            <span className="font-extrabold w-fit animate-bounce-periodic mx-auto">Jump</span>
                            <div className="w-fit flex gap-8">
                                <span className="">start</span> 
                                <span className="absolute 2026-white rotate-[6deg] right-0 top-[-8px] z-2 text-9xl font-extrabold bg-linear-to-r from-orange-500 to-white bg-clip-text">2026</span>
                                <span className="font-black rotate-[6deg] text-9xl inline-block relative">2026</span>
                                </div>
                            </div>
                        </div>

                        <div className="mobile-motto flex flex-col sm:hidden">
                            <div className="flex">
                                <span className="font-extrabold w-fit animate-bounce-periodic mx-auto">Jump</span>
                                <span className="">start</span> 
                            </div>
                                <span className="font-black rotate-[0deg] text-9xl inline-block">2026</span>
                        </div>
                  
             
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
                        <span className={`${figtree_bold.className} bg-[#CF4B0A] text-white p-8 inline-block rounded-lg italic rotate-[-3deg] shadow-2xl`}>strong</span> 
                    <span className="text-9xl font-extrabold">&</span> 
                <span className="font-black bg-green-600 text-white p-8 rounded-full inline-block rotate-[4deg] shadow-2xl">healthy</span>
                </div>

                <div className="flex gap-8 items-center mt-4">
                    <Image className="rotate-[4deg]" src={diet_img} alt="diet" width="256" height="128"/> <span className="font-black">or</span> <Image className="rotate-[3deg]" src={exercise_img} alt="exercise" width="512" height="128"></Image>
                </div>
                </div>
        </div>
    )
}