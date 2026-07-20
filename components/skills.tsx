import { Reveal } from './reveal'

const skills = [
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Flutter',
  'Docker',
  'Figma',
  'TypeScript',
  'AWS',
  'GitHub Actions',
]

export function Skills() {
  const sequence = [...skills, ...skills]
  return (
    <section
      id="ky-nang"
      className="border-t border-gray-line py-24 md:py-36"
    >
      <div className="mx-auto mb-14 max-w-6xl px-5 md:px-10">
        <Reveal
          as="p"
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-gray-mid"
        >
          Kỹ năng
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-6 font-serif text-3xl leading-tight text-ink md:text-5xl"
        >
          Bộ công cụ mang theo khi bay
        </Reveal>
      </div>

      <div className="marquee overflow-hidden">
        <div className="marquee-track">
          {sequence.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="flex items-center font-serif text-4xl font-light text-ink md:text-6xl"
            >
              {skill}
              <span className="mx-8 text-gray-line md:mx-12" aria-hidden="true">
                /
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
