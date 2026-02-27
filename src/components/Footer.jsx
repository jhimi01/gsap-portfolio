import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "Github",
      icon: <Github size={20} />,
      url: "https://github.com/jhimi01",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/jhimi",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:jhimi@example.com",
    },
  ];

  return (
    <footer
      style={{
        padding: "8rem 2rem 4rem",
        backgroundColor: "transparent",
        borderTop: "0.5px solid rgba(152, 66, 22, 0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="footer-container"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "2rem",
        }}
      >
        {/* Large Call to Action */}
        <div
          style={{
            gridColumn: "1 / -1",
            marginBottom: "6rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(4rem, 12vw, 10rem)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              margin: 0,
              color: "var(--text-primary)",
              textTransform: "uppercase",
              lineHeight: 0.9,
            }}
          >
            LET'S WORK <br /> TOGETHER
            <span style={{ color: "var(--accent-color)" }}>.</span>
          </h2>
        </div>

        {/* Brand & Copyright */}
        <div
          style={{
            gridColumn: "1 / span 4",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                letterSpacing: "-0.05em",
                margin: "0 0 1rem",
                color: "var(--text-primary)",
              }}
            >
              JHIMI<span style={{ color: "var(--accent-color)" }}>.</span>
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                maxWidth: "240px",
                lineHeight: 1.6,
              }}
            >
              Crafting premium digital experiences through motion, design, and
              code.
            </p>
          </div>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
              marginTop: "2rem",
              opacity: 0.6,
            }}
          >
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </p>
        </div>

        {/* Social Links */}
        <div style={{ gridColumn: "6 / span 3" }}>
          <h4
            style={{
              fontSize: "0.7rem",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "2rem",
              color: "var(--text-primary)",
              opacity: 0.5,
            }}
          >
            Socials
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {socialLinks.map((link, idx) => (
              <li key={idx} style={{ marginBottom: "1rem" }}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                  }}
                >
                  <span style={{ opacity: 0.6 }}>{link.icon}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links / Location */}
        <div style={{ gridColumn: "9 / span 2" }}>
          <h4
            style={{
              fontSize: "0.7rem",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "2rem",
              color: "var(--text-primary)",
              opacity: 0.5,
            }}
          >
            Location
          </h4>
          <p
            style={{
              color: "var(--text-primary)",
              fontWeight: 600,
              fontSize: "1.1rem",
              margin: 0,
            }}
          >
            Available <br /> Worldwide
          </p>
        </div>

        {/* Back to Top */}
        <div
          style={{
            gridColumn: "12",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <button
            onClick={scrollToTop}
            className="back-to-top"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "1.5px solid var(--accent-color)",
              backgroundColor: "transparent",
              color: "var(--accent-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>

      {/* Background Subtle Grain */}
      <div
        className="grainy-bg"
        style={{ opacity: 0.2, pointerEvents: "none" }}
      />
    </footer>
  );
};

export default Footer;
