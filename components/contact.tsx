import { Reveal } from './reveal'

const socials = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

export function Contact() {
  return (
    <section
      id="lien-he"
      className="border-t border-gray-line px-5 py-28 md:px-10 md:py-44"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal
          as="p"
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-gray-mid"
        >
          Liên hệ
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-6 font-serif text-[clamp(40px,7vw,84px)] leading-[0.95] tracking-[-0.02em] text-ink"
        >
          Muốn bay cùng <span className="italic font-light">chúng tôi?</span>
        </Reveal>

        <Reveal delay={160} className="mt-12">
          <a
            href="mailto:hello@saucode.dev"
            className="link-underline inline-block font-serif text-2xl text-ink md:text-4xl"
          >
            hello@saucode.dev
          </a>
        </Reveal>

        <Reveal delay={220} className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2">
          {socials.map((s, i) => (
            <span key={s.label} className="flex items-center gap-x-4">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-ink"
              >
                {s.label}
              </a>
              {i < socials.length - 1 && (
                <span className="text-gray-line" aria-hidden="true">
                  /
                </span>
              )}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
