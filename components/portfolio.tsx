'use client'

import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  Menu,
  PanelsTopLeft,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react'

const skills = {
  Programming: ['C', 'C++', 'Java', 'JavaScript'],
  Frontend: ['HTML', 'CSS', 'React'],
  Backend: ['Spring Boot', 'REST APIs', 'JDBC', 'Hibernate'],
  Database: ['PostgreSQL', 'MySQL', 'SQL'],
  Tools: ['Git', 'GitHub', 'Maven', 'Postman'],
}

const projects = [
  {
    number: '01',
    title: 'PennyPilot',
    type: 'Personal finance application',
    description:
      'A personal finance management application designed to help users track expenses and manage their finances.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Frontend TBD'],
    icon: BriefcaseBusiness,
    accent: 'from-blue-500/25 via-indigo-500/10 to-transparent',
  },
  {
    number: '02',
    title: 'Resume Screening System',
    type: 'Data science project',
    description:
      'A data science project that analyses resumes against job requirements to assist candidate screening. Project details can be refined as the implementation evolves.',
    tags: ['Python', 'Flask', 'NLP', 'PostgreSQL'],
    icon: PanelsTopLeft,
    accent: 'from-violet-500/25 via-fuchsia-500/10 to-transparent',
  },
  {
    number: '03',
    title: 'Krushi Connect',
    type: 'Digital agriculture concept',
    description:
      'A digital agriculture platform concept connecting farmers with agricultural products, labour services, and delivery services.',
    tags: ['Project concept', 'Features editable'],
    icon: Sparkles,
    accent: 'from-cyan-500/25 via-blue-500/10 to-transparent',
  },
]

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Contact', '#contact'],
]

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -48px' },
    )
    elements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#060b18] text-slate-100 selection:bg-blue-500/30">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#060b18]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Pratik Homkar home">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-blue-400 to-violet-500 font-bold text-white shadow-lg shadow-blue-500/20">P</span>
            <span className="font-semibold tracking-tight text-white">Pratik Homkar</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} className="text-sm text-slate-400 transition-colors hover:text-white">{label}</a>)}
          </nav>
          <a href="#contact" className="hidden rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 transition hover:border-blue-300/60 hover:bg-blue-500/20 md:block">Let&apos;s connect <ArrowUpRight className="ml-1 inline size-4" /></a>
          <button type="button" className="rounded-lg p-2 text-slate-300 md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-white/[0.06] px-5 py-4 md:hidden" aria-label="Mobile navigation">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5">{label}</a>)}</nav>}
      </header>

      <main id="top">
        <section className="relative mx-auto flex min-h-[760px] max-w-6xl items-center px-5 pb-20 pt-36 sm:px-8 lg:min-h-[820px]">
          <div className="pointer-events-none absolute -left-48 top-10 size-[520px] rounded-full bg-blue-600/15 blur-[130px]" />
          <div className="pointer-events-none absolute right-[-180px] top-40 size-[500px] rounded-full bg-violet-600/15 blur-[130px]" />
          <div className="relative grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3 py-1.5 text-xs font-medium text-blue-200"><span className="size-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />Open to learning &amp; building</div>
              <p className="mb-5 font-mono text-sm tracking-wide text-blue-300">Hello, I&apos;m Pratik Homkar.</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">Aspiring <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">Java Full Stack Developer</span></h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">MCA student at Modern College of Engineering, affiliated with SPPU, interested in Java development, full stack web development, problem-solving, and building practical applications.</p>
              <div className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:bg-blue-400">View projects <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a><a href="/Pratik-Homkar-Resume.pdf" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/[0.08]">Download resume <ExternalLink className="size-4" /></a><a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-slate-400 transition hover:text-white">Get in touch <ChevronDown className="size-4 -rotate-90" /></a></div>
              <div className="mt-12 flex items-center gap-5 text-sm text-slate-500"><span>Currently pursuing</span><span className="h-px w-12 bg-white/10" /><span className="text-slate-300">Master of Computer Applications</span></div>
            </div>
            <div className="relative mx-auto flex w-full max-w-sm justify-center lg:ml-auto">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-blue-500/25 to-violet-500/25 blur-3xl" />
              <div className="relative flex flex-col items-center gap-6">
                <div className="rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-500 p-1 shadow-2xl shadow-blue-950/50">
                  <div className="rounded-full bg-[#060b18] p-2">
                    <img src="/pratik-homkar-profile.jpeg" alt="Pratik Homkar" className="size-64 rounded-full object-cover object-top sm:size-72" />
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 shadow-xl shadow-blue-950/20 backdrop-blur-sm"><Code2 className="size-4 text-blue-300" /><span className="text-sm font-medium text-slate-200">Java · Full Stack</span></div>
              </div>
            </div>
          </div>
          <a href="#about" className="absolute bottom-9 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-white sm:block" aria-label="Scroll to about"><ChevronDown className="size-5 animate-bounce" /></a>
        </section>

        <section id="about" data-reveal className="reveal mx-auto max-w-6xl scroll-mt-24 px-5 py-28 sm:px-8 lg:py-32"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-300">01 / About me</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Building a strong foundation, one project at a time.</h2></div><div className="max-w-2xl text-lg leading-8 text-slate-400"><p>I am an MCA student at Modern College of Engineering. I am interested in Java development, full stack web development, problem-solving, and building practical applications.</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><GraduationCap className="mb-4 size-5 text-blue-300" /><p className="text-sm font-medium text-white">Learning with purpose</p><p className="mt-2 text-sm leading-6 text-slate-500">Growing practical skills through focused study and hands-on projects.</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><BookOpen className="mb-4 size-5 text-violet-300" /><p className="text-sm font-medium text-white">Curious by nature</p><p className="mt-2 text-sm leading-6 text-slate-500">Exploring how thoughtful software can solve everyday problems.</p></div></div></div></div></section>

        <section id="skills" data-reveal className="reveal border-y border-white/[0.06] bg-white/[0.015] scroll-mt-24"><div className="mx-auto max-w-6xl px-5 py-24 sm:px-8"><p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-300">02 / Technical skills</p><div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Tools I&apos;m working with.</h2><p className="max-w-sm text-sm leading-6 text-slate-500">A growing toolkit built through coursework, practice, and project work.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{Object.entries(skills).map(([category, items]) => <div key={category} className="rounded-2xl border border-white/10 bg-[#0b1223] p-5 transition hover:-translate-y-1 hover:border-blue-400/30"><h3 className="text-sm font-semibold text-blue-200">{category}</h3><ul className="mt-5 flex flex-col gap-3">{items.map(item => <li key={item} className="flex items-center gap-2 text-sm text-slate-400"><Check className="size-3.5 text-slate-600" />{item}</li>)}</ul></div>)}</div></div></section>

        <section id="projects" data-reveal className="reveal mx-auto max-w-6xl scroll-mt-24 px-5 py-28 sm:px-8 lg:py-32"><p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-300">03 / Selected projects</p><div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Learning by making.</h2><p className="max-w-sm text-sm leading-6 text-slate-500">A selection of work and concepts. Details remain editable as projects evolve.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{projects.map(project => { const Icon = project.icon; return <article key={project.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1223] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-950/30"><div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-50`} /><div className="relative"><div className="flex items-center justify-between"><span className="font-mono text-xs text-slate-600">{project.number}</span><Icon className="size-5 text-blue-300/80" /></div><p className="mt-10 text-xs font-medium uppercase tracking-wider text-slate-500">{project.type}</p><h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3><p className="mt-4 min-h-24 text-sm leading-6 text-slate-400">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400">{tag}</span>)}</div><div className="mt-7 flex items-center gap-4 border-t border-white/[0.08] pt-5"><a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-white">GitHub <Code2 className="size-3.5" /></a><a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-white">Live demo <ExternalLink className="size-3.5" /></a></div></div></article>})}</div></section>

        <section id="education" data-reveal className="reveal border-y border-white/[0.06] bg-white/[0.015] scroll-mt-24"><div className="mx-auto max-w-6xl px-5 py-24 sm:px-8"><p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-300">04 / Education</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Academic journey.</h2><div className="mt-12 grid gap-5 md:grid-cols-2"><div className="rounded-3xl border border-blue-400/25 bg-gradient-to-br from-blue-500/[0.1] to-transparent p-7"><p className="text-xs font-medium uppercase tracking-wider text-blue-300">Master&apos;s degree</p><h3 className="mt-3 text-xl font-semibold text-white">Master of Computer Applications (MCA)</h3><p className="mt-3 text-sm text-slate-400">Modern College of Engineering</p><p className="mt-1 text-sm text-slate-500">Affiliated with SPPU</p></div><div className="rounded-3xl border border-white/10 bg-[#0b1223] p-7"><p className="text-xs font-medium uppercase tracking-wider text-violet-300">Bachelor&apos;s degree</p><h3 className="mt-3 text-xl font-semibold text-white">Bachelor of Science (Computer Science)</h3><p className="mt-3 text-sm text-slate-400">PVGs College of Science</p></div></div></div></section>

        <section id="contact" data-reveal className="reveal mx-auto max-w-6xl scroll-mt-24 px-5 py-28 sm:px-8 lg:py-32"><div className="relative overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.12] via-[#0b1223] to-violet-500/[0.1] px-6 py-14 text-center sm:px-12"><div className="pointer-events-none absolute left-1/2 top-0 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[90px]" /><div className="relative"><p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-300">05 / Contact</p><h2 className="mx-auto mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">Let&apos;s build something practical.</h2><p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-400">Have an opportunity, idea, or simply want to connect? Add your details below to make this section yours.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><a href="mailto:pratikhomkar0704@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"><Mail className="size-4" />pratikhomkar0704@gmail.com</a><a href="https://github.com/PratikHomkar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"><Code2 className="size-4" />GitHub</a><a href="https://www.linkedin.com/in/pratik-homkar-3b87312b8" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"><UserRound className="size-4" />LinkedIn</a></div></div></div></section>
      </main>

      <footer className="border-t border-white/[0.06]"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:px-8"><p>© {new Date().getFullYear()} Pratik Homkar. Built with intention.</p><a href="#top" className="transition hover:text-white">Back to top ↑</a></div></footer>
    </div>
  )
}

export default Portfolio
