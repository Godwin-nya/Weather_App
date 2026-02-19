import React from "react";
import { Menu } from "lucide-react";

function Header() {
    return ( 
    <header className="bg-[#111827] border-b border-gray-700 px-4 py-3">
     
        <div className="flex items-center justify-between">
         
           <img src="/skycastlogo.png"
            alt="page-logo"
            className="h-10 sm:h-12 md:h-14 object-contain" />  

            <Menu  />
        </div>    
    
    </header> );
}

export default Header;