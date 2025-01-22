import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`
        );
        if (!response.ok) throw new Error("Search failed");
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  if (loading) return <div className="text-center text-xl">Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.length > 0 ? (
          results.map((item) => (
            <Link
              key={item.id}
              to={item.media_type === "movie" ? `/movie/${item.id}` : `/series/${item.id}`}
              className="block bg-gray-800 p-4 rounded-lg hover:scale-105 transition"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
                className="w-full h-72 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">
                {item.title || item.name}
              </h3>
            </Link>
          ))
        ) : (
          <p className="text-lg text-gray-400">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
