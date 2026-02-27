import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MoveUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: '01',
    title: 'UI/UX Design',
    description: 'Crafting intuitive, user-centric interfaces that blend aesthetic beauty with functional precision.',
    features: ['Wireframing', 'Prototyping', 'Visual Identity']
  },
  {
    id: '02',
    title: 'Web Development',
    description: 'Building high-performance, responsive websites using modern frameworks and best practices.',
    features: ['React / Next.js', 'Clean Code', 'SEO Optimized']
  },
  {
    id: '03',
    title: 'Interaction Motion',
    description: 'Bringing digital experiences to life with smooth, high-end GSAP animations and transitions.',
    features: ['Scroll Animations', 'Micro-interactions', 'Motion Design']
  },
  {
    id: '04',
    title: 'Branding & Strategy',
    description: 'Helping brands find their voice and visual language in the crowded digital landscape.',
    features: ['Logo Design', 'Design Systems', 'Brand Strategy']
  }
];

const Services = () => {
  const container = useRef();

  useGSAP(() => {
    const serviceItems = gsap.utils.toArray('.service-item');

    serviceItems.forEach((item, index) => {
      const line = item.querySelector('.service-line');
      const content = item.querySelector('.service-content');
      const title = item.querySelector('.service-title');
      const arrow = item.querySelector('.service-arrow');

      // Scroll reveal
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out'
      });

      // Line animation
      gsap.from(line, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        },
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.2,
        ease: 'power4.out'
      });

      // Hover Effect
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl.to(arrow, { rotation: 45, x: 5, y: -5, duration: 0.3, ease: 'power2.out' })
             .to(title, { x: 20, color: 'var(--accent-color)', duration: 0.3, ease: 'power2.out' }, 0);

      item.addEventListener('mouseenter', () => hoverTl.play());
      item.addEventListener('mouseleave', () => hoverTl.reverse());
    });
  }, { scope: container });

  return (
    <section id="services" ref={container} style={{ 
      paddingTop: '10rem',
      paddingBottom: '10rem',
      backgroundColor: 'transparent',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{ marginBottom: '6rem' }}>
          <p style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.9rem', 
            color: 'var(--accent-color)', 
            letterSpacing: '0.3em',
            marginBottom: '1rem'
          }}>03 / EXPERTISE</p>
          <h2 style={{ 
            fontSize: 'clamp(3.5rem, 8vw, 6rem)', 
            fontWeight: 800, 
            lineHeight: 1,
            letterSpacing: '-0.05em' 
          }}>
            Services.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item"
              style={{ 
                position: 'relative',
                padding: '3rem 0',
                cursor: 'pointer',
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                alignItems: 'center',
                gap: '2rem'
              }}
            >
              {/* Top border line */}
              <div className="service-line" style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '1px', 
                backgroundColor: 'var(--border-color)',
                opacity: 0.3
              }}></div>

              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '1.2rem', 
                opacity: 0.4,
                color: 'var(--text-primary)'
              }}>
                {service.id}
              </span>

              <div className="service-content">
                <h3 className="service-title" style={{ 
                  fontSize: 'clamp(2rem, 5vw, 4rem)', 
                  fontWeight: 700,
                  transition: 'color 0.3s ease'
                }}>
                  {service.title}
                </h3>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '1rem', 
                  marginTop: '1rem',
                  opacity: 0.6
                }}>
                  {service.features.map((feature, i) => (
                    <span key={i} style={{ 
                      fontSize: '0.8rem', 
                      fontFamily: 'var(--font-mono)',
                      textTransform: 'uppercase',
                      border: '1px solid var(--border-color)',
                      padding: '0.2rem 0.8rem',
                      borderRadius: '100px'
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="service-arrow" style={{ opacity: 0.4 }}>
                <MoveUpRight size={48} strokeWidth={1} />
              </div>
              
              {/* Bottom border line for last item */}
              {index === services.length - 1 && (
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '1px', 
                  backgroundColor: 'var(--border-color)',
                  opacity: 0.3
                }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
