'use client'

import { motion } from 'framer-motion'

const ACHIEVEMENTS = [
  {
    emoji: '🎓',
    title: 'GATE 2026 Qualified',
    subtitle: 'Secured GATE Score 366 and AIR 25131 (CS & IT)',
    bg: 'rgba(234,179,8,0.1)',
    border: 'rgba(234,179,8,0.2)',
  },
  {
    emoji: '💻',
    title: '300+ DSA Problems Solved',
    subtitle: 'Solved on LeetCode and GeeksforGeeks',
    bg: 'rgba(34,197,94,0.1)',
    border: 'rgba(34,197,94,0.2)',
  },
  {
    emoji: '📜',
    title: 'Web Development Certificate',
    subtitle: 'Udemy (HTML, CSS, JavaScript)',
    bg: 'rgba(99,102,241,0.1)',
    border: 'rgba(99,102,241,0.2)',
  },
  {
    emoji: '🗄️',
    title: 'MySQL Certificate',
    subtitle: 'Udemy (Database Design and SQL Queries)',
    bg: 'rgba(59,130,246,0.1)',
    border: 'rgba(59,130,246,0.2)',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Achievements() {
  return (
    <section
      id="achievements"
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '2.5rem' }}
        >
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
            Highlights
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: 'var(--color-text-primary)',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Achievements
            </span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
              color: 'var(--color-text-secondary)',
              marginTop: '10px',
              maxWidth: '520px',
              lineHeight: 1.7,
            }}
          >
            A few milestones I&apos;m proud of across competitions, research, and community.
          </p>
        </motion.div>

        {/* Achievement cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '14px',
          }}
        >
          {ACHIEVEMENTS.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: 'var(--color-surface, #fff)',
                border: `1px solid ${item.border}`,
                borderRadius: '14px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                cursor: 'default',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: item.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  flexShrink: 0,
                }}
              >
                {item.emoji}
              </div>

              {/* Text */}
              <div style={{ paddingTop: '2px' }}>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    marginBottom: '4px',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'var(--color-text-tertiary)',
                    lineHeight: 1.5,
                  }}
                >
                  {item.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}