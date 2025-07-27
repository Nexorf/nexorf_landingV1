"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">¿Quiénes somos?</h2>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Nexorf es una empresa ecuatoriana dedicada al desarrollo de software a medida, especializada en crear
              soluciones tecnológicas que impulsan negocios reales. Combinamos innovación, experiencia y compromiso para
              transformar ideas en herramientas digitales poderosas que generan resultados tangibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
