export default function Header() {
    return (
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Test Website</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-secondary">Home</a></li>
                <li><a href="#" className="hover:text-secondary">About</a></li>
                <li><a href="#" className="hover:text-secondary">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }