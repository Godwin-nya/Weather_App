import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ setCity }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    setCity(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 bg-[#1F2937] p-3 rounded-xl"
    >
      <Search className="w-5 h-5 text-gray-400" />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search city..."
        className="bg-transparent outline-none flex-1 text-white"
      />

      <button
        type="submit"
        className="bg-purple-600 px-4 py-1 rounded-lg hover:bg-purple-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
