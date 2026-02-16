import { Home, MapPin, Settings, CloudLightning } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-20 bg-[#111827] flex flex-col items-center py-6 space-y-8">
      <CloudLightning className="text-purple-500 w-7 h-7" />

      <Home className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
      <MapPin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
      <Settings className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
    </aside>
  );
};

export default Sidebar;
