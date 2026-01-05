'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo-horizontal.png"
              alt="Rovio Tech"
              width={180}
              height={50}
              priority
              style={{ width: 'auto', height: '40px' }}
            />
          </Link>

          <button
            className={styles.mobileToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>

          <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <li><Link href="#services" className={styles.link} onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link href="#process" className={styles.link} onClick={() => setIsMenuOpen(false)}>Process</Link></li>
            <li><Link href="#portfolio" className={styles.link} onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
            <li><Link href="#about" className={styles.link} onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="#contact" className={styles.link} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li className={styles.mobileCta}>
              <Link href="#contact" className={styles.ctaBlock} onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
            </li>
          </ul>

          <div className={styles.desktopCta}>
            <Link href="#contact" className={styles.cta}>Get Quote</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
