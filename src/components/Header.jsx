import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-red-600">
        🎬 Movie Marketplace
      </Link>
      <nav>
        <Link to="/" className="mx-4 hover:text-red-500">Home</Link>
      </nav>
    </header>
  );
}

export default Header;
