import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Switch } from "./ui/switch";
import { 
  LayoutDashboard,
  Palette,
  ShoppingBag,
  Eye,
  BarChart3,
  LogOut,
  Settings,
  Upload,
  Edit3,
  Trash2,
  Plus,
  Save,
  Copy,
  Check,
  ExternalLink,
  Folder,
  User,
  Lock,
  Bell,
  CreditCard,
  HelpCircle
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  unit?: string;
}

interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
  products: Product[];
}

const colorPresets = [
  { name: "Rosa dulce", primary: "#ec4899", secondary: "#f97316", gradient: "from-pink-500 to-orange-500" },
  { name: "Lavanda", primary: "#a855f7", secondary: "#ec4899", gradient: "from-purple-500 to-pink-500" },
  { name: "Melocotón", primary: "#fb923c", secondary: "#fbbf24", gradient: "from-orange-500 to-yellow-500" },
  { name: "Menta", primary: "#10b981", secondary: "#06b6d4", gradient: "from-green-500 to-cyan-500" },
  { name: "Cielo", primary: "#3b82f6", secondary: "#8b5cf6", gradient: "from-blue-500 to-purple-500" },
  { name: "Coral", primary: "#f43f5e", secondary: "#fb7185", gradient: "from-rose-500 to-pink-400" },
  { name: "Atardecer", primary: "#f59e0b", secondary: "#f97316", gradient: "from-amber-500 to-orange-500" },
  { name: "Bosque", primary: "#059669", secondary: "#10b981", gradient: "from-emerald-600 to-green-500" },
  { name: "Océano", primary: "#0284c7", secondary: "#06b6d4", gradient: "from-sky-600 to-cyan-500" },
  { name: "Neón", primary: "#d946ef", secondary: "#a855f7", gradient: "from-fuchsia-500 to-purple-500" },
];

const fontPresets = [
  { name: "Moderna (Poppins)", value: "font-sans" },
  { name: "Elegante (Serif)", value: "font-serif" },
  { name: "Creativa (Cursiva)", value: "font-mono" },
];

const layoutPresets = [
  { name: "Clásico", icon: "grid" },
  { name: "Masonry", icon: "columns" },
  { name: "Carrusel", icon: "layout" },
];

const categoryColors = [
  { name: "Rosa", value: "from-pink-400 to-rose-400" },
  { name: "Naranja", value: "from-orange-400 to-amber-400" },
  { name: "Púrpura", value: "from-purple-400 to-violet-400" },
  { name: "Azul", value: "from-blue-400 to-cyan-400" },
  { name: "Verde", value: "from-green-400 to-emerald-400" },
];

const categoryIcons = ["🍰", "🧁", "🎂", "🍪", "🍩", "🥐", "☕", "🍫"];

export function DashboardScreen({ onBack, onViewPublic }: { onBack?: () => void; onViewPublic?: () => void }) {
  const [activeSection, setActiveSection] = useState<"overview" | "design" | "catalog" | "analytics" | "settings">("overview");
  const [linkCopied, setLinkCopied] = useState(false);
  
  const [profileData, setProfileData] = useState({
    businessName: "Dulce Momento",
    slogan: "Tortas artesanales hechas con amor 🎂",
    category: "Repostería artesanal",
    location: "Buenos Aires, Argentina",
    email: "hola@dulcemomento.com",
    instagram: "@dulcemomento",
    phone: "+54 9 11 1234-5678",
    whatsapp: "+5491112345678",
    coverImage: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&h=400&fit=crop",
    selectedColor: colorPresets[0],
    selectedFont: fontPresets[0],
    selectedLayout: layoutPresets[0],
    personalLink: "sweethub.app/p/dulcemomento"
  });

  const [categories, setCategories] = useState<Category[]>([
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
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
          unit: "1 unidad"
        },
        {
          id: "2",
          name: "Torta red velvet",
          price: "$4000",
          description: "Suave torta red velvet con crema de queso",
          image: "https://images.unsplash.com/photo-1586985289906-406988974504?w=400&h=400&fit=crop",
          unit: "1 kg"
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
          id: "3",
          name: "Cupcake de vainilla",
          price: "$800",
          description: "Cupcake de vainilla con buttercream",
          image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=400&fit=crop",
          unit: "6 unidades"
        }
      ]
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]?.id || "");
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const [newCategory, setNewCategory] = useState({
    name: "",
    color: categoryColors[0].value,
    icon: categoryIcons[0]
  });

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    unit: ""
  });

  const [settings, setSettings] = useState({
    notifications: true,
    emailNotifications: false,
    profileVisibility: true
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://${profileData.personalLink}`);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleAddCategory = () => {
    const category: Category = {
      id: Date.now().toString(),
      name: newCategory.name,
      color: newCategory.color,
      icon: newCategory.icon,
      products: []
    };
    setCategories([...categories, category]);
    setNewCategory({ name: "", color: categoryColors[0].value, icon: categoryIcons[0] });
    setIsAddingCategory(false);
    setSelectedCategory(category.id);
  };

  const handleUpdateCategory = () => {
    if (!editingCategory) return;
    setCategories(categories.map(cat => 
      cat.id === editingCategory.id ? editingCategory : cat
    ));
    setEditingCategory(null);
  };

  const handleDeleteCategory = (categoryId: string) => {
    setCategories(categories.filter(c => c.id !== categoryId));
    if (selectedCategory === categoryId && categories.length > 1) {
      setSelectedCategory(categories.find(c => c.id !== categoryId)?.id || "");
    }
  };

  const handleAddProduct = () => {
    const product: Product = {
      id: Date.now().toString(),
      ...newProduct
    };
    
    setCategories(categories.map(cat => 
      cat.id === selectedCategory 
        ? { ...cat, products: [...cat.products, product] }
        : cat
    ));
    
    setNewProduct({ name: "", price: "", description: "", image: "", unit: "" });
    setIsAddingProduct(false);
  };

  const handleUpdateProduct = () => {
    if (!editingProduct) return;
    
    setCategories(categories.map(cat => 
      cat.id === selectedCategory 
        ? { 
            ...cat, 
            products: cat.products.map(p => 
              p.id === editingProduct.id ? { ...editingProduct } : p
            )
          }
        : cat
    ));
    
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId: string) => {
    setCategories(categories.map(cat => 
      cat.id === selectedCategory 
        ? { ...cat, products: cat.products.filter(p => p.id !== productId) }
        : cat
    ));
  };

  const currentCategory = categories.find(c => c.id === selectedCategory);
  const totalProducts = categories.reduce((acc, cat) => acc + cat.products.length, 0);

  const menuItems = [
    { id: "overview" as const, label: "Inicio", icon: LayoutDashboard },
    { id: "design" as const, label: "Diseño de perfil", icon: Palette },
    { id: "catalog" as const, label: "Catálogo", icon: ShoppingBag },
    { id: "analytics" as const, label: "Estadísticas", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white/80 backdrop-blur-xl border-r border-gray-200/50 flex flex-col">
        <div className="p-6 border-b border-gray-200/50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">🍰</span>
            </div>
            <div>
              <h1 className="text-xl">SweetHub</h1>
              <p className="text-sm text-gray-500">{profileData.businessName}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                  activeSection === item.id
                    ? `bg-gradient-to-r ${profileData.selectedColor.gradient} text-white shadow-lg`
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200/50 space-y-2">
          <Button
            onClick={onViewPublic}
            variant="outline"
            className="w-full rounded-2xl justify-start gap-3"
          >
            <Eye className="w-4 h-4" />
            Ver perfil público
          </Button>
          <Button
            onClick={() => setActiveSection("settings")}
            variant="ghost"
            className={`w-full rounded-2xl justify-start gap-3 ${
              activeSection === "settings" ? "bg-gray-100" : "text-gray-600"
            }`}
          >
            <Settings className="w-4 h-4" />
            Configuración
          </Button>
          <Button
            onClick={onBack}
            variant="ghost"
            className="w-full rounded-2xl justify-start gap-3 text-gray-600"
          >
            <LogOut className="w-4 h-4" />
            Cerrar sesión
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-8 py-8 max-w-6xl">
          {/* Overview */}
          {activeSection === "overview" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl mb-2">Bienvenido de nuevo 👋</h2>
                <p className="text-xl text-gray-600">Aquí está el resumen de tu emprendimiento</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${profileData.selectedColor.gradient} flex items-center justify-center`}>
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl mb-1">1,234</div>
                  <div className="text-sm text-gray-600">Visitas este mes</div>
                  <div className="mt-2 text-sm text-green-600">+12% vs mes anterior</div>
                </Card>

                <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${profileData.selectedColor.gradient} flex items-center justify-center`}>
                      <ShoppingBag className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl mb-1">{totalProducts}</div>
                  <div className="text-sm text-gray-600">Productos publicados</div>
                  <div className="mt-2 text-sm text-gray-500">{categories.length} categorías</div>
                </Card>

                <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${profileData.selectedColor.gradient} flex items-center justify-center`}>
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl mb-1">89</div>
                  <div className="text-sm text-gray-600">Pedidos recibidos</div>
                  <div className="mt-2 text-sm text-green-600">+8 esta semana</div>
                </Card>
              </div>

              <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-8">
                <h3 className="text-2xl mb-4">Tu link personal</h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-4">
                    <div className="text-sm text-gray-600 mb-1">Comparte este enlace en tus redes</div>
                    <div className="text-lg">https://{profileData.personalLink}</div>
                  </div>
                  <Button
                    onClick={handleCopyLink}
                    className={`h-14 px-6 rounded-2xl transition-all ${
                      linkCopied
                        ? "bg-green-500 hover:bg-green-600"
                        : `bg-gradient-to-r ${profileData.selectedColor.gradient} hover:opacity-90`
                    } text-white`}
                  >
                    {linkCopied ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        ¡Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5 mr-2" />
                        Copiar
                      </>
                    )}
                  </Button>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card 
                  className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-6 hover:shadow-2xl transition-all cursor-pointer group"
                  onClick={() => setActiveSection("design")}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${profileData.selectedColor.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Palette className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl mb-2">Personalizar diseño</h3>
                  <p className="text-gray-600 mb-4">Cambia colores, tipografía y estilo de tu perfil</p>
                  <div className="text-pink-600 flex items-center gap-2">
                    Ir a diseño <ExternalLink className="w-4 h-4" />
                  </div>
                </Card>

                <Card 
                  className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-6 hover:shadow-2xl transition-all cursor-pointer group"
                  onClick={() => setActiveSection("catalog")}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${profileData.selectedColor.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <ShoppingBag className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl mb-2">Gestionar catálogo</h3>
                  <p className="text-gray-600 mb-4">Agrega, edita o elimina productos y categorías</p>
                  <div className="text-pink-600 flex items-center gap-2">
                    Ir a catálogo <ExternalLink className="w-4 h-4" />
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Design Section */}
          {activeSection === "design" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-4xl mb-2">Diseño de perfil</h2>
                  <p className="text-xl text-gray-600">Personaliza la apariencia de tu mini sitio</p>
                </div>
                <Button className={`bg-gradient-to-r ${profileData.selectedColor.gradient} text-white rounded-2xl shadow-lg px-6`}>
                  <Save className="w-4 h-4 mr-2" />
                  Guardar cambios
                </Button>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {/* Cover Image */}
                  <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-8">
                    <h3 className="text-2xl mb-6">Imagen de portada</h3>
                    <div className="space-y-4">
                      <div className="relative group rounded-2xl overflow-hidden aspect-[3/1]">
                        <ImageWithFallback
                          src={profileData.coverImage}
                          alt="Portada"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                          <div className="text-center text-white">
                            <Upload className="w-8 h-8 mx-auto mb-2" />
                            <p>Cambiar imagen de portada</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>URL de la imagen de portada</Label>
                        <Input
                          value={profileData.coverImage}
                          onChange={(e) => setProfileData({ ...profileData, coverImage: e.target.value })}
                          className="h-12 rounded-2xl"
                          placeholder="https://..."
                        />
                        <p className="text-sm text-gray-500">Tamaño recomendado: 1200 x 400 px</p>
                      </div>
                    </div>
                  </Card>

                  {/* Basic Info */}
                  <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-8">
                    <h3 className="text-2xl mb-6">Información básica</h3>
                    <div className="space-y-6">
                      <div className="flex items-center gap-6">
                        <div className="relative group">
                          <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${profileData.selectedColor.gradient} flex items-center justify-center shadow-lg relative overflow-hidden text-4xl`}>
                            🍰
                          </div>
                          <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                            <Upload className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 space-y-4">
                          <div className="space-y-2">
                            <Label>Nombre del emprendimiento</Label>
                            <Input
                              value={profileData.businessName}
                              onChange={(e) => setProfileData({ ...profileData, businessName: e.target.value })}
                              className="h-12 rounded-2xl"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Eslogan o descripción</Label>
                        <Textarea
                          value={profileData.slogan}
                          onChange={(e) => setProfileData({ ...profileData, slogan: e.target.value })}
                          className="rounded-2xl resize-none"
                          rows={2}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Categoría</Label>
                          <Input
                            value={profileData.category}
                            onChange={(e) => setProfileData({ ...profileData, category: e.target.value })}
                            className="h-12 rounded-2xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Ubicación</Label>
                          <Input
                            value={profileData.location}
                            onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                            className="h-12 rounded-2xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Email</Label>
                          <Input
                            value={profileData.email}
                            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                            className="h-12 rounded-2xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Instagram</Label>
                          <Input
                            value={profileData.instagram}
                            onChange={(e) => setProfileData({ ...profileData, instagram: e.target.value })}
                            className="h-12 rounded-2xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>WhatsApp</Label>
                          <Input
                            value={profileData.whatsapp}
                            onChange={(e) => setProfileData({ ...profileData, whatsapp: e.target.value })}
                            className="h-12 rounded-2xl"
                            placeholder="+54..."
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Teléfono</Label>
                          <Input
                            value={profileData.phone}
                            onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                            className="h-12 rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Customization Sidebar */}
                <div>
                  <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-6 sticky top-8">
                    <h3 className="text-xl mb-4 flex items-center gap-2">
                      <Palette className="w-5 h-5" />
                      Personalización visual
                    </h3>

                    <Tabs defaultValue="colors" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 bg-gray-100/80 p-1 rounded-xl mb-4">
                        <TabsTrigger value="colors" className="rounded-lg text-xs">Color</TabsTrigger>
                        <TabsTrigger value="fonts" className="rounded-lg text-xs">Fuente</TabsTrigger>
                        <TabsTrigger value="layout" className="rounded-lg text-xs">Layout</TabsTrigger>
                      </TabsList>

                      <TabsContent value="colors" className="space-y-2">
                        {colorPresets.map((preset, index) => (
                          <button
                            key={index}
                            onClick={() => setProfileData({ ...profileData, selectedColor: preset })}
                            className={`w-full p-3 rounded-2xl border-2 transition-all hover:scale-105 ${
                              profileData.selectedColor.name === preset.name
                                ? "border-pink-500 bg-pink-50"
                                : "border-gray-200 bg-white/50"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${preset.gradient} shadow-md`} />
                              <span className="text-sm">{preset.name}</span>
                            </div>
                          </button>
                        ))}
                      </TabsContent>

                      <TabsContent value="fonts" className="space-y-2">
                        {fontPresets.map((preset, index) => (
                          <button
                            key={index}
                            onClick={() => setProfileData({ ...profileData, selectedFont: preset })}
                            className={`w-full p-4 rounded-2xl border-2 transition-all hover:scale-105 ${
                              profileData.selectedFont.name === preset.name
                                ? "border-pink-500 bg-pink-50"
                                : "border-gray-200 bg-white/50"
                            }`}
                          >
                            <div className={preset.value}>{preset.name}</div>
                          </button>
                        ))}
                      </TabsContent>

                      <TabsContent value="layout" className="space-y-2">
                        {layoutPresets.map((preset, index) => (
                          <button
                            key={index}
                            onClick={() => setProfileData({ ...profileData, selectedLayout: preset })}
                            className={`w-full p-4 rounded-2xl border-2 transition-all hover:scale-105 ${
                              profileData.selectedLayout.name === preset.name
                                ? "border-pink-500 bg-pink-50"
                                : "border-gray-200 bg-white/50"
                            }`}
                          >
                            {preset.name}
                          </button>
                        ))}
                      </TabsContent>
                    </Tabs>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Catalog Section */}
          {activeSection === "catalog" && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-4xl mb-2">Catálogo de productos</h2>
                  <p className="text-xl text-gray-600">Gestiona tus productos y categorías</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-6 space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="flex items-center gap-2">
                        <Folder className="w-5 h-5 text-pink-500" />
                        Secciones
                      </h3>
                    </div>

                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="relative group">
                          <button
                            onClick={() => setSelectedCategory(category.id)}
                            className={`w-full p-3 rounded-2xl transition-all hover:scale-105 ${
                              selectedCategory === category.id
                                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                                : "bg-white/50 hover:bg-white/80 text-gray-700"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-xl">{category.icon}</span>
                              <div className="flex-1 text-left text-sm">
                                <div>{category.name}</div>
                                <div className={`text-xs ${selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'}`}>
                                  {category.products.length} items
                                </div>
                              </div>
                            </div>
                          </button>
                          <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => setEditingCategory(category)}
                              className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600"
                            >
                              <Edit3 className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => handleDeleteCategory(category.id)}
                              className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Dialog open={isAddingCategory} onOpenChange={setIsAddingCategory}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full rounded-2xl border-2 border-dashed">
                          <Plus className="w-4 h-4 mr-2" />
                          Nueva sección
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="rounded-3xl">
                        <DialogHeader>
                          <DialogTitle>Crear nueva sección</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <Label>Nombre</Label>
                            <Input
                              value={newCategory.name}
                              onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                              className="h-12 rounded-2xl"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Color</Label>
                            <div className="grid grid-cols-5 gap-2">
                              {categoryColors.map((color) => (
                                <button
                                  key={color.name}
                                  onClick={() => setNewCategory({ ...newCategory, color: color.value })}
                                  className={`h-12 rounded-xl bg-gradient-to-r ${color.value} ${
                                    newCategory.color === color.value ? 'ring-4 ring-pink-500' : ''
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Ícono</Label>
                            <div className="grid grid-cols-8 gap-2">
                              {categoryIcons.map((icon) => (
                                <button
                                  key={icon}
                                  onClick={() => setNewCategory({ ...newCategory, icon })}
                                  className={`h-10 rounded-xl bg-white border-2 text-xl ${
                                    newCategory.icon === icon ? 'border-pink-500' : 'border-gray-200'
                                  }`}
                                >
                                  {icon}
                                </button>
                              ))}
                            </div>
                          </div>
                          <Button
                            onClick={handleAddCategory}
                            disabled={!newCategory.name}
                            className={`w-full h-12 bg-gradient-to-r ${profileData.selectedColor.gradient} text-white rounded-2xl`}
                          >
                            Crear sección
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </Card>
                </div>

                <div className="lg:col-span-3">
                  {currentCategory && (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${currentCategory.color} flex items-center justify-center shadow-lg text-2xl`}>
                          {currentCategory.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl">{currentCategory.name}</h3>
                          <p className="text-gray-600">{currentCategory.products.length} productos</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {currentCategory.products.map((product) => (
                          <Card key={product.id} className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
                            <div className="aspect-square relative overflow-hidden">
                              <ImageWithFallback
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  onClick={() => setEditingProduct(product)}
                                  className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteProduct(product.id)}
                                  className="w-9 h-9 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="p-5">
                              <h4 className="text-lg mb-1">{product.name}</h4>
                              <p className={`text-xl bg-gradient-to-r ${profileData.selectedColor.gradient} bg-clip-text text-transparent mb-1`}>
                                {product.price}
                              </p>
                              {product.unit && (
                                <p className="text-xs text-gray-500 mb-2">{product.unit}</p>
                              )}
                              <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                            </div>
                          </Card>
                        ))}

                        <Dialog open={isAddingProduct} onOpenChange={setIsAddingProduct}>
                          <DialogTrigger asChild>
                            <button className="aspect-square bg-white/50 border-2 border-dashed border-gray-300 rounded-[2rem] hover:border-pink-400 hover:bg-pink-50/50 transition-all">
                              <div className="flex flex-col items-center justify-center gap-3">
                                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${profileData.selectedColor.gradient} flex items-center justify-center shadow-lg`}>
                                  <Plus className="w-7 h-7 text-white" />
                                </div>
                                <span>Agregar producto</span>
                              </div>
                            </button>
                          </DialogTrigger>
                          <DialogContent className="rounded-3xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Nuevo producto</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4 pt-4">
                              <div className="space-y-2">
                                <Label>Nombre</Label>
                                <Input
                                  value={newProduct.name}
                                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                  className="h-12 rounded-2xl"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label>Precio</Label>
                                  <Input
                                    value={newProduct.price}
                                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                    className="h-12 rounded-2xl"
                                    placeholder="$1000"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label>Cantidad/Unidad (opcional)</Label>
                                  <Input
                                    value={newProduct.unit}
                                    onChange={(e) => setNewProduct({ ...newProduct, unit: e.target.value })}
                                    className="h-12 rounded-2xl"
                                    placeholder="1 kg, 6 unidades..."
                                  />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label>Descripción</Label>
                                <Textarea
                                  value={newProduct.description}
                                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                  className="rounded-2xl resize-none"
                                  rows={3}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>URL de imagen</Label>
                                <Input
                                  value={newProduct.image}
                                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                                  className="h-12 rounded-2xl"
                                  placeholder="https://..."
                                />
                              </div>
                              <Button
                                onClick={handleAddProduct}
                                disabled={!newProduct.name || !newProduct.price}
                                className={`w-full h-12 bg-gradient-to-r ${profileData.selectedColor.gradient} text-white rounded-2xl`}
                              >
                                Agregar producto
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Analytics */}
          {activeSection === "analytics" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl mb-2">Estadísticas y análisis</h2>
                <p className="text-xl text-gray-600">Monitorea el rendimiento de tu emprendimiento</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-8">
                  <h3 className="text-xl mb-6">Visitas al perfil</h3>
                  <div className="text-5xl mb-2">1,234</div>
                  <div className="text-green-600 mb-4">+12% vs mes anterior</div>
                  <div className="h-48 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl flex items-end justify-around p-4">
                    {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                      <div key={i} className={`w-8 bg-gradient-to-t ${profileData.selectedColor.gradient} rounded-t-lg`} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </Card>

                <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-8">
                  <h3 className="text-xl mb-6">Pedidos por WhatsApp</h3>
                  <div className="text-5xl mb-2">89</div>
                  <div className="text-green-600 mb-4">+8 esta semana</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl">
                      <span className="text-sm">Esta semana</span>
                      <span className="font-medium">8 pedidos</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl">
                      <span className="text-sm">Este mes</span>
                      <span className="font-medium">34 pedidos</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl">
                      <span className="text-sm">Total</span>
                      <span className="font-medium">89 pedidos</span>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-8">
                  <h3 className="text-xl mb-6">Productos más vistos</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Torta de chocolate", views: 234 },
                      { name: "Cupcake de vainilla", views: 189 },
                      { name: "Torta red velvet", views: 156 },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${profileData.selectedColor.gradient} flex items-center justify-center text-white`}>
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-600">{item.views} vistas</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-8">
                  <h3 className="text-xl mb-6">Actividad reciente</h3>
                  <div className="space-y-3">
                    {[
                      { action: "Nuevo pedido recibido", time: "Hace 2 horas" },
                      { action: "Perfil visitado", time: "Hace 4 horas" },
                      { action: "Producto agregado", time: "Hace 1 día" },
                      { action: "Diseño actualizado", time: "Hace 2 días" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${profileData.selectedColor.gradient} mt-2`} />
                        <div className="flex-1">
                          <div className="font-medium text-sm">{item.action}</div>
                          <div className="text-xs text-gray-600">{item.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Settings Section */}
          {activeSection === "settings" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl mb-2">Configuración</h2>
                <p className="text-xl text-gray-600">Administra la configuración de tu cuenta</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${profileData.selectedColor.gradient} flex items-center justify-center`}>
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl">Perfil</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Nombre del emprendimiento</Label>
                      <Input
                        value={profileData.businessName}
                        onChange={(e) => setProfileData({ ...profileData, businessName: e.target.value })}
                        className="h-12 rounded-2xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        className="h-12 rounded-2xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Link personalizado</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">sweethub.app/p/</span>
                        <Input
                          value={profileData.personalLink.split('/').pop()}
                          onChange={(e) => setProfileData({ 
                            ...profileData, 
                            personalLink: `sweethub.app/p/${e.target.value}` 
                          })}
                          className="h-12 rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${profileData.selectedColor.gradient} flex items-center justify-center`}>
                      <Bell className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl">Notificaciones</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl">
                      <div>
                        <div className="font-medium">Notificaciones push</div>
                        <div className="text-sm text-gray-600">Recibe alertas en tiempo real</div>
                      </div>
                      <Switch
                        checked={settings.notifications}
                        onCheckedChange={(checked) => setSettings({ ...settings, notifications: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl">
                      <div>
                        <div className="font-medium">Notificaciones por email</div>
                        <div className="text-sm text-gray-600">Recibe resumen semanal</div>
                      </div>
                      <Switch
                        checked={settings.emailNotifications}
                        onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl">
                      <div>
                        <div className="font-medium">Perfil visible</div>
                        <div className="text-sm text-gray-600">Tu perfil es público</div>
                      </div>
                      <Switch
                        checked={settings.profileVisibility}
                        onCheckedChange={(checked) => setSettings({ ...settings, profileVisibility: checked })}
                      />
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${profileData.selectedColor.gradient} flex items-center justify-center`}>
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl">Seguridad</h3>
                  </div>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full h-12 rounded-2xl justify-start">
                      Cambiar contraseña
                    </Button>
                    <Button variant="outline" className="w-full h-12 rounded-2xl justify-start">
                      Autenticación de dos factores
                    </Button>
                    <Button variant="outline" className="w-full h-12 rounded-2xl justify-start text-red-600 hover:text-red-700">
                      Cerrar sesión en todos los dispositivos
                    </Button>
                  </div>
                </Card>

                <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${profileData.selectedColor.gradient} flex items-center justify-center`}>
                      <HelpCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl">Ayuda y soporte</h3>
                  </div>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full h-12 rounded-2xl justify-start">
                      Centro de ayuda
                    </Button>
                    <Button variant="outline" className="w-full h-12 rounded-2xl justify-start">
                      Contactar soporte
                    </Button>
                    <Button variant="outline" className="w-full h-12 rounded-2xl justify-start">
                      Reportar un problema
                    </Button>
                  </div>
                </Card>
              </div>

              <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-8">
                <h3 className="text-2xl mb-6 text-red-600">Zona de peligro</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-2xl border-2 border-red-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-red-900">Eliminar cuenta</div>
                        <div className="text-sm text-red-700">Esta acción no se puede deshacer</div>
                      </div>
                      <Button variant="destructive" className="rounded-2xl">
                        Eliminar cuenta
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>

      {/* Edit Product Dialog */}
      {editingProduct && (
        <Dialog open={!!editingProduct} onOpenChange={() => setEditingProduct(null)}>
          <DialogContent className="rounded-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Editar producto</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Nombre</Label>
                <Input
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  className="h-12 rounded-2xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Precio</Label>
                  <Input
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                    className="h-12 rounded-2xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Cantidad/Unidad (opcional)</Label>
                  <Input
                    value={editingProduct.unit || ""}
                    onChange={(e) => setEditingProduct({ ...editingProduct, unit: e.target.value })}
                    className="h-12 rounded-2xl"
                    placeholder="1 kg, 6 unidades..."
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Descripción</Label>
                <Textarea
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  className="rounded-2xl resize-none"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label>URL de imagen</Label>
                <Input
                  value={editingProduct.image}
                  onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                  className="h-12 rounded-2xl"
                />
              </div>
              <Button
                onClick={handleUpdateProduct}
                className={`w-full h-12 bg-gradient-to-r ${profileData.selectedColor.gradient} text-white rounded-2xl`}
              >
                Guardar cambios
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Edit Category Dialog */}
      {editingCategory && (
        <Dialog open={!!editingCategory} onOpenChange={() => setEditingCategory(null)}>
          <DialogContent className="rounded-3xl">
            <DialogHeader>
              <DialogTitle>Editar sección</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Nombre</Label>
                <Input
                  value={editingCategory.name}
                  onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                  className="h-12 rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <Label>Color</Label>
                <div className="grid grid-cols-5 gap-2">
                  {categoryColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setEditingCategory({ ...editingCategory, color: color.value })}
                      className={`h-12 rounded-xl bg-gradient-to-r ${color.value} ${
                        editingCategory.color === color.value ? 'ring-4 ring-pink-500' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label>Ícono</Label>
                <div className="grid grid-cols-8 gap-2">
                  {categoryIcons.map((icon) => (
                    <button
                      key={icon}
                      onClick={() => setEditingCategory({ ...editingCategory, icon })}
                      className={`h-10 rounded-xl bg-white border-2 text-xl ${
                        editingCategory.icon === icon ? 'border-pink-500' : 'border-gray-200'
                      }`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
              <Button
                onClick={handleUpdateCategory}
                className={`w-full h-12 bg-gradient-to-r ${profileData.selectedColor.gradient} text-white rounded-2xl`}
              >
                Guardar cambios
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
