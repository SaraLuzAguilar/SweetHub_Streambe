import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl text-pink-600">MiPastelería.Online</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#caracteristicas" className="text-gray-700 hover:text-pink-600 transition-colors">
              Características
            </a>
            <a href="#precios" className="text-gray-700 hover:text-pink-600 transition-colors">
              Precios
            </a>
            <a href="#testimonios" className="text-gray-700 hover:text-pink-600 transition-colors">
              Testimonios
            </a>
            <a href="#faq" className="text-gray-700 hover:text-pink-600 transition-colors">
              FAQ
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Iniciar sesión</Button>
            <Button className="bg-pink-600 hover:bg-pink-700">
              Comenzar gratis
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a 
              href="#caracteristicas" 
              className="block py-2 text-gray-700 hover:text-pink-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Características
            </a>
            <a 
              href="#precios" 
              className="block py-2 text-gray-700 hover:text-pink-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Precios
            </a>
            <a 
              href="#testimonios" 
              className="block py-2 text-gray-700 hover:text-pink-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </a>
            <a 
              href="#faq" 
              className="block py-2 text-gray-700 hover:text-pink-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" className="w-full">Iniciar sesión</Button>
              <Button className="w-full bg-pink-600 hover:bg-pink-700">
                Comenzar gratis
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}