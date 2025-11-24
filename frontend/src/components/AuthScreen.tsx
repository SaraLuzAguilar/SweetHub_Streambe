import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ArrowRight, Mail, Lock, User, Building2, CreditCard } from "lucide-react";

export function AuthScreen({ onBack, onSuccess }: { onBack?: () => void; onSuccess?: () => void }) {
  const [activeTab, setActiveTab] = useState("login");

  const handleLogin = () => {
    // Simular login exitoso
    if (onSuccess) {
      onSuccess();
    }
  };

  const handleRegister = () => {
    // Simular registro exitoso
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      {/* Decorative blurred shapes */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-400/40 to-rose-400/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-br from-orange-400/40 to-yellow-400/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl" />
      
      {/* Floating auth card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-white/70 backdrop-blur-xl rounded-[3rem] shadow-2xl shadow-pink-500/20 border border-white/50 p-10 space-y-8">
          {/* Logo */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">🍰</span>
              </div>
              <span className="text-3xl text-gray-800">SweetHub</span>
            </div>
            <p className="text-gray-600">
              Tu espacio dulce en internet
            </p>
          </div>

          {/* Tabs for Login/Register */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-100/80 backdrop-blur-sm p-1.5 rounded-2xl">
              <TabsTrigger 
                value="login" 
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md transition-all"
              >
                Iniciar sesión
              </TabsTrigger>
              <TabsTrigger 
                value="register" 
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md transition-all"
              >
                Crear cuenta
              </TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login" className="mt-8 space-y-6 animate-in fade-in-50 slide-in-from-bottom-3 duration-300">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="text-gray-700">Correo electrónico</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="tu@email.com"
                      className="pl-12 h-14 rounded-2xl border-2 border-gray-200 focus:border-pink-400 bg-white/50 backdrop-blur-sm transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password" className="text-gray-700">Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-12 h-14 rounded-2xl border-2 border-gray-200 focus:border-pink-400 bg-white/50 backdrop-blur-sm transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500" />
                    <span>Recordarme</span>
                  </label>
                  <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>

              <Button 
                className="w-full h-14 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white rounded-2xl shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all text-lg"
                onClick={handleLogin}
              >
                Ingresar <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-center text-sm text-gray-600">
                ¿No tienes cuenta?{" "}
                <button 
                  onClick={() => setActiveTab("register")}
                  className="text-pink-600 hover:text-pink-700 transition-colors"
                >
                  Crear una
                </button>
              </p>
            </TabsContent>

            {/* Register Form */}
            <TabsContent value="register" className="mt-8 space-y-6 animate-in fade-in-50 slide-in-from-bottom-3 duration-300">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="business-name" className="text-gray-700">Nombre del emprendimiento</Label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="business-name"
                      type="text"
                      placeholder="Ej: Dulce Momento"
                      className="pl-12 h-14 rounded-2xl border-2 border-gray-200 focus:border-pink-400 bg-white/50 backdrop-blur-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-gray-700">Nombre</Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="first-name"
                        type="text"
                        placeholder="Juan"
                        className="pl-12 h-14 rounded-2xl border-2 border-gray-200 focus:border-pink-400 bg-white/50 backdrop-blur-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-gray-700">Apellido</Label>
                    <Input
                      id="last-name"
                      type="text"
                      placeholder="Pérez"
                      className="h-14 rounded-2xl border-2 border-gray-200 focus:border-pink-400 bg-white/50 backdrop-blur-sm transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dni" className="text-gray-700">DNI</Label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="dni"
                      type="text"
                      placeholder="12.345.678"
                      className="pl-12 h-14 rounded-2xl border-2 border-gray-200 focus:border-pink-400 bg-white/50 backdrop-blur-sm transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email" className="text-gray-700">Correo electrónico</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="tu@email.com"
                      className="pl-12 h-14 rounded-2xl border-2 border-gray-200 focus:border-pink-400 bg-white/50 backdrop-blur-sm transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password" className="text-gray-700">Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-12 h-14 rounded-2xl border-2 border-gray-200 focus:border-pink-400 bg-white/50 backdrop-blur-sm transition-all"
                    />
                  </div>
                </div>

                <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500 flex-shrink-0" />
                  <span>
                    Acepto los{" "}
                    <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">
                      términos y condiciones
                    </a>{" "}
                    y la{" "}
                    <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">
                      política de privacidad
                    </a>
                  </span>
                </label>
              </div>

              <Button 
                className="w-full h-14 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white rounded-2xl shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all text-lg"
                onClick={handleRegister}
              >
                Crear mi cuenta <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-center text-sm text-gray-600">
                ¿Ya tienes cuenta?{" "}
                <button 
                  onClick={() => setActiveTab("login")}
                  className="text-pink-600 hover:text-pink-700 transition-colors"
                >
                  Iniciar sesión
                </button>
              </p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-pink-400 to-orange-400 rounded-3xl opacity-20 blur-xl" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl opacity-20 blur-xl" />
      </div>

      {/* Back to home link */}
      <button 
        onClick={onBack}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center border border-white/50 shadow-md">
          <span>←</span>
        </div>
        <span className="hidden sm:inline">Volver al inicio</span>
      </button>
    </div>
  );
}