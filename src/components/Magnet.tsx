import { useEffect, useRef, useState, type ReactNode } from 'react'

type MagnetProps = {
  children: ReactNode
  className?: string
  padding?: number
  strength?: number
}

export function Magnet({ children, className = '', padding = 100, strength = 6 }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const onMouseMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distanceX = event.clientX - centerX
      const distanceY = event.clientY - centerY

      const withinX = Math.abs(distanceX) < rect.width / 2 + padding
      const withinY = Math.abs(distanceY) < rect.height / 2 + padding

      if (withinX && withinY) {
        setActive(true)
        setPosition({ x: distanceX / strength, y: distanceY / strength })
      } else {
        setActive(false)
        setPosition({ x: 0, y: 0 })
      }
    }

    const onMouseLeave = () => {
      setActive(false)
      setPosition({ x: 0, y: 0 })
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('blur', onMouseLeave)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('blur', onMouseLeave)
    }
  }, [padding, strength])

  return (
    <div ref={ref} className={className} style={{ display: 'inline-block' }}>
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: active
            ? 'transform 0.3s ease-out'
            : 'transform 0.6s ease-in-out',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
