import Link from "next/link";
import { Vina_Sans } from "next/font/google";

const vinaSans = Vina_Sans({
  subsets: ["latin"],
  display: "block",
  variable: "--font-vina-sans",
  weight: ["400"],
});

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className={`logo-container ${vinaSans.className}`}>
        <Link href="/" className="logo">
          summon
        </Link>
      </div>
      <div className="search-links-container">
        <div className="search-container">
          <input
            type="text"
            className="navbar-search"
            placeholder="Search..."
          />
        </div>
        <div className="navbar-links-container">
          <Link href="/events" className="navbar">
            Events
          </Link>
          <Link href="/favorites" className="navbar">
            Favorites
          </Link>
          <Link href="/messages" className="navbar">
            Messages
          </Link>
          <Link href="/calendar" className="navbar">
            Calendar
          </Link>
        </div>
      </div>
    </div>
  );
}
