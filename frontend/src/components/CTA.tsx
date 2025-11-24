import { Button } from "./ui/button";
import { ArrowRight, Cake } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-600 to-orange-600 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
          <Cake className="w-4 h-4" />
          <span>Únete a cientos de reposteros exitosos</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl">
          ¿Lista para llevar tu pastelería al mundo digital?
        </h2>
        
        <p className="text-xl text-pink-100 max-w-2xl mx-auto">
          Crea tu catálogo online hoy mismo. 14 días de prueba gratis. Sin tarjeta de crédito. Sin compromisos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Comenzar gratis <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
            Ver plantillas
          </Button>
        </div>
        
        <p className="text-sm text-pink-100">
          ✓ Sin tarjeta de crédito  ✓ Configuración en minutos  ✓ Cancela cuando quieras
        </p>
      </div>
    </section>
  );
}