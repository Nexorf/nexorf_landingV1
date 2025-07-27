"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, ImageIcon, Video, MessageCircle } from "lucide-react"

const resources = [
  {
    icon: Play,
    title: "Demos Interactivas",
    description: "Prueba nuestros sistemas en tiempo real",
    action: "Ver Demo",
  },
  {
    icon: ImageIcon,
    title: "Catálogos Visuales",
    description: "Explora nuestros proyectos y casos de éxito",
    action: "Ver Catálogo",
  },
  {
    icon: Video,
    title: "Videos Explicativos",
    description: "Tutoriales y presentaciones de nuestras soluciones",
    action: "Ver Videos",
  },
  {
    icon: MessageCircle,
    title: "Atención Personalizada",
    description: "Resolvemos todas tus dudas de forma directa",
    action: "Contactar",
  },
]

export function Resources() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Recursos Disponibles</h2>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Todo lo que necesitas para conocer nuestras soluciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-2 text-center ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-400">
                  <resource.icon className="w-12 h-12 text-black dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {resource.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 bg-transparent transform group-hover:scale-105 hover:shadow-lg"
                >
                  {resource.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
