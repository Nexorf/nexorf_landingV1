"use client"

import { useEffect, useRef, useState } from "react"
import { ShoppingCart, Smartphone, Globe, CreditCard, FileText, Store } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "ERP Completo",
    description: "Sistemas inteligentes para ventas, inventario, compras y reportes detallados",
  },
  {
    icon: CreditCard,
    title: "POS Moderno",
    description: "Puntos de venta para tiendas, ferreterías, farmacias y más sectores",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas para Android e iOS con diseño intuitivo",
  },
  {
    icon: Globe,
    title: "Sitios Web",
    description: "Landing pages y sitios web responsivos y optimizados",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Tiendas online con pasarela de pago e integración con redes sociales",
  },
  {
    icon: Store,
    title: "Soluciones Personalizadas",
    description: "Sistemas a medida para necesidades específicas de tu negocio",
  },
]

export function Services() {
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
    <section id="services" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Qué ofrecemos</h2>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              💡 Sistemas inteligentes, visuales y eficientes para distintos sectores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
