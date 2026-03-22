"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

function AccordionItemComponent({
  item,
  isOpen,
  onToggle,
  id,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  const headingId = `${id}-heading`;
  const panelId = `${id}-panel`;

  return (
    <div className="border-b border-beagle-cream-dark last:border-b-0">
      <h3>
        <button
          type="button"
          id={headingId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-beagle-brown-dark transition-colors hover:text-beagle-brown"
        >
          <span>{item.question}</span>
          <span
            className={[
              "flex-shrink-0 text-beagle-tan transition-transform duration-200",
              isOpen ? "rotate-180" : "",
            ].join(" ")}
            aria-hidden="true"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        hidden={!isOpen}
        className="pb-4 text-sm leading-relaxed text-beagle-brown"
      >
        {item.answer}
      </div>
    </div>
  );
}

export default function Accordion({
  items,
  allowMultiple = false,
  className = "",
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div
      className={[
        "rounded-xl border border-beagle-cream-dark bg-beagle-cream px-5 shadow-warm",
        className,
      ].join(" ")}
    >
      {items.map((item, i) => (
        <AccordionItemComponent
          key={i}
          id={`accordion-item-${i}`}
          item={item}
          isOpen={openIndexes.has(i)}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  );
}
