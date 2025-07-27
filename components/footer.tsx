"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { NexorfLogo } from "@/components/nexorf-logo"
import { MapPin, Clock, MessageCircle } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se implementaría el envío del formulario
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <footer id="contact" className="bg-black dark:bg-gray-900 text-white py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <NexorfLogo className="w-10 h-10 text-white" />
              <span className="text-2xl font-bold">nexorf</span>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-gray-400" />
                <span className="text-lg">📍 Quito, Ecuador</span>
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-gray-400" />
                <span className="text-lg">📞 Lunes a viernes, 9:00 a.m. – 6:00 p.m.</span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Síguenos en redes sociales</h3>
              <div className="flex flex-wrap gap-4">
                {["TikTok", "Instagram", "Facebook", "Threads", "X", "YouTube", "Twitch"].map((social) => (
                  <Button
                    key={social}
                    variant="outline"
                    size="sm"
                    className="text-white border-white hover:bg-white hover:text-black bg-transparent"
                  >
                    {social}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contacto Rápido</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>

              <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 transition-colors">
                <MessageCircle className="w-4 h-4 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Nexorf. Todos los derechos reservados. Ingeniería de Software Personalizada -
            Quito, Ecuador
          </p>
        </div>
      </div>
    </footer>
  )
}
