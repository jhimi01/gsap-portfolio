import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MenuOverlay = ({ isOpen, onClose }) => {
  const container = useRef(null);
  const linksRef = useRef([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Use a ref to store the timeline so we can kill/reset it safely
  const tl = useRef();

  useGSAP(
    () => {
      // Hidden initially
      gsap.set(container.current, {
        yPercent: -100,
        visibility: "hidden",
        pointerEvents: "none",
      });
      console.log("Menu System Initialized");
    },
    { scope: container },
  );

  useGSAP(
    () => {
      if (isAnimating) return;

      if (isOpen) {
        setIsAnimating(true);
        console.log("GSAP: Executing Open Timeline");

        tl.current = gsap.timeline({
          onComplete: () => setIsAnimating(false),
        });

        tl.current
          .set(container.current, {
            visibility: "visible",
            pointerEvents: "all",
          })
          .to(container.current, {
            yPercent: 0,
            duration: 0.8,
            ease: "power4.inOut",
          })
          .fromTo(
            linksRef.current,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.4",
          );
      } else {
        console.log("GSAP: Executing Close Timeline");
        setIsAnimating(true);

        tl.current = gsap.timeline({
          onComplete: () => {
            gsap.set(container.current, {
              visibility: "hidden",
              pointerEvents: "none",
            });
            setIsAnimating(false);
          },
        });

        tl.current.to(container.current, {
          yPercent: -100,
          duration: 0.7,
          ease: "power4.inOut",
        });
      }

      return () => {
        if (tl.current) tl.current.kill(); // Cleanup
      };
    },
    { scope: container, dependencies: [isOpen] },
  );

  const menuItems = [
    { num: "01.", text: "About", href: "#about" },
    { num: "02.", text: "Projects", href: "#projects" },
    { num: "03.", text: "Contact", href: "#contact" },
  ];

  return (
    <div
      ref={container}
      className="menu-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "var(--text-secondary)",
        zIndex: 10000,
        display: "flex",
        overflowY: "auto"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          display: "flex",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <button
          onClick={onClose}
          style={{
            fontSize: "2rem",
            color: "white",
            fontWeight: 300,
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: "1rem"
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "rotate(90deg) scale(1.2)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "rotate(0) scale(1)")
          }
        >
          ✕
        </button>
      </div>

      <div
        className="container menu-grid"
        style={{
          width: "100%",
          alignItems: "center",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "2rem"
        }}
      >
        <div className="menu-header-cell" style={{ paddingLeft: "1rem" }}>
          <h2
            style={{
              color: "rgba(255, 255, 255, 0.4)",
              fontSize: "1rem",
              fontWeight: 400,
              fontFamily: "var(--font-sans)",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            Menu
          </h2>
        </div>

        <div
          className="menu-links-container"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onClose();
                const target = document.querySelector(item.href);
                if (target) {
                  setTimeout(() => {
                    target.scrollIntoView({ behavior: "smooth" });
                  }, 900);
                }
              }}
              ref={(el) => (linksRef.current[index] = el)}
              style={{
                display: "grid",
                gridTemplateColumns: "30px 1fr 30px",
                alignItems: "center",
                padding: "2rem 0",
                borderBottom:
                  index < menuItems.length - 1
                    ? "1px solid rgba(255, 255, 255, 0.1)"
                    : "none",
                textDecoration: "none",
                color: "white",
                fontFamily: "var(--font-sans)",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  opacity: 0.4,
                }}
              >
                {item.num}
              </span>
              <h1
                className="menu-link-text"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  margin: 0,
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) => {
                  if (window.innerWidth > 768) {
                    e.currentTarget.style.transform = "translateX(20px)";
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                {item.text}
              </h1>
              <span style={{ fontSize: "1.2rem", opacity: 0.2 }}>↗</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .menu-grid {
            grid-template-columns: 1fr !important;
            padding: 8rem 2rem 4rem !important;
            margin: 0 !important;
          }
          .menu-header-cell {
            display: none;
          }
          .menu-links-container {
            padding-right: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MenuOverlay;
