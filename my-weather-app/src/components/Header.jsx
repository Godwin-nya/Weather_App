import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="bg-[#111827] border-b border-gray-700">
      <div className="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3">

        {/* Logo */}
        <img
          src="/skycastlogo.png"
          alt="SkyCast Logo"
          className="h-8 sm:h-10 md:h-12 object-contain"
        />

        {/* Menu Icon */}
        <Menu className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-purple-400 transition" />

      </div>
    </header>
  );
}

export default Header;
