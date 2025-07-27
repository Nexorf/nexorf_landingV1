"use client"

import { useEffect, useRef, useState } from "react"
import { Palette, Shield, Users, User, Cloud, RefreshCw } from "lucide-react"

const differentials = [
  {
    icon: Palette,
    title: "Diseño UX Moderno",
    description: "Interfaces atractivas y usables que mejoran la experiencia del usuario",
  },
  {
    icon: Shield,
    title: "Facturación Electrónica",
    description: "Cumplimiento total con normativas fiscales ecuatorianas",
  },
  {
    icon: Users,
    title: "Soporte Personalizado",
    description: "Atención técnica dedicada para resolver cualquier consulta",
  },
  {
    icon: User,
    title: "Panel Multiusuario",
    description: "Gestión de permiiso y roles para diferentes tipos de usuarios",
  },
  {
    icon: Cloud,
    title: "Hosting Flexible",
    description: "Despliegue en la nube o instalación local según tus necesidades",
  },
  {
    icon: RefreshCw,
    title: "Actualizaciones Continuas",
    description: "Mejoras constantes y nuevas funcionalidades sin costo adicional",
  },
]

export function Differentials() {
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
    <section id="differentials" ref={sectionRef} className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Nuestros Diferenciales</h2>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Lo que nos hace únicos en el mercado ecuatoriano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="mb-6 transform group-hover:scale-125 group-hover:-rotate-6 transition-all duration-400">
                  <differential.icon className="w-12 h-12 text-black dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  {differential.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {differential.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
