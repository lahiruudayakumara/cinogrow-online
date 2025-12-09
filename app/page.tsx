"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Hero from "../components/sections/Hero";
import ResearchSection from "../components/sections/ResearchSection";
import { Navigation } from "@/components/layout/Navigation";
import ResearchGapSection from "@/components/sections/ResearchGapSection";

// Reusable Section Wrapper
type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      id={id}
      data-section-id={id}
      className={`scroll-mt-20 ${className}`}
    >
      {children}
    </section>
  );
};

// Navigation Component


// Main Page Component
export default function Home() {
  const [active, setActive] = useState("hero");

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const sections = [
    { id: "hero", label: "Home", component: <Hero /> },
    { id: "research", label: "Research", component: <ResearchSection /> },
    { id: "research-gaps", label: "Research Gaps", component: <ResearchGapSection /> },
  ];

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section-id");
            if (id) setActive(id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    // Observe all sections
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el;
        observer.observe(el);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []); // Run once

  return (
    <div className="relative">
      <Navigation
        active={active}
        onNavigate={scrollToSection}
        items={sections.map((s) => ({ id: s.id, label: s.label }))}
      />

      <main>
        {sections.map(({ id, component }) => (
          <Section key={id} id={id}>
            {component}
          </Section>
        ))}
      </main>
    </div>
  );
}