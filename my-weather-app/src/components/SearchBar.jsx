import { useState } from "react";

const SearchBar = ({ setCity, recentCities }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCity(input.trim());
      setInput("");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search city..."
          className="w-full p-3 rounded-xl 
                     bg-white dark:bg-[#1F2937]
                     text-gray-900 dark:text-white
                     border border-gray-300 dark:border-gray-600"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/5 transform -translate-y-1/2 bg-purple-600 px-4 py-1 rounded-lg hover:bg-purple-700 transition"
        >
          Search
        </button>
      </form>

      {/* Recent Suggestions */}
      {recentCities.length > 0 && (
        <div
          className="mt-2 bg-white dark:bg-[#1F2937] 
                        rounded-xl shadow-md p-2"
        >
          <p className="text-sm opacity-60 mb-2">Recent Searches</p>

          <div className="flex flex-wrap gap-2">
            {recentCities.map((city, index) => (
              <button
                key={index}
                onClick={() => setCity(city)}
                className="px-3 py-1 text-sm rounded-full 
                           bg-gray-200 dark:bg-gray-700
                           hover:scale-105 transition"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
