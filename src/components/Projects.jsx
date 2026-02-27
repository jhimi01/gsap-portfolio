import React from "react";
import { ExternalLink, Github, Code2, MoveUpRight, MoveRight, MoveLeft } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "LANG MASTER",
    category: "Team Project — Mernstack",
    tech: [
      "ReactJS",
      "Typescript",
      "TailwindCSS",
      "Firebase",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    description:
      "A comprehensive English learning platform featuring locked units, interactive questions, and a coin-based reward system for certificates.",
    links: {
      live: "#",
      client: "#",
      server: "#",
    },
  },
  {
    number: "02",
    title: "BOOKLIST",
    category: "NextJS Project",
    tech: ["NextJS", "TailwindCSS", "ShadcnUI", "PostgreSQL", "MongoDB"],
    description:
      "A secure book management system where authenticated users can curate favorite collections with full CRUD functionality.",
    links: {
      live: "#",
      code: "#",
    },
  },
  {
    number: "03",
    title: "FACEBOOK CLONE",
    category: "MernStack Project",
    tech: [
      "React.js",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
    description:
      "A fully protected social platform featuring Firebase authentication, post interactions (CRUD, likes), and personalized user profiles.",
    links: {
      live: "#",
      client: "#",
      server: "#",
    },
  },
];

const Projects = () => {
  const scrollRef = React.useRef(null);

  const scrollContainer = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.35;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      style={{
        height: "100vh",
        backgroundColor: "var(--text-secondary)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* Static Title block */}
        <div
          style={{
            width: "30%",
            minWidth: "300px",
            color: "var(--bg-color)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexShrink: 0,
            zIndex: 10,
            paddingLeft: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(3rem, 5vw, 4.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
              fontFamily: "var(--font-sans)",
            }}
          >
            PROJECTS
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.6,
              color: "var(--bg-color)",
              opacity: 0.8,
              marginBottom: "3rem",
            }}
          >
            A selection of my recent works, ranging from interactive learning
            platforms to secure management systems.
          </p>

          <div style={{ display: "flex", gap: "2rem" }}>
            <button
              onClick={() => scrollContainer("left")}
              style={{
                color: "var(--bg-color)",
                fontSize: "2rem",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateX(-10px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateX(0)")
              }
            >
              
              <MoveLeft size={40} strokeWidth={1.5} />
              
            </button>
            <button
              onClick={() => scrollContainer("right")}
              style={{
                color: "var(--bg-color)",
                fontSize: "2rem",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateX(10px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateX(0)")
              }
            >
              <MoveRight size={40} strokeWidth={1.5} />
            </button>
          </div>
        </div>
        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            height: "100%",
            flexGrow: 1,
            alignItems: "center",
            overflowX: "auto",
            overflowY: "hidden",
            gap: "1vw",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingRight: "10vw",
          }}
          className="hide-scrollbar"
        >
          <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>

          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                width: "27vw",
                minWidth: "380px",
                height: "90vh",
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(10px)",
                borderRadius: "10px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 40px 80px rgba(0,0,0,0.1)",
                flexShrink: 0,
                transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-15px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {/* Header: Number & Dot */}
              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "var(--accent-color)",
                    borderRadius: "50%",
                    marginBottom: "1rem",
                    opacity: 1,
                  }}
                ></div>
                <h3
                  style={{
                    fontSize: "clamp(4rem, 6vw, 7rem)",
                    fontWeight: 300,
                    color: "var(--text-primary)",
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                    opacity: 0.2,
                    position: "absolute",
                    top: "1rem",
                    right: "2rem",
                  }}
                >
                  {project.number}
                </h3>
              </div>

              {/* Content Area */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* Tech Badges */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.6rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "0.6rem",
                        fontFamily: "var(--font-mono)",
                        border: "1px solid var(--border-color)",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "100px",
                        color: "var(--text-secondary)",
                        fontWeight: 600,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent-color)",
                    marginBottom: "1.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {project.category}
                </p>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    opacity: 0.9,
                    marginBottom: "2rem",
                    flexGrow: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Footer / Links */}
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "center",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid var(--border-color)",
                  }}
                >
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "center",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--accent-color)",
                    }}
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  {project.links.client && (
                    <a
                      href={project.links.client}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "center",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        opacity: 0.7,
                      }}
                    >
                      Client <Github size={14} />
                    </a>
                  )}
                  {project.links.server && (
                    <a
                      href={project.links.server}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "center",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        opacity: 0.7,
                      }}
                    >
                      Server <Github size={14} />
                    </a>
                  )}
                  {project.links.code && (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "center",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        opacity: 0.7,
                      }}
                    >
                      Code <Github size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
