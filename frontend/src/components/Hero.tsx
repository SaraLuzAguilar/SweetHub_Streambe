import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-orange-50 py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span>Tu pastelería online en minutos</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl">
              Lleva tu <span className="text-pink-600">pastelería</span> al mundo digital
            </h1>
            
            <p className="text-xl text-gray-600">
              Muestra tus creaciones, recibe pedidos online y haz crecer tu negocio de repostería 
              con un sitio web hecho a tu medida. Sin complicaciones técnicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                Comenzar gratis <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Ver ejemplos
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl">850+</div>
                <div className="text-gray-600">Pastelerías online</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div>
                <div className="text-3xl">4.9/5</div>
                <div className="text-gray-600">Valoración</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1659352000773-db010210946c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwYXN0cnklMjBzaG9wfGVufDF8fHx8MTc2MTIyMTM4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pastelería moderna"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  🧁
                </div>
                <div>
                  <div className="text-sm text-gray-600">Tu catálogo online en</div>
                  <div className="text-xl">menos de 10 minutos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}