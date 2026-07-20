import { Reveal } from './reveal'

const stats = [
  { value: '05', label: 'Thành viên nòng cốt' },
  { value: '01', label: 'Slogan chung' },
  { value: '∞', label: 'Dòng code còn phải viết' },
]

export function About() {
  return (
    <section
      id="ve-nhom"
      className="border-t border-gray-line px-5 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-5 md:gap-10">
        <div className="md:col-span-3">
          <Reveal
            as="p"
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-gray-mid"
          >
            Về nhóm
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-6 font-serif text-3xl leading-[1.15] text-ink md:text-[42px]"
          >
            Chúng tôi tin mỗi dòng code hôm nay là một bước bò tới{' '}
            <span className="italic">đôi cánh</span> ngày mai.
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="mt-8 max-w-xl text-pretty text-base font-light leading-relaxed text-gray-mid"
          >
            Sâu Code là nhóm gồm 5 người trẻ mê lập trình. Chúng tôi bắt đầu từ
            những dòng code vụng về, những đêm sửa lỗi và những dự án còn dang
            dở — nhưng chưa bao giờ ngừng học hỏi. Với chúng tôi, hành trình từ
            con sâu đến con bướm không phải là đích đến, mà là cách làm việc mỗi
            ngày: bò chậm rãi hôm nay để đủ vững cho ngày cất cánh.
          </Reveal>
        </div>

        <div className="md:col-span-2">
          <div className="flex flex-col gap-12">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <p className="font-serif text-6xl font-light leading-none text-ink md:text-7xl">
                  {stat.value}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-gray-mid">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
