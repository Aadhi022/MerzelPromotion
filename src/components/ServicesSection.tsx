import { FadeIn } from './FadeIn'

const SERVICES = [
  {
    number: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white px-5 py-20 text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] sm:px-8 md:px-10 sm:py-24 md:py-32"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="mb-16 text-center font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl divide-y divide-[rgba(12,12,12,0.15)]">
        {SERVICES.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            y={30}
            className="flex flex-col gap-4 py-8 sm:py-10 md:flex-row md:items-end md:gap-10 md:py-12"
          >
            <span
              className="shrink-0 font-black leading-none text-[#0C0C0C]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </span>

            <div className="flex flex-col gap-2">
              <h3
                className="font-medium uppercase text-[#0C0C0C]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
