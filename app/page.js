"use client";
import { useEffect, useState, useRef } from "react";

const skills = [
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "Java", icon: "☕", color: "#ED8B00" },
  { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
  { name: "Kotlin", icon: "🎯", color: "#7F52FF" },
  { name: "PHP", icon: "🐘", color: "#777BB4" },
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Spring Boot", icon: "🌱", color: "#6DB33F" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "Express.js", icon: "🚂", color: "#ffffff" },
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
  { name: "MySQL", icon: "🐬", color: "#4479A1" },
  { name: "Android Studio", icon: "📱", color: "#3DDC84" },
  { name: "Git", icon: "🔀", color: "#F05032" },
  { name: "HTML5", icon: "🌐", color: "#E34F26" },
  { name: "CSS3", icon: "🎨", color: "#1572B6" },
];

const projects = [
  {
    title: "Employee Management System",
    description:
      "A robust enterprise-grade system to manage employee records, attendance, and payroll with a powerful Java backend and intuitive UI.",
    tech: ["Java", "Spring Boot", "MySQL"],
    icon: "👥",
    color: "#ED8B00",
  },
  {
    title: "Ice Cream Agency Web App",
    description:
      "A full-featured e-commerce platform for an ice cream agency — built with the MERN stack with real-time order tracking and admin dashboard.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    icon: "🍦",
    color: "#00D9FF",
  },
  {
    title: "Smart Campus",
    description:
      "An intelligent campus management solution using Spring Boot microservices, enabling students and staff to manage resources, schedules, and facilities seamlessly.",
    tech: ["Spring Boot", "Java", "MySQL"],
    icon: "🏫",
    color: "#6DB33F",
  },
  {
    title: "Online Boarding Management System",
    description:
      "A comprehensive digital platform connecting boarding house owners and tenants — featuring room listings, booking management, and payment tracking.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    icon: "🏠",
    color: "#7F52FF",
  },
  {
    title: "Coffee Ordering App",
    description:
      "A sleek Android application that streamlines coffee ordering for cafés — built natively in Kotlin with real-time order status and a beautiful UI.",
    tech: ["Kotlin", "Android Studio", "Firebase"],
    icon: "☕",
    color: "#A0522D",
  },
  {
    title: "Daily Habits Tracker",
    description:
      "A motivational Android app to help users build and maintain positive daily habits — with streak tracking, reminders, and progress analytics.",
    tech: ["Kotlin", "Android Studio", "Room DB"],
    icon: "✅",
    color: "#3DDC84",
  },
];

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const roles = ["Full Stack Developer", "Android Developer", "IT Undergraduate", "Problem Solver"];
  const roleRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const type = () => {
      const current = roles[roleRef.current];
      if (!deletingRef.current) {
        setTyped(current.slice(0, charRef.current + 1));
        charRef.current++;
        if (charRef.current === current.length) {
          deletingRef.current = true;
          setTimeout(type, 1500);
          return;
        }
      } else {
        setTyped(current.slice(0, charRef.current - 1));
        charRef.current--;
        if (charRef.current === 0) {
          deletingRef.current = false;
          roleRef.current = (roleRef.current + 1) % roles.length;
        }
      }
      setTimeout(type, deletingRef.current ? 60 : 100);
    };
    const t = setTimeout(type, 500);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#07080f", color: "#e8eaf6", minHeight: "100vh", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@600;700;800&display=swap" rel="stylesheet" />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #07080f; }
        ::-webkit-scrollbar-thumb { background: #00d9ff; border-radius: 2px; }
        html { scroll-behavior: smooth; }

        .nav-link {
          color: #8892b0;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.3s;
          background: none;
          border: none;
          padding: 0;
        }
        .nav-link:hover { color: #00d9ff; }

        .glow-btn {
          background: transparent;
          border: 1.5px solid #00d9ff;
          color: #00d9ff;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
        }
        .glow-btn:hover {
          background: rgba(0,217,255,0.1);
          box-shadow: 0 0 20px rgba(0,217,255,0.3);
        }

        .skill-chip {
          background: rgba(0,217,255,0.05);
          border: 1px solid rgba(0,217,255,0.15);
          border-radius: 8px;
          padding: 0.9rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          font-weight: 500;
          color: #a8b2d8;
          transition: all 0.3s;
          cursor: default;
        }
        .skill-chip:hover {
          border-color: #00d9ff;
          color: #00d9ff;
          background: rgba(0,217,255,0.08);
          transform: translateY(-2px);
        }

        .project-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.4s;
          position: relative;
          overflow: hidden;
        }
        .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, #00d9ff, transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .project-card:hover {
          border-color: rgba(0,217,255,0.2);
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        .project-card:hover::before { opacity: 1; }

        .tech-tag {
          background: rgba(0,217,255,0.08);
          border: 1px solid rgba(0,217,255,0.2);
          color: #00d9ff;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .social-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.2rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: #8892b0;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
        }
        .social-btn:hover {
          border-color: #00d9ff;
          color: #00d9ff;
          background: rgba(0,217,255,0.07);
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          color: #ccd6f6;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .accent { color: #00d9ff; }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 0.8rem;
        }

        .dot-pattern {
          background-image: radial-gradient(rgba(0,217,255,0.08) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .cursor { animation: blink 1s infinite; color: #00d9ff; }

        .fade-up { animation: fadeUp 0.8s ease both; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }

        .noise {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none; z-index: 9999; opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        @media (max-width: 768px) {
          .hero-grid { flex-direction: column; }
          .hide-mobile { display: none; }
        }
      `}</style>

      <div className="noise" />

      {/* Ambient background glows */}
      <div style={{ position: "fixed", top: "10%", left: "5%", width: 500, height: 500, background: "radial-gradient(circle, rgba(0,217,255,0.04) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "10%", right: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(127,82,255,0.04) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "1.2rem 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrollY > 50 ? "rgba(7,8,15,0.95)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
        borderBottom: scrollY > 50 ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.3s",
      }}>
        <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#00d9ff", cursor: "pointer" }} onClick={() => scrollTo("home")}>
          TT<span style={{ color: "#ccd6f6" }}>.</span>
        </div>
        <div style={{ display: "flex", gap: "2.5rem" }} className="hide-mobile">
          {["home", "about", "skills", "projects", "contact"].map((s) => (
            <button key={s} className="nav-link" onClick={() => scrollTo(s)}>{s}</button>
          ))}
        </div>
        <a href="mailto:tharindu16thennakoon@gmail.com" className="glow-btn hide-mobile" style={{ fontSize: "0.75rem", padding: "0.5rem 1.2rem" }}>
          Hire Me
        </a>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "8rem 2rem 4rem", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
          <div className="fade-up">
            <span style={{ color: "#00d9ff", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Hey there, I'm
            </span>
          </div>

          <h1 className="fade-up delay-1" style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, color: "#ccd6f6", lineHeight: 1.05, letterSpacing: "-0.03em", marginTop: "0.5rem" }}>
            Tharindu<br />
            <span style={{ color: "#00d9ff" }}>Thennakoon</span>
          </h1>

          <div className="fade-up delay-2" style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "#8892b0", marginTop: "1rem", fontWeight: 400, minHeight: "2rem" }}>
            {typed}<span className="cursor">|</span>
          </div>

          <p className="fade-up delay-3" style={{ maxWidth: 560, color: "#8892b0", lineHeight: 1.8, marginTop: "1.5rem", fontSize: "0.95rem" }}>
            An IT undergraduate at <span style={{ color: "#ccd6f6", fontWeight: 600 }}>SLIIT</span> with a passion for building scalable digital solutions. From enterprise Java backends to sleek Kotlin mobile apps and full MERN stack platforms — I turn complex problems into clean, functional software.
          </p>

          <div className="fade-up delay-4" style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
            <button className="glow-btn" onClick={() => scrollTo("projects")}>View My Work</button>
            <a href="mailto:tharindu16thennakoon@gmail.com" className="glow-btn" style={{ borderColor: "rgba(255,255,255,0.2)", color: "#8892b0" }}>
              Get In Touch
            </a>
          </div>

          <div className="fade-up delay-5" style={{ display: "flex", gap: "1.5rem", marginTop: "3rem", alignItems: "center" }}>
            <a href="https://github.com/TharinduThennakoon" target="_blank" rel="noreferrer" className="social-btn">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/tharindu-thennakoon-289110295" target="_blank" rel="noreferrer" className="social-btn">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Decorative line */}
        <div style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "0.3rem", alignItems: "center" }} className="hide-mobile">
          <div style={{ width: 1, height: 80, background: "linear-gradient(to bottom, transparent, #00d9ff)" }} />
          <div style={{ color: "#00d9ff", fontSize: "0.7rem", letterSpacing: "0.2em", writingMode: "vertical-rl", textTransform: "uppercase" }}>Scroll</div>
          <div style={{ width: 1, height: 80, background: "linear-gradient(to bottom, #00d9ff, transparent)" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "6rem 2rem", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <span style={{ color: "#00d9ff", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>01. About</span>
              <h2 className="section-title" style={{ marginTop: "0.5rem" }}>
                Who Am I<span className="accent">?</span>
              </h2>
              <p style={{ color: "#8892b0", lineHeight: 1.9, marginTop: "1.5rem", fontSize: "0.95rem" }}>
                I'm a driven IT undergraduate at <span style={{ color: "#ccd6f6", fontWeight: 600 }}>Sri Lanka Institute of Information Technology (SLIIT)</span>, specialising in Information Technology with a strong focus on software engineering and full-stack development.
              </p>
              <p style={{ color: "#8892b0", lineHeight: 1.9, marginTop: "1rem", fontSize: "0.95rem" }}>
                My journey spans across building enterprise systems with Java & Spring Boot, crafting seamless user experiences with React & Node.js, and developing native Android apps in Kotlin. I thrive at the intersection of <span style={{ color: "#ccd6f6" }}>elegant design</span> and <span style={{ color: "#ccd6f6" }}>robust engineering</span>.
              </p>
              <p style={{ color: "#8892b0", lineHeight: 1.9, marginTop: "1rem", fontSize: "0.95rem" }}>
                When I'm not coding, you'll find me on the cricket field 🏏, lost in a game 🎮, or exploring the latest in tech. I believe great software is built by curious minds who never stop learning.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { label: "University", value: "SLIIT", sub: "Sri Lanka" },
                { label: "Degree", value: "BSc (Hons)", sub: "Information Technology" },
                { label: "Focus", value: "Full Stack", sub: "Web + Mobile" },
                { label: "Status", value: "Available", sub: "For Opportunities" },
              ].map((item) => (
                <div key={item.label} style={{
                  background: "rgba(0,217,255,0.03)",
                  border: "1px solid rgba(0,217,255,0.1)",
                  borderRadius: 12,
                  padding: "1.5rem",
                }}>
                  <div style={{ color: "#8892b0", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{item.label}</div>
                  <div style={{ color: "#00d9ff", fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.1rem", marginTop: "0.3rem" }}>{item.value}</div>
                  <div style={{ color: "#8892b0", fontSize: "0.78rem", marginTop: "0.2rem" }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "6rem 2rem", position: "relative", zIndex: 1 }} className="dot-pattern">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ color: "#00d9ff", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>02. Skills</span>
            <h2 className="section-title" style={{ marginTop: "0.5rem" }}>
              Tech I Work With<span className="accent">.</span>
            </h2>
          </div>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.name} className="skill-chip">
                <span style={{ fontSize: "1.2rem" }}>{s.icon}</span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "6rem 2rem", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <span style={{ color: "#00d9ff", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>03. Projects</span>
            <h2 className="section-title" style={{ marginTop: "0.5rem" }}>
              Things I've Built<span className="accent">.</span>
            </h2>
          </div>
          <div className="grid-2">
            {projects.map((p) => (
              <div key={p.title} className="project-card">
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#ccd6f6", marginBottom: "0.8rem" }}>{p.title}</h3>
                <p style={{ color: "#8892b0", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>{p.description}</p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {p.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="https://github.com/TharinduThennakoon" target="_blank" rel="noreferrer" className="glow-btn">
              View All on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "6rem 2rem", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: "#00d9ff", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>04. Contact</span>
          <h2 className="section-title" style={{ marginTop: "0.5rem" }}>
            Let's Work Together<span className="accent">.</span>
          </h2>
          <p style={{ color: "#8892b0", lineHeight: 1.8, marginTop: "1rem", fontSize: "0.95rem" }}>
            Whether you have a project in mind, a collaboration idea, or just want to say hello — my inbox is always open. Let's build something great!
          </p>

          <a href="mailto:tharindu16thennakoon@gmail.com" className="glow-btn" style={{ marginTop: "2.5rem", display: "inline-block", fontSize: "0.95rem", padding: "1rem 2.5rem" }}>
            Say Hello 👋
          </a>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
            <a href="https://github.com/TharinduThennakoon" target="_blank" rel="noreferrer" className="social-btn">GitHub</a>
            <a href="https://www.linkedin.com/in/tharindu-thennakoon-289110295" target="_blank" rel="noreferrer" className="social-btn">LinkedIn</a>
            <a href="mailto:tharindu16thennakoon@gmail.com" className="social-btn">Email</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "2rem", textAlign: "center", color: "#4a5568", fontSize: "0.82rem", position: "relative", zIndex: 1 }}>
        <span>Designed & Built by </span>
        <span style={{ color: "#00d9ff", fontWeight: 600 }}>Tharindu Thennakoon</span>
        <span> • {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}