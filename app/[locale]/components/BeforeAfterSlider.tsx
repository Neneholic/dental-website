'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../lib/utils'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = 'Antes',
  afterLabel = 'Después',
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const [isHinting, setIsHinting] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  // Animación de hint al montar: mueve el slider para indicar que es interactivo
  useEffect(() => {
    const timeline = [
      { pos: 30, delay: 600 },
      { pos: 70, delay: 1200 },
      { pos: 50, delay: 1800 },
      { hint: false, delay: 2100 },
    ]
    const timers = timeline.map((step) =>
      setTimeout(() => {
        if ('pos' in step) setPosition(step.pos as number)
        if ('hint' in step) setIsHinting(false)
      }, step.delay),
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(percent)
  }, [])

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true
    setIsHinting(false)
    e.currentTarget.setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={cn(
        'relative aspect-square rounded-2xl overflow-hidden shadow-xl cursor-ew-resize select-none touch-none',
        className,
      )}
    >
      {/* Imagen "después" como fondo completo */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover pointer-events-none"
        priority
      />

      {/* Imagen "antes" recortada con clipPath */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover pointer-events-none"
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs md:text-sm rounded-full font-medium pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 px-3 py-1.5 bg-green-600 text-white text-xs md:text-sm rounded-full font-medium pointer-events-none">
        {afterLabel}
      </div>

      {/* Línea divisoria + handle */}
      <div
        className={cn(
          'absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] pointer-events-none',
          isHinting && 'transition-all duration-700 ease-in-out',
        )}
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-gray-700" />
          <ChevronRight className="w-4 h-4 text-gray-700 -ml-1" />
        </div>
      </div>
    </div>
  )
}
