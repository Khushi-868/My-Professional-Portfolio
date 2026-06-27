'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'

const SOCIALS = [
  { icon: <FiGithub />, href: 'https://github.com/khushiagarwal', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com/in/khushiagarwal', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:khushi.agarwal@email.com', label: 'Email' },
]

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'relative',
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg-secondary)',
        padding: 'clamp(2rem, 4vw, 3rem) 0 1.5rem',
      }}
    >
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: '0 var(--container-padding, 1.5rem)',
      }}>

        {/* Top row — Logo + Nav + Socials */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem',
        }}>
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              fontSize: '1.4rem', fontWeight: 800, textDecoration: 'none',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              letterSpacing: '-0.02em',
            }}
          >
            KA
          </a>

          {/* Nav links */}
          <nav style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{
                  padding: '6px 14px', borderRadius: '8px',
                  fontSize: '13px', fontWeight: 500,
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s, background 0.2s',
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                  color: 'var(--color-text-tertiary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.95rem', textDecoration: 'none',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'var(--color-border)',
          marginBottom: '1.25rem',
        }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{
            fontSize: '12.5px', color: 'var(--color-text-tertiary)',
            fontWeight: 500, margin: 0,
            display: 'flex', alignItems: 'center', gap: '4px',
          }}>
            © {new Date().getFullYear()} Khushi Agarwal. Built with
            <FiHeart style={{ fontSize: '11px', color: '#ef4444' }} />
            using Next.js
          </p>

          {/* Back to top */}
          <button
            onClick={() => document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Back to top"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              padding: '6px 14px', borderRadius: '8px',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              color: 'var(--color-text-tertiary)',
              fontSize: '12px', fontWeight: 600,
              cursor: 'pointer', outline: 'none',
              fontFamily: 'inherit',
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            <FiArrowUp style={{ fontSize: '12px' }} />
            Back to top
          </button>
        </div>
      </div>
    </motion.footer>
  )
}
