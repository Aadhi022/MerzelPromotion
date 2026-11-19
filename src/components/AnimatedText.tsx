import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

const TEXT =
  "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"

type AnimatedCharProps = {
  char: string
  progress: MotionValue<number>
  start: number
  end: number
}

function AnimatedChar({ char, progress, start, end }: AnimatedCharProps) {
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  )
}

export function AnimatedText() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = TEXT.split(' ')
  const wordOffsets: number[] = []
  let totalChars = 0

  for (const word of words) {
    wordOffsets.push(totalChars)
    totalChars += Array.from(word).length
  }

  return (
    <p
      ref={ref}
      className="font-medium text-center leading-relaxed text-[#D7E2EA]"
      style={{ maxWidth: 560, fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
    >
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`}>
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, charIndex) => {
              const index = wordOffsets[wordIndex] + charIndex
              const start = index / totalChars
              const end = Math.min(1, start + 0.12)

              return (
                <AnimatedChar
                  key={`${char}-${charIndex}`}
                  char={char}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                />
              )
            })}
          </span>
          {wordIndex < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </p>
  )
}
