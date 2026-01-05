import styles from './TechStack.module.css';

const technologies = [
    { name: "WordPress", color: "#21759b" },
    { name: "Shopify", color: "#96bf48" },
    { name: "React", color: "#61dafb" },
    { name: "Node.js", color: "#339933" },
    { name: "Next.js", color: "#ffffff" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "SEO Tools", color: "#ff2a2a" },
    { name: "Cloud", color: "#ff9900" }
];

export default function TechStack() {
    return (
        <section className={styles.techStack}>
            <div className="container">
                <h2 className="heading-md">Our Technology Stack</h2>
                <div className={styles.scrollContainer}>
                    <div className={styles.track}>
                        {[...technologies, ...technologies].map((tech, index) => (
                            <div key={index} className={styles.card} style={{ '--hover-color': tech.color } as React.CSSProperties}>
                                <span className={styles.name}>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
