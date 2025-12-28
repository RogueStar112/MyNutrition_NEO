import logo from "@/public/mynutritionlogo_upscaled.png"
import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="flex justify-center sm:justify-between items-center w-full px-4">
        
                  <Image src={logo} width={128} height={128} alt="MyNutrition Logo"/>
        
        
                  <div className="text-3xl flex gap-8 items-center hidden sm:flex">
                    <p>Login</p>
                    <p>Register</p>
                    <p>Pricing</p>
                    <p>Contact</p>
                  </div>
        
        
        
                  
        
        </nav>
    )
}