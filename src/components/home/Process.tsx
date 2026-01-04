import styles from './Process.module.css';

const steps = [
    { title: "Requirement Analysis", desc: "Understanding your goals and target audience." },
    { title: "Planning & Strategy", desc: "Creating a roadmap for success." },
    { title: "Design & Dev", desc: "Building UI/UX and robust code." },
    { title: "Testing", desc: "Ensuring bug-free performance." },
    { title: "Launch & Support", desc: "Deployment and ongoing maintenance." }
];

export default function Process() {
    return (
        <section id="process" className={styles.process}>
            <div className="container">
                <h2 className="heading-md">Our Work Process</h2>
                <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 50px', color: '#a0a0a0' }}>
                    Our streamlined process ensures quality, transparency, and timely delivery for every project.
                </p>
                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.number}>0{index + 1}</div>
                            <h3 className={styles.title}>{step.title}</h3>
                            <p className={styles.desc}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
