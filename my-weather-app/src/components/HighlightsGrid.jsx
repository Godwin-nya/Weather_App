import HighlightCard from "./HighlightCard";

const HighlightsGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      <HighlightCard title="UV Index" value="5" unit="Moderate" />
      <HighlightCard title="Wind Status" value="12" unit="km/h" />
      <HighlightCard title="Humidity" value="70" unit="%" />
      <HighlightCard title="Chance of Rain" value="30" unit="%" />
    </div>
  );
};

export default HighlightsGrid;
