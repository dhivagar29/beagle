import type { MDXComponents } from "mdx/types";
import Accordion from "@/components/ui/Accordion";
import Callout from "@/components/ui/Callout";
import ContentCard from "@/components/ui/ContentCard";
import InfoTable from "@/components/ui/InfoTable";
import BreadcrumbNav from "@/components/ui/BreadcrumbNav";
import TableOfContents from "@/components/ui/TableOfContents";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Custom UI components available in MDX files
    Accordion,
    Callout,
    ContentCard,
    InfoTable,
    BreadcrumbNav,
    TableOfContents,
    // Styled HTML element overrides
    h1: ({ children }) => (
      <h1 className="mb-6 font-serif text-4xl font-bold text-beagle-brown-dark">
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2
        id={id}
        className="mb-4 mt-10 scroll-mt-20 font-serif text-3xl font-semibold text-beagle-brown-dark"
      >
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3
        id={id}
        className="mb-3 mt-8 scroll-mt-20 font-serif text-2xl font-semibold text-beagle-brown"
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-base leading-7 text-beagle-espresso">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-beagle-amber-light underline underline-offset-2 transition-colors hover:text-beagle-amber"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 list-inside list-disc space-y-1 text-beagle-espresso">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 list-inside list-decimal space-y-1 text-beagle-espresso">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-beagle-tan pl-4 italic text-beagle-brown">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-beagle-cream-dark px-1.5 py-0.5 font-mono text-sm text-beagle-brown-dark">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-4 overflow-x-auto rounded-lg bg-beagle-espresso p-4 font-mono text-sm text-beagle-cream">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto rounded-xl border border-beagle-cream-dark shadow-warm">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="border-b border-beagle-cream-dark bg-beagle-cream-dark">
        {children}
      </thead>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-beagle-brown-dark">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-beagle-espresso">{children}</td>
    ),
    tr: ({ children }) => (
      <tr className="border-b border-beagle-cream-dark transition-colors last:border-b-0 hover:bg-beagle-cream-dark/40">
        {children}
      </tr>
    ),
    hr: () => <hr className="my-8 border-beagle-cream-dark" />,
    strong: ({ children }) => (
      <strong className="font-semibold text-beagle-brown-dark">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-beagle-brown">{children}</em>
    ),
  };
}
