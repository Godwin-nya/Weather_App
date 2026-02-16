import { Sun, Wind, Droplets, Eye } from "lucide-react";
import HighlightCard from "./HighlightCard";

const TodayHighlight = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-6">Today Highlight</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <HighlightCard
          title="Humidity"
          value={weather.main.humidity}
          unit="%"
        />

        <HighlightCard
          title="Wind Status"
          value={weather.wind.speed}
          unit="m/s"
        />

        <HighlightCard
          title="Feels Like"
          value={Math.round(weather.main.feels_like)}
          unit="°C"
        />

        <HighlightCard
          title="Pressure"
          value={weather.main.pressure}
          unit="hPa"
        />
      </div>
    </div>
  );
};


export default TodayHighlight;