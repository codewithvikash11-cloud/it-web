import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bg}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.tagline}>
                    Future-Ready IT Solutions
                </div>
                <h1 className={styles.headline}>
                    Innovating the Future with <br />
                    <span className={styles.highlight}>Smart Digital Solutions</span>
                </h1>
                <p className={styles.subheadline}>
                    We deliver high-performance websites, scalable applications, and result-driven digital marketing solutions to help businesses grow.
                </p>

                <div className={styles.buttons}>
                    <Link href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
                        Get Free Quote
                    </Link>
                    <Link href="#contact" className={`${styles.btn} ${styles.btnOutline}`}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
