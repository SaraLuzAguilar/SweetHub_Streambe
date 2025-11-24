import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { 
  MessageCircle, 
  MapPin, 
  Mail, 
  Instagram, 
  Copy, 
  Check,
  Phone,
  Share2,
  ArrowLeft
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SweetHubFooter } from "./SweetHubFooter";

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
  products: Product[];
}

// Mock data
const mockCategories: Category[] = [
  {
    id: "1",
    name: "Tortas",
    color: "from-pink-400 to-rose-400",
    icon: "🎂",
    products: [
      {
        id: "1",
        name: "Torta de chocolate",
        price: "$3500",
        description: "Deliciosa torta de chocolate con cobertura de ganache",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop"
      },
      {
        id: "2",
        name: "Torta red velvet",
        price: "$4000",
        description: "Suave torta red velvet con crema de queso",
        image: "https://images.unsplash.com/photo-1586985289906-406988974504?w=400&h=400&fit=crop"
      },
      {
        id: "3",
        name: "Torta de zanahoria",
        price: "$3200",
        description: "Torta húmeda de zanahoria con frosting de queso crema",
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=400&fit=crop"
      }
    ]
  },
  {
    id: "2",
    name: "Cupcakes",
    color: "from-purple-400 to-violet-400",
    icon: "🧁",
    products: [
      {
        id: "4",
        name: "Cupcake de vainilla",
        price: "$800",
        description: "Cupcake de vainilla con buttercream",
        image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=400&fit=crop"
      },
      {
        id: "5",
        name: "Cupcake de chocolate",
        price: "$800",
        description: "Cupcake de chocolate intenso",
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=400&fit=crop"
      }
    ]
  },
  {
    id: "3",
    name: "Alfajores",
    color: "from-orange-400 to-amber-400",
    icon: "🍪",
    products: [
      {
        id: "6",
        name: "Alfajor de maicena",
        price: "$450",
        description: "Clásico alfajor argentino de maicena",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop"
      }
    ]
  }
];

export function PublicProfileScreen({ onBack }: { onBack?: () => void }) {
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);
  
  const [orderForm, setOrderForm] = useState({
    name: "",
    quantity: "1",
    comment: ""
  });

  const businessData = {
    name: "Dulce Momento",
    slogan: "Tortas artesanales hechas con amor 🎂",
    description: "Somos un emprendimiento familiar dedicado a crear momentos dulces. Cada torta es hecha con amor y los mejores ingredientes.",
    banner: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=1200&h=400&fit=crop",
    logo: "🍰",
    location: "Buenos Aires, Argentina",
    email: "hola@dulcemomento.com",
    instagram: "@dulcemomento",
    phone: "+54 9 11 1234-5678",
    personalLink: "sweethub.app/p/dulcemomento"
  };

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setIsOrderDialogOpen(true);
  };

  const handleSendOrder = () => {
    const message = `¡Hola! Me gustaría hacer un pedido:\n\n*Producto:* ${selectedProduct?.name}\n*Cantidad:* ${orderForm.quantity}\n*Precio unitario:* ${selectedProduct?.price}\n${orderForm.comment ? `*Comentario:* ${orderForm.comment}` : ''}\n\nMi nombre es ${orderForm.name}`;
    
    const whatsappUrl = `https://wa.me/${businessData.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsOrderDialogOpen(false);
    setOrderForm({ name: "", quantity: "1", comment: "" });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://${businessData.personalLink}`);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      {/* Header con botón de volver */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="rounded-2xl gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al dashboard
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Cover Image */}
        <div className="relative rounded-[2rem] overflow-hidden aspect-[3/1] mb-6 shadow-xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&h=400&fit=crop"
            alt="Portada"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-20 relative z-10">
          {/* Logo */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center shadow-2xl border-8 border-white text-6xl md:text-7xl">
            {businessData.logo}
          </div>

          {/* Business Info */}
          <div className="flex-1 text-center md:text-left bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl">
            <h1 className="text-4xl md:text-5xl mb-2">{businessData.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{businessData.slogan}</p>
            
            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-orange-100 hover:from-pink-200 hover:to-orange-200 rounded-full transition-all text-sm"
            >
              {linkCopied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-green-600">¡Link copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-pink-600" />
                  <span className="text-pink-600">{businessData.personalLink}</span>
                  <Copy className="w-4 h-4 text-pink-600" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-5xl">
        {/* About Section */}
        <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2.5rem] shadow-xl p-8 mb-12">
          <h2 className="text-2xl mb-4 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            Sobre nosotros
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {businessData.description}
          </p>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Ubicación</div>
                <div className="text-gray-900">{businessData.location}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Instagram</div>
                <a href={`https://instagram.com/${businessData.instagram.replace('@', '')}`} className="text-gray-900 hover:text-pink-600 transition-colors">
                  {businessData.instagram}
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* Products by Category */}
        {mockCategories.map((category) => (
          <div key={category.id} className="mb-16">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg text-3xl`}>
                {category.icon}
              </div>
              <div>
                <h2 className="text-3xl">{category.name}</h2>
                <p className="text-gray-600">{category.products.length} productos disponibles</p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product) => (
                <Card 
                  key={product.id} 
                  className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer"
                  onClick={() => handleOrderClick(product)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <div className="bg-white text-pink-600 px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>Pedir por WhatsApp</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="text-xl">{product.name}</h3>
                    <p className="text-2xl bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                      {product.price}
                    </p>
                    <p className="text-sm text-gray-600">{product.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => window.open(`https://wa.me/${businessData.phone.replace(/\D/g, '')}`, '_blank')}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all z-50 group"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-full shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="text-sm text-gray-700">¡Hacé tu pedido!</span>
        </div>
      </button>

      {/* Order Dialog */}
      <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
        <DialogContent className="rounded-3xl max-w-md">
          <DialogHeader>
            <DialogTitle>Hacer pedido por WhatsApp</DialogTitle>
          </DialogHeader>
          
          {selectedProduct && (
            <div className="space-y-4 pt-4">
              {/* Product Summary */}
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-4 flex gap-4">
                <ImageWithFallback
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{selectedProduct.name}</h3>
                  <p className="text-lg text-pink-600">{selectedProduct.price}</p>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Tu nombre</Label>
                  <Input
                    value={orderForm.name}
                    onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                    placeholder="Juan Pérez"
                    className="h-12 rounded-2xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Cantidad</Label>
                  <Input
                    type="number"
                    min="1"
                    value={orderForm.quantity}
                    onChange={(e) => setOrderForm({ ...orderForm, quantity: e.target.value })}
                    className="h-12 rounded-2xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Comentario (opcional)</Label>
                  <Textarea
                    value={orderForm.comment}
                    onChange={(e) => setOrderForm({ ...orderForm, comment: e.target.value })}
                    placeholder="Ej: Para el sábado, con mensaje personalizado..."
                    className="rounded-2xl resize-none"
                    rows={3}
                  />
                </div>
              </div>

              <Button
                onClick={handleSendOrder}
                disabled={!orderForm.name}
                className="w-full h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl shadow-lg text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar por WhatsApp
              </Button>

              <p className="text-xs text-center text-gray-500">
                Se abrirá WhatsApp con tu pedido listo para enviar
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <SweetHubFooter />
    </div>
  );
}