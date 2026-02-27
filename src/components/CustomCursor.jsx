import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    
    // Smooth trailing effect for the background blob
    const xToFollower = gsap.quickTo(follower, "x", { duration: 0.8, ease: "power3" });
    const yToFollower = gsap.quickTo(follower, "y", { duration: 0.8, ease: "power3" });

    const moveCursor = (e) => {
      // Center the elements on the mouse
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    // Add pointer events logic for hovering
    const handleHover = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.3 });
      gsap.to(follower, { scale: 0.8, backgroundColor: 'var(--accent-color)', duration: 0.3 });
    };

    const handleHoverOut = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, backgroundColor: 'var(--accent-glow)', duration: 0.3 });
    };

    const links = document.querySelectorAll('a, button, .hero-cell.vertical-text');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleHover);
      link.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleHover);
        link.removeEventListener('mouseleave', handleHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={followerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-glow)',
          filter: 'blur(60px)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 0, // Behind the glass container
        }}
      />
      <div 
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-color)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999, // On top of everything
        }}
      />
    </>
  );
};

export default CustomCursor;
