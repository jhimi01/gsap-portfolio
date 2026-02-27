import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Terminal, Layers, Sparkles, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    step: 'STEP 1',
    title: 'The Beginning',
    desc: 'Interest started with custom Tumblr themes. Hacking together HTML & CSS taught the fundamentals of web structure.',
    icon: Terminal
  },
  {
    step: 'STEP 2',
    title: 'Modern Ecosystem',
    desc: 'Transitioned to responsive, interactive products using modern tools like React, Next.js, and CSS frameworks to ensure robust architectures.',
    icon: Layers
  },
  {
    step: 'STEP 3',
    title: 'Interactive Motion',
    desc: 'Focused on bringing digital experiences to life with smooth, intentional animations using GSAP and advanced CSS.',
    icon: Sparkles
  },
  {
    step: 'STEP 4',
    title: 'Current Focus',
    desc: 'Blending technical precision with creative vision to deliver high-quality, pixel-perfect web applications.',
    icon: Rocket
  }
];

const About = () => {
  const container = useRef();

  useGSAP(() => {
    // 1. Heroic Background Text Parallax
    gsap.to('.about-bg-text', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      xPercent: -20,
      ease: 'none'
    });

    // 2. Narrative Intro Reveal
    const introLines = gsap.utils.toArray('.intro-text-line');
    introLines.forEach((line, i) => {
      gsap.from(line, {
        scrollTrigger: {
          trigger: line,
          start: 'top 90%',
        },
        y: 50,
        opacity: 0,
        rotateX: -45,
        duration: 1,
        ease: 'power4.out',
        delay: i * 0.1
      });
    });

    // 3. Fluid Timeline Path Drawing
    gsap.fromTo('.timeline-path-active', 
      { height: 0 },
      {
        scrollTrigger: {
          trigger: '.timeline-grid',
          start: 'top 70%',
          end: 'bottom 80%',
          scrub: 1
        },
        height: '100%',
        ease: 'none'
      }
    );

    // 4. Milestone Reveals
    const milestones = gsap.utils.toArray('.milestone-card');
    milestones.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        x: i % 2 === 0 ? -40 : 40,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out'
      });
      
      // Node glow animation
      gsap.from(card.querySelector('.milestone-node'), {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(2)'
      });
    });

    // 5. Physics-Based Marquees (Motion Velocity)
    const tickers = gsap.utils.toArray('.ticker-content');
    
    tickers.forEach((ticker, index) => {
      const isLTR = index === 1;
      const duration = 25 + (index * 8); 
      
      gsap.set(ticker, { xPercent: isLTR ? -33.3333 : 0 });
      
      const animation = gsap.to(ticker, {
        xPercent: isLTR ? 0 : -33.3333,
        ease: "none",
        duration: duration,
        repeat: -1,
      });

      ScrollTrigger.create({
        trigger: ticker,
        start: "top bottom",
        onUpdate: (self) => {
            const velocity = Math.abs(self.getVelocity());
            const speedMultiplier = 1 + (velocity / 1000); 
            gsap.to(animation, { 
                timeScale: speedMultiplier, 
                duration: 0.5,
                overwrite: true 
            });
            gsap.to(animation, { 
                timeScale: 1, 
                duration: 1.5,
                delay: 0.2,
                overwrite: false 
            });
        }
      });
    });

  }, { scope: container });

  const frontendSkills = ['React', 'Next.js', 'Vite', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind', 'Styled Components'];
  const backendSkills = ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST API', 'GraphQL', 'Prisma'];
  const toolSkills = ['Git', 'Figma', 'GSAP', 'Redux', 'Zustand', 'Postman', 'Docker', 'Vercel'];

  const renderMarquee = (title, skillsList, rotation, zIndex) => (
    <div className="marquee-wrapper" style={{ 
        marginTop: '-3rem',
        position: 'relative',
        zIndex: zIndex,
        padding: '1rem 0'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10, pointerEvents: 'none', marginBottom: '1rem' }}>
        <p style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.65rem', 
            fontWeight: 800, 
            color: 'var(--accent-color)', 
            letterSpacing: '0.4em', 
            textTransform: 'uppercase',
            opacity: 0.6,
        }}>
            {title}
        </p>
      </div>
      
      <div style={{ 
          position: 'relative', 
          backgroundColor: '#030303', 
          padding: '2.5rem 0',
          overflow: 'hidden',
          width: '120vw',
          marginLeft: '-10vw',
          transform: `rotate(${rotation}deg)`,
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
      }}>
        {/* Top Perforations */}
        <div style={{ position: 'absolute', top: '0.75rem', left: 0, width: '100%', height: '14px', background: 'repeating-linear-gradient(to right, #fff 0px, #fff 14px, transparent 14px, transparent 28px)', opacity: 0.3 }}></div>
        {/* Bottom Perforations */}
        <div style={{ position: 'absolute', bottom: '0.75rem', left: 0, width: '100%', height: '14px', background: 'repeating-linear-gradient(to right, #fff 0px, #fff 14px, transparent 14px, transparent 28px)', opacity: 0.3 }}></div>

        <div style={{ display: 'flex', width: 'fit-content' }}>
          <div className="ticker-content" style={{ display: 'flex', gap: '5rem', alignItems: 'center', whiteSpace: 'nowrap' }}>
            {[...skillsList, ...skillsList, ...skillsList].map((skill, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5rem' }}>
                <span style={{ 
                    fontSize: 'clamp(1.2rem, 3vw, 2rem)', 
                    fontWeight: 700, 
                    color: '#fff', 
                    fontFamily: 'var(--font-mono)', 
                    opacity: 0.8, 
                    textTransform: 'uppercase'
                }}>
                    {skill}
                </span>
                <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" ref={container} style={{ 
      backgroundColor: 'transparent',
      color: 'var(--text-primary)',
      paddingTop: '15rem',
      paddingBottom: '6rem',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* 1. Heroic Background Text */}
      <div className="about-bg-text" style={{
        position: 'absolute',
        top: '10rem',
        left: '10%',
        fontSize: 'clamp(10rem, 25vw, 40rem)',
        fontWeight: 900,
        color: 'var(--text-primary)',
        opacity: 0.03,
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        zIndex: 0,
        lineHeight: 1
      }}>
        ABOUT EXPERIENCE JOURNEY
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* 2. Narrative Intro */}
        <div style={{ maxWidth: '900px', marginBottom: '12rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-color)', letterSpacing: '0.3em', marginBottom: '2rem' }}>02 / OVERVIEW</p>
          <div style={{ perspective: '1000px' }}>
            {[
              "Building modern digital",
              "products with precision",
              "and technical mastery."
            ].map((text, i) => (
              <h2 key={i} className="intro-text-line" style={{ 
                fontSize: 'clamp(3rem, 7vw, 6.5rem)', 
                fontWeight: 900, 
                lineHeight: 1, 
                letterSpacing: '-0.04em',
                margin: 0
              }}>
                {text}
              </h2>
            ))}
          </div>
          <p className="intro-text-line" style={{ fontSize: '1.2rem', opacity: 0.6, maxWidth: '500px', marginTop: '3rem', lineHeight: 1.6 }}>
            I specialize in bridging the gap between design and technology, creating high-performance applications that don't just work—they inspire.
          </p>
        </div>

        {/* 3. Asymmetric Timeline */}
        <div className="timeline-grid" style={{ 
          position: 'relative', 
          display: 'grid', 
          gridTemplateColumns: '1fr',
          gap: '8rem',
          paddingLeft: 'clamp(2rem, 10vw, 8rem)'
        }}>
          {/* Vertical Path */}
          <div style={{ 
            position: 'absolute', 
            left: 'clamp(0.5rem, 5vw, 4rem)', 
            top: 0, 
            bottom: 0, 
            width: '2px', 
            backgroundColor: 'var(--border-color)', 
            opacity: 0.2 
          }}>
            <div className="timeline-path-active" style={{ 
              width: '100%', 
              backgroundColor: 'var(--accent-color)',
              boxShadow: '0 0 20px var(--accent-color)'
            }}></div>
          </div>

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="milestone-card" style={{ 
                position: 'relative', 
                maxWidth: '600px',
                paddingLeft: '3rem'
              }}>
                {/* Milestone Node */}
                <div className="milestone-node" style={{
                  position: 'absolute',
                  left: 'calc(-2.5rem - clamp(0.5rem, 5vw, 3.5rem))', // Align with path
                  top: '0.5rem',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-color)',
                  border: '2px solid var(--accent-color)',
                  zIndex: 2
                }}></div>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--accent-color)', opacity: 0.8 }}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', opacity: 0.4, textTransform: 'uppercase' }}>{item.step}</span>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '1rem', opacity: 0.6, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* 4. Tech Stack Section */}
      <div style={{ marginTop: '15rem', position: 'relative' }}>
        <div className="container" style={{ marginBottom: '4rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-color)', letterSpacing: '0.2em' }}>03 / TOOLKIT</p>
            <h3 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '1rem' }}>Tech Stack.</h3>
        </div>

        <div style={{ marginTop: '2rem', position: 'relative' }}>
          {renderMarquee('', frontendSkills, -3, 3)}
          {renderMarquee('', backendSkills, 2, 2)}
          {renderMarquee('', toolSkills, -1.5, 1)}
        </div>
      </div>
    </section>
  );
};

export default About;

