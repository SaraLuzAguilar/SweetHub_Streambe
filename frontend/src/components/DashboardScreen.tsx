import React, { useState, useMemo } from 'react';
// CORRECCIÓN DE RUTAS: Usamos rutas relativas directas
// DashboardScreen.tsx (en /src/components) necesita ir a ./ui/card para encontrarlo.
import { Card } from './ui/card'; 
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Folder, Trash2, Plus, Edit3 } from 'lucide-react';

// --- Definiciones de Tipos (Interface) 
interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  categoryId: string;
}

interface Category {
  id: string;
  name: string;
  color: string; // Tailwind CSS gradient class
  icon: string; // Emoji or Icon component
  products: Product[]; 
}

// CORRECCIÓN 2: Ajuste en la interfaz ProfileData para sincronizar con los datos
interface ProfileData {
  selectedColor: {
    name: string;
    gradient: string; // Ahora usamos 'gradient'
  };
}

// --- Datos de Muestra (Ajustados)

const categoryColors = [
  // CORRECCIÓN 2: Cambiado 'value' a 'gradient' para sincronizar con el tipo ProfileData
  { name: "Pink-Orange", gradient: "from-pink-500 to-orange-500" },
  { name: "Blue-Cyan", gradient: "from-blue-500 to-cyan-500" },
  { name: "Green-Lime", gradient: "from-green-500 to-lime-500" },
  { name: "Purple-Fuchsia", gradient: "from-purple-500 to-fuchsia-500" },
  { name: "Red-Rose", gradient: "from-red-500 to-rose-500" },
];

const categoryIcons = ["🍰", "☕", "🍩", "🍪", "🍓", "🍉", "🍇", "🍍"];

const initialCategories: Category[] = [
  // Dejo algunas categorías de ejemplo vacías para la estructura inicial
  { id: 'cat-1', name: 'Tortas', color: categoryColors[0].gradient, icon: '🍰', products: [] },
  { id: 'cat-2', name: 'Bebidas', color: categoryColors[1].gradient, icon: '☕', products: [] },
  { id: 'cat-3', name: 'Postres', color: categoryColors[2].gradient, icon: '🍩', products: [] },
];

const initialProducts: Product[] = [];

// CORRECCIÓN 2: Asignación de selectedColor usando la nueva propiedad 'gradient'
const initialProfileData: ProfileData = {
  selectedColor: categoryColors[0], 
};


// --- Componente de Imagen con Fallback (Simulación)
interface ImageWithFallbackProps {
    src: string;
    alt: string;
    className: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  const handleError = () => setError(true);
  
  const finalSrc = src && !error ? src : 'https://via.placeholder.com/300?text=No+Image';

  return <img src={finalSrc} alt={alt} className={className} onError={handleError} />;
};


// --- Componente Principal
export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<'catalog' | 'analytics'>('catalog');
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategories[0]?.id || '');
  
  // Estado para Crear Categoría
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  // Inicialización con el nuevo campo 'gradient'
  const [newCategory, setNewCategory] = useState({ name: '', color: categoryColors[0].gradient, icon: categoryIcons[0] });

  // Estado para Crear/Editar Producto
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', image: '' });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const profileData = initialProfileData; 

  // Filtrado de categorías
  const categoriesWithProducts = useMemo(() => {
    return categories.map(cat => ({
      ...cat,
      products: products.filter(prod => prod.categoryId === cat.id),
    }));
  }, [categories, products]);
  
  const currentCategory = useMemo(() => {
    return categoriesWithProducts.find(cat => cat.id === selectedCategory);
  }, [selectedCategory, categoriesWithProducts]);

  // --- Lógica de Categorías ---

  const handleAddCategory = () => {
    if (newCategory.name) {
      const newCat: Category = {
        id: `cat-${Date.now()}`,
        ...newCategory,
        products: [], 
      };
      setCategories([...categories, newCat]);
      setSelectedCategory(newCat.id);
      setIsAddingCategory(false);
      setNewCategory({ name: '', color: categoryColors[0].gradient, icon: categoryIcons[0] });
    }
  };

  const handleDeleteCategory = (id: string) => {
    const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar esta sección? También se eliminarán todos sus productos.");
    if (confirmDelete) {
      const updatedCategories = categories.filter(cat => cat.id !== id);
      setCategories(updatedCategories);
      setProducts(prevProducts => prevProducts.filter(prod => prod.categoryId !== id));

      if (selectedCategory === id) {
        setSelectedCategory(updatedCategories[0]?.id || '');
      }
    }
  };


  // --- Lógica de Productos ---

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && selectedCategory) {
      const productToAdd: Product = {
        id: `prod-${Date.now()}`,
        ...newProduct,
        categoryId: selectedCategory,
      };

      setProducts([...products, productToAdd]);
      setIsAddingProduct(false);
      setNewProduct({ name: '', price: '', description: '', image: '' });
    }
  };

  const handleUpdateProduct = () => {
    if (editingProduct) {
      setProducts(prevProducts => prevProducts.map(p =>
        p.id === editingProduct.id ? editingProduct : p
      ));
      setEditingProduct(null);
    }
  };

  const handleDeleteProduct = (id: string) => {
    const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este producto?");
    if (confirmDelete) {
      setProducts(prevProducts => prevProducts.filter(p => p.id !== id));
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-orange-100 p-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className={`text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${profileData.selectedColor.gradient}`}>
          Panel de Control 🚀
        </h1>
        <nav className="flex space-x-4 bg-white/80 backdrop-blur-md border border-white/50 rounded-full p-2 shadow-xl">
          <Button
            onClick={() => setActiveSection('catalog')}
            className={`rounded-full px-6 py-3 transition-all ${
              activeSection === 'catalog'
                ? `bg-gradient-to-r ${profileData.selectedColor.gradient} text-white shadow-lg`
                : 'bg-transparent text-gray-700 hover:bg-gray-100'
            }`}
          >
            Catálogo
          </Button>
          <Button
            onClick={() => setActiveSection('analytics')}
            className={`rounded-full px-6 py-3 transition-all ${
              activeSection === 'analytics'
                ? `bg-gradient-to-r ${profileData.selectedColor.gradient} text-white shadow-lg`
                : 'bg-transparent text-gray-700 hover:bg-gray-100'
            }`}
          >
            Estadísticas
          </Button>
        </nav>
      </header>

      <main>
        {/* Renderizado de secciones (Catalog y Analytics) */}
        <div>
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
                {/* Sidebar - Categories */}
                <div className="lg:col-span-1">
                  <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-6 space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="flex items-center gap-2">
                        <Folder className="w-5 h-5 text-pink-500" />
                        Secciones
                      </h3>
                    </div>

                    <div className="space-y-2">
                      {categoriesWithProducts.map((category) => (
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
                          <button
                            onClick={() => handleDeleteCategory(category.id)}
                            className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-red-600"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
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
                              // CORRECCIÓN 3: Tipificación del evento
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewCategory({ ...newCategory, name: e.target.value })}
                              className="h-12 rounded-2xl"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Color</Label>
                            <div className="grid grid-cols-5 gap-2">
                              {categoryColors.map((color) => (
                                <button
                                  key={color.name}
                                  // CORRECCIÓN 2: Uso de 'gradient'
                                  onClick={() => setNewCategory({ ...newCategory, color: color.gradient })}
                                  className={`h-12 rounded-xl bg-gradient-to-r ${color.gradient} ${
                                    newCategory.color === color.gradient ? 'ring-4 ring-pink-500' : ''
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

                {/* Main - Products */}
                <div className="lg:col-span-3">
                  {currentCategory ? (
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
                              <p className={`text-xl bg-gradient-to-r ${profileData.selectedColor.gradient} bg-clip-text text-transparent mb-2`}>
                                {product.price}
                              </p>
                              <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                            </div>
                          </Card>
                        ))}

                        {/* Add Product */}
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
                          <DialogContent className="rounded-3xl">
                            <DialogHeader>
                              <DialogTitle>Nuevo producto</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4 pt-4">
                              <div className="space-y-2">
                                <Label>Nombre</Label>
                                <Input
                                  value={newProduct.name}
                                  // CORRECCIÓN 3: Tipificación del evento
                                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewProduct({ ...newProduct, name: e.target.value })}
                                  className="h-12 rounded-2xl"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>Precio</Label>
                                <Input
                                  value={newProduct.price}
                                  // CORRECCIÓN 3: Tipificación del evento
                                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewProduct({ ...newProduct, price: e.target.value })}
                                  className="h-12 rounded-2xl"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>Descripción</Label>
                                <Textarea
                                  value={newProduct.description}
                                  // CORRECCIÓN 3: Tipificación del evento
                                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewProduct({ ...newProduct, description: e.target.value })}
                                  className="rounded-2xl resize-none"
                                  rows={3}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>URL de imagen</Label>
                                <Input
                                  value={newProduct.image}
                                  // CORRECCIÓN 3: Tipificación del evento
                                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewProduct({ ...newProduct, image: e.target.value })}
                                  className="h-12 rounded-2xl"
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
                  ) : (
                    <Card className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[2rem] shadow-xl p-8 text-center">
                        <h3 className="text-xl">No hay secciones de catálogo.</h3>
                        <p className="text-gray-600">Crea una nueva sección para empezar a agregar productos.</p>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Analytics Section (Se deja sin cambios) */}
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
        </div>
      </main>

      {/* Edit Product Dialog */}
      {editingProduct && (
        <Dialog open={!!editingProduct} onOpenChange={() => setEditingProduct(null)}>
          <DialogContent className="rounded-3xl">
            <DialogHeader>
              <DialogTitle>Editar producto</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Nombre</Label>
                <Input
                  value={editingProduct.name}
                  // CORRECCIÓN 3: Tipificación del evento
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  className="h-12 rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <Label>Precio</Label>
                <Input
                  value={editingProduct.price}
                  // CORRECCIÓN 3: Tipificación del evento
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                  className="h-12 rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <Label>Descripción</Label>
                <Textarea
                  value={editingProduct.description}
                  // CORRECCIÓN 3: Tipificación del evento
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  className="rounded-2xl resize-none"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label>URL de imagen</Label>
                <Input
                  value={editingProduct.image}
                  // CORRECCIÓN 3: Tipificación del evento
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditingProduct({ ...editingProduct, image: e.target.value })}
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
    </div>
  );
}