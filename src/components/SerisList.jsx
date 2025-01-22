import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function SeriesList() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    api.fetchPopularSeries().then(setSeries);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Popular TV Series</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {series.map((show) => (
          <Link key={show.id} to={`/series/${show.id}`} className="block bg-gray-800 p-4 rounded-lg hover:scale-105 transition">
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
              className="w-full h-72 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{show.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SeriesList;
