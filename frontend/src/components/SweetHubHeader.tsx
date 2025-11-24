import { Button } from "./ui/button";

export function SweetHubHeader({ onLoginClick }: { onLoginClick?: () => void }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">🍰</span>
            </div>
            <span className="text-2xl text-gray-800">SweetHub</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Reseñas
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Preguntas
            </button>
          </div>
          
          <Button 
            variant="ghost" 
            className="rounded-full px-6 hover:bg-white/50 backdrop-blur-sm transition-all"
            onClick={onLoginClick}
          >
            Iniciar sesión
          </Button>
        </div>
      </nav>
    </header>
  );
}