import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Es realmente gratis empezar?",
    answer: "Sí, totalmente gratis. Podés crear tu perfil, personalizarlo y empezar a recibir pedidos sin pagar nada. No pedimos tarjeta de crédito ni datos de pago para comenzar. Solo pagás si querés acceder a funciones premium."
  },
  {
    question: "¿Necesito saber de programación o diseño?",
    answer: "Para nada. SweetHub está diseñado para reposteros, no para programadores. Todo es visual y súper intuitivo: elegís colores con un selector, subís fotos arrastrándolas, y editás textos como en Instagram. Si sabés usar redes sociales, ya sabés usar SweetHub."
  },
  {
    question: "¿Cómo funcionan los pedidos por WhatsApp?",
    answer: "Cuando un cliente hace clic en 'Hacer pedido' en tu catálogo, se le abre WhatsApp automáticamente con un mensaje pre-escrito que incluye el producto que eligió. Vos recibís el mensaje directo en tu WhatsApp y podés responder al instante."
  },
  {
    question: "¿Puedo usar mi propio nombre de dominio?",
    answer: "Sí. Por defecto tu link será sweethub.com/tunombre, pero en los planes Pro y Premium podés conectar tu propio dominio (ejemplo: tuemprendimiento.com). Te ayudamos con todo el proceso de configuración."
  },
  {
    question: "¿Cuántas fotos puedo subir?",
    answer: "En el plan gratuito podés subir hasta 20 fotos de tus productos. En los planes pagos tenés fotos ilimitadas. Todas las fotos se optimizan automáticamente para que tu sitio cargue rápido sin perder calidad."
  },
  {
    question: "¿Puedo cambiar los colores y tipografías?",
    answer: "Absolutamente. Podés elegir los colores de tu marca (primario, secundario, fondo), la tipografía que más te guste de nuestra biblioteca, y hasta subir tu logo. Todo se actualiza en tiempo real mientras editás."
  },
  {
    question: "¿El sitio se ve bien en celulares?",
    answer: "Sí, todos los diseños están optimizados para verse perfectos en celulares, tablets y computadoras. De hecho, más del 80% de tus clientes verán tu perfil desde el celular, por eso nos enfocamos mucho en la experiencia móvil."
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer: "Sí, no hay contratos ni permanencias mínimas. Podés cancelar tu suscripción cuando quieras desde tu panel. Si cancelás, tu perfil queda como gratuito y mantiene las funciones básicas."
  }
];

export function SweetHubFAQ() {
  return (
    <section id="faq" className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Decorative background */}
      <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200/50 px-5 py-2 rounded-full shadow-sm">
            <HelpCircle className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700">¿Tenés dudas?</span>
          </div>
          <h2 className="text-5xl md:text-6xl">
            Preguntas{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              frecuentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitás saber antes de empezar
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/80 backdrop-blur-md border-2 border-white/50 rounded-3xl px-6 shadow-lg hover:shadow-xl transition-all data-[state=open]:shadow-2xl overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline py-6 text-left group">
                <div className="flex items-start gap-4 pr-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-sm group-data-[state=open]:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <span className="text-lg text-gray-900">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pl-12 pr-4 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {/* Contact support */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-pink-50 to-orange-50 border border-pink-200/50 p-8 rounded-3xl shadow-lg">
            <div className="text-lg text-gray-700">
              ¿No encontraste lo que buscabas?
            </div>
            <a 
              href="mailto:hola@sweethub.com" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              Hablá con nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}