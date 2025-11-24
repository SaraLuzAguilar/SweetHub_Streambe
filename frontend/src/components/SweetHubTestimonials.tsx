import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Valentina Méndez",
    business: "Dulce Momento",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    text: "SweetHub cambió mi negocio por completo. Antes solo tenía Instagram, ahora tengo mi propio espacio donde los clientes ven todo mi catálogo y hacen pedidos directo por WhatsApp. ¡Los pedidos se triplicaron!",
    rating: 5,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    name: "Martina Silva",
    business: "Cupcakes & Co",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    text: "Lo más fácil que hice en mi vida. En 15 minutos tenía mi sitio listo con mis colores, mis fotos y mi logo. Mis clientes me dicen que se ve súper profesional.",
    rating: 5,
    gradient: "from-orange-500 to-amber-500"
  },
  {
    name: "Sofía Ramos",
    business: "Tortas Artesanales SR",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    text: "Me encanta poder personalizar todo: los colores, la tipografía, cómo se ven mis productos. Es como tener mi propia tienda online pero sin complicaciones técnicas.",
    rating: 5,
    gradient: "from-purple-500 to-violet-500"
  }
];

export function SweetHubTestimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden bg-gradient-to-br from-white via-pink-50/30 to-orange-50/30">
      {/* Decorative background */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-yellow-300/20 to-pink-300/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-orange-100 border border-pink-200/50 px-5 py-2 rounded-full shadow-sm">
            <Star className="w-4 h-4 text-pink-600 fill-pink-600" />
            <span className="text-pink-700">+1,200 reposteros felices</span>
          </div>
          <h2 className="text-5xl md:text-6xl">
            Historias de{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              éxito dulce
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lo que dicen quienes ya están creciendo con SweetHub
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 rounded-[2.5rem] blur-xl transition-all duration-300`} />
              <Card className="relative bg-white/80 backdrop-blur-md border border-white/50 p-8 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Quote icon */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <Quote className="w-6 h-6 text-white" />
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-full blur-md opacity-50`} />
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.business}</div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Additional stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <div className="text-gray-600">Valoración promedio</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-600">Recomiendan SweetHub</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
              +50k
            </div>
            <div className="text-gray-600">Pedidos mensuales</div>
          </div>
        </div>
      </div>
    </section>
  );
}