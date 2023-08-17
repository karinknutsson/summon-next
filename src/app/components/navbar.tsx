import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar-links">
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
  );
}
