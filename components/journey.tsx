import { Reveal } from './reveal'

const milestones = [
  { no: '01', title: 'Nở', desc: '5 người, 1 nhóm chat' },
  { no: '02', title: 'Bò', desc: 'Dự án đầu tiên, còn nhiều lỗi' },
  { no: '03', title: 'Làm kén', desc: 'Rèn quy trình, xây nền tảng' },
  { no: '04', title: 'Hôm nay', desc: 'Sẵn sàng cất cánh' },
]

export function Journey() {
  return (
    <section
      id="hanh-trinh"
      className="border-t border-gray-line px-5 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal
          as="p"
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-gray-mid"
        >
          Hành trình
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-6 font-serif text-3xl leading-tight text-ink md:text-5xl"
        >
          Từ sâu đến bướm
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-8">
          {milestones.map((m, i) => (
            <Reveal key={m.no} delay={i * 100}>
              <div className="border-t border-ink pt-5 md:border-t md:border-gray-line">
                <span className="font-mono text-[11px] tracking-[0.2em] text-gray-mid">
                  {m.no}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-medium uppercase tracking-tight text-ink">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-gray-mid">
                  {m.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
