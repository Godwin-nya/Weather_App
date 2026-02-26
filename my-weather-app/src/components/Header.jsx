import { Menu, Sun, Moon } from "lucide-react";

function Header({ theme, setTheme }) {
  return (
    <header className="bg-white dark:bg-[#111827] border-b border-gray-300 dark:border-gray-700 ">
      <div className="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3">

        {/* Logo */}
        <img
          src="/skycastlogo.png"
          alt="SkyCast Logo"
          className="h-8 sm:h-10 md:h-12 object-contain"
        />

        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* Menu Icon */}
          <Menu className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-purple-400" />
        </div>
      </div>
    </header>
  );
}

export default Header;