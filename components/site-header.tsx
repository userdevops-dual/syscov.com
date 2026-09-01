"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Icon } from "./icon";
import { SyscovMark } from "./syscov-mark";
import { services } from "../lib/services";

type NavItem = { href: string; label: string; route: boolean };

/** Rendered left of the Services dropdown. */
const navBefore: NavItem[] = [
  { href: "/", label: "Home", route: true },
  { href: "/ai-audit", label: "AI Audit", route: true },
];
/** Rendered right of it. */
const navAfter: NavItem[] = [
  { href: "/case-studies", label: "Case Studies", route: true },
];
const navigation: NavItem[] = [...navBefore, ...navAfter];

const trackedSections = ["services", "ai", "case-studies", "technologies", "careers", "contact"];



export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);

  const clearTimers = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  // 120ms / 150ms intent delays keep the panel from flickering as the cursor passes through.
  const scheduleOpen = () => {
    clearTimers();
    openTimer.current = setTimeout(() => setServicesOpen(true), 120);
  };
  const scheduleClose = () => {
    clearTimers();
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrollProgress(Math.min(Math.max((currentY - 20) / 180, 0), 1));
      const delta = currentY - lastScrollY.current;
      if (delta > 8) setHidden(currentY > 400);
      if (delta < -1) setHidden(false);
      lastScrollY.current = currentY;
    };
    const outsideClick = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setServicesOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setServicesOpen(false);
      setMenuOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mousedown", outsideClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      clearTimers();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", outsideClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = trackedSections
      .map((id) => document.getElementById(id))
      .filter((value): value is HTMLElement => Boolean(value));

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries.find((entry) => entry.isIntersecting);
        if (current) setActiveHash(`#${current.target.id}`);
      },
      { threshold: 0.4 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const NavLink = ({ item }: { item: NavItem }) => {
    const active = item.route
      ? pathname === item.href && (item.href !== "/" || !activeHash)
      : isHome && `/${activeHash}` === item.href;
    return (
      <Link className={`nav-link${active ? " is-active" : ""}`} href={item.href}>
        {item.label}
      </Link>
    );
  };

  return (
    <header
      className={`site-header${hidden && !menuOpen ? " is-hidden" : ""}`}
      style={{ "--header-progress": scrollProgress } as CSSProperties}
    >
      <div className="container site-header__inner">
        <Link aria-label="Syscov home" className="brand" href="/" onClick={closeMenu}>
          <SyscovMark className="brand__mark" gradientId="syscov-mark-brand" title={null} />
          <span>Syscov</span>
        </Link>

        <nav aria-label="Primary navigation" className="desktop-nav">
          {navBefore.map((item) => (
            <NavLink item={item} key={item.href} />
          ))}

          <div className="nav-dropdown" onMouseEnter={scheduleOpen} onMouseLeave={scheduleClose} ref={dropdownRef}>
            <button
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`nav-link nav-link--dropdown${pathname.startsWith("/services") ? " is-active" : ""}`}
              onClick={() => setServicesOpen((open) => !open)}
              type="button"
            >
              Services
              <span aria-hidden="true" className={`nav-chevron${servicesOpen ? " is-open" : ""}`}>
                <svg fill="none" viewBox="0 0 16 16">
                  <path d="M4 6.5 8 10.5l4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
              </span>
            </button>
            <div className={`services-menu${servicesOpen ? " is-open" : ""}`}>
              {services.map((service) => (
                <Link className="service-link" href={`/services/${service.slug}`} key={service.slug} onClick={closeMenu}>
                  <span className="service-link__icon">
                    <Icon name={service.icon} />
                  </span>
                  <span>
                    <strong>{service.name}</strong>
                    <small>{service.navDescription}</small>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {navAfter.map((item) => (
            <NavLink item={item} key={item.href} />
          ))}
        </nav>

        <div className="site-header__actions">
          <Link className="button button--primary button--nav" href="/#contact">
            Start a project <span aria-hidden="true" className="button__arrow">
              <svg fill="none" viewBox="0 0 16 16">
                <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </span>
          </Link>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? " is-open" : ""}`} id="mobile-navigation">
        <nav aria-label="Mobile navigation" className="mobile-menu__nav">
          <div className="mobile-services">
            <button
              aria-expanded={mobileServicesOpen}
              className="mobile-menu__link mobile-menu__service-trigger"
              onClick={() => setMobileServicesOpen((open) => !open)}
              type="button"
            >
              Services
              <span aria-hidden="true" className={mobileServicesOpen ? "is-open" : undefined}>
                ⌄
              </span>
            </button>
            <div className={`mobile-services__list${mobileServicesOpen ? " is-open" : ""}`}>
              <div>
                {services.map((service) => (
                  <Link href={`/services/${service.slug}`} key={service.slug} onClick={closeMenu}>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navigation.map((item, index) => (
            <Link
              className="mobile-menu__link"
              href={item.href}
              key={item.href}
              onClick={closeMenu}
              style={{ transitionDelay: `${80 + index * 60}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button--primary mobile-menu__cta" href="/#contact" onClick={closeMenu}>
          Start a project <span aria-hidden="true" className="button__arrow">
              <svg fill="none" viewBox="0 0 16 16">
                <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
              </svg>
            </span>
        </Link>
      </div>
    </header>
  );
}
