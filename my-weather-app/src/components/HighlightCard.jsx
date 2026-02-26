const HighlightCard = ({ title, value, unit }) => {
  return (
    <div className="bg-white dark:bg-[#1F2937] p-5 rounded-2xl border border-gray-300">
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="text-2xl font-bold mt-3">
        {value} {unit}
      </h3>
    </div>
  );
};

export default HighlightCard;
