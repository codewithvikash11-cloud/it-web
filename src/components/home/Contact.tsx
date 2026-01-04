
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <h2 className="heading-md">Start Your Project</h2>
                <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px', color: '#a0a0a0' }}>
                    Let’s build something powerful together. Share your project requirements and get a free consultation.
                </p>
                <div className={styles.formContainer}>
                    <form>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name" className={styles.label}>Full Name</label>
                            <input type="text" id="name" className={styles.input} placeholder="John Doe" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>Email Address</label>
                            <input type="email" id="email" className={styles.input} placeholder="john@example.com" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="phone" className={styles.label}>Phone Number</label>
                            <input type="tel" id="phone" className={styles.input} placeholder="+1 (234) 567 890" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="message" className={styles.label}>Your Message</label>
                            <textarea id="message" className={styles.textarea} placeholder="Tell us about your project..." required></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Get Free Quote
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
