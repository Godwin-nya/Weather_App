import HighlightCard from "./HighlightCard";

const HighlightsGrid = () => {
  return (
    <div className="w-full lg:w-[350px] bg-white dark:bg-[#111827] p-4 md:p-6 rounded-2xl transition border border-gray-300">

      <HighlightCard title="UV Index" value="5" unit="Moderate" />
      <HighlightCard title="Wind Status" value="12" unit="km/h" />
      <HighlightCard title="Humidity" value="70" unit="%" />
      <HighlightCard title="Chance of Rain" value="30" unit="%" />
    </div>
  );
};

export default HighlightsGrid;
