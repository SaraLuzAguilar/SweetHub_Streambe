import { Sparkles, Palette, Smartphone, Zap, MessageCircle, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Diseño personalizable",
    description: "Colores, tipografías y estilos que reflejan tu marca",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Palette,
    title: "Catálogo visual",
    description: "Mostrá tus productos con fotos de alta calidad",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp directo",
    description: "Pedidos automáticos a tu número de WhatsApp",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    description: "Diseñado para verse increíble en celulares",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Rápido y fácil",
    description: "Configurá todo en menos de 10 minutos",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    icon: TrendingUp,
    title: "Analytics incluido",
    description: "Mirá cuántas personas visitan tu perfil",
    gradient: "from-fuchsia-500 to-pink-500"
  }
];

export function SweetHubFeatures() {
  return (
    <section id="features" className="relative py-32 overflow-hidden bg-white">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-300 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-300 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl">
            Más que un simple{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              perfil
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitás para profesionalizar tu emprendimiento
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-[2.5rem] blur-xl transition-all duration-300`} />
                <div className="relative bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}