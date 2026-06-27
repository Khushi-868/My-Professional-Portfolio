'use client'

import { motion } from 'framer-motion'

const QUICK_FACTS = [
  {
    emoji: '🎓',
    title: 'B.Tech — Computer Science',
    subtitle: '2025 · CGPA 8.32/10',
    bg: 'rgba(59,130,246,0.08)',
  },
  {
    emoji: '📍',
    title: 'India — Open to Remote',
    subtitle: 'Available immediately',
    bg: 'rgba(99,102,241,0.08)',
  },
  {
    emoji: '⚡',
    title: 'Currently Building',
    subtitle: 'Production web apps for clients',
    bg: 'rgba(34,197,94,0.08)',
  },
]

const TAGS = ['Problem solver', 'Team player', 'Fast learner', 'Detail oriented']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'var(--section-padding, 5rem) 0',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 var(--container-padding, 1.5rem)',
        }}
      >
        {/* Section header */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: '2.5rem' }}>
          <p
            style={{
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#3b82f6',
              marginBottom: '8px',
            }}
          >
            Who I am
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: 'var(--color-text-primary)',
            }}
          >
            About{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Me
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left — Bio card */}
          <motion.div
            {...fadeUp(0.2)}
            style={{
              background: 'var(--color-surface, #fff)',
              border: '1px solid rgba(59,130,246,0.12)',
              borderRadius: '16px',
              padding: '1.75rem',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              I&apos;m a software engineer specialising in full-stack development with
              production experience building real client-facing applications — from a Hospital
              Management System to the official Kutumb NGO website. I work across React,
              Next.js, Node.js, and Firebase to deliver fast, scalable web products.
            </p>
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1.75rem',
              }}
            >
              When I&apos;m not coding, I&apos;m exploring new tech, contributing to open source,
              or mentoring peers. I believe great software is built at the intersection of
              empathy and engineering.
            </p>

            {/* Personality tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '5px 14px',
                    borderRadius: '999px',
                    border: '1px solid rgba(59,130,246,0.2)',
                    background: 'rgba(59,130,246,0.05)',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Quick facts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {QUICK_FACTS.map((fact, i) => (
              <motion.div
                key={fact.title}
                {...fadeUp(0.3 + i * 0.1)}
                style={{
                  background: 'var(--color-surface, #fff)',
                  border: '1px solid rgba(59,130,246,0.12)',
                  borderRadius: '14px',
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: fact.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}
                >
                  {fact.emoji}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      marginBottom: '2px',
                    }}
                  >
                    {fact.title}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--color-text-tertiary)',
                    }}
                  >
                    {fact.subtitle}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}