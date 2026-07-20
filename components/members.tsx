import { Reveal } from './reveal'

const members = [
  {
    name: 'Minh Anh',
    role: '</Frontend>',
    desc: 'Biến thiết kế thành giao diện sống động.',
  },
  {
    name: 'Đức Huy',
    role: '</Backend>',
    desc: 'Xây nền móng vững chắc cho mọi hệ thống.',
  },
  {
    name: 'Thảo Vy',
    role: '</UI-UX>',
    desc: 'Vẽ hình hài con bướm trước khi nó bay.',
  },
  {
    name: 'Quang Khải',
    role: '</Mobile>',
    desc: 'Đưa sản phẩm vào túi người dùng.',
  },
  {
    name: 'Ngọc Trâm',
    role: '</QA·DevOps>',
    desc: 'Canh cổng chất lượng, đảm bảo an toàn khi cất cánh.',
  },
]

export function Members() {
  return (
    <section
      id="thanh-vien"
      className="bg-ink px-5 py-24 text-paper md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal
          as="p"
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-gray-mid"
        >
          Thành viên
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="mt-6 font-serif text-4xl leading-none text-paper md:text-6xl"
        >
          5 con sâu, 5 hướng bay
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
          {members.map((member, i) => (
            <Reveal key={member.name} delay={i * 80} className="group">
              <div className="flex aspect-square w-full items-center justify-center border border-paper/25 transition-colors duration-500 group-hover:bg-paper">
                <span className="font-serif text-5xl font-light text-paper transition-colors duration-500 group-hover:text-ink">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="mt-5 inline-block font-serif text-xl font-medium text-paper">
                <span className="link-underline">{member.name}</span>
              </h3>
              <p className="mt-1 font-mono text-[11px] tracking-wide text-gray-mid">
                {member.role}
              </p>
              <p className="mt-3 text-sm font-light leading-relaxed text-gray-mid">
                {member.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
