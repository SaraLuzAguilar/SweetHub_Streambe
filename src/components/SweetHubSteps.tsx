import { UserPlus, Palette, Share2 } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Registrate",
    description: "Creá tu cuenta en segundos y elegí tu nombre único"
  },
  {
    icon: Palette,
    title: "Personalizá tu perfil",
    description: "Elegí colores, tipografías y mostrá tus productos"
  },
  {
    icon: Share2,
    title: "Compartí tu link",
    description: "Recibí pedidos por WhatsApp desde tu link personalizado"
  }
];

export function SweetHubSteps() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-br from-pink-200/40 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/40 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl">
            Tres pasos{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              simples
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Herramientas diseñadas para reposteros, no para programadores
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-[3rem] blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/80 backdrop-blur-md p-10 rounded-[3rem] shadow-lg hover:shadow-2xl transition-all border border-white/50">
                  {/* Step number */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-10 h-10 text-pink-600" />
                  </div>
                  
                  <h3 className="text-2xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Connection lines (decorative) */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
          <svg className="w-full h-24 opacity-20" viewBox="0 0 800 100">
            <path
              d="M 50 50 Q 200 20 400 50 T 750 50"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10 5"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
