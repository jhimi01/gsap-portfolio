import React, { useRef } from 'react';
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
    // Reveal top title
    gsap.from('.timeline-header', {
      scrollTrigger: { trigger: '.timeline-header', start: 'top 85%' },
      y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
    });

    // Vertical line draw
    gsap.fromTo('.timeline-vertical-line', 
      { scaleY: 0 },
      {
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: 1
        },
        scaleY: 1,
        transformOrigin: 'top center',
        ease: 'none'
      }
    );

    // Items animation
    const items = gsap.utils.toArray('.timeline-item');
    items.forEach(item => {
      const isLeft = item.classList.contains('timeline-left');
      const iconWrapper = item.querySelector('.icon-circle');
      const line = item.querySelector('.dotted-line');
      const textGroup = item.querySelector('.text-group');
      const dot = item.querySelector('.center-dot');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.from(dot, { scale: 0, opacity: 0, duration: 0.4, ease: 'back.out(2)' })
        .from(line, { scaleX: 0, transformOrigin: isLeft ? "right center" : "left center", opacity: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
        .from(iconWrapper, { scale: 0, rotation: -90, opacity: 0, duration: 0.5, ease: 'back.out(1.5)' }, '-=0.2')
        .from(textGroup, { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
    });

    // 4. Infinite Scrolling Marquees for Skills
    const tickers = gsap.utils.toArray('.ticker-content');
    const durations = [35, 45, 40]; // Vary speeds for more depth

    tickers.forEach((ticker, index) => {
      const isLTR = index === 1; 
      const distance = ticker.scrollWidth / 3; 

      if (isLTR) {
        gsap.set(ticker, { x: -distance });
        gsap.to(ticker, {
          x: 0,
          ease: "none",
          duration: durations[index],
          repeat: -1,
        });
      } else {
        gsap.to(ticker, {
          x: -distance,
          ease: "none",
          duration: durations[index],
          repeat: -1,
        });
      }
    });

  }, { scope: container });

  const frontendSkills = [
    'React', 'Next.js', 'Vite', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind', 'Styled Components'
  ];

  const backendSkills = [
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST API', 'GraphQL', 'Prisma'
  ];

  const toolSkills = [
    'Git', 'Figma', 'GSAP', 'Redux', 'Zustand', 'Postman', 'Docker', 'Vercel'
  ];

  const renderMarquee = (title, skillsList) => (
    <div className="marquee-wrapper" style={{ 
      marginTop: '6rem', 
      position: 'relative',
      paddingBottom: '2rem'
    }}>
      {/* Side Masks for soft fade out */}
      <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '25%',
          height: '100%',
          background: 'linear-gradient(to right, var(--bg-color) 20%, transparent)',
          zIndex: 5,
          pointerEvents: 'none'
      }}></div>
      <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '25%',
          height: '100%',
          background: 'linear-gradient(to left, var(--bg-color) 20%, transparent)',
          zIndex: 5,
          pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, marginBottom: '2.5rem' }}>
        <p style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.75rem', 
            fontWeight: 800, 
            color: 'var(--accent-color)',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            opacity: 0.8
        }}>
            {title}
        </p>
      </div>
      
      <div style={{ display: 'flex', width: 'fit-content', position: 'relative', zIndex: 2 }}>
        <div className="ticker-content" style={{ display: 'flex', gap: '5rem', alignItems: 'center', whiteSpace: 'nowrap' }}>
          {[...skillsList, ...skillsList, ...skillsList].map((skill, index) => (
            <React.Fragment key={index}>
                <span style={{
                    fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                    fontWeight: 900,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    letterSpacing: '-0.04em',
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'default',
                    opacity: 0.15,
                    textTransform: 'uppercase'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.opacity = '0.15';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    {skill}
                </span>
                <span style={{ 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--accent-color)', 
                    opacity: 0.3 
                }}></span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" ref={container} style={{ 
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-primary)',
      paddingTop: '10rem',
      paddingBottom: '10rem',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div className="container timeline-container" style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <p style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.9rem', 
                color: 'var(--accent-color)', 
                letterSpacing: '0.3em',
                marginBottom: '1rem'
            }}>02 / DISCOVER</p>
            <h2 className="timeline-header" style={{ 
                fontSize: 'clamp(3.5rem, 8vw, 6rem)', 
                fontWeight: 800, 
                color: 'var(--text-primary)', 
                lineHeight: 1,
                letterSpacing: '-0.05em' 
            }}>
            My Journey.
            </h2>
        </div>
        
        <div style={{ position: 'relative' }}>
          <div className="timeline-vertical-line" style={{ 
            position: 'absolute', 
            top: 0, 
            bottom: 0, 
            left: '50%', 
            width: '1px', 
            backgroundColor: 'var(--text-primary)', 
            opacity: 0.1, 
            transform: 'translateX(-50%)',
            zIndex: 1 
          }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem' }}>
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div key={index} className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`} style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 6rem 1fr', 
                  width: '100%', 
                  position: 'relative',
                  zIndex: 2,
                  alignItems: 'center'
                }}>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: isLeft ? 'flex-end' : 'flex-start', textAlign: isLeft ? 'right' : 'left', opacity: isLeft ? 1 : 0.05, filter: isLeft ? 'none' : 'blur(2px)' }}>
                    {isLeft && (
                      <div className="text-group">
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>{item.step}</span>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0.5rem 0', lineHeight: 1 }}>{item.title}</h3>
                        <p style={{ fontSize: '1.1rem', opacity: 0.6, maxWidth: '400px' }}>{item.desc}</p>
                      </div>
                    )}
                  </div>

                  <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="icon-circle" style={{ 
                        width: '60px', height: '60px', borderRadius: '50%', 
                        backgroundColor: 'var(--bg-color)', 
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)', 
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        zIndex: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                    }}>
                        <Icon size={24} />
                    </div>
                    <div className="center-dot" style={{ 
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        width: '8px', height: '8px', borderRadius: '50%', 
                        backgroundColor: 'var(--accent-color)', zIndex: 4 
                    }}></div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: !isLeft ? 'flex-start' : 'flex-end', textAlign: !isLeft ? 'left' : 'right', opacity: !isLeft ? 1 : 0.05, filter: !isLeft ? 'none' : 'blur(2px)' }}>
                    {!isLeft && (
                      <div className="text-group">
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-color)', fontFamily: 'var(--font-mono)' }}>{item.step}</span>
                        <h3 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0.5rem 0', lineHeight: 1 }}>{item.title}</h3>
                        <p style={{ fontSize: '1.1rem', opacity: 0.6, maxWidth: '400px' }}>{item.desc}</p>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '15rem' }}>
        {renderMarquee('Frontend Architecture', frontendSkills)}
        {renderMarquee('Scalable Backend', backendSkills)}
        {renderMarquee('Environment & Workflow', toolSkills)}
      </div>
    </section>
  );
};

export default About;
