import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const MenuOverlay = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);
  const linksRef = useRef([]);

useGSAP(() => {
  gsap.set(overlayRef.current, { yPercent: -100 });
}, { scope: overlayRef });

useGSAP(() => {
  if (isOpen) {
    const tl = gsap.timeline();

    tl.to(overlayRef.current, {
      yPercent: 0,
      duration: 0.8,
      ease: "power4.inOut"
    });

    tl.fromTo(linksRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
      "-=0.2"
    );

  } else {
    gsap.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power4.inOut"
    });
  }
}, { scope: overlayRef, dependencies: [isOpen] });

  const menuItems = [
    { num: '01.', text: 'About', href: '#about' },
    { num: '02.', text: 'Projects', href: '#projects' },
    { num: '03.', text: 'Contact', href: '#contact' }
  ];

  return (
  <div
  ref={overlayRef}
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'var(--text-secondary)',
    zIndex: 9999,
    display: 'flex',
  }}
>
      {/* Top right close button */}
      <div style={{ position: 'absolute', top: '3rem', right: '4rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '50%', 
          border: '1px solid var(--text-primary)',
          opacity: 0.5
        }}></div>
        <button 
          onClick={onClose}
          style={{ 
            fontSize: '1.5rem', 
            // color: 'var(--text-primary)',
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: 300,
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(90deg)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(0)'}
        >
          ✕
        </button>
      </div>

      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 2fr', 
        width: '100%',
        alignItems: 'center'
      }}>
        {/* Left side text */}
        <div style={{ paddingLeft: '5rem' }}>
          <h2 style={{ 
            color: 'rgba(255, 255, 255, 0.8)', // Match the red/orange from the reference "Menu"
            fontSize: '1.5rem',
            fontWeight: 400,
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.02em'
          }}>
            Menu
          </h2>
        </div>

        {/* Right side links */}
        <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '15vw' }}>
          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onClose();
                setTimeout(() => {
                  document.querySelector(item.href).scrollIntoView({ behavior: 'smooth' });
                }, 800);
              }}
              ref={el => linksRef.current[index] = el}
              style={{
                display: 'grid',
                gridTemplateColumns: '50px 1fr 30px',
                alignItems: 'center',
                padding: '2.5rem 0',
                borderBottom: index < menuItems.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                textDecoration: 'none',
                color: 'rgba(255, 255, 255, 0.8)',
                fontFamily: 'var(--font-sans)',
                cursor: 'pointer'
              }}
            >
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.7rem', 
                fontWeight: 600,
                opacity: 0.8 
              }}>
                {item.num}
              </span>
              <h1 style={{ 
                fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
                fontWeight: 400, 
                letterSpacing: '-0.02em',
                margin: 0,
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(20px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                {item.text}
              </h1>
              <span style={{ fontSize: '1.5rem', opacity: 0.7 }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
