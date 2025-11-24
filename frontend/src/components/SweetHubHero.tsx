import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function SweetHubHero({ onGetStarted }: { onGetStarted?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-300/30 to-orange-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-yellow-300/30 to-pink-300/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl leading-tight">
                Tu emprendimiento,{" "}
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                  tu espacio
                </span>
                , tu link.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-xl">
                Diseñá tu perfil, mostrale al mundo tu catálogo y recibí pedidos al instante.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white rounded-full px-8 py-6 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all"
                onClick={onGetStarted}
              >
                Comenzar ahora <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 py-6 border-2 border-gray-300 hover:border-gray-400 bg-white/50 backdrop-blur-sm"
              >
                Ver ejemplo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 border-4 border-white shadow-md"
                  />
                ))}
              </div>
              <div>
                <div className="text-gray-700">+1,200 emprendedores</div>
                <div className="text-sm text-gray-500">ya tienen su SweetHub</div>
              </div>
            </div>
          </div>
          
          {/* Right Mockups */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main phone mockup */}
              <div className="relative z-20 mx-auto w-80 h-[600px] bg-gradient-to-br from-white to-gray-50 rounded-[3rem] shadow-2xl shadow-pink-500/20 p-4 border-8 border-gray-200">
                <div className="w-full h-full bg-gradient-to-br from-pink-100 to-orange-100 rounded-[2.5rem] overflow-hidden">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-orange-400" />
                      <div className="space-y-1">
                        <div className="h-4 w-24 bg-white/60 rounded-full" />
                        <div className="h-3 w-32 bg-white/40 rounded-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div 
                          key={i} 
                          className="aspect-square bg-white/70 rounded-3xl backdrop-blur-sm shadow-lg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Secondary phone mockup (background) */}
              <div className="absolute top-16 -right-12 z-10 w-72 h-[560px] bg-gradient-to-br from-white to-gray-50 rounded-[3rem] shadow-xl shadow-orange-500/20 p-4 border-8 border-gray-200 opacity-50 blur-sm">
                <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-pink-100 rounded-[2.5rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}