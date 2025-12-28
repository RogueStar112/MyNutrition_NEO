import { figtree, figtree_bold } from "../layout";


export default function Motto() {
    return (
        <div className={`self-start flex flex-col sm:flex-row text-7xl sm:text-9xl font-extrabold text-center ${figtree.className} mx-auto` }>
                  <div className="max-w-5xl flex flex-col gap-4 ">
                    <div className="rotate-[-4deg] flex flex-row justify-center gap-4">


                        <div className="desktop-motto hidden sm:flex">
                            <span className="font-extrabold w-fit animate-bounce-periodic mx-auto">Jump</span>
                            <div className="w-fit flex gap-8">
                                <span className="">start</span> 
                                <span className="font-black rotate-[6deg] text-9xl inline-block">2026</span>
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
                </div>
        </div>
    )
}