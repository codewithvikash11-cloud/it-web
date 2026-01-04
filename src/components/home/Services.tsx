import styles from './Services.module.css';

const services = [
    {
        title: "WordPress Development",
        icon: "WN",
        description: "Custom WordPress websites built for speed, security, and scalability, tailored to your business goals.",
        items: ["Custom WordPress Websites", "Theme Customization", "Plugin Development", "Speed Optimization"]
    },
    {
        title: "Shopify Development",
        icon: "SH",
        description: "High-converting Shopify stores with custom themes, payment integration, and performance optimization.",
        items: ["Store Setup", "Custom Themes", "App Integration", "Store Optimization"]
    },
    {
        title: "Web Development",
        icon: "WD",
        description: "Modern, responsive websites using the latest technologies and best development practices.",
        items: ["Custom Websites", "CMS Development", "Landing Pages", "Redesigns"]
    },
    {
        title: "App Development",
        icon: "AD",
        description: "Scalable Android, iOS, and cross-platform applications with smooth performance and clean UI.",
        items: ["Android & iOS", "Cross-platform", "PWA", "Enterprise Apps"]
    },
    {
        title: "E-Commerce Solutions",
        icon: "EC",
        description: "Complete eCommerce solutions including WooCommerce, Shopify, product management, and payment gateways.",
        items: ["WooCommerce", "Custom Stores", "Payment Gateways", "Inventory Management"]
    },
    {
        title: "UI/UX Design",
        icon: "UI",
        description: "User-focused UI/UX designs that enhance engagement and improve conversion rates.",
        items: ["Website & Mobile UI", "Wireframing", "Prototyping", "User Research"]
    },
    {
        title: "SEO Services",
        icon: "SE",
        description: "Data-driven SEO strategies to improve search visibility, traffic, and online growth.",
        items: ["On-page & Technical SEO", "audit & Strategy", "Local SEO", "Keyword Research"]
    },
    {
        title: "Digital Marketing",
        icon: "DM",
        description: "Result-oriented digital marketing services including social media, PPC, and brand promotion.",
        items: ["Social Media", "PPC & Google Ads", "Content Marketing", "Brand Growth"]
    },
    {
        icon: "⚡",
        title: "Automation Solutions",
        description: "Streamline workflows with smart automation tools.",
        items: ["Chatbots & AI Agents", "Workflow Automation", "Business Intelligence", "Cost Reduction"]
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <div className="container">
                <h2 className="heading-md">Our IT & Digital Services</h2>
                <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px', color: '#a0a0a0' }}>
                    We offer end-to-end IT services designed to help businesses grow, innovate, and succeed in the digital world.
                </p>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p style={{ color: '#ccc', fontSize: '0.95rem', marginBottom: '15px', lineHeight: '1.5' }}>{service.description}</p>
                            <ul className={styles.list}>
                                {service.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
