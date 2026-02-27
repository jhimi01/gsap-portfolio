import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;

    // Different speeds for the "lag" effect
    const xToDot = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3" });
    
    const xToRing = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power2.out" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power2.out" });

    const moveCursor = (e) => {
      xToDot(e.clientX);
      yToDot(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    // Contextual Hover Logic
    const handleHover = (e) => {
      setIsHovering(true);
      gsap.to(dot, { scale: 0.5, backgroundColor: '#fff', duration: 0.3 });
      gsap.to(ring, { 
        scale: 2.2, 
        backgroundColor: 'var(--accent-color)',
        borderWidth: '0px',
        duration: 0.4,
        ease: "back.out(1.7)"
      });
      gsap.to(label, { opacity: 1, scale: 1, y: -40, duration: 0.3 });
    };

    const handleHoverOut = () => {
      setIsHovering(false);
      gsap.to(dot, { scale: 1, backgroundColor: 'var(--accent-color)', duration: 0.3 });
      gsap.to(ring, { 
        scale: 1, 
        backgroundColor: 'transparent',
        borderWidth: '1.5px',
        duration: 0.4,
        ease: "power2.out"
      });
      gsap.to(label, { opacity: 0, scale: 0.5, y: 0, duration: 0.3 });
    };

    // Attach to all interactive elements
    const updateListeners = () => {
      const interactives = document.querySelectorAll('a, button, .hero-cell.vertical-text, .project-card, .service-item');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleHoverOut);
      });
    };

    updateListeners();
    
    // Periodically re-check for dynamic elements (like projects getting loaded)
    const observer = new MutationObserver(updateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div 
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1.5px solid var(--accent-color)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 999998,
          transition: 'border-color 0.3s ease',
        }}
      />

      {/* Inner Dot */}
      <div 
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-color)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Floating Label */}
        <span 
          ref={labelRef}
          style={{
            position: 'absolute',
            color: 'var(--text-primary)',
            fontSize: '0.6rem',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: 0,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            fontFamily: 'var(--font-mono)'
          }}
        >
          VIEW
        </span>
      </div>
    </>
  );
};

export default CustomCursor;
