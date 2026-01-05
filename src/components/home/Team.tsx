import Image from 'next/image';
import styles from './Team.module.css';

const team = [
    {
        name: "Vikash Khadoliya",
        role: "Founder & Lead Developer",
        bio: "Expert in WordPress, Shopify, and full-stack development.",
        image: "/images/team-vikash.png"
    },
    {
        name: "Rahul Sharma",
        role: "UI/UX Designer",
        bio: "Specializes in modern, user-focused design.",
        image: "/images/team-rahul.png"
    },
    {
        name: "Neha Verma",
        role: "Digital Marketing Specialist",
        bio: "SEO and paid marketing strategist.",
        image: "/images/team-neha.png"
    },
    {
        name: "Aman Singh",
        role: "Automation & Technology Engineer",
        bio: "AI tools, automation, and smart systems expert.",
        image: "/images/team-aman.png"
    }
];

export default function Team() {
    return (
        <section className={styles.team}>
            <div className="container">
                <h2 className="heading-md">Meet Our Expert Team</h2>
                <div className={styles.grid}>
                    {team.map((member, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.avatar}>
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={100}
                                        height={100}
                                        className={styles.memberImage}
                                    />
                                ) : (
                                    member.name.charAt(0)
                                )}
                            </div>
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
