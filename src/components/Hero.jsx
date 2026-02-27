import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Coffee, FileText, MessageCircle } from 'lucide-react';

const Hero = ({ runAnimation }) => {
  const container = useRef();

  useGSAP(() => {
    if (!runAnimation) return;

    // Animate the grid cells opacity to simulate grid drawing
    const tl = gsap.timeline();
    tl.from('.hero-cell', {
      opacity: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: 'power2.out'
    });
    
    // Add a slight pop to the main text
    // tl.from('.hero-main-text', {
    //   y: 20,
    //   opacity: 0,
    //   duration: 0.8,
    //   ease: 'power3.out'
    // }, '-=0.4');
  }, { scope: container, dependencies: [runAnimation] });

  return (
    <section id="home" ref={container} style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      paddingTop: '6rem', 
      paddingBottom: '2rem',
      // paddingLeft: '2rem',
      // paddingRight: '2rem'
    }}>
      <div className="hero-grid">
        {/* Row 1 */}
        <div className="hero-cell empty" style={{ height: '10vh' }}></div>
        <div className="hero-cell empty"></div>
        <div className="hero-cell empty"></div>
        <div className="hero-cell empty"></div>

        {/* Row 2 */}
        <div className="hero-cell empty"></div>
        <div className="hero-cell hero-main-text" style={{ gridColumn: 'span 2' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            Hello web cowboy,
          </h2>
          <div style={{ overflow: 'hidden' }}>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, color: 'var(--text-primary)' }}>
              I'm Jhimi<span style={{ color: 'var(--accent-color)', fontSize: '0.5em', verticalAlign: 'top', marginLeft: '0.1em' }}>*</span>
            </h1>
          </div>
        </div>
        <div className="hero-cell vertical-text" onClick={() => window.open('https://linkedin.com', '_blank')}>
          LINKEDIN
        </div>

        {/* Row 3 */}
        <div className="hero-cell empty"></div>
        <div className="hero-cell">
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '450px' }}>
            Hi ! I'm a <span style={{border: '1px solid var(--accent-color)', borderRadius: '50%', padding: '0.3rem'}}>Junior Web Developer</span>. Everyday I learn, read and practice to create the best interfaces as possible. It's beautiful to have a passion and a work at the same time, don't you think ?
          </p>
        </div>
        <div className="hero-cell" style={{ gap: '1.5rem', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <FileText size={24} />
            <span style={{ fontWeight: 600 }}>If you want my resume **</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <Coffee size={24} />
            <span style={{ fontWeight: 600 }}>Or have chat</span>
          </div>
          <div style={{ position: 'absolute', right: '10%', top: '60%', color: 'var(--accent-color)', fontFamily: 'cursive', fontSize: '1.2rem', transform: 'rotate(-10deg)', pointerEvents: 'none' }}>
            ↗ Very cool !
          </div>
        </div>
        <div className="hero-cell vertical-text" onClick={() => window.open('https://github.com', '_blank')}>
          GITHUB
        </div>

        {/* Row 4 */}
        <div className="hero-cell empty"></div>
        <div className="hero-cell" style={{ gridColumn: 'span 2', justifyContent: 'flex-end', paddingTop: '1rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
            * A very passionate and competent person open to freelance offers and internship.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            ** If you want my folio, ask me, I don't bite.
          </p>
        </div>
        <div className="hero-cell vertical-text" onClick={() => window.open('https://twitter.com', '_blank')}>
          TWITTER
        </div>
      </div>
    </section>
  );
};

export default Hero;
