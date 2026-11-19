import { LiveProjectButton } from './LiveProjectButton'
import { FadeIn } from './FadeIn'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type ProjectImage = {
  col1Top: string
  col1Bottom: string
  col2: string
}

type Project = {
  number: string
  category: string
  title: string
  images: ProjectImage
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Client',
    title: 'Nextlevel Studio',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
  },
  {
    number: '02',
    category: 'Personal',
    title: 'Aura Brand Identity',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    number: '03',
    category: 'Client',
    title: 'Solaris Digital',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
]

type ProjectCardProps = {
  project: Project
  index: number
  total: number
}

function ProjectCard({ project, index, total }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  const radius = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'

  return (
    <div ref={containerRef} className="h-[85vh] sticky top-24 md:top-32">
      <motion.div
        className={`relative flex flex-col gap-6 border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${radius}`}
        style={{
          scale,
          top: `${index * 28}px`,
          transformOrigin: 'top center',
        }}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-6">
            <span
              className="shrink-0 font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>

            <div className="flex flex-col gap-1 sm:gap-2">
              <p className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                {project.category}
              </p>
              <h3 className="text-2xl font-medium uppercase tracking-wide text-[#D7E2EA] sm:text-3xl">
                {project.title}
              </h3>
            </div>
          </div>

          <LiveProjectButton />
        </div>

        <div className="flex gap-3">
          <div className="flex w-[40%] flex-col gap-3">
            <img
              src={project.images.col1Top}
              alt=""
              loading="lazy"
              className={`w-full object-cover ${radius}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.images.col1Bottom}
              alt=""
              loading="lazy"
              className={`w-full object-cover ${radius}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          <div className={`relative flex-1 overflow-hidden ${radius}`}>
            <img
              src={project.images.col2}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 bg-[#0C0C0C] px-5 py-20 text-[#D7E2EA] rounded-t-[40px] sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Project
        </h2>
      </FadeIn>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 pb-20">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  )
}
