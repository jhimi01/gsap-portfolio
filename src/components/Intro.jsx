import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import bf from '/bf.png';

const Intro = ({ onComplete }) => {
  const container = useRef();
  const [count, setCount] = useState(0);
  const words = ['DREAM', 'CODE', 'REALITY'];

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // Initial state
    gsap.set('.intro-char', { y: 150, opacity: 0, rotateX: -100, filter: 'blur(10px)' });
    gsap.set('.final-reveal', { opacity: 0, scale: 0.8, filter: 'blur(20px)' });
    gsap.set('.flower-icon', { rotate: -270, scale: 0, opacity: 0 });

    // 1. Progress Counter & Background Shift
    const counterObj = { value: 0 };
    tl.to(counterObj, {
      value: 100,
      duration: 2.2,
      ease: "power3.inOut",
      onUpdate: () => setCount(Math.floor(counterObj.value))
    })
    .to('.intro-bg-solid', {
      backgroundColor: 'var(--text-primary)',
      duration: 1.5,
      ease: 'power2.inOut'
    }, '<0.5');

    // 2. Editorial Typography Sequence
    words.forEach((word, wordIndex) => {
      // Entrance
      tl.to(`.word-${wordIndex} .intro-char`, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 1,
        stagger: 0.05,
        ease: 'expo.out',
      }, '>-0.8')
      // Exit
      .to(`.word-${wordIndex} .intro-char`, {
        y: -150,
        opacity: 0,
        rotateX: 100,
        filter: 'blur(10px)',
        duration: 0.7,
        stagger: 0.03,
        ease: 'expo.in',
        delay: 0.5
      });
    });

    // 3. Slide Out Animation (The "Page Slide Out")
    tl.to(container.current, {
      yPercent: -100,
      duration: 1.6,
      ease: 'expo.inOut',
    }, '+=0.5');

    // Final hidden state
    tl.set(container.current, { display: 'none' });

  }, { scope: container });

  const splitText = (text, wordIdx) => {
    return text.split('').map((char, charIdx) => {
      // Mix styles: Outlined for even words, Solid for odd words (or vice-versa)
      const isOutlined = (wordIdx + charIdx) % 2 === 0;
      
      return (
        <span 
          key={charIdx} 
          className="intro-char" 
          style={{ 
            display: 'inline-block', 
            transformOrigin: '50% 100%',
            WebkitTextStroke: isOutlined ? '2px var(--accent-color)' : 'none',
            color: isOutlined ? 'transparent' : 'var(--accent-color)',
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div ref={container} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 20000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f6efe1',
      overflow: 'hidden'
    }}>
      {/* Sophisticated Background Layers */}
      <div className="intro-bg-solid" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#f6efe1', zIndex: 1 }} />
      
      {/* Floating Counter */}
      <div style={{ 
        position: 'absolute', 
        top: '6rem', 
        left: '6rem', 
        zIndex: 10,
        opacity: count === 100 ? 0 : 0.6,
        transition: 'opacity 0.8s ease',
        fontFamily: 'var(--font-mono)',
        fontSize: '1rem',
        letterSpacing: '0.5em',
        color: 'var(--accent-color)'
      }}>
        LOADING / {count}%
      </div>

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {words.map((word, idx) => (
          <div 
            key={idx} 
            className={`intro-word word-${idx}`}
            style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              width: '100vw',
              perspective: '1200px'
            }}
          >
            <h2 style={{ 
              fontSize: 'clamp(5rem, 20vw, 18rem)', 
              fontWeight: 800, 
              letterSpacing: '-0.04em',
              margin: 0,
              lineHeight: 0.8,
            }}>
              {splitText(word, idx)}
            </h2>
          </div>
        ))}
      </div>

      <div className="grainy-bg" style={{ zIndex: 5, opacity: 0.4 }} />
    </div>
  );
};

export default Intro;
