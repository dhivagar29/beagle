import Link from "next/link";

interface ContentCardProps {
  title: string;
  description?: string;
  href?: string;
  tag?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ContentCard({
  title,
  description,
  href,
  tag,
  children,
  className = "",
}: ContentCardProps) {
  const cardBody = (
    <div
      className={[
        "flex flex-col gap-3 rounded-xl border border-beagle-cream-dark bg-beagle-cream p-5 shadow-warm transition-shadow",
        href ? "hover:shadow-warm-lg" : "",
        className,
      ].join(" ")}
    >
      {tag && (
        <span className="w-fit rounded-full bg-beagle-tan-light px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-beagle-brown-dark">
          {tag}
        </span>
      )}
      <h3 className="font-serif text-xl font-semibold text-beagle-brown-dark">
        {title}
      </h3>
      {description && (
        <p className="text-sm leading-relaxed text-beagle-brown">
          {description}
        </p>
      )}
      {children}
      {href && (
        <span className="mt-1 text-sm font-medium text-beagle-amber underline-offset-2 hover:underline">
          Learn more →
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-beagle-amber"
      >
        {cardBody}
      </Link>
    );
  }

  return cardBody;
}
