"use client";

import { useEffect, useState } from "react";

export default function useActiveSection(sectionRefs: any[]) {
  const [active, setActive] = useState("hero");

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
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sectionRefs.forEach((s) => s.current && observer.observe(s.current));
    return () => observer.disconnect();
  }, []);

  return active;
}