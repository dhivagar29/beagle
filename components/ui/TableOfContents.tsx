"use client";

import { useEffect, useRef, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  items?: TocItem[];
  title?: string;
  className?: string;
}

function useAutoToc(): TocItem[] {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLElement>("article h2, article h3")
    );
    const tocItems: TocItem[] = headings.map((el) => {
      if (!el.id) {
        el.id = el.textContent
          ? el.textContent
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "")
          : `heading-${Math.random().toString(36).slice(2)}`;
      }
      return {
        id: el.id,
        text: el.textContent ?? "",
        level: parseInt(el.tagName[1]) as 2 | 3,
      };
    });
    setItems(tocItems);
  }, []);

  return items;
}

export default function TableOfContents({
  items: propItems,
  title = "On this page",
  className = "",
}: TableOfContentsProps) {
  const autoItems = useAutoToc();
  const items = propItems ?? autoItems;
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "0px 0px -70% 0px" }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className={[
        "rounded-xl border border-beagle-cream-dark bg-beagle-cream p-5 shadow-warm",
        className,
      ].join(" ")}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-beagle-brown">
        {title}
      </p>
      <ol className="flex flex-col gap-1" role="list">
        {items.map(({ id, text, level }) => (
          <li key={id} className={level === 3 ? "pl-4" : ""}>
            <a
              href={`#${id}`}
              className={[
                "block rounded py-0.5 text-sm transition-colors",
                activeId === id
                  ? "font-medium text-beagle-brown-dark"
                  : "text-beagle-brown hover:text-beagle-brown-dark",
              ].join(" ")}
              aria-current={activeId === id ? "location" : undefined}
            >
              {text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
