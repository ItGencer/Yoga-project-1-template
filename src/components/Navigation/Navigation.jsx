import "./Navigation.scss";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Головна", to: "/" },
  { label: "Йога", to: "/yoga" },
  { label: "Школа", to: "/school" },
  { label: "Контакти", to: "/contacts" },
  { label: "Про нас", to: "/about" },
  { label: "Сертифікати", to: "/certificates" },
  { label: "Правила", to: "/rules" },
  { label: "Блог", to: "/blog" },
];

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const shineRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const closeMenuOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeMenuOnEscape);
    return () => document.removeEventListener("keydown", closeMenuOnEscape);
  }, []);

  // 3D Parallax Logic
  const handleMove = (pageX, pageY) => {
    const card = cardRef.current;
    const container = containerRef.current;
    const shine = shineRef.current;
    if (!card || !container) return;

    const rect = card.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    const offsetX = 0.52 - (pageX - rect.left - scrollLeft) / w;
    const offsetY = 0.52 - (pageY - rect.top - scrollTop) / h;
    const dy = pageY - rect.top - scrollTop - h / 2;
    const dx = pageX - rect.left - scrollLeft - w / 2;

    const wMultiple = 320 / w;
    const yRotate = (offsetX - dx) * (0.07 * wMultiple);
    const xRotate = (dy - offsetY) * (0.1 * wMultiple);

    let transformStr = `rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
    if (container.classList.contains("over")) {
      transformStr += " scale3d(1.05, 1.05, 1.05)";
    }

    container.style.transform = transformStr;

    if (shine) {
      let arad = Math.atan2(dy, dx);
      let angle = (arad * 180) / Math.PI - 90;
      if (angle < 0) angle += 360;

      const opacity = ((pageY - rect.top - scrollTop) / h) * 0.4;
      shine.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,${opacity}) 0%, rgba(255,255,255,0) 80%)`;
      shine.style.transform = `translateX(${offsetX * 2 - 0.1}px) translateY(${offsetY * 2 - 0.1}px)`;
    }
  };

  const handleMouseEnter = () => {
    if (containerRef.current) {
      containerRef.current.classList.add("over");
    }
  };

  const handleMouseMove = (e) => {
    handleMove(e.pageX, e.pageY);
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.classList.remove("over");
      containerRef.current.style.transform = "";
    }
    if (shineRef.current) {
      shineRef.current.style.cssText = "";
    }
  };

  const handleTouchStart = (e) => {
    handleMouseEnter();
    if (e.touches[0]) {
      handleMove(e.touches[0].pageX, e.touches[0].pageY);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].pageX, e.touches[0].pageY);
    }
  };

  const handleTouchEnd = () => {
    handleMouseLeave();
  };

  return (
    <nav className="navigation">
      <div
        ref={cardRef}
        className={`list-container ${isMenuOpen ? "open" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div ref={containerRef} className="list-3d-card">
          <div className="list-3d-shadow"></div>
          <div ref={shineRef} className="list-3d-shine"></div>

          <ul
            id="main-navigation"
            className="list"
            aria-label="Головна навігація"
          >
            {navItems.map(({ label, to }) => (
              <li key={to} className="list__item">
                <NavLink
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `list__item__link ${isActive ? "list__item__link--active" : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`togle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            toggleMenu();
          }
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navigation;