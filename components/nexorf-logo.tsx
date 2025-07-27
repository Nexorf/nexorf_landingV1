import Image from "next/image"

interface NexorfLogoProps {
  className?: string
  size?: "small" | "medium" | "large"
}

export function NexorfLogo({ className, size = "medium" }: NexorfLogoProps) {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-16 h-16",
    large: "w-32 h-32",
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className || ""}`}>
      <Image
        src="/images/nexorf-logo-final.png"
        alt="Nexorf Logo"
        fill
        className="object-contain dark:invert transition-all duration-300 hover:scale-110"
        priority
      />
    </div>
  )
}
