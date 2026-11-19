import { useEffect, useRef, useState } from 'react'

const MARQUEE_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

const ROW_ONE = MARQUEE_IMAGES.slice(0, 11)
const ROW_TWO = MARQUEE_IMAGES.slice(11)

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-center overflow-hidden">
          <div
            className="flex w-max gap-3"
            style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
          >
            {[...ROW_ONE, ...ROW_ONE, ...ROW_ONE].map((src, index) => (
              <img
                key={`${src}-${index}`}
                src={src}
                alt=""
                loading="lazy"
                width={420}
                height={270}
                className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center overflow-hidden">
          <div
            className="flex w-max gap-3"
            style={{ transform: `translateX(${200 - offset}px)`, willChange: 'transform' }}
          >
            {[...ROW_TWO, ...ROW_TWO, ...ROW_TWO].map((src, index) => (
              <img
                key={`${src}-${index}`}
                src={src}
                alt=""
                loading="lazy"
                width={420}
                height={270}
                className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
