import styles from './Testimonials.module.css';

const testimonials = [
    {
        text: "Rovio Tech transformed our business with a stunning website and effective digital marketing. Highly recommended!",
        name: "John Doe",
        role: "CEO, Business Corp",
        avatar: "JD"
    },
    {
        text: "The team is professional, skilled, and delivered our project on time. The App UI is fantastic.",
        name: "Sarah Smith",
        role: "Founder, Startup Inc",
        avatar: "SS"
    },
    {
        text: "Their SEO services helped us rank on the first page of Google. Great ROI!",
        name: "Michael Lee",
        role: "Marketing Manager",
        avatar: "ML"
    }
];

export default function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <div className="container">
                <h2 className="heading-md">What Our Clients Say</h2>
                <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px', color: '#a0a0a0' }}>
                    Our clients trust Rovio Tech for quality, performance, and long-term digital success.
                </p>
                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.stars}>★★★★★</div>
                            <p className={styles.text}>"{item.text}"</p>
                            <div className={styles.client}>
                                <div className={styles.avatar}>{item.avatar}</div>
                                <div className={styles.info}>
                                    <h4>{item.name}</h4>
                                    <span className={styles.role}>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
