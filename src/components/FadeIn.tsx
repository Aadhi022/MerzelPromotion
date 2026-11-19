import { motion } from 'framer-motion'
import { useMemo, type CSSProperties, type ElementType, type ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  style?: CSSProperties
  delay?: number
  duration?: number
  x?: number
  y?: number
}

const easing = [0.25, 0.1, 0.25, 1] as const

export function FadeIn({
  children,
  as = 'div',
  className,
  style,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
}: FadeInProps) {
  const MotionElement = useMemo(() => motion.create(as as 'div'), [as])

  return (
    <MotionElement
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: easing }}
    >
      {children}
    </MotionElement>
  )
}
