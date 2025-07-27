"use client"

import { useEffect, useState } from "react"

export function GeometricBackground() {
  const [shapes, setShapes] = useState<
    Array<{
      id: number
      type: "square" | "circle" | "x" | "diamond"
      x: number
      y: number
      size: number
      opacity: number
      rotation: number
    }>
  >([])

  useEffect(() => {
    const generateShapes = () => {
      const newShapes = []
      for (let i = 0; i < 20; i++) {
        newShapes.push({
          id: i,
          type: ["square", "circle", "x", "diamond"][Math.floor(Math.random() * 4)] as any,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 20,
          opacity: Math.random() * 0.08 + 0.02,
          rotation: Math.random() * 360,
        })
      }
      setShapes(newShapes)
    }

    generateShapes()

    // Animar las formas continuamente
    const interval = setInterval(() => {
      setShapes((prevShapes) =>
        prevShapes.map((shape) => ({
          ...shape,
          rotation: shape.rotation + 0.5,
          y: shape.y > 100 ? -10 : shape.y + 0.1,
        })),
      )
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const renderShape = (shape: (typeof shapes)[0]) => {
    const baseProps = {
      key: shape.id,
      style: {
        position: "absolute" as const,
        left: `${shape.x}%`,
        top: `${shape.y}%`,
        width: `${shape.size}px`,
        height: `${shape.size}px`,
        opacity: shape.opacity,
        transform: `rotate(${shape.rotation}deg)`,
        pointerEvents: "none" as const,
        transition: "all 0.1s ease-out",
      },
    }

    switch (shape.type) {
      case "square":
        return <div {...baseProps} className="bg-black dark:bg-white rounded-sm" />
      case "circle":
        return <div {...baseProps} className="bg-black dark:bg-white rounded-full" />
      case "diamond":
        return <div {...baseProps} className="bg-black dark:bg-white transform rotate-45" />
      case "x":
        return (
          <svg {...baseProps} viewBox="0 0 24 24" fill="currentColor" className="text-black dark:text-white">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        )
      default:
        return null
    }
  }

  return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">{shapes.map(renderShape)}</div>
}
