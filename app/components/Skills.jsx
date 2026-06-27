'use client'

import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const skillGroups = [
  {
    category: 'Languages',
    items: ['C', 'C++', 'JavaScript', 'TypeScript'],
    icon: '📝',
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
    icon: '💻',
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Next.js API Routes'],
    icon: '⚙️',
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL', 'Firebase'],
    icon: '🗄️',
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Vercel', 'Google Tag Manager', 'VS Code'],
    icon: '🛠️',
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '2.5rem', textAlign: 'left' }}
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
            Capabilities
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
              Skills & Technologies
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
            My technical stack and tools categorized by specializations.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              className="glass-card"
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '24px' }}>{group.icon}</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>
                  {group.category}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                {group.items.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '8px',
                      border: '1px solid rgba(59, 130, 246, 0.15)',
                      background: 'rgba(59, 130, 246, 0.05)',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--color-text-secondary)',
                      cursor: 'default',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

