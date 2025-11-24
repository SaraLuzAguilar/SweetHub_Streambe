import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Repostero Inicial",
    price: "$9",
    period: "/mes",
    description: "Perfecto para empezar tu pastelería online",
    features: [
      "1 sitio web",
      "Galería hasta 30 fotos",
      "Menú de productos",
      "Formulario de pedidos",
      "Dominio personalizado",
      "SSL incluido",
      "Soporte por email"
    ],
    cta: "Comenzar",
    popular: false
  },
  {
    name: "Repostero Pro",
    price: "$19",
    period: "/mes",
    description: "Ideal para pastelerías en crecimiento",
    features: [
      "1 sitio web premium",
      "Galería ilimitada de fotos",
      "Menú completo con precios",
      "Formulario de pedidos avanzado",
      "Sección de testimonios",
      "Dominio personalizado",
      "SSL incluido",
      "Optimización para bodas/eventos",
      "WhatsApp integrado",
      "Soporte prioritario 24/7"
    ],
    cta: "Comenzar",
    popular: true
  },
  {
    name: "Pastelería Premium",
    price: "$39",
    period: "/mes",
    description: "Para negocios establecidos y eventos",
    features: [
      "Sitio web personalizado",
      "Galería profesional ilimitada",
      "Catálogo completo",
      "Sistema de reservas",
      "Calculadora de precios",
      "Blog de recetas",
      "Múltiples dominios",
      "SSL incluido",
      "Integración redes sociales",
      "Instagram feed en vivo",
      "Google Analytics",
      "Soporte dedicado",
      "Sesión fotográfica incluida"
    ],
    cta: "Contactar ventas",
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl">
            Planes para cada <span className="text-pink-600">etapa</span> de tu pastelería
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sin contratos a largo plazo. Cancela cuando quieras.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative ${
                plan.popular 
                  ? 'border-2 border-pink-500 shadow-xl scale-105' 
                  : 'border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-600 text-white px-4 py-1 rounded-full">
                  Más popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <span className="text-5xl">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              
              <Button 
                className={`w-full mb-6 ${
                  plan.popular 
                    ? 'bg-pink-600 hover:bg-pink-700' 
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
              
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-gray-600 mt-12">
          Todos los planes incluyen 14 días de prueba gratis. Sin tarjeta de crédito requerida.
        </p>
      </div>
    </section>
  );
}