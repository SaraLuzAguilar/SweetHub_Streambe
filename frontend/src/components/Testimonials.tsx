import { Card } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura Sánchez",
    business: "Dulce Tentación",
    image: "https://images.unsplash.com/photo-1572978577832-287ca6539e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGRpc3BsYXl8ZW58MXx8fHwxNzYxMjIxMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Desde que tengo mi sitio web, los pedidos de pasteles para bodas se triplicaron. Los novios ven mi portafolio online y me contactan directamente. ¡La mejor inversión!",
    rating: 5
  },
  {
    name: "Carmen Torres",
    business: "Cupcakes & Dreams",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2MTEyNzY5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Antes solo vendía por Instagram. Ahora tengo mi sitio profesional donde muestro todo mi catálogo de cupcakes. Los pedidos corporativos aumentaron increíblemente.",
    rating: 5
  },
  {
    name: "Isabel Ramírez",
    business: "Pastelería Artesanal IR",
    image: "https://images.unsplash.com/photo-1561216997-d7c8e45eda37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlciUyMHdvcmtpbmd8ZW58MXx8fHwxNzYxMjIxMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Creé mi sitio en una tarde y ahora la gente me encuentra en Google cuando busca 'pasteles personalizados'. No necesité contratar a nadie, todo fue super fácil.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl">
            Historias de <span className="text-pink-600">éxito</span> dulce
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cientos de reposteros ya están creciendo con nosotros
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-2 border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div>{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.business}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}