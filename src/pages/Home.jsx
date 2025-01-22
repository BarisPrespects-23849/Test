import HeroBanner from "../components/HeroBanner";
import MovieList from "../components/MovieList";
import SeriesList from "../components/SerisList";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div className="p-4">
      <HeroBanner />
      <SearchBar />
      <MovieList />
      <SeriesList />
    </div>
  );
}

export default Home;
