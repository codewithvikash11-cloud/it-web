import Link from 'next/link';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <div className={styles.row}>
                    <div className={styles.imageContainer}>
                        <div className={styles.image}>
                            <Image
                                src="/images/about-office.png"
                                alt="Rovio Tech Office"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className={styles.text}>
                        <h2 className="heading-md">About Rovio Tech</h2>
                        <p className={styles.description}>
                            Rovio Tech is a professional IT services company delivering secure, scalable, and performance-driven digital solutions for businesses worldwide.
                        </p>

                        <div className={styles.highlights}>
                            <div className={styles.highlightItem}>
                                <span className={styles.check}>✓</span>
                                <span className={styles.highlightText}>Experienced IT Professionals</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <span className={styles.check}>✓</span>
                                <span className={styles.highlightText}>Modern Technology Stack</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <span className={styles.check}>✓</span>
                                <span className={styles.highlightText}>Client-Focused Approach</span>
                            </div>
                            <div className={styles.highlightItem}>
                                <span className={styles.check}>✓</span>
                                <span className={styles.highlightText}>Global Quality Standards</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
