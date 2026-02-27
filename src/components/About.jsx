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

  }, { scope: container });

  return (
    <section id="about" ref={container} style={{ 
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-primary)',
      paddingTop: '8rem',
      paddingBottom: '10rem',
      overflow: 'hidden'
    }}>
      <div className="container timeline-container" style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
        
        <h2 className="timeline-header" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6rem', letterSpacing: '-0.04em' }}>
          My Journey
        </h2>
        
        {/* Main Vertical Line */}
        <div style={{ position: 'relative' }}>
          {/* This wrapper ensures the line maps correctly to the content height */}
          <div className="timeline-vertical-line" style={{ 
            position: 'absolute', 
            top: 0, 
            bottom: 0, 
            left: '50%', 
            width: '2px', 
            backgroundColor: 'currentColor', 
            opacity: 0.2, 
            transform: 'translateX(-50%)',
            zIndex: 1 
          }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div key={index} className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`} style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'minmax(0, 1fr) 4rem minmax(0, 1fr)', 
                  width: '100%', 
                  position: 'relative',
                  zIndex: 2
                }}>
                  
                  {/* Left Column */}
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'flex-end', 
                    textAlign: 'right', 
                    position: 'relative'
                  }}>
                    {isLeft && (
                      <div style={{ width: '100%' }}>
                        {/* Dotted line & Icon row */}
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative' }}>
                          <div className="icon-circle" style={{ 
                            width: '50px', height: '50px', borderRadius: '50%', 
                            backgroundColor: 'var(--text-primary)', color: 'var(--bg-color)', 
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            zIndex: 3, flexShrink: 0
                          }}>
                            <Icon size={24} />
                          </div>
                          <div className="dotted-line" style={{ 
                            flex: 1, borderTop: '2px dashed currentColor', opacity: 0.3, 
                            marginRight: '-2rem' // connect to center column
                          }}></div>
                        </div>
                        
                        {/* Text Group */}
                        <div className="text-group" style={{ marginTop: '2rem', paddingLeft: '2rem' }}>
                          <span style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-primary)', opacity: 0.8, textTransform: 'uppercase' }}>
                            {item.step}
                          </span>
                          <h3 style={{ fontSize: '2.2rem', fontWeight: 700, margin: '0.8rem 0', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                            {item.title}
                          </h3>
                          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center Column (Dot) */}
                  <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    <div className="center-dot" style={{ 
                      position: 'absolute', top: '25px', transform: 'translateY(-50%)',
                      width: '12px', height: '12px', borderRadius: '50%', 
                      backgroundColor: 'var(--text-primary)', zIndex: 3 
                    }}></div>
                  </div>

                  {/* Right Column */}
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'flex-start', 
                    textAlign: 'left', 
                    position: 'relative'
                  }}>
                    {!isLeft && (
                      <div style={{ width: '100%' }}>
                        {/* Dotted line & Icon row */}
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative', flexDirection: 'row-reverse' }}>
                          <div className="icon-circle" style={{ 
                            width: '50px', height: '50px', borderRadius: '50%', 
                            backgroundColor: 'var(--text-primary)', color: 'var(--bg-color)', 
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            zIndex: 3, flexShrink: 0
                          }}>
                            <Icon size={24} />
                          </div>
                          <div className="dotted-line" style={{ 
                            flex: 1, borderTop: '2px dashed currentColor', opacity: 0.3, 
                            marginLeft: '-2rem' // connect to center column
                          }}></div>
                        </div>
                        
                        {/* Text Group */}
                        <div className="text-group" style={{ marginTop: '2rem', paddingRight: '2rem' }}>
                          <span style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-primary)', opacity: 0.8, textTransform: 'uppercase' }}>
                            {item.step}
                          </span>
                          <h3 style={{ fontSize: '2.2rem', fontWeight: 700, margin: '0.8rem 0', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                            {item.title}
                          </h3>
                          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
