import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef();

  useGSAP(() => {
    // Animate text parts
    gsap.from('.contact-letter', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      rotationX: -90,
      duration: 1,
      stagger: 0.1,
      ease: 'back.out(1.5)'
    });
    
    // Animate decorative shapes
    gsap.from('.contact-shape', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
      },
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: 'elastic.out(1, 0.5)'
    });
    
    // Animate form fields
    gsap.from('.form-field', {
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
      },
      opacity: 0,
      x: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }, { scope: container });

  const textStyle = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 400, // Thinner, elegant font based on image
    fontSize: 'clamp(4rem, 12vw, 10rem)',
    lineHeight: 0.9,
    textTransform: 'uppercase',
    letterSpacing: '-0.02em',
    color: 'var(--text-primary)'
  };

  const inputStyle = {
    width: '100%',
    background: 'none',
    border: 'none',
    borderBottom: '1px solid var(--border-color)',
    padding: '1rem 0',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    outline: 'none',
    transition: 'border-color 0.3s ease'
  };
  
  const labelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--text-secondary)'
  };

  return (
    <section id="contact" ref={container} className="section container" style={{ 
      minHeight: '100vh', 
      paddingTop: '8rem',
      paddingBottom: '8rem',
      borderTop: '1px solid var(--border-color)'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        {/* Left side Typography */}
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <h2 style={textStyle}>
                {'LET\'S'.split('').map((char, i) => <span key={i} className="contact-letter" style={{ display: 'inline-block' }}>{char}</span>)}
              </h2>
              {/* Decorative shapes */}
              <div className="contact-shape" style={{ 
                position: 'relative', 
                width: '80px', 
                height: '80px', 
                marginLeft: '1rem' 
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-20px', 
                  left: '20px', 
                  width: '30px', 
                  height: '30px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--text-primary)' 
                }}></div>
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  width: '80px', 
                  height: '40px', 
                  border: '1px solid var(--text-primary)',
                  borderTopLeftRadius: '0',
                  borderTopRightRadius: '0',
                  borderBottomLeftRadius: '40px',
                  borderBottomRightRadius: '40px',
                  transform: 'rotate(20deg)'
                }}></div>
              </div>
            </div>
            
            <h2 style={{ ...textStyle, paddingLeft: '2rem' }}>
              {'GET IN'.split(/(?!$)/).map((char, i) => <span key={i} className="contact-letter" style={{ display: 'inline-block' }}>{char === ' ' ? '\u00A0' : char}</span>)}
            </h2>
            
            <h2 style={textStyle}>
              {'TOUCH'.split('').map((char, i) => <span key={i} className="contact-letter" style={{ display: 'inline-block' }}>{char}</span>)}
            </h2>
          </div>
        </div>

        {/* Right side form */}
        <div className="contact-form" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2.5rem',
          maxWidth: '500px',
          width: '100%',
          marginLeft: 'auto'
        }}>
          
          <div className="form-field" style={{ position: 'relative' }}>
            <label style={{ ...labelStyle, position: 'absolute', top: 0, left: 0 }}>Full Name</label>
            <input type="text" style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--text-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
            <span style={{ position: 'absolute', right: 0, top: 0, color: 'var(--text-secondary)', ...labelStyle }}>*</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="form-field" style={{ position: 'relative' }}>
              <label style={{ ...labelStyle, position: 'absolute', top: 0, left: 0 }}>Email</label>
              <input type="email" style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--text-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
              <span style={{ position: 'absolute', right: 0, top: 0, color: 'var(--text-secondary)', ...labelStyle }}>*</span>
            </div>
            <div className="form-field" style={{ position: 'relative' }}>
              <label style={{ ...labelStyle, position: 'absolute', top: 0, left: 0 }}>Phone</label>
              <input type="tel" style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--text-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
              <span style={{ position: 'absolute', right: 0, top: 0, color: 'var(--text-secondary)', ...labelStyle }}>*</span>
            </div>
          </div>

          <div className="form-field" style={{ position: 'relative' }}>
            <label style={{ ...labelStyle, position: 'absolute', top: 0, left: 0 }}>Message</label>
            <textarea style={{ ...inputStyle, resize: 'none', minHeight: '60px' }} rows="1" onFocus={(e) => e.target.style.borderColor = 'var(--text-primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
            <span style={{ position: 'absolute', right: 0, top: 0, color: 'var(--text-secondary)', ...labelStyle }}>*</span>
          </div>
          
          <div className="form-field" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button style={{ 
              color: 'var(--text-primary)', 
              fontSize: '2rem',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
              →
            </button>
          </div>

          {/* Footer-ish Info in the form column */}
          <div className="form-field" style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '2rem', 
            marginTop: '4rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--text-secondary)',
            textAlign: 'right'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Location 1</div>
              <div>100, 5306-50 ST</div>
              <div>CITY, STATE T9E 6Z6</div>
              <div>780.123.4567</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Location 2</div>
              <div>203 CHURCH ROAD | P.O. BOX 3038</div>
              <div>CITY, STATE T7X 3A4</div>
              <div>780.987.6543</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
