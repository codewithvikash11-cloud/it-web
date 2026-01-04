import styles from './Portfolio.module.css';

const projects = [
    { title: "E-Shop Pro", category: "Shopify Development", color: "#e74c3c" },
    { title: "TechCorp", category: "WordPress Site", color: "#3498db" },
    { title: "Finance App", category: "App Development", color: "#2ecc71" },
    { title: "Travel Go", category: "UI/UX Design", color: "#f1c40f" },
    { title: "HealthPlus", category: "Web Development", color: "#9b59b6" },
    { title: "AutoMotive", category: "Digital Marketing", color: "#e67e22" }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className="container">
                <h2 className="heading-md">Our Latest Work</h2>
                <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px', color: '#a0a0a0' }}>
                    Explore some of our recent projects that showcase our expertise in WordPress, Shopify, web development, and digital marketing.
                </p>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.item}>
                            <div
                                className={styles.image}
                                style={{ backgroundColor: project.color }}
                            /* Placeholder for real image */
                            />
                            <div className={styles.overlay}>
                                <h3 className={styles.title}>{project.title}</h3>
                                <span className={styles.category}>{project.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
