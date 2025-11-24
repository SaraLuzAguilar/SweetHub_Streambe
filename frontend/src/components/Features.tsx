import { Zap, Palette, Smartphone, Lock, TrendingUp, HeadphonesIcon } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Zap,
    title: "Catálogo visual irresistible",
    description: "Galería de fotos de alta calidad para mostrar tus pasteles, cupcakes y postres más deliciosos."
  },
  {
    icon: Palette,
    title: "Diseño dulce y profesional",
    description: "Plantillas diseñadas específicamente para pastelerías con estilo elegante y apetitoso."
  },
  {
    icon: Smartphone,
    title: "Pedidos desde el celular",
    description: "Tus clientes podrán ver y ordenar tus productos desde cualquier dispositivo fácilmente."
  },
  {
    icon: Lock,
    title: "Formulario de pedidos",
    description: "Recibe solicitudes de cotización para eventos, bodas y ocasiones especiales directamente."
  },
  {
    icon: TrendingUp,
    title: "Más visibilidad en Google",
    description: "Aparece en las búsquedas locales cuando la gente busque 'pastelería cerca de mí'."
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte especializado",
    description: "Equipo que entiende tu negocio y te ayuda a destacar en el mundo digital."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl">
            Todo para hacer <span className="text-pink-600">crecer</span> tu pastelería
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Herramientas diseñadas para reposteros, no para programadores
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 border-gray-100">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}