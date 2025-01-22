const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const api = {
  fetchPopularMovies: async () => {
    try {
      const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
      if (!response.ok) throw new Error("Failed to fetch movies");
      const data = await response.json();
      return data.results || []; // Ensure it's always an array
    } catch (error) {
      console.error("Error fetching movies:", error);
      return []; // Return empty array to prevent crashes
    }
  },

  fetchPopularSeries: async () => {
    try {
      const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
      if (!response.ok) throw new Error("Failed to fetch TV series");
      const data = await response.json();
      return data.results || []; // Ensure it's always an array
    } catch (error) {
      console.error("Error fetching TV series:", error);
      return []; // Return empty array to prevent crashes
    }
  },
};

export default api;
