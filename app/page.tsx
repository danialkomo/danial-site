'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

/* ─────────────────────────── DATA ─────────────────────────── */
const SKILLS = [
  { icon: '⚛', name: 'React / Next.js',       level: 5 },
  { icon: '🎨', name: 'UI/UX Design',          level: 5 },
  { icon: '🔷', name: 'WordPress / WooCommerce', level: 4 },
  { icon: '🗄', name: 'Supabase',              level: 4 },
  { icon: '💳', name: 'Stripe / Payments',     level: 4 },
  { icon: '🚀', name: 'Vercel / Deploy',       level: 5 },
]

const SERVICES = [
  { num:'01', icon:'🖥',  title:'Premium Webdesign',       desc:'Op maat gemaakte websites die uw merk vertegenwoordigen en bezoekers omzetten naar klanten.', tag:'design → conversion' },
  { num:'02', icon:'⚡',  title:'Next.js Ontwikkeling',    desc:'Moderne, snelle webapps met schone code, SEO-basis en een schaalbare, toekomstbestendige structuur.', tag:'next.js → vercel' },
  { num:'03', icon:'🛒',  title:'WordPress & WooCommerce', desc:'Professionele WordPress sites en webshops voor ondernemers die online willen groeien.', tag:'wp → sales' },
  { num:'04', icon:'🎯',  title:'SaaS & Dashboards',       desc:'Complete SaaS-producten met auth, subscriptions en dashboards. Van idee tot live product.', tag:'saas + mrr' },
  { num:'05', icon:'🔍',  title:'SEO & Performance',       desc:'Technische optimalisatie voor snelheid, vindbaarheid en betere Core Web Vitals scores.', tag:'speed → ranking' },
  { num:'06', icon:'🛡',  title:'Onderhoud & Support',     desc:'Updates, verbeteringen en doorlopend support. Uw website altijd veilig en up-to-date.', tag:'care → stable' },
]

const PROJECTS = [
  {
    file: 'grillroom-dany.tsx',
    accent: 'rgba(232,17,45,.12)',
    name: 'GRILLROOM DANY',
    desc: 'Streetfood brand lancering: website, menu, uitstraling en lokale SEO voor NS Station Barendrecht.',
    tags: [{ label: 'Branding', color: 'var(--r)' }, { label: 'Website', color: 'var(--r)' }, { label: 'SEO', color: 'var(--r)' }],
    code: (
      <>
        <span style={{color:'var(--p)'}}>export default </span>
        <span style={{color:'var(--b)'}}>Landing</span>
        <span style={{color:'var(--gray)'}}>{`() => (`}</span><br/>
        <span style={{paddingLeft:16,color:'var(--gray)'}}>&lt;</span>
        <span style={{color:'#FF4D6A'}}>Page</span><br/>
        <span style={{paddingLeft:30,color:'var(--white)'}}>concept</span>
        <span style={{color:'var(--gray)'}}>=</span>
        <span style={{color:'var(--y)'}}>"premium"</span><br/>
        <span style={{paddingLeft:30,color:'var(--white)'}}>opening</span>
        <span style={{color:'var(--gray)'}}>=</span>
        <span style={{color:'var(--g)'}}>"Aug 2026"</span><br/>
        <span style={{paddingLeft:16,color:'var(--gray)'}}>/&gt;)</span>
      </>
    ),
  },
  {
    file: 'imbisso.ts',
    accent: 'rgba(61,255,143,.07)',
    name: 'IMBISSO APP',
    desc: 'SaaS platform voor restaurants & food trucks. Eigen subdomain, online bestellen en Stripe payments.',
    tags: [{ label: 'Next.js', color: 'var(--g)' }, { label: 'Supabase', color: 'var(--g)' }, { label: 'Stripe', color: 'var(--g)' }],
    code: (
      <>
        <span style={{color:'var(--p)'}}>const </span>
        <span style={{color:'var(--g)'}}>result</span>
        <span style={{color:'var(--gray)'}}> = </span>
        <span style={{color:'var(--p)'}}>await</span><br/>
        <span style={{paddingLeft:14,color:'var(--b)'}}>supabase</span>
        <span style={{color:'var(--gray)'}}>.</span>
        <span style={{color:'var(--b)'}}>from</span>
        <span style={{color:'var(--gray)'}}>(</span>
        <span style={{color:'var(--y)'}}>"restaurants"</span>
        <span style={{color:'var(--gray)'}}>)</span><br/>
        <span style={{paddingLeft:14,color:'var(--gray)'}}>.</span>
        <span style={{color:'var(--b)'}}>insert</span>
        <span style={{color:'var(--gray)'}}>{`({ slug, plan })`}</span><br/>
        <span style={{color:'var(--gray)',fontStyle:'italic'}}>// → naam.imbisso.app</span>
      </>
    ),
  },
  {
    file: 'soukk.php',
    accent: 'rgba(92,157,255,.07)',
    name: 'SOUKK MARKETPLACE',
    desc: 'Multi-vendor SaaS marketplace voor Syriërs in Europa. Subdomains, WooCommerce & PostNL integratie.',
    tags: [{ label: 'WordPress', color: 'var(--b)' }, { label: 'Multisite', color: 'var(--b)' }, { label: 'WooCommerce', color: 'var(--b)' }],
    code: (
      <>
        <span style={{color:'var(--b)'}}>$subdomain</span>
        <span style={{color:'var(--gray)'}}> = </span>
        <span style={{color:'var(--y)'}}>$naam</span>
        <span style={{color:'var(--gray)'}}> . </span>
        <span style={{color:'var(--y)'}}>{`".soukk.app"`}</span>
        <span style={{color:'var(--gray)'}}>;</span><br/>
        <span style={{color:'var(--b)'}}>provision</span>
        <span style={{color:'var(--gray)'}}>(</span>
        <span style={{color:'var(--b)'}}>$subdomain</span>
        <span style={{color:'var(--gray)'}}>);</span><br/>
        <span style={{color:'var(--b)'}}>sendWhatsApp</span>
        <span style={{color:'var(--gray)'}}>(</span>
        <span style={{color:'var(--b)'}}>$link</span>
        <span style={{color:'var(--gray)'}}>);</span><br/>
        <span style={{color:'var(--gray)',fontStyle:'italic'}}>// → live in 30 sec</span>
      </>
    ),
  },
]

const PROCESS = [
  { num:'01', icon:'💡', title:'Intake & Strategie', desc:'We bespreken uw idee, doelen en doelgroep. Ik denk direct mee over de beste aanpak.' },
  { num:'02', icon:'🎨', title:'Design & Concept',   desc:'Visueel concept op maat — strak, modern en afgestemd op uw merk en doelgroep.' },
  { num:'03', icon:'⚙️', title:'Ontwikkeling',       desc:'Schone code, snelle laadtijden en alles geoptimaliseerd voor zoekmachines.' },
  { num:'04', icon:'🚀', title:'Launch & Support',   desc:'Live zetten, testen op alle apparaten en doorlopend support nadien.' },
]

const PHRASES = ['npm run dev', 'git push origin main', 'vercel deploy --prod', 'node server.js', 'npm run build']

const CODE_SNIPPETS = [
  { text: 'const x = await fetch(api)', color: 'rgba(232,17,45,' },
  { text: 'export default function App()', color: 'rgba(61,255,143,' },
  { text: "import { useState } from 'react'", color: 'rgba(92,157,255,' },
  { text: 'SELECT * FROM users', color: 'rgba(255,208,96,' },
  { text: 'git push origin main', color: 'rgba(199,146,234,' },
  { text: 'vercel deploy --prod', color: 'rgba(232,17,45,' },
  { text: '.map(item => <Card />)', color: 'rgba(61,255,143,' },
  { text: 'supabase.from("orders")', color: 'rgba(92,157,255,' },
  { text: '@media (max-width: 768px)', color: 'rgba(255,208,96,' },
  { text: 'border-radius: 4px;', color: 'rgba(199,146,234,' },
  { text: 'async function getData() {', color: 'rgba(232,17,45,' },
  { text: 'return await launch(code)', color: 'rgba(61,255,143,' },
  { text: 'npm install --save-dev', color: 'rgba(92,157,255,' },
  { text: 'z-index: 9999;', color: 'rgba(255,208,96,' },
]

/* ─────────────────────────── HOOKS ─────────────────────────── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, vis]
}

/* ─────────────────────────── SMALL COMPONENTS ─────────────────── */
function Reveal({ children, delay = 0, dir = 'up', className = '' }) {
  const [ref, vis] = useReveal()
  const cls = dir === 'left' ? 'reveal-l' : dir === 'right' ? 'reveal-r' : 'reveal'
  return (
    <div ref={ref} className={`${cls}${vis ? ' on' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

function StatCounter({ value, label, delay }) {
  const [count, setCount] = useState(0)
  const [ref, vis] = useReveal(0.6)
  const target = parseInt(value)
  const suffix = value.replace(/\d+/, '')
  useEffect(() => {
    if (!vis) return
    let v = 0; const step = target / 55
    const t = setInterval(() => {
      v = Math.min(v + step, target)
      setCount(Math.floor(v))
      if (v >= target) clearInterval(t)
    }, 20)
    return () => clearInterval(t)
  }, [vis, target])
  return (
    <div ref={ref} className="stat" style={{ opacity: vis ? 1 : 0, transition: `opacity .6s ease ${delay}s` }}>
      <div className="stat-num">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

function SkillItem({ icon, name, level, delay }) {
  const [ref, vis] = useReveal()
  return (
    <div ref={ref} className="skill-item"
      style={{ opacity: vis ? 1 : 0, transform: vis ? 'translateX(0)' : 'translateX(-20px)', transition: `all .6s ease ${delay}s` }}>
      <span className="skill-icon">{icon}</span>
      <span className="skill-name">{name}</span>
      <div className="skill-dots">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className={`dot ${i < level ? 'on' : 'off'}`}
            style={{ opacity: vis ? 1 : 0, transition: `all .4s ease ${delay + .1 + i * .07}s` }} />
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────── CANVAS ─────────────────────────── */
function CodeRain() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let drops = []

    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const cols = Math.floor(canvas.width / 160)
      drops = Array.from({ length: cols }, (_, i) => ({
        x: i * (canvas.width / cols) + Math.random() * 50,
        y: Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.3,
        text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
        alpha: 0.04 + Math.random() * 0.06,
        size: 10 + Math.random() * 3,
      }))
    }
    init()
    window.addEventListener('resize', init)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drops.forEach(d => {
        ctx.font = `${d.size}px JetBrains Mono, monospace`
        ctx.fillStyle = d.text.color + d.alpha + ')'
        ctx.fillText(d.text.text, d.x, d.y)
        d.y += d.speed
        if (d.y > canvas.height + 40) {
          d.y = -30
          d.text = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)]
        }
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { window.removeEventListener('resize', init); cancelAnimationFrame(animId) }
  }, [])
  return <canvas ref={canvasRef} className="bg-canvas" />
}

/* ─────────────────────────── PAGE ─────────────────────────── */
export default function Page() {
  const [typing, setTyping] = useState('')
  const [scrollPct, setScrollPct] = useState(0)
  const [navScrolled, setNavScrolled] = useState(false)
  const [mouse, setMouse] = useState({ x: -999, y: -999 })
  const [ring, setRing] = useState({ x: -999, y: -999 })
  const [mobileOpen, setMobileOpen] = useState(false)
  const ringRef = useRef({ x: -999, y: -999 })
  const rafRef = useRef(null)
  const dotRef = useRef(null)
  const ringElRef = useRef(null)

  /* typing */
  useEffect(() => {
    let pi = 0, ci = 0, del = false, tid
    const tick = () => {
      const p = PHRASES[pi]
      if (!del) { setTyping(p.slice(0, ++ci)); if (ci === p.length) { del = true; return (tid = setTimeout(tick, 1700)) } }
      else { setTyping(p.slice(0, --ci)); if (ci === 0) { del = false; pi = (pi + 1) % PHRASES.length } }
      tid = setTimeout(tick, del ? 36 : 75)
    }
    tid = setTimeout(tick, 900)
    return () => clearTimeout(tid)
  }, [])

  /* scroll */
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      setScrollPct(h.scrollTop / (h.scrollHeight - h.clientHeight) * 100)
      setNavScrolled(h.scrollTop > 60)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* cursor */
  useEffect(() => {
    const onMove = e => {
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', onMove)
    const animRing = () => {
      ringRef.current.x += (mouse.x - ringRef.current.x) * 0.12
      ringRef.current.y += (mouse.y - ringRef.current.y) * 0.12
      if (ringElRef.current) {
        ringElRef.current.style.left = ringRef.current.x + 'px'
        ringElRef.current.style.top  = ringRef.current.y + 'px'
      }
      rafRef.current = requestAnimationFrame(animRing)
    }
    rafRef.current = requestAnimationFrame(animRing)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafRef.current) }
  }, [mouse])

  const expandCursor = () => {
    if (dotRef.current)  { dotRef.current.style.width  = '4px'; dotRef.current.style.height = '4px' }
    if (ringElRef.current) { ringElRef.current.style.width = '60px'; ringElRef.current.style.height = '60px'; ringElRef.current.style.borderColor = 'rgba(232,17,45,.8)' }
  }
  const resetCursor = () => {
    if (dotRef.current)  { dotRef.current.style.width  = '7px'; dotRef.current.style.height = '7px' }
    if (ringElRef.current) { ringElRef.current.style.width = '38px'; ringElRef.current.style.height = '38px'; ringElRef.current.style.borderColor = 'rgba(232,17,45,.5)' }
  }

  const hoverProps = { onMouseEnter: expandCursor, onMouseLeave: resetCursor }

  return (
    <>
      {/* Fixed layers */}
      <div className="grid-bg" />
      <div className="scanlines" />
      <div className="mouse-glow" style={{ left: mouse.x, top: mouse.y }} />
      <CodeRain />
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />

      {/* Cursor */}
      <div ref={dotRef} className="cursor-dot" style={{ left: mouse.x, top: mouse.y }} />
      <div ref={ringElRef} className="cursor-ring" />

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
        {['about','stack','services','work','contact'].map(s => (
          <a key={s} href={`#${s}`} onClick={() => setMobileOpen(false)}>{s}</a>
        ))}
      </div>

      {/* NAV */}
      <nav className={`nav ${navScrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo" {...hoverProps}>
          <span style={{color:'var(--r)'}}>~/</span>
          <span style={{color:'var(--g)'}}>danial-komo</span>
          <span style={{color:'var(--gray)'}}> ▸ </span>
          <span style={{color:'#888'}}>portfolio.sh</span>
        </a>
        <ul className="nav-links">
          {['about','stack','services','work','contact'].map(s => (
            <li key={s}><a href={`#${s}`} {...hoverProps}>{s}</a></li>
          ))}
        </ul>
        <div className="nav-status">
          <div className="pulse-dot" />
          beschikbaar voor werk
        </div>
        <button className="hamburger" onClick={() => setMobileOpen(true)} style={{background:'none',border:'none',cursor:'pointer'}}>
          <span /><span /><span />
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="hero-wrap">
        <div>
          <div className="hero-tag">webdesigner &amp; ontwikkelaar — Winterswijk, NL</div>
          <h1 className="hero-h1">
            <span className="hero-red">DANIAL</span><br />
            <span className="hero-ghost hero-glitch" data-text="KOMO">KOMO</span>
          </h1>
          <p className="hero-desc">
            Ik bouw <span className="hl">snelle</span>, visueel sterke digitale ervaringen die niet alleen mooi ogen,
            maar ook <span className="hw">echt converteren</span> en <span className="hg">groeien</span>.
          </p>
          <div className="badges">
            {['Next.js','WordPress','UI/UX','SaaS','SEO','Supabase'].map(b => (
              <span key={b} className="badge" {...hoverProps}>{b}</span>
            ))}
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn-red" {...hoverProps}>Start project →</a>
            <a href="#work" className="btn-outline" {...hoverProps}>// bekijk werk</a>
          </div>
        </div>

        {/* Terminal */}
        <div className="terminal-wrap">
          <div className="terminal-glow" />
          <div className="terminal">
            <div className="t-bar">
              <div className="t-btn red" /><div className="t-btn yellow" /><div className="t-btn green" />
              <div className="t-title">danial-komo.tsx — ~/portfolio</div>
            </div>
            <div className="t-body" style={{fontFamily:'var(--font)',fontSize:13,lineHeight:2.2}}>
              <div style={{color:'var(--gray)',fontStyle:'italic'}}>// developer profile — 2026</div>
              <br />
              <div><span style={{color:'var(--p)'}}>const </span><span style={{color:'#FF4D6A'}}>developer</span><span style={{color:'var(--gray)'}}> = {'{'}</span></div>
              {[
                ['naam',     '"Danial Komo"',         'var(--y)'],
                ['locatie',  '"Winterswijk, NL"',     'var(--y)'],
                ['focus',    '"websites that convert"','var(--g)'],
              ].map(([k,v,c]) => (
                <div key={k} style={{paddingLeft:24}}>
                  <span style={{color:'var(--white)'}}>{k}</span>
                  <span style={{color:'var(--gray)'}}>{': '}</span>
                  <span style={{color:c}}>{v}</span>
                  <span style={{color:'var(--gray)'}}>,</span>
                </div>
              ))}
              <div style={{paddingLeft:24}}>
                <span style={{color:'var(--white)'}}>stack</span>
                <span style={{color:'var(--gray)'}}>{': '}</span>
                <span style={{color:'var(--g)'}}>['Next.js', 'WordPress', 'SaaS']</span>
                <span style={{color:'var(--gray)'}}>,</span>
              </div>
              <div style={{paddingLeft:24}}>
                <span style={{color:'var(--white)'}}>beschikbaar</span>
                <span style={{color:'var(--gray)'}}>{': '}</span>
                <span style={{color:'var(--p)'}}>true</span>
              </div>
              <div style={{color:'var(--gray)'}}>{'}'}</div>
              <br />
              <div style={{display:'flex',alignItems:'center',gap:8}}>
                <span style={{color:'var(--g)'}}>▸</span>
                <span style={{color:'var(--white)'}}>{typing}</span>
                <span className="t-cursor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-strip">
        <StatCounter value="50+" label="projecten voltooid" delay={0}    />
        <StatCounter value="30+" label="tevreden klanten"   delay={0.08} />
        <StatCounter value="24u" label="reactietijd"        delay={0.16} />
        <StatCounter value="100%" label="custom uitstraling" delay={0.24} />
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className="section sec-border" style={{paddingTop:130,paddingBottom:130}}>
        <div className="about-grid">
          <Reveal dir="left">
            <div className="code-card">
              <div className="cc-bar">
                <div className="cc-lang"><div className="cld js" /> buildProcess.js</div>
                <span style={{fontSize:10,color:'var(--gray)'}}>JavaScript ES2024</span>
              </div>
              <div className="cc-code">
                <div><span className="ln">1</span><span style={{color:'var(--gray)',fontStyle:'italic'}}>{'/** @author Danial Komo | @since 2021 */'}</span></div>
                <div><span className="ln">2</span></div>
                <div><span className="ln">3</span><span style={{color:'var(--p)'}}>async function </span><span style={{color:'var(--b)'}}>buildProject</span><span style={{color:'var(--gray)'}}>{'(idea) {'}</span></div>
                {[
                  ['4',  'const ', 'strategy', ' = await ', 'understand', '(idea)'],
                  ['5',  'const ', 'design',   ' = await ', 'create',     '(strategy)'],
                  ['6',  'const ', 'code',     ' = await ', 'develop',    '(design)'],
                  ['7',  'return ', null,       ' await ',  'launch',     '(code)'],
                ].map(([ln,kw,va,eq,fn,args]) => (
                  <div key={ln} style={{paddingLeft:22}}>
                    <span className="ln">{ln}</span>
                    <span style={{color:'var(--p)'}}>{kw}</span>
                    {va && <span style={{color:'#FF4D6A'}}>{va}</span>}
                    <span style={{color:'var(--gray)'}}>{eq}</span>
                    <span style={{color:'var(--b)'}}>{fn}</span>
                    <span style={{color:'var(--gray)'}}>{args}</span>
                  </div>
                ))}
                <div><span className="ln">8</span><span style={{color:'var(--gray)'}}>{'}'}</span></div>
              </div>
            </div>
            <div style={{height:3}} />
            <div className="code-card">
              <div className="cc-bar"><div className="cc-lang"><div className="cld css" /> identity.css</div></div>
              <div className="cc-code">
                <div><span className="ln">1</span><span style={{color:'#FF4D6A'}}>.danial-komo </span><span style={{color:'var(--gray)'}}>{'{'}</span></div>
                {[
                  ['2','mindset','resultaatgericht','var(--y)'],
                  ['3','kwaliteit','100%','var(--g)'],
                  ['4','deadline','altijd-op-tijd','var(--y)'],
                  ['5','beschikbaar','true','var(--p)'],
                ].map(([ln,k,v,c]) => (
                  <div key={ln} style={{paddingLeft:22}}>
                    <span className="ln">{ln}</span>
                    <span style={{color:'var(--white)'}}>{k}</span>
                    <span style={{color:'var(--gray)'}}>: </span>
                    <span style={{color:c}}>{v}</span>
                    <span style={{color:'var(--gray)'}}>;</span>
                  </div>
                ))}
                <div><span className="ln">6</span><span style={{color:'var(--gray)'}}>{'}'}</span></div>
              </div>
            </div>
          </Reveal>

          <Reveal dir="right" delay={0.15}>
            <div className="sec-eyebrow">over mij</div>
            <h2 className="sec-title">Bouwen met <span style={{color:'var(--r)'}}>strategie</span>,<br />design &amp; code.</h2>
            <p className="about-text">
              Ik ben <span className="aw">Danial Komo</span>, een <span className="ar">digitale ondernemer</span> en ontwikkelaar uit Winterswijk.
              Ik combineer moderne techniek met een commerciële blik. Het doel is niet alleen een mooie website,
              maar een digitale aanwezigheid die <span className="aw">vertrouwen geeft</span> en klanten dichterbij brengt.
            </p>
            <div className="checklist">
              {[
                ['🎯','Resultaatgericht — design dat converteert'],
                ['⚡','Snel geleverd — strakke deadlines, nette oplevering'],
                ['🔒','Kwaliteitsgarantie — code die écht werkt'],
                ['💬','Directe communicatie — altijd bereikbaar'],
              ].map(([ic,tx]) => (
                <div key={tx} className="check-item" {...hoverProps}>
                  <span className="check-icon">{ic}</span>
                  <span className="check-text">{tx}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="stack" className="section sec-border">
        <Reveal>
          <div className="sec-eyebrow">stack</div>
          <h2 className="sec-title">Skills <span style={{color:'var(--r)'}}>Stack</span></h2>
        </Reveal>
        <div className="skills-grid">
          {SKILLS.map((s, i) => <SkillItem key={s.name} {...s} delay={i * 0.08} />)}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section sec-border dark">
        <Reveal>
          <div className="sec-eyebrow">diensten</div>
          <h2 className="sec-title">Wat ik <span style={{color:'var(--r)'}}>bouw</span></h2>
        </Reveal>
        <div className="srv-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.07}>
              <div className="srv-card" {...hoverProps}>
                <div className="srv-line" />
                <div className="srv-num">// {s.num}</div>
                <span className="srv-icon">{s.icon}</span>
                <div className="srv-title">{s.title}</div>
                <p className="srv-desc">{s.desc}</p>
                <div className="srv-tag">{s.tag}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" className="section sec-border">
        <Reveal>
          <div className="sec-eyebrow">projecten</div>
          <h2 className="sec-title">Geselecteerd <span style={{color:'var(--r)'}}>werk</span></h2>
        </Reveal>
        <div className="work-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="project-card" {...hoverProps}>
                <div style={{background:'#07070B'}}>
                  <div className="pc-bar">
                    <div className="pc-btn" style={{background:'#FF5F56'}} />
                    <div className="pc-btn" style={{background:'#FFBD2E'}} />
                    <div className="pc-btn" style={{background:'#27C93F'}} />
                    <span className="pc-filename">{p.file}</span>
                  </div>
                  <div className="pc-code" style={{background:`radial-gradient(circle at top left,${p.accent},transparent 60%)`}}>
                    {p.code}
                  </div>
                </div>
                <div className="pc-body">
                  <div className="pc-name">{p.name}</div>
                  <p className="pc-desc">{p.desc}</p>
                  <div className="pc-tags">
                    {p.tags.map(t => (
                      <span key={t.label} className="pc-tag" style={{color:t.color}}>{t.label}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="section sec-border dark">
        <Reveal>
          <div className="sec-eyebrow">werkwijze</div>
          <h2 className="sec-title">Hoe het <span style={{color:'var(--r)'}}>werkt</span></h2>
        </Reveal>
        <div className="process-grid">
          {PROCESS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <div className="process-step" {...hoverProps}>
                <div className="step-num">{s.num}</div>
                <span className="step-icon">{s.icon}</span>
                <div className="step-title">{s.title}</div>
                <p className="step-desc">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section sec-border" style={{textAlign:'center',overflow:'hidden',position:'relative'}}>
        <div className="contact-bg-word">CONTACT</div>
        <div style={{position:'relative',zIndex:1}}>
          <Reveal>
            <div className="sec-eyebrow" style={{display:'inline-block'}}>contact</div>
            <div className="contact-title">
              START EEN<br />
              <span className="cr">PROJECT</span><br />
              <span className="cg">MET MIJ</span>
            </div>
            <p className="contact-sub">
              Heeft u een idee, bedrijf of project dat sterker online moet staan?
              Stuur een bericht — reactie binnen <span style={{color:'var(--g)'}}>24 uur</span> gegarandeerd.
            </p>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:16}}>
              <div className="contact-terminal">
                <span className="ct-prompt">danial@~$</span>
                <span className="ct-text">mail → hello@danialkomo.com</span>
                <div className="ct-cur" />
              </div>
              <a href="mailto:hello@danialkomo.com" className="btn-red" {...hoverProps}>
                Stuur bericht →
              </a>
            </div>
            <div className="contact-socials">
              {['LinkedIn','GitHub','Instagram','WhatsApp'].map(n => (
                <a key={n} href="#" className="social-link" {...hoverProps}>{n}</a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-l"><span>~/danial-komo</span> — Developer &amp; Designer</div>
        <div className="footer-m">© 2026 — Winterswijk, Nederland</div>
        <div className="footer-r">
          {['LinkedIn','GitHub','Instagram'].map(n => (
            <a key={n} href="#" {...hoverProps}>{n}</a>
          ))}
        </div>
      </footer>
    </>
  )
}