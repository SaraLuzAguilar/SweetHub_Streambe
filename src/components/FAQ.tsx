import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "¿Necesito saber de tecnología para crear mi sitio?",
    answer: "Para nada. Si sabes hornear un pastel, puedes crear tu sitio web. Todo es visual, arrastrando y soltando elementos. No necesitas saber programar ni diseñar."
  },
  {
    question: "¿Puedo subir fotos de mis pasteles y productos?",
    answer: "Sí, absolutamente. Puedes crear galerías hermosas con todas las fotos de tus creaciones. Dependiendo del plan, tienes desde 30 fotos hasta galerías ilimitadas. Las fotos se optimizan automáticamente para que tu sitio cargue rápido."
  },
  {
    question: "¿Cómo recibiré los pedidos de mis clientes?",
    answer: "Tu sitio incluye formularios de contacto y pedidos que llegan directamente a tu email. También puedes integrar WhatsApp para que tus clientes te escriban al instante. Algunos planes incluyen sistema de reservas más avanzado."
  },
  {
    question: "¿Puedo mostrar mis precios o es mejor que me contacten?",
    answer: "Tú decides. Puedes mostrar precios fijos, rangos de precios, o solo fotos para que te contacten. Muchas pastelerías prefieren mostrar 'desde $X' para eventos personalizados."
  },
  {
    question: "¿El sitio se verá bien en celulares?",
    answer: "Sí, todos nuestros diseños son 100% responsivos. Se ven perfectos en celulares, tablets y computadoras. La mayoría de tus clientes verán tu sitio desde el celular, así que nos aseguramos que se vea espectacular."
  },
  {
    question: "¿Me ayudan con las fotos de mis productos?",
    answer: "En el plan Premium incluimos una sesión fotográfica profesional de tus productos. Para los otros planes, te damos una guía completa con tips para tomar fotos increíbles con tu celular."
  }
];

export function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl">
            Preguntas <span className="text-pink-600">frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que los reposteros nos preguntan
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border-2 border-gray-100 rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline">
                <span className="text-left">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}