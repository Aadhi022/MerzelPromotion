import { ArrowUpRight } from 'lucide-react'

type LiveProjectButtonProps = {
  href?: string
  className?: string
}

export function LiveProjectButton({ href = '#projects', className = '' }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-300 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      Live Project
      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.6} aria-hidden="true" />
    </a>
  )
}
