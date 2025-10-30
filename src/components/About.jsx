import { Briefcase, Award } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  const stats = [
    {
      icon: Briefcase,
      value: '4+',
      label: 'Years of Software\nDevelopment',
    },
    {
      icon: Award,
      value: 'CKA',
      label: 'Certified Kubernetes\nAdministrator (In Progress)',
    },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>About Me</h2>
            <h3 className={styles.subtitle}>Software Engineer</h3>
            <div className={styles.divider}></div>
            
            <p className={styles.description}>
              Software engineer with a solid foundation in developing scalable, maintainable enterprise applications. Passionate about writing clean, efficient code and solving complex technical problems. Eager to contribute to impactful projects and grow in a dynamic, collaborative environment.
            </p>
          </div>

          <div className={styles.statsSection}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <Icon size={32} />
                  </div>
                  <h3 className={styles.statValue}>{stat.value}</h3>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
