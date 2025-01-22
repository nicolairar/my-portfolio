import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Nav from '@/components/Nav'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Projects />
      <Contact />
    </main>
  )
}
