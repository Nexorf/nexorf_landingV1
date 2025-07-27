"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { NexorfLogo } from "@/components/nexorf-logo"

export function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setIsDark(isDarkMode)
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
    document.documentElement.classList.toggle("dark", newDarkMode)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <NexorfLogo size="small" className="hover:rotate-6 transition-all duration-300" />
          <span className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
            nexorf
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("differentials")}
            className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Ventajas
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Contacto
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="w-9 h-9">
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden w-9 h-9" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("differentials")}
              className="text-left text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Ventajas
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Contacto
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
