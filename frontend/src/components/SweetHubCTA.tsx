import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function SweetHubCTA({ onGetStarted }: { onGetStarted?: () => void }) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Decorative glowing orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center space-y-10">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white shadow-xl">
            <Sparkles className="w-5 h-5 text-pink-300" />
            <span>Sin costo de setup • Sin comisiones por venta</span>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl text-white leading-tight">
              Mostrá tu emprendimiento{" "}
              <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                al mundo con estilo
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Unite a cientos de reposteros que ya están creciendo con su propio espacio digital
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white rounded-full px-10 py-7 text-lg shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70 hover:scale-105 transition-all"
              onClick={onGetStarted}
            >
              Empezá gratis <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-10 py-7 text-lg border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md"
            >
              Ver planes
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Sin tarjeta de crédito</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Configuración en minutos</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Cancela cuando quieras</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}