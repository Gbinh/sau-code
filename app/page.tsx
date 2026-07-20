import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Members } from '@/components/members'
import { Skills } from '@/components/skills'
import { Journey } from '@/components/journey'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Members />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
