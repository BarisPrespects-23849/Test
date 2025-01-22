import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center p-4">
      <input
        type="text"
        placeholder="Search movies or TV series..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-2/3 md:w-1/2 lg:w-1/3 p-2 border-2 border-gray-700 rounded-lg text-black"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
