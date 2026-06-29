'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiChevronDown, FiChevronUp } from 'react-icons/fi'

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, when: 'beforeChildren' } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

/* ─────────────────────────────────────────
   Featured Projects (full cards with images)
───────────────────────────────────────── */
const featuredProjects = [
  {
    title: 'Hospital Management Web Application',
    description:
      'Full-stack healthcare platform with appointment booking, test scheduling, and medicine delivery. Centralised Admin Dashboard with Web Push Notifications for real-time updates.',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    demo: 'https://www.newsamarthhospital.in/',
    repo: '',
    image: '/newsamarth.png',
    badge: 'Production',
    badgeBg: 'rgba(59,130,246,0.09)',
    badgeBorder: 'rgba(59,130,246,0.25)',
    badgeColor: '#3b82f6',
  },
  {
    title: 'EasyGo Cabs',
    description:
      'Cab booking platform with real-time interface and WhatsApp Business API (Meta) for automated booking confirmations and notification workflows.',
    tech: ['Next.js', 'React', 'Meta API'],
    demo: 'https://www.easygocabs.com/',
    repo: '',
    image: '/easygocabs.png',
    badge: 'Production',
    badgeBg: 'rgba(59,130,246,0.09)',
    badgeBorder: 'rgba(59,130,246,0.25)',
    badgeColor: '#3b82f6',
  },
  {
    title: 'Kutumb NGO – Official Website',
    description:
      'Production NGO website built during internship at KineticDrive. Firebase-powered headless CMS with responsive pages for Programs, Gallery, Stories, and Donations.',
    tech: ['Next.js 15', 'React', 'Tailwind CSS', 'Firebase', 'Vercel'],
    demo: 'https://www.kutumbparivaar.in/',
    repo: '',
    image: '/kutumb.png',
    badge: 'Client Work',
    badgeBg: 'rgba(249,115,22,0.09)',
    badgeBorder: 'rgba(249,115,22,0.28)',
    badgeColor: '#ea6c0a',
    fallbackIcon: '🌱',
  },
  {
    title: 'BookNest',
    description:
      'MERN stack book-sharing application with JWT auth, role-based access, and Admin Dashboard backed by RESTful APIs.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    demo: 'https://booknest-online-store.onrender.com/',
    repo: 'https://github.com/Khushi-868/Booknest-online-store',
    image: '/booknest.png',
  },
]

/* ─────────────────────────────────────────
   Other Projects (compact list rows)
───────────────────────────────────────── */
const otherProjects = [
  {
    title: 'Astro Prayag Sangam',
    description: 'Astrology website with services and consultation features.',
    tech: ['Next.js', 'React', 'Vercel'],
    demo: 'https://www.astroprayagsangam.com/',
    repo: '',
  },
  {
    title: 'Hanumat Niketan',
    description: 'Astrology and temple portal with CRM, optimized for Google Ads & Tag Manager.',
    tech: ['Next.js', 'Google Ads', 'GTM', 'CRM'],
    demo: 'https://www.hanumatniketann.in/',
    repo: '',
  },
  {
    title: 'Gangothri Vaidik Jyotish',
    description: 'Astrology platform integrated with Google Ads, GTM data layers, and custom CRM.',
    tech: ['Next.js', 'Google Ads', 'GTM', 'CRM'],
    demo: 'https://www.gangothrivaidikjyotish.com/',
    repo: '',
  },
  {
    title: 'ACS Study',
    description: 'Coaching landing page featuring a Firebase backend for real-time event updates.',
    tech: ['Next.js', 'Firebase', 'React'],
    demo: 'https://www.acsstudy.com/',
    repo: '',
  },
  {
    title: 'Apoorva Agha Portfolio',
    description: 'Personal website for former Systems Manager of Allahabad High Court with Firebase CMS for certificates and gallery.',
    tech: ['Next.js', 'Firebase', 'Tailwind CSS'],
    demo: 'https://www.apoorvaagha.com/',
    repo: '',
  },
  {
    title: 'Dream to CEO',
    description: 'Landing page with full CRM panel to manage content, edit, delete, and create entries for an entrepreneurship course.',
    tech: ['Next.js', 'MongoDB', 'React'],
    demo: 'https://dream-to-ceo.vercel.app/',
    repo: '',
  },
]

/* ─────────────────────────────────────────
   Featured ProjectCard (with image)
───────────────────────────────────────── */
function ProjectCard({ proj }) {
  const [imgErr, setImgErr] = React.useState(false)

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.22 } }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        overflow: 'hidden',
        height: '100%',
        border: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        boxShadow: 'var(--shadow-md)',
        transition: 'box-shadow 0.2s',
      }}
    >
      {/* Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          overflow: 'hidden',
          background: 'var(--color-bg-secondary)',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!imgErr ? (
          <img
            src={proj.image}
            alt={`${proj.title} preview`}
            onError={() => setImgErr(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '8px', padding: '1.5rem', textAlign: 'center',
          }}>
            <span style={{ fontSize: '36px' }}>{proj.fallbackIcon || '💻'}</span>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary, #3b82f6)' }}>
              {proj.title}
            </div>
          </div>
        )}

        {proj.badge && (
          <span style={{
            position: 'absolute', top: '10px', right: '10px',
            padding: '3px 10px', borderRadius: '999px',
            background: proj.badgeBg || 'rgba(34,197,94,0.12)',
            border: `1px solid ${proj.badgeBorder || 'rgba(34,197,94,0.3)'}`,
            fontSize: '10px', fontWeight: 700,
            color: proj.badgeColor || '#16a34a',
            letterSpacing: '0.04em',
            backdropFilter: 'blur(8px)',
            whiteSpace: 'nowrap',
          }}>
            {proj.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem 1.25rem 1rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{
          fontSize: '1.05rem', fontWeight: 700,
          color: 'var(--color-text-primary)',
          margin: '0 0 8px 0', lineHeight: 1.3,
        }}>
          {proj.title}
        </h3>

        <p style={{
          fontSize: '12.5px', color: 'var(--color-text-secondary)',
          lineHeight: 1.65, marginBottom: '16px', flexGrow: 1,
        }}>
          {proj.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {proj.tech.map((tag, i) => (
            <span key={i} style={{
              padding: '3px 8px', borderRadius: '6px',
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg-secondary)',
              fontSize: '10px', fontWeight: 600,
              color: 'var(--color-primary, #3b82f6)',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          paddingTop: '12px', borderTop: '1px solid var(--color-border)',
        }}>
          {proj.demo && (
            <a
              href={proj.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, display: 'inline-flex', alignItems: 'center',
                justifyContent: 'center', gap: '5px',
                padding: '8px 12px', borderRadius: '8px',
                background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                color: '#fff', fontWeight: 700, fontSize: '11px',
                textDecoration: 'none', textAlign: 'center',
                boxShadow: '0 2px 8px rgba(59,130,246,0.22)',
              }}
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
          {proj.repo ? (
            <a
              href={proj.repo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, display: 'inline-flex', alignItems: 'center',
                justifyContent: 'center', gap: '5px',
                padding: '8px 12px', borderRadius: '8px',
                border: '1px solid var(--color-border)',
                background: 'transparent',
                color: 'var(--color-text-primary)',
                fontWeight: 700, fontSize: '11px',
                textDecoration: 'none', textAlign: 'center',
              }}
            >
              <FiGithub /> Code
            </a>
          ) : (
            <span style={{
              flex: 1, display: 'inline-flex', alignItems: 'center',
              justifyContent: 'center', gap: '5px',
              padding: '8px 12px', borderRadius: '8px',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-tertiary)',
              fontWeight: 600, fontSize: '11px',
              cursor: 'not-allowed', textAlign: 'center',
            }}>
              <FiGithub /> Private
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   Compact ProjectRow (no image)
───────────────────────────────────────── */
function ProjectRow({ proj, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        padding: '16px 20px',
        borderRadius: '12px',
        border: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
    >
      {/* Left — Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
          <h4 style={{
            fontSize: '14px', fontWeight: 700,
            color: 'var(--color-text-primary)',
            margin: 0, lineHeight: 1.3,
          }}>
            {proj.title}
          </h4>
          <span style={{
            padding: '2px 8px', borderRadius: '999px',
            background: 'rgba(59,130,246,0.08)',
            border: '1px solid rgba(59,130,246,0.18)',
            fontSize: '9px', fontWeight: 700,
            color: '#3b82f6', letterSpacing: '0.04em',
          }}>
            Client Work
          </span>
        </div>
        <p style={{
          fontSize: '12px', color: 'var(--color-text-tertiary)',
          margin: 0, lineHeight: 1.5,
          overflow: 'hidden', textOverflow: 'ellipsis',
          display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical',
        }}>
          {proj.description}
        </p>
        {/* Tech inline */}
        <div style={{ display: 'flex', gap: '4px', marginTop: '8px', flexWrap: 'wrap' }}>
          {proj.tech.slice(0, 3).map((t, i) => (
            <span key={i} style={{
              padding: '1px 7px', borderRadius: '4px',
              border: '1px solid var(--color-border)',
              fontSize: '9px', fontWeight: 600,
              color: 'var(--color-text-tertiary)',
            }}>
              {t}
            </span>
          ))}
          {proj.tech.length > 3 && (
            <span style={{
              fontSize: '9px', fontWeight: 600,
              color: 'var(--color-text-tertiary)',
              padding: '1px 4px',
            }}>
              +{proj.tech.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Right — Link */}
      <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
        {proj.demo && (
          <a
            href={proj.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${proj.title}`}
            style={{
              width: '34px', height: '34px', borderRadius: '8px',
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg-secondary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none', fontSize: '14px',
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            <FiExternalLink />
          </a>
        )}
        {proj.repo && (
          <a
            href={proj.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${proj.title} source code`}
            style={{
              width: '34px', height: '34px', borderRadius: '8px',
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg-secondary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none', fontSize: '14px',
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            <FiGithub />
          </a>
        )}
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   Section
───────────────────────────────────────── */
export default function Projects() {
  const [showMore, setShowMore] = React.useState(false)

  return (
    <section
      id="projects"
      style={{ padding: 'var(--section-padding, 5rem) 0', position: 'relative' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 var(--container-padding, 1.5rem)' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '2.5rem' }}
        >
          <p style={{
            fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.12em', color: '#3b82f6', marginBottom: '8px',
          }}>
            Portfolio
          </p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900,
            letterSpacing: '-0.03em', color: 'var(--color-text-primary)',
            marginBottom: '10px',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Featured Projects
            </span>
          </h2>
          <p style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', color: 'var(--color-text-secondary)',
            maxWidth: '520px', lineHeight: 1.7,
          }}>
            A selection of production and client projects demonstrating full-stack engineering, third-party integrations, and scalable deployment.
          </p>
        </motion.div>

        {/* Featured Grid — 2×2 */}
        <motion.div
          className="projects-grid"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '22px',
          }}
        >
          {featuredProjects.map((proj, idx) => (
            <ProjectCard key={idx} proj={proj} />
          ))}
        </motion.div>

        {/* ── Other Projects (expandable) ── */}
        {otherProjects.length > 0 && (
          <div style={{ marginTop: '2.5rem' }}>

            {/* Toggle button */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onClick={() => setShowMore(!showMore)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                margin: '0 auto', padding: '10px 24px',
                borderRadius: '12px',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-secondary)',
                fontSize: '13px', fontWeight: 700,
                cursor: 'pointer', outline: 'none',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {showMore ? (
                <>
                  Show Less <FiChevronUp style={{ fontSize: '16px' }} />
                </>
              ) : (
                <>
                  View {otherProjects.length} More Projects <FiChevronDown style={{ fontSize: '16px' }} />
                </>
              )}
            </motion.button>

            {/* Expandable list */}
            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    display: 'flex', flexDirection: 'column', gap: '10px',
                    marginTop: '20px',
                  }}>
                    {otherProjects.map((proj, idx) => (
                      <ProjectRow key={idx} proj={proj} index={idx} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
