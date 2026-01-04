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
                <span className={styles.tagline}>Future of Tech</span>
                <h1 className={styles.headline}>
                    Innovating the Future with <br />
                    <span className={styles.highlight}>Smart Digital Solutions</span>
                </h1>
                <p className={styles.subheadline}>
                    We build high-performance WordPress websites, Shopify stores, scalable web and mobile applications, and result-driven digital marketing solutions.
                </p>
                <div className={styles.buttons}>
                    <Link href="#contact" className="btn btn-primary">Get a Free Quote</Link>
                    <Link href="#contact" className="btn btn-outline">Contact Us</Link>
                </div>
            </div>
        </section>
    );
}
