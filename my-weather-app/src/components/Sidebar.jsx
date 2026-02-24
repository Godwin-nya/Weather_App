import { Home, MapPin, Settings, CloudLightning } from "lucide-react";

const Sidebar = ({ weather }) => {
  const lat = weather?.coord?.lat;
  const lon = weather?.coord?.lon;

  const mapUrl =
    lat && lon
      ? `https://www.google.com/maps?q=${lat},${lon}`
      : "#";

  return (
    <aside className="hidden md:flex w-24 bg-[#111827] h-full flex-col items-center py-6 space-y-8">


      {/* Logo */}
      <CloudLightning className="text-purple-500 w-7 h-7" />

      {/* Home */}
      <Home className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />

      {/* Map Link */}
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          lat && lon
            ? "text-gray-400 hover:text-white cursor-pointer"
            : "text-gray-600 cursor-not-allowed"
        }`}
      >
        <MapPin className="w-6 h-6" />
      </a>

      {/* Settings */}
      <Settings className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
    </aside>
  );
};

export default Sidebar;
