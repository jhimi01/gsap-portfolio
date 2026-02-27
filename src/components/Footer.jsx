import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderTop: '1px solid var(--border-color)',
      backgroundColor: 'var(--bg-color)',
      // backgroundColor: 'var(--text-secondary)',
      marginTop: '4rem',
      // color: 'var(--bg-color)'
    }}>
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
          <Github size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
          <Linkedin size={24} />
        </a>
        <a href="mailto:hello@example.com" style={{ color: 'var(--text-secondary)' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
          <Mail size={24} />
        </a>
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Jhimi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
