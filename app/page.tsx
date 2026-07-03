'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Camera, FileText, Moon, Route, Sparkles, Waves } from 'lucide-react';
import { LivingMoon } from '@/components/sections/LivingMoon';

const pathway = [
  ['Arrive', 'Threshold', 'A quiet front door that lets the nervous system land before asking for anything.'],
  ['Reflect', 'Somatic Inquiry', 'Questions that help the right person name what is moving beneath the surface.'],
  ['Route', 'Right Pathway', 'Direction into session work, visual identity, healing containers, or licensing inquiry.'],
  ['Book', 'Sacred Inquiry', 'A simple intake path that protects Theo’s time and the depth of the work.'],
  ['Follow', 'Human Close', 'Warm follow-up language that feels held, not chased.'],
  ['Review', 'Integration', 'A way to see inquiries, readiness, pathways, and next decisions.'],
];

const vaultItems = ['Private image archive', 'Photography licensing inquiries', 'Visual identity case studies', 'Future photography lessons'];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary/90">{children}</p>;
}

export default function Page() {
  const { scrollYProgress } = useScroll();
  const fogX = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const heroTextY = useTransform(scrollYProgress, [0, 0.35], ['0px', '-80px']);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.24], [1, 0.18]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050706] text-foreground hm-mesh">
      <LivingMoon />
      <motion.div style={{ x: fogX }} className="pointer-events-none fixed inset-0 z-0 hm-fog opacity-60" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_10%,rgba(212,175,55,0.12),transparent_30%),linear-gradient(180deg,rgba(5,7,6,0)_0%,rgba(5,7,6,0.55)_46%,#050706_100%)]" />

      <nav className="fixed left-1/2 top-6 z-50 flex w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full hm-glass px-5 py-3">
        <a href="#top" className="font-mono text-xs tracking-[0.28em] text-primary">HOWLING MŪNE</a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#work" className="text-xs text-muted-foreground transition hover:text-foreground">Work</a>
          <a href="#pathway" className="text-xs text-muted-foreground transition hover:text-foreground">Pathway</a>
          <a href="#vault" className="text-xs text-muted-foreground transition hover:text-foreground">Vault</a>
          <a href="#begin" className="text-xs text-muted-foreground transition hover:text-foreground">Begin</a>
        </div>
        <a href="#begin" className="rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground transition hover:scale-[1.02]">Start</a>
      </nav>

      <section id="top" className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-20 pt-32 text-center md:px-12">
        <motion.div style={{ y: heroTextY, opacity: heroTextOpacity }} className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mb-8 inline-flex items-center gap-3 rounded-full hm-glass px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
            <Moon className="h-4 w-4" />
            Giving you back to you
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.12 }} className="font-serif text-6xl font-light leading-[0.95] tracking-tight text-foreground md:text-8xl lg:text-[9.5rem]">
            Return to the self
            <span className="block text-primary">beneath the noise.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.28 }} className="mx-auto mt-8 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            A quiet doorway into embodiment, emotional repair, visual identity, photography, and the client pathway that makes Theo’s work easier to enter.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.42 }} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#begin" className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition hover:scale-[1.02]">Start the client flow</a>
            <a href="#vault" className="rounded-full hm-glass px-8 py-3 text-sm text-foreground/85 transition hover:text-primary">Explore the visual vault</a>
          </motion.div>
        </motion.div>
        <motion.a href="#work" animate={{ y: [0, 12, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/80">
          <ArrowDown className="h-6 w-6" />
        </motion.a>
      </section>

      <section id="work" className="relative z-10 border-t border-primary/10 px-6 py-32 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <SectionLabel>The medicine</SectionLabel>
            <h2 className="font-serif mt-5 text-5xl font-light leading-tight tracking-tight md:text-7xl">The medicine exists. The pathway around it now becomes visible.</h2>
          </div>
          <div className="hm-card rounded-[2rem] p-8 md:p-10">
            <Waves className="mb-7 h-8 w-8 text-primary" />
            <p className="text-lg leading-9 text-muted-foreground">
              Howling MŪNE does not need a loud funnel. It needs a living sanctuary system: a clear front door, a reflective intake, a route into the right conversation, and a follow-up rhythm that feels human.
            </p>
          </div>
        </div>
      </section>

      <section id="pathway" className="relative z-10 border-t border-primary/10 bg-black/15 px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <SectionLabel>Client Journey System</SectionLabel>
            <h2 className="font-serif mt-5 text-5xl font-light tracking-tight md:text-7xl">A pathway that moves like breath.</h2>
            <p className="mt-6 text-muted-foreground">Each step should feel like walking deeper into a sanctuary, not being pushed through a funnel.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pathway.map(([label, title, body], index) => (
              <motion.article key={label} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay: index * 0.05 }} className="hm-card rounded-[2rem] p-7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_-30px_rgba(212,175,55,0.65)]">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-primary/12 text-primary ring-1 ring-primary/20">{index + 1}</div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{label}</p>
                <h3 className="mt-3 text-xl font-medium text-foreground">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="vault" className="relative z-10 border-t border-primary/10 px-6 py-32 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <SectionLabel>The Visual Vault</SectionLabel>
            <h2 className="font-serif mt-5 text-5xl font-light leading-tight tracking-tight md:text-7xl">Some images are records of becoming.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-muted-foreground">
              Howling MŪNE is also becoming a living archive for Theo’s photography, visual identity work, licensing inquiries, and future education. It should feel like a private archive, not a stock photo marketplace.
            </p>
          </div>
          <div className="grid gap-4">
            {vaultItems.map((item, index) => (
              <motion.div key={item} initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.08 }} className="hm-glass rounded-3xl p-6">
                <div className="flex items-center gap-4">
                  {index === 0 ? <Camera className="h-5 w-5 text-primary" /> : index === 1 ? <FileText className="h-5 w-5 text-primary" /> : index === 2 ? <Sparkles className="h-5 w-5 text-primary" /> : <Route className="h-5 w-5 text-primary" />}
                  <p className="text-sm text-foreground/90">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="begin" className="relative z-10 border-t border-primary/10 px-6 py-32 text-center md:px-12">
        <Moon className="mx-auto mb-8 h-10 w-10 text-primary" />
        <h2 className="font-serif mx-auto max-w-4xl text-5xl font-light leading-tight tracking-tight md:text-7xl">Begin with the doorway. Then build the sanctuary behind it.</h2>
        <p className="mx-auto mt-7 max-w-2xl text-muted-foreground">
          Next: Theo reviews the live direction, gives copy and design feedback, approves intake language, and we prepare the Vercel preview for launch.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="mailto:hello@howlingmune.com" className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground">Start the client journey</a>
          <a href="mailto:hello@howlingmune.com" className="rounded-full hm-glass px-8 py-3 text-sm text-foreground/85">Licensing inquiry</a>
        </div>
      </section>
    </main>
  );
}
