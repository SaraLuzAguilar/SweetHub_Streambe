import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl text-white">MiPastelería.Online</h3>
            <p className="text-sm">
              Ayudamos a reposteros y pastelerías a mostrar sus creaciones al mundo y recibir más pedidos cada día.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Características</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Plantillas</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Ejemplos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Blog de repostería</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Tips de fotografía</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Centro de ayuda</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Casos de éxito</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Términos de servicio</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Política de privacidad</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} MiPastelería.Online. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4" />
            <a href="mailto:hola@mipasteleria.online" className="hover:text-pink-400 transition-colors">
              hola@mipasteleria.online
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}