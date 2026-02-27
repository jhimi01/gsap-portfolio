import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Intro = ({ onComplete }) => {
  const comp = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // Intro slider comes in from the right to left over the black background
    tl.from('.intro-slider', {
      xPercent: 100,
      duration: 1.2,
      ease: 'power4.inOut',
    })
    // Text animates in
    .from('.welcome-text', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out'
    })
    // Small pause to read
    .to('.welcome-text', {
      opacity: 0,
      y: -40,
      duration: 0.6,
      delay: 0.5,
      ease: 'power3.in'
    })
    // Intro slider and bg move out to the left, revealing site
    .to(['.intro-slider', '.intro-bg'], {
      xPercent: -100,
      duration: 1.2,
      ease: 'power4.inOut',
      stagger: 0.1
    });
  }, { scope: comp });

  return (
    <div ref={comp} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 9999,
      pointerEvents: 'none'
    }}>
      {/* Background layer that covers site immediately on load */}
      <div 
        className="intro-bg"
        style={{
          position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'var(--text-primary)', pointerEvents: 'all'
        }}
      />
      
      {/* Slider layer that animates in from right */}
      <div 
        className="intro-slider"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'var(--bg-color)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'all'
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <h1 className="welcome-text gradient-text" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            Good Morning.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
