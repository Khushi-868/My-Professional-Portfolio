'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

const SOCIALS = [
  { icon: <FiGithub />, href: 'https://github.com/khushiagarwal', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com/in/khushiagarwal', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:khushi.agarwal@email.com', label: 'Email' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '10px',
  border: '1px solid rgba(59,130,246,0.2)',
  background: 'var(--color-surface-secondary, rgba(59,130,246,0.03))',
  color: 'var(--color-text-primary)',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'inherit',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null) // { type: 'success' | 'error', text: string }

  const showToast = (type, text) => {
    setToast({ type, text })
    setTimeout(() => setToast(null), 4000)
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Khushi',
          from_email: form.email,
          to_email: 'ka587183@gmail.com',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false)
        setSubmitted(true)
        showToast('success', 'Thank you for your message 😃')
        setTimeout(() => {
          setSubmitted(false)
          setForm({ name: '', email: '', subject: '', message: '' })
        }, 3000)
      })
      .catch((error) => {
        setLoading(false)
        console.error('EmailJS error:', error)
        showToast('error', "I didn't receive your message 😢 Please try again.")
      })
  }

  return (
    <section
      id="contact"
      style={{
        padding: 'var(--section-padding, 5rem) 0',
        position: 'relative',
      }}
    >
      {/* Toast notification */}
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'fixed',
            top: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 24px',
            borderRadius: '14px',
            background: toast.type === 'success'
              ? 'linear-gradient(135deg, #14532d, #166534)'
              : 'linear-gradient(135deg, #7f1d1d, #991b1b)',
            border: toast.type === 'success'
              ? '1px solid rgba(34,197,94,0.4)'
              : '1px solid rgba(239,68,68,0.4)',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 600,
            boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
            backdropFilter: 'blur(12px)',
            whiteSpace: 'nowrap',
          }}
        >
          {toast.type === 'success'
            ? <FiCheckCircle style={{ fontSize: '18px', color: '#4ade80', flexShrink: 0 }} />
            : <FiAlertCircle style={{ fontSize: '18px', color: '#f87171', flexShrink: 0 }} />}
          {toast.text}
        </motion.div>
      )}
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '0 var(--container-padding, 1.5rem)',
          textAlign: 'center',
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
            Let&apos;s connect
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: 'var(--color-text-primary)',
              marginBottom: '12px',
            }}
          >
            Get in{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Touch
            </span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.75,
              maxWidth: '460px',
              margin: '0 auto',
            }}
          >
            I&apos;m actively looking for new opportunities. Whether you have a role, a project,
            or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        {/* Contact form card */}
        <motion.div
          {...fadeUp(0.2)}
          style={{
            background: 'var(--color-surface, #fff)',
            border: '1px solid rgba(59,130,246,0.14)',
            borderRadius: '18px',
            padding: '2rem',
            marginBottom: '1.5rem',
            textAlign: 'left',
          }}
        >
          {submitted ? (
            // Success state
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                padding: '2rem 0',
                textAlign: 'center',
              }}
            >
              <FiCheckCircle style={{ fontSize: '48px', color: '#22c55e' }} />
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                }}
              >
                Message sent!
              </div>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Thanks for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                style={{
                  marginTop: '8px',
                  padding: '10px 24px',
                  borderRadius: '10px',
                  border: '1px solid rgba(59,130,246,0.25)',
                  background: 'transparent',
                  color: '#3b82f6',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Name + Email row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '12px',
                  marginBottom: '12px',
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--color-text-secondary)',
                      marginBottom: '6px',
                    }}
                  >
                    Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Khushi Agarwal"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--color-text-secondary)',
                      marginBottom: '6px',
                    }}
                  >
                    Email <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="khushi@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: '12px' }}>
                <label
                  htmlFor="subject"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--color-text-secondary)',
                    marginBottom: '6px',
                  }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Job opportunity / Project collaboration"
                  value={form.subject}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: '20px' }}>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--color-text-secondary)',
                    marginBottom: '6px',
                  }}
                >
                  Message <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about the opportunity or what you have in mind..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    minHeight: '110px',
                  }}
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '13px',
                  borderRadius: '12px',
                  border: 'none',
                  background: loading
                    ? 'rgba(59,130,246,0.5)'
                    : 'linear-gradient(135deg, #3b82f6, #6366f1)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontFamily: 'inherit',
                  boxShadow: '0 4px 18px rgba(59,130,246,0.3)',
                  transition: 'background 0.2s',
                }}
              >
                {loading ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <FiSend style={{ fontSize: '16px' }} />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Social icons row */}
        <motion.div
          {...fadeUp(0.35)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontSize: '12px',
              color: 'var(--color-text-tertiary)',
              marginRight: '4px',
            }}
          >
            Or find me on
          </span>
          {SOCIALS.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={s.label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid rgba(59,130,246,0.2)',
                background: 'var(--color-surface)',
                color: 'var(--color-text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.15rem',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}