import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Coffee, FileText, Github, Linkedin, LinkedinIcon, Menu, MenuSquare, MessageCircle } from 'lucide-react';
// import { frankie_penwill } from '../../public/frankie_penwill.png';

const Hero = ({ runAnimation, onOpenMenu }) => {
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
  }, { scope: container, dependencies: [runAnimation] });

  return (
    <section id="home" ref={container} style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
    }}>
      <div className="hero-grid" style={{position: 'relative'}}>
        {/* gradient */}
        <div style={{position: 'absolute', backgroundColor: 'var(--accent-glow)', width: '50px', height: '50px', top: 0, left: 0, zIndex: 1000, filter: 'blur(60px)'}}></div>
        {/* Row 1 */}
        <div className="hero-cell empty" style={{ height: '10vh' }}></div>
        <div className="hero-cell empty"></div>
        <div className="hero-cell empty">
        </div>
        <div className="hero-cell empty" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          
           <button 
           onClick={() => {
  console.log("menu clicked");
  onOpenMenu();
}}
            style={{ 
              color: 'var(--accent-color)', 
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
             <Menu size={29} />
            </button>
        </div>

        {/* Row 2 */}
        <div className="hero-cell empty"></div>
        <div className="hero-cell hero-main-text" style={{ gridColumn: 'span 2' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            <span style={{display: 'flex', alignItems: 'center'}}>
              Hlw, nice to meet you 
              <img src="/emoji2.png" alt="emoji" style={{width: '90px', height: '90px', display: 'inline-block'}} />
            </span>
          </h2>
          <div style={{ overflow: 'hidden' }}>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, color: 'var(--text-primary)' }}>
              I'm Jhimi<span style={{ color: 'var(--accent-color)', fontSize: '0.5em', verticalAlign: 'top', marginLeft: '0.1em' }}>*</span>
            </h1>
          </div>
        </div>
        <div className="hero-cell vertical-text" onClick={() => window.open('https://www.linkedin.com/in/jhimi-talukder-801ab227b', '_blank')} style={{border: 'none'}}>
           <div style={{ display: 'flex', gap: '5px' }}>
    <LinkedinIcon size={18} style={{transform: 'rotate(90deg)'}} />
    <span>LINKEDIN</span>
  </div>
          
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
            <span style={{ fontWeight: 600 }}>Or let’s share a tea</span>
          </div>
          <div style={{ position: 'absolute', right: '10%', top: '60%', color: 'var(--accent-color)', fontFamily: 'cursive', fontSize: '1.2rem', transform: 'rotate(-10deg)', pointerEvents: 'none' }}>
            ↗ Very cool !
          </div>
        </div>
        <div className="hero-cell vertical-text" onClick={() => window.open('https://github.com/jhimi01', '_blank')} style={{borderRight: 'none'}}>
         <div style={{ display: 'flex', gap: '5px' }}>
    <Github size={18} style={{transform: 'rotate(90deg)'}} />
    <span>GITHUB</span>
  </div>
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
        {/* <div className="hero-cell vertical-text" onClick={() => window.open('https://twitter.com', '_blank')}>
          TWITTER
        </div> */}

        <div className="grainy-bg"></div>
      </div>
    </section>
  );
};

export default Hero;
