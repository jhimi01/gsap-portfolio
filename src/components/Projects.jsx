import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: '01',
    description: 'Small businesses struggle to provide consistent, 24/7 customer support because it\'s expensive and time-consuming.',
  },
  {
    number: '02',
    description: 'Customers often experience long wait times, inconsistent responses, and frustration, which leads to lost sales and negative brand perception.',
  },
  {
    number: '03',
    description: 'There is a clear gap in the market for a solution that is affordable, reliable, and easy to implement.',
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useGSAP(() => {
    // We want the scrollContainer to slide all the way to its end
    const getScrollAmount = () => {
      let scrollWidth = scrollContainerRef.current.scrollWidth;
      return -(scrollWidth - window.innerWidth);
    };

    const tween = gsap.to(scrollContainerRef.current, {
      x: getScrollAmount,
      ease: "none"
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      // Adding extra multiplier just so it scrolls at a comfortable speed
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true // Recalculate if window resizes!
    });
  }, { scope: containerRef });

  return (
    <section 
      id="projects" 
      ref={containerRef} 
      style={{ 
        height: '100vh', 
        backgroundColor: 'var(--text-secondary)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Wrapper that will animate left linearly */}
      <div 
        ref={scrollContainerRef}
        style={{
          display: 'flex',
          height: '100%',
          width: 'fit-content', // this is crucial so it fits exactly the content (header + cards + gaps)
          alignItems: 'center',
          paddingLeft: '10vw',
          paddingRight: '10vw',
          gap: '5vw'
        }}
      >
        {/* Fixed Title block */}
        <div style={{
          width: '25vw',
          minWidth: '350px',
          color: 'var(--bg-color)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flexShrink: 0 // Prevent squishing
        }}>
          <h2 style={{ 
            fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
            fontWeight: 400, 
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
            fontFamily: 'var(--font-sans)',
          }}>
            PROBLEM
          </h2>
          <p style={{ 
            fontSize: '0.9rem', 
            lineHeight: 1.6, 
            color: 'var(--bg-color)', 
            opacity: 0.8 
          }}>
            Small businesses face a major challenge in delivering the level of customer support modern consumers expect.
          </p>
        </div>

        {/* The Cards */}
        {projects.map((project, index) => (
          <div 
            key={index}
            style={{ 
              width: '30vw',
              minWidth: '350px',
              height: '70vh',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              flexShrink: 0 // Prevent squishing
            }}
          >
            {/* Card Header (Number) */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '12px', 
                height: '12px', 
                backgroundColor: 'var(--text-primary)', 
                borderRadius: '50%', 
                margin: '0 auto 1rem' 
              }}></div>
              <h3 style={{ 
                fontSize: 'clamp(5rem, 8vw, 8rem)', 
                fontWeight: 300, 
                color: 'var(--text-primary)',
                lineHeight: 1,
                letterSpacing: '-0.05em'
              }}>
                {project.number}
              </h3>
            </div>
            
            {/* Card Footer (Description) */}
            <div>
              <p style={{ 
                color: 'var(--text-primary)', 
                fontSize: '0.9rem', 
                lineHeight: 1.6 
              }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
