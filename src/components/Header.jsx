 import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">
            <Link to="/">Test Website</Link>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-secondary">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary">About</Link></li>
              <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}