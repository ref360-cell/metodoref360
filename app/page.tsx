import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Ref360Website() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-black to-zinc-900">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold text-yellow-400"
        >
          REF360
        </motion.h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-300">
          Entrenamiento integral de alto rendimiento para árbitros de fútbol.
        </p>
        <Button className="mt-8 bg-yellow-400 text-black hover:bg-yellow-300">
          Quiero entrenar con Ref360
        </Button>
      </section>

      {/* MÉTODO */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12 text-center">
          El método Ref360
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {["Fuerza", "Velocidad", "Resistencia", "Prevención de lesiones"].map(
            (item) => (
              <Card key={item} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="mx-auto mb-4 text-yellow-400" />
                  <h3 className="font-semibold text-lg">{item}</h3>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="bg-zinc-900 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            ¿Por qué Ref360?
          </h2>
          <p className="text-zinc-300 max-w-3xl mx-auto">
            No es solo correr. Es entrenar para decidir mejor, llegar antes a la
            jugada y mantener tu autoridad durante todo el partido.
          </p>
        </div>
      </section>

      {/* TARIFAS */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12 text-center">
          Tarifas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* PLAN 1 */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Plan Base</h3>
              <p className="text-yellow-400 text-3xl font-extrabold mb-4">29€</p>
              <ul className="space-y-2 text-zinc-300">
                <li>Programa mensual</li>
                <li>Entrenamiento físico específico</li>
                <li>Acceso online</li>
              </ul>
              <Button className="mt-6 w-full bg-yellow-400 text-black hover:bg-yellow-300">
                Elegir plan
              </Button>
            </CardContent>
          </Card>

          {/* PLAN 2 */}
          <Card className="bg-zinc-900 border-yellow-400">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Plan Pro</h3>
              <p className="text-yellow-400 text-3xl font-extrabold mb-4">59€</p>
              <ul className="space-y-2 text-zinc-300">
                <li>Programa personalizado</li>
                <li>Seguimiento mensual</li>
                <li>Prevención de lesiones</li>
              </ul>
              <Button className="mt-6 w-full bg-yellow-400 text-black hover:bg-yellow-300">
                Elegir plan
              </Button>
            </CardContent>
          </Card>

          {/* PLAN 3 */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Plan Élite</h3>
              <p className="text-yellow-400 text-3xl font-extrabold mb-4">99€</p>
              <ul className="space-y-2 text-zinc-300">
                <li>Entrenamiento 100% individual</li>
                <li>Contacto directo</li>
                <li>Optimización total del rendimiento</li>
              </ul>
              <Button className="mt-6 w-full bg-yellow-400 text-black hover:bg-yellow-300">
                Elegir plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-black px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          Empieza a entrenar como árbitro profesional
        </h2>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
          Contactar ahora
        </Button>
      </section>
    </div>
  );
}
