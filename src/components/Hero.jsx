import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    '.NET Developer',
    'DevOps Enthusiast',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <div className={`${styles.geometricShape} ${styles.shape1}`}></div>
        <div className={`${styles.geometricShape} ${styles.shape2}`}></div>
        <div className={`${styles.geometricShape} ${styles.shape3}`}></div>
        <div className={`${styles.geometricShape} ${styles.shape4}`}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Ahmed Fikry Ghamry</h1>
          <div className={styles.divider}></div>

          <div className={styles.roleContainer}>
            <p className={styles.roleText}>
              <span className={styles.roleWord} key={currentRoleIndex}>
                {roles[currentRoleIndex]}
              </span>
            </p>
          </div>

          <p className={styles.subtitle}>Software Engineer</p>
          <p className={styles.description}>
            Software engineer with a solid foundation in developing scalable, maintainable enterprise applications. Passionate about writing clean, efficient code and solving complex technical problems.
          </p>

          <div className={styles.socialLinks}>
            <a href="mailto:ahmed.fikry.ghamry@gmail.com" className={styles.socialLink}>
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed6655fikry/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/ahmedfikry145975"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Github size={20} />
            </a>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={styles.ctaButton}
          >
            Get In Touch
          </a>
        </div>
      </div>

      <button onClick={scrollToNext} className={styles.scrollButton}>
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
