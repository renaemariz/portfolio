// useSectionObserver.ts
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useSectionObserver(): string {
  const [activeNav, setActiveNav] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          updateState(entry.target.id);
        }
      });
    };

    const updateState = (id: string) => {
      setActiveNav((prev) => {
        if (prev === id) return prev;
        return id;
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0.1,
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!activeNav) return;

    const newHash = activeNav === "hero" ? "" : `#${activeNav}`;

    if (window.location.hash !== newHash) {
      const timeoutId = setTimeout(() => {
        router.replace(`${newHash}`, { scroll: false });
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, [activeNav, router]);

  return activeNav;
}
