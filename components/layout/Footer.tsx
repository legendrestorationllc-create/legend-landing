'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useT } from '@/providers/LanguageProvider'

export function Footer() {
  const { t } = useT()
  const [logoSrc, setLogoSrc] = useState('/logo.jpg')
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--navy2)', borderTop: '1px solid rgba(255,255,255,.08)', padding: '3rem 1.5rem 2rem' }}>
      <div className="container-lg">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
          gap: '2.5rem', marginBottom: '2.5rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
              <div style={{ background: 'white', borderRadius: 999, padding: '3px 8px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <Image
                  src={logoSrc}
                  alt="Legend Restoration"
                  height={28}
                  width={100}
                  style={{ objectFit: 'contain', width: 'auto', height: 28 }}
                  sizes="100px"
                  onError={() => setLogoSrc('/logo.svg')}
                />
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.7, maxWidth: 260 }}>
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: '0.875rem', color: 'white', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {t.footer.contactTitle}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { icon: '📞', text: t.contact.phone, href: t.contact.phoneHref },
                { icon: '📧', text: t.contact.email, href: `mailto:${t.contact.email}` },
                { icon: '📍', text: 'Connecticut, EE.UU.', href: null },
              ].map((item) => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.875rem' }}>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,.6)', textDecoration: 'none' }}>
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,.6)' }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-sora)', fontWeight: 700, fontSize: '0.875rem', color: 'white', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {t.footer.servicesTitle}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {t.footer.services.map((s) => (
                <span key={s} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,.5)' }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,.35)' }}>
            {t.footer.copyright(year)}
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[t.footer.privacy, t.footer.terms].map((l) => (
              <span key={l} style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,.35)', cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
