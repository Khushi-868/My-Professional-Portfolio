'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi'

const experiences = [
  {
    company: 'KineticDrive Private Limited',
    role: 'Full Stack Engineer',
    duration: 'Jan 2026 – Present',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Promoted to a permanent role after successfully delivering key production applications during a 2-month internship. Now leading development across multiple high-impact client projects.',
    responsibilities: [
      'Leading the ongoing development and scaling of the Hospital Management System using Next.js, Node.js, and MongoDB.',
      'Architected a centralized Admin Dashboard for managing appointments, doctors, tests, and blogs.',
      'Built and maintained high-traffic astrology platforms (Astro Prayag Sangam, Hanumat Niketan, Gangothri Vaidik) integrating Google Ads, GTM, and custom CRMs.',
      'Engineered dynamic landing pages and administrative dashboards for coaching institutes and entrepreneurship programs (Dream to CEO, ACS Study).',
    ],
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Vercel'],
    links: [
      { label: 'Hospital Project', href: 'https://www.newsamarthhospital.in/' },
      { label: 'Dream to CEO', href: 'https://dream-to-ceo.vercel.app/' },
    ],
  },
  {
    company: 'KineticDrive Private Limited',
    role: 'Full Stack Developer Intern',
    duration: 'Nov 2025 – Jan 2026',
    location: 'Remote',
    type: 'Internship',
    description:
      'Started as an intern and rapidly contributed to production-level web applications for real clients, working across frontend and backend with modern tooling.',
    responsibilities: [
      'Developed and deployed the initial version of the Hospital Management System.',
      'Developed and deployed the official Kutumb NGO website using Next.js 15, Firebase, and Tailwind CSS.',
      'Developed a professional portfolio with a secure Firebase-backed CMS for the former Systems Manager of Allahabad High Court.',
      'Integrated WhatsApp Business API (Meta) for automated booking and notification workflows.',
    ],
    tech: ['Next.js', 'React', 'Firebase', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    links: [
      { label: 'Kutumb NGO', href: 'https://www.kutumbparivaar.in/' },
      { label: 'Apoorva Agha', href: 'https://www.apoorvaagha.com/' },
    ],
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: 'var(--section-padding, 5rem) 0', position: 'relative' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 var(--container-padding, 1.5rem)' }}>

        {/* Section header */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: '2.5rem' }}>
          <p style={{
            fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.12em', color: '#3b82f6', marginBottom: '8px',
          }}>
            Career
          </p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900,
            letterSpacing: '-0.03em', color: 'var(--color-text-primary)',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Experience
            </span>
          </h2>
          <p style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', color: 'var(--color-text-secondary)',
            marginTop: '10px', maxWidth: '520px', lineHeight: 1.7,
          }}>
            Professional experience building production-ready applications for real clients and businesses.
          </p>
        </motion.div>

        {/* Experience cards */}
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            {...fadeUp(0.2 + idx * 0.15)}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '18px',
              padding: '2rem',
              marginBottom: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Accent line at top */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #a78bfa)',
              borderRadius: '18px 18px 0 0',
            }} />

            {/* Header row */}
            <div style={{
              display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
              gap: '16px', marginBottom: '1rem', flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                {/* Icon */}
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'rgba(59,130,246,0.08)',
                  border: '1px solid rgba(59,130,246,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', color: '#3b82f6', flexShrink: 0,
                }}>
                  <FiBriefcase />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary)',
                    margin: '0 0 4px 0', lineHeight: 1.3,
                  }}>
                    {exp.role}
                  </h3>
                  <p style={{
                    fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-primary)',
                    margin: '0 0 6px 0',
                  }}>
                    {exp.company}
                  </p>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '5px',
                      fontSize: '12px', color: 'var(--color-text-tertiary)', fontWeight: 500,
                    }}>
                      <FiCalendar style={{ fontSize: '12px' }} /> {exp.duration}
                    </span>
                    {exp.location && (
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                        fontSize: '12px', color: 'var(--color-text-tertiary)', fontWeight: 500,
                      }}>
                        <FiMapPin style={{ fontSize: '12px' }} /> {exp.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Type badge */}
              {exp.type && (
                <span style={{
                  padding: '5px 14px', borderRadius: '999px',
                  background: 'rgba(59,130,246,0.08)',
                  border: '1px solid rgba(59,130,246,0.2)',
                  fontSize: '11px', fontWeight: 700,
                  color: '#3b82f6', whiteSpace: 'nowrap',
                  letterSpacing: '0.03em',
                }}>
                  {exp.type}
                </span>
              )}
            </div>

            {/* Description */}
            {exp.description && (
              <p style={{
                fontSize: '0.92rem', color: 'var(--color-text-secondary)',
                lineHeight: 1.75, marginBottom: '1.25rem', maxWidth: '680px',
              }}>
                {exp.description}
              </p>
            )}

            {/* Responsibilities */}
            <div style={{
              padding: '1rem 1.25rem', borderRadius: '12px',
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              marginBottom: '1.25rem',
            }}>
              <p style={{
                fontSize: '10px', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.1em', color: 'var(--color-text-tertiary)',
                marginBottom: '10px',
              }}>
                Key Contributions
              </p>
              <ul style={{
                margin: 0, paddingLeft: '1.1rem',
                display: 'flex', flexDirection: 'column', gap: '8px',
              }}>
                {exp.responsibilities.map((item, i) => (
                  <li key={i} style={{
                    fontSize: '13px', color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                  }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
              {exp.tech.map((t) => (
                <span key={t} style={{
                  padding: '3px 10px', borderRadius: '6px',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-bg-secondary)',
                  fontSize: '10px', fontWeight: 600,
                  color: 'var(--color-primary, #3b82f6)',
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Project links */}
            {exp.links && exp.links.length > 0 && (
              <div style={{
                display: 'flex', gap: '10px', flexWrap: 'wrap',
                paddingTop: '12px', borderTop: '1px solid var(--color-border)',
              }}>
                {exp.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '5px',
                      fontSize: '12px', fontWeight: 600,
                      color: 'var(--color-primary)',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s',
                    }}
                  >
                    <FiExternalLink style={{ fontSize: '12px' }} />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
