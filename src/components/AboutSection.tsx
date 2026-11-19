import { AnimatedText } from './AnimatedText'
import { ContactButton } from './ContactButton'
import { FadeIn } from './FadeIn'

const DECORATIONS = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute left-[1%] top-[4%] z-0 sm:left-[2%] md:left-[4%]"
      >
        <img
          src={DECORATIONS.moon}
          alt=""
          loading="lazy"
          className="w-[120px] sm:w-[160px] md:w-[210px]"
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] left-[3%] z-0 sm:left-[6%] md:left-[10%]"
      >
        <img
          src={DECORATIONS.object}
          alt=""
          loading="lazy"
          className="w-[100px] sm:w-[140px] md:w-[180px]"
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute right-[1%] top-[4%] z-0 sm:right-[2%] md:right-[4%]"
      >
        <img
          src={DECORATIONS.lego}
          alt=""
          loading="lazy"
          className="w-[120px] sm:w-[160px] md:w-[210px]"
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] right-[3%] z-0 sm:right-[6%] md:right-[10%]"
      >
        <img
          src={DECORATIONS.group}
          alt=""
          loading="lazy"
          className="w-[130px] sm:w-[170px] md:w-[220px]"
        />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
              About me
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <AnimatedText />
          </FadeIn>
        </div>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
