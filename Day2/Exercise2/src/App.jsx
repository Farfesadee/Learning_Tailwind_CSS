import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-green-700 text-white shadow-md fixed w-full z-20 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold">NaijaShop</div>

            {/* Center Nav Links (hidden on mobile) */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-green-200 transition">
                Home
              </a>
              <a href="#" className="hover:text-green-200 transition">
                Products
              </a>
              <a href="#" className="hover:text-green-200 transition">
                About
              </a>
              <a href="#" className="hover:text-green-200 transition">
                Contact
              </a>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Cart Icon */}
              <button className="p-2 hover:bg-green-600 rounded-full transition">
                🛒
              </button>

              {/* Login Button */}
              <button className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition">
                Login
              </button>

              {/* Hamburger (mobile only) */}
              <button
                className="md:hidden p-2 rounded hover:bg-green-600 focus:outline-none transition"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div
                  className={`space-y-1 transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                >
                  <span
                    className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                      isOpen ? "transform rotate-45 translate-y-1.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                      isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`md:hidden bg-green-700 border-t border-green-600 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-2 px-4 py-3">
            <a href="#" className="hover:text-green-200">
              Home
            </a>
            <a href="#" className="hover:text-green-200">
              Products
            </a>
            <a href="#" className="hover:text-green-200">
              About
            </a>
            <a href="#" className="hover:text-green-200">
              Contact
            </a>
            <button className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="pt-24 p-6 text-center">
        <h1 className="text-3xl font-bold text-green-700">Welcome to NaijaShop!</h1>
        <p className="mt-4 text-gray-600">
          Explore products proudly made in Nigeria 🇳🇬
        </p>
      </main>
    </div>
  );
}

export default App;
