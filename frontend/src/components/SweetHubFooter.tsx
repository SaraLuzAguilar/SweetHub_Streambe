import { Instagram, Twitter, Mail } from "lucide-react";

export function SweetHubFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-16 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">🍰</span>
              </div>
              <span className="text-2xl text-white">SweetHub</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              La plataforma para emprendedores que quieren mostrar su trabajo con estilo.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Características</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Ejemplos</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Plantillas</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Centro de ayuda</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Guías</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Privacidad</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} SweetHub. Hecho con 💖 para emprendedores.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <a href="mailto:hola@sweethub.com" className="hover:text-pink-400 transition-colors">
              hola@sweethub.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
