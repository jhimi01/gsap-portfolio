import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'GSAP', 
  'Node.js', 'Git', 'Responsive Design', 'Vite', 'Figma'
];

const About = () => {
  const container = useRef();

  useGSAP(() => {
    // Animate title and text
    gsap.from('.about-text', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Animate skill tags
    gsap.from('.skill-tag', {
      scrollTrigger: {
        trigger: '.skills-container',
        start: 'top 85%',
      },
      opacity: 0,
      scale: 0.8,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.5)'
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="section container" style={{ minHeight: '80vh', justifyContent: 'center', padding: '10rem 2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        
        {/* Bio text */}
        <div>
          <h2 className="about-text gradient-text" style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            About Me
          </h2>
          <p className="about-text" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Hello! My name is Jhimi and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about the web!
          </p>
          <p className="about-text" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Fast-forward to today, and I've had the privilege of building projects that challenge me to grow. My main focus these days is building accessible, inclusive products and digital experiences using modern JavaScript frameworks like React.
          </p>
        </div>

        {/* Skills */}
        <div className="skills-container" style={{ padding: '2rem', backgroundColor: 'var(--surface-color)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
          <h3 className="about-text" style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            Technologies I've been working with:
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag" style={{
                padding: '0.6rem 1.2rem',
                backgroundColor: 'rgba(152, 66, 22, 0.1)',
                color: 'var(--accent-color)',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: 600,
                border: '1px solid rgba(152, 66, 22, 0.2)'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
