import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="mb-6 font-serif text-4xl font-bold text-beagle-brown-dark">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 font-serif text-3xl font-semibold text-beagle-brown-dark">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 font-serif text-2xl font-semibold text-beagle-brown">
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
    hr: () => <hr className="my-8 border-beagle-cream-dark" />,
  };
}
