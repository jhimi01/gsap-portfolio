import React from "react";

const Navbar = () => {
  return (
    <nav
      className="glass"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "1.25rem 2rem",
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 700,
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
      >
        J<span style={{ color: "var(--accent-color)" }}>.</span>
      </div>

      <ul
        style={{
          display: "flex",
          gap: "2rem",
          fontSize: "1rem",
          fontWeight: 600,
        }}
      >
        <li>
          <a href="#home" style={{ color: "var(--text-primary)" }}>
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            style={{ color: "var(--text-secondary)" }}
            onMouseOver={(e) => (e.target.style.color = "var(--text-primary)")}
            onMouseOut={(e) => (e.target.style.color = "var(--text-secondary)")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            style={{ color: "var(--text-secondary)" }}
            onMouseOver={(e) => (e.target.style.color = "var(--text-primary)")}
            onMouseOut={(e) => (e.target.style.color = "var(--text-secondary)")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            style={{ color: "var(--text-secondary)" }}
            onMouseOver={(e) => (e.target.style.color = "var(--text-primary)")}
            onMouseOut={(e) => (e.target.style.color = "var(--text-secondary)")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
