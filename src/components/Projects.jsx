import React from 'react';

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
  const scrollRef = React.useRef(null);

  const scrollContainer = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.35; // scroll roughly one card length at a time
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="projects" 
      style={{ 
        height: '100vh', 
        backgroundColor: 'var(--text-secondary)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        // Hide vertical, handle horizontal inside the container
        overflowY: 'hidden',
      }}
    >
      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          overflowX: 'auto',
          overflowY: 'hidden',
          paddingLeft: '10vw',
          gap: '5vw',
          /* Hide default scrollbar properties */
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE/Edge */
        }}
        className="hide-scrollbar"
      >
        <style>
          {`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        
        {/* Fixed Title block */}
        <div style={{
          width: '25vw',
          minWidth: '350px',
          color: 'var(--bg-color)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <h2 style={{ 
            fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
            fontWeight: 400, 
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
            fontFamily: 'var(--font-sans)',
          }}>
            PROJECTS
          </h2>
          <p style={{ 
            fontSize: '0.9rem', 
            lineHeight: 1.6, 
            color: 'var(--bg-color)', 
            opacity: 0.8,
            marginBottom: '3rem'
          }}>
            Small businesses face a major challenge in delivering the level of customer support modern consumers expect.
          </p>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <button 
              onClick={() => scrollContainer('left')}
              style={{ 
                color: 'var(--bg-color)', 
                fontSize: '2rem',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(-10px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
            >
              ←
            </button>
            <button 
              onClick={() => scrollContainer('right')}
              style={{ 
                color: 'var(--bg-color)', 
                fontSize: '2rem',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}
            >
              →
            </button>
          </div>
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
              flexShrink: 0,
              overflow: 'hidden'
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

        {/* Buffer to ensure the last card has padding on the right */}
        <div style={{ minWidth: '5vw', flexShrink: 0 }}></div>
      </div>
    </section>
  );
};

export default Projects;
