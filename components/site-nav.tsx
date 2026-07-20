'use client'

import Image from 'next/image'

const links = [
  { label: 'Về nhóm', href: '#ve-nhom' },
  { label: 'Thành viên', href: '#thanh-vien' },
  { label: 'Kỹ năng', href: '#ky-nang' },
  { label: 'Hành trình', href: '#hanh-trinh' },
  { label: 'Liên hệ', href: '#lien-he' },
]

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-line bg-paper/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10">
        <a
          href="#top"
          className="flex items-center gap-3.5 text-ink"
        >
          <Image
            src="/images/logo.png"
            alt="Logo nhóm Sâu Code"
            width={96}
            height={96}
            className="h-12 w-12 object-contain mix-blend-multiply md:h-16 md:w-16"
            priority
          />
          <span className="font-serif text-2xl font-semibold tracking-tight md:text-3xl">
            Sâu Code
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex lg:gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-base font-light tracking-wide text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#lien-he"
          className="link-underline font-mono text-[11px] uppercase tracking-[0.2em] text-ink md:hidden"
        >
          Liên hệ
        </a>
      </nav>
    </header>
  )
}
