'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiChevronDown } from 'react-icons/fi'

/* ─────────────────────────────────────────
   Typewriter hook
───────────────────────────────────────── */
function useTypewriter(words, speed = 85, deleteSpeed = 50, pause = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout

    if (!deleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => setCharIndex((c) => c + 1), speed)
      } else {
        timeout = setTimeout(() => setDeleting(true), pause)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex((c) => c - 1), deleteSpeed)
      } else {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      }
    }

    setDisplayed(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, speed, deleteSpeed, pause])

  return displayed
}

/* ─────────────────────────────────────────
   Constants
───────────────────────────────────────── */
const ROLES = ['Software Engineer', 'Full Stack Developer', 'React Specialist', 'Next.js Engineer']

const TECH_STACK = [
  { label: 'React',      icon: '⚛️' },
  { label: 'Next.js',   icon: '▲' },
  { label: 'Node.js',   icon: '🟢' },
  { label: 'MongoDB',   icon: '🍃' },
  { label: 'Firebase',  icon: '🔥' },
  { label: 'Tailwind CSS', icon: '🎨' },
]

const STATS = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Shipped' },
  { value: '5+', label: 'Tech Stacks' },
]

const SOCIALS = [
  { icon: <FiGithub />,   href: 'https://github.com/khushiagarwal',   label: 'GitHub',   id: 'social-github' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com/in/khushiagarwal', label: 'LinkedIn', id: 'social-linkedin' },
  { icon: <FiMail />,     href: 'mailto:khushi.agarwal@email.com',    label: 'Email',    id: 'social-email' },
]

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export default function HeroSection() {
  const role = useTypewriter(ROLES)
  const shouldReduce = useReducedMotion()
  const [imgError, setImgError] = useState(false)

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  })

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  })

  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '90px',
        paddingBottom: '80px',
      }}
    >
      {/* ── Global keyframes ── */}
      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 0.28; transform: scale(1); }
          50%       { opacity: 0.48; transform: scale(1.12); }
        }
        @keyframes statusPing {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(34,197,94,0.55); }
          50%       { opacity: 0.75; box-shadow: 0 0 0 5px rgba(34,197,94,0); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes scrollFloat {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes photoFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes gridFade {
          0%   { opacity: 0.04; }
          100% { opacity: 0.07; }
        }
      `}</style>

      {/* ── Background atmosphere ── */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        {/* Top-right glow */}
        <div style={{
          position: 'absolute', top: '-15%', right: '-8%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 68%)',
          filter: 'blur(80px)',
          animation: shouldReduce ? undefined : 'heroPulse 9s ease-in-out infinite',
        }} />
        {/* Bottom-left glow */}
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-10%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 68%)',
          filter: 'blur(80px)',
          animation: shouldReduce ? undefined : 'heroPulse 11s ease-in-out infinite 3s',
        }} />
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(59,130,246,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        {/* Hairline top edge */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.3) 40%, rgba(139,92,246,0.3) 60%, transparent 100%)',
        }} />
      </div>

      {/* ── Main grid ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.15fr)',
          alignItems: 'center',
          gap: 'clamp(3rem, 6vw, 5rem)',
          maxWidth: '1160px',
          width: '100%',
          margin: '0 auto',
          padding: '0 clamp(1.25rem, 4vw, 2rem)',
          position: 'relative',
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* ════════════════════════════
            LEFT — Photo & Stats
        ════════════════════════════ */}
        <motion.div
          {...fadeIn(0.1)}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem' }}
        >
          {/* Photo */}
          <div
            style={{
              position: 'relative',
              animation: shouldReduce ? undefined : 'photoFloat 5s ease-in-out infinite',
            }}
          >
            {/* Soft outer halo */}
            <div style={{
              position: 'absolute', inset: '-16px',
              borderRadius: '36px',
              background: 'linear-gradient(135deg, rgba(59,130,246,0.18) 0%, rgba(139,92,246,0.14) 50%, rgba(236,72,153,0.1) 100%)',
              filter: 'blur(22px)',
              zIndex: 0,
            }} />

            {/* Frame */}
            <div style={{
              position: 'relative',
              width: '270px',
              height: '310px',
              borderRadius: '30px',
              padding: '3px',
              background: 'linear-gradient(145deg, #3b82f6 0%, #8b5cf6 50%, #a78bfa 100%)',
              zIndex: 1,
              boxShadow: '0 20px 60px rgba(59,130,246,0.22), 0 4px 20px rgba(139,92,246,0.12)',
            }}>
              {!imgError ? (
                <img
                  src="/resumephoto.jpeg"
                  alt="Khushi Agarwal — Software Engineer"
                  onError={() => setImgError(true)}
                  style={{
                    width: '100%', height: '100%',
                    borderRadius: '28px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              ) : (
                <div style={{
                  width: '100%', height: '100%', borderRadius: '28px',
                  background: 'var(--color-surface)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '56px', fontWeight: 800,
                  background: 'linear-gradient(135deg,#1e3a5f,#1e1b4b)',
                  color: '#93c5fd',
                  letterSpacing: '-0.03em',
                }}>
                  KA
                </div>
              )}
            </div>

            {/* Badge — top left */}
            <motion.div
              animate={shouldReduce ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: '-14px', left: '-20px',
                background: 'var(--color-surface)',
                border: '1px solid rgba(59,130,246,0.25)',
                borderRadius: '12px',
                padding: '9px 14px',
                fontSize: '12px', fontWeight: 700,
                color: 'var(--color-text-primary)',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 24px rgba(0,0,0,0.14)',
                zIndex: 5,
                display: 'flex', alignItems: 'center', gap: '7px',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#22c55e', flexShrink: 0,
                animation: shouldReduce ? undefined : 'statusPing 2s infinite',
              }} />
              <span style={{ color: 'var(--color-text-secondary)' }}>Available for hire</span>
            </motion.div>

            {/* Badge — bottom right */}
            <motion.div
              animate={shouldReduce ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              style={{
                position: 'absolute', bottom: '-14px', right: '-20px',
                background: 'var(--color-surface)',
                border: '1px solid rgba(139,92,246,0.25)',
                borderRadius: '12px',
                padding: '9px 14px',
                fontSize: '12px', fontWeight: 700,
                color: 'var(--color-text-primary)',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 24px rgba(0,0,0,0.14)',
                zIndex: 5,
                display: 'flex', alignItems: 'center', gap: '7px',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span style={{ fontSize: '14px' }}>💼</span>
              <span style={{ color: 'var(--color-text-secondary)' }}>Full Stack Dev</span>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.5)}
            role="list"
            aria-label="Quick stats"
            style={{
              display: 'flex',
              borderRadius: '16px',
              border: '1px solid var(--color-border)',
              overflow: 'hidden',
              width: '100%',
              maxWidth: '270px',
              background: 'var(--color-surface)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                role="listitem"
                style={{
                  flex: 1, textAlign: 'center', padding: '14px 8px',
                  borderLeft: i > 0 ? '1px solid var(--color-border)' : undefined,
                }}
              >
                <div style={{
                  fontSize: '18px', fontWeight: 800,
                  background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', marginTop: '3px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            {...fadeUp(0.65)}
            role="list"
            aria-label="Social links"
            style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
          >
            {SOCIALS.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                id={s.id}
                role="listitem"
                whileHover={shouldReduce ? {} : { scale: 1.12, y: -3 }}
                whileTap={shouldReduce ? {} : { scale: 0.92 }}
                style={{
                  width: '42px', height: '42px', borderRadius: '12px',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                  color: 'var(--color-text-secondary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.05rem', textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ════════════════════════════
            RIGHT — Content
        ════════════════════════════ */}
        <div style={{ minWidth: 0 }}>

          {/* Status pill */}
          <motion.div {...fadeUp(0.1)} style={{ marginBottom: '1.75rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px', borderRadius: '999px',
              background: 'rgba(34,197,94,0.08)',
              border: '1px solid rgba(34,197,94,0.25)',
              fontSize: '13px', fontWeight: 600, color: '#16a34a',
              letterSpacing: '0.01em',
            }}>
              <span aria-hidden style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#22c55e', display: 'inline-block', flexShrink: 0,
                animation: shouldReduce ? undefined : 'statusPing 2s infinite',
              }} />
              Open to Opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            {...fadeUp(0.18)}
            style={{
              fontSize: '1rem', fontWeight: 500,
              color: 'var(--color-text-tertiary)',
              marginBottom: '0.5rem',
              letterSpacing: '0.02em',
            }}
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.26)}
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.06,
              marginBottom: '0.8rem',
              letterSpacing: '-0.04em',
            }}
          >
            Khushi{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 60%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Agarwal
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            {...fadeUp(0.38)}
            aria-live="polite"
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
              fontWeight: 600,
              color: 'var(--color-text-secondary)',
              marginBottom: '1.5rem',
              minHeight: '2.2rem',
              letterSpacing: '-0.01em',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
            }}
          >
            <span style={{
              color: '#3b82f6', marginRight: '7px',
              fontWeight: 700, fontFamily: 'monospace', fontSize: '1.1em',
            }}>&gt;_</span>
            {role}
            <span
              aria-hidden
              style={{
                display: 'inline-block', width: '2px', height: '1.1em',
                background: '#8b5cf6', marginLeft: '2px', verticalAlign: 'middle',
                borderRadius: '1px',
                animation: shouldReduce ? undefined : 'cursorBlink 1s step-end infinite',
              }}
            />
          </motion.div>

          {/* Divider */}
          <motion.div
            {...fadeIn(0.44)}
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, var(--color-border) 0%, transparent 80%)',
              marginBottom: '1.5rem',
              maxWidth: '440px',
            }}
          />

          {/* Description */}
          <motion.p
            {...fadeUp(0.5)}
            style={{
              fontSize: 'clamp(0.92rem, 1.8vw, 1.05rem)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.85,
              marginBottom: '1.75rem',
              maxWidth: '480px',
            }}
          >
            I build fast, accessible web applications end-to-end — from clean
            component architecture to robust server APIs. Passionate about
            crafting products that are both technically excellent and delightful
            to use.
          </motion.p>

          {/* Tech stack chips */}
          <motion.div {...fadeUp(0.58)} style={{ marginBottom: '2.25rem' }}>
            <p style={{
              fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.12em', color: 'var(--color-text-tertiary)',
              marginBottom: '12px',
            }}>
              Core Technologies
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {TECH_STACK.map((tech) => (
                <motion.span
                  key={tech.label}
                  whileHover={shouldReduce ? {} : { scale: 1.05, y: -2 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                    padding: '5px 13px', borderRadius: '8px',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-surface)',
                    fontSize: '12px', fontWeight: 600,
                    color: 'var(--color-text-secondary)',
                    cursor: 'default',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <span style={{ fontSize: '11px' }}>{tech.icon}</span>
                  {tech.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.68)}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <motion.a
              href="/resume.pdf"
              download
              id="download-resume"
              whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 26px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(59,130,246,0.32)',
                letterSpacing: '-0.01em',
                transition: 'box-shadow 0.2s',
              }}
            >
              <FiDownload style={{ flexShrink: 0 }} />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              id="contact-me-btn"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 26px', borderRadius: '12px',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                fontWeight: 700, fontSize: '0.95rem',
                textDecoration: 'none', letterSpacing: '-0.01em',
                boxShadow: 'var(--shadow-sm)',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
            >
              Contact Me
              <FiArrowRight style={{ flexShrink: 0 }} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to About section"
        style={{
          position: 'absolute', bottom: '2.2rem', left: '50%',
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          padding: '8px 18px', borderRadius: '999px',
          border: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
          color: 'var(--color-text-tertiary)',
          fontSize: '12px', fontWeight: 500,
          cursor: 'pointer', outline: 'none',
          animation: shouldReduce ? undefined : 'scrollFloat 2.2s ease-in-out infinite',
          zIndex: 1, backdropFilter: 'blur(8px)',
          boxShadow: 'var(--shadow-sm)',
          transition: 'border-color 0.2s',
        }}
      >
        <span>Scroll to explore</span>
        <FiChevronDown style={{ fontSize: '14px' }} />
      </motion.button>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 820px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > *:first-child {
            order: 1;
          }
          .hero-grid > *:last-child {
            order: 0;
            align-items: center;
          }
        }
      `}</style>
    </section>
  )
}