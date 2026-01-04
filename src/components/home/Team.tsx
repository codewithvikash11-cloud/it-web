import styles from './Team.module.css';

const team = [
    { name: "Ajay Kumar", role: "Founder & Lead Developer", bio: "Expert in WordPress, Shopify, and full-stack development." },
    { name: "Rahul Sharma", role: "UI/UX Designer", bio: "Specializes in modern, user-focused design." },
    { name: "Neha Verma", role: "Digital Marketing Specialist", bio: "SEO and paid marketing strategist." },
    { name: "Aman Singh", role: "Automation & Technology Engineer", bio: "AI tools, automation, and smart systems expert." }
];

export default function Team() {
    return (
        <section className={styles.team}>
            <div className="container">
                <h2 className="heading-md">Meet Our Expert Team</h2>
                <div className={styles.grid}>
                    {team.map((member, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.avatar}>{member.name.charAt(0)}</div>
                            <h3 className={styles.name}>{member.name}</h3>
                            <span className={styles.role}>{member.role}</span>
                            <p className={styles.bio}>{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
