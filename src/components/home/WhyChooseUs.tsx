import styles from './WhyChooseUs.module.css';

const reasons = [
    {
        title: "Expert Developers & Designers",
        text: "We combine technology, creativity, and strategy to deliver reliable, scalable, and future-ready digital solutions."
    },
    {
        title: "WordPress & Shopify Specialists",
        text: "Deep expertise in the world's leading CMS and e-commerce platforms to help you scale effortlessly."
    },
    {
        title: "SEO & Performance Focused",
        text: "We build websites that rank high and load fast for maximum conversion and user retention."
    },
    {
        title: "Secure & Scalable Solutions",
        text: "Future-proof architecture ensuring your digital assets are safe and grow with your business."
    },
    {
        title: "On-time Project Delivery",
        text: "Our streamlined process ensures quality, transparency, and timely delivery for every project."
    },
    {
        title: "24/7 Dedicated Support",
        text: "Our relationship doesn't end at launch; we are always here to help you succeed."
    }
];

export default function WhyChooseUs() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className="heading-md">Why Choose Rovio Tech</h2>
                <div className={styles.grid}>
                    {reasons.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{index + 1}</div>
                            <div className={styles.content}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
