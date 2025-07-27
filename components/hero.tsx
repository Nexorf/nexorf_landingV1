"use client"

import { Button } from "@/components/ui/button"
import { NexorfLogo } from "@/components/nexorf-logo"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-8 flex justify-center">
            <div>
              <NexorfLogo size="large" className="hover:rotate-12 transition-all duration-500" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span
              className={`block transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              Nexorf
            </span>
            <span
              className={`block text-2xl md:text-3xl lg:text-4xl font-normal text-gray-600 dark:text-gray-400 mt-2 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              Ingeniería de Software Personalizada
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
            Tecnología con propósito, diseño con visión, soluciones con resultados.
          </p>

          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95"
            onClick={scrollToContact}
          >
            Solicita una cotización gratuita
          </Button>
        </div>
      </div>
    </section>
  )
}
