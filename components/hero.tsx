import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-65px)] flex-col justify-center px-5 py-20 md:px-10"
    >
      <Image
        src="/images/logo.png"
        alt=""
        aria-hidden="true"
        width={520}
        height={280}
        priority
        className="pointer-events-none absolute right-2 top-8 w-48 opacity-90 md:right-10 md:top-16 md:w-[34rem]"
      />

      <div className="mx-auto w-full max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gray-mid">
          Sâu Code — Team của 5 người
        </p>

        <div className="relative mt-10 md:mt-16">
          <h1 className="font-serif leading-[0.9] text-ink">
            <span className="block pl-1 text-3xl font-light text-gray-mid md:pl-2 md:text-4xl">
              Hôm nay bò,
            </span>

            {/* Line-art connecting the small line to the large line */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              className="my-2 h-10 w-full text-ink md:my-4 md:h-16"
            >
              <path
                d="M2 4 C 30 4, 20 34, 60 34 S 96 20, 98 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.4"
                vectorEffect="non-scaling-stroke"
                pathLength={1}
                className="draw-line"
              />
            </svg>

            <span className="block text-[clamp(80px,16vw,180px)] font-black tracking-[-0.03em]">
              ngày mai <span className="italic font-light">bay.</span>
            </span>
          </h1>
        </div>

        <div className="mt-16 flex items-center gap-3 md:mt-24">
          <span className="h-10 w-px bg-ink" aria-hidden="true" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gray-mid">
            Cuộn xuống ↓
          </span>
        </div>
      </div>
    </section>
  )
}
