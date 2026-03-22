type CalloutVariant = "info" | "tip" | "warning" | "danger";

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const variantConfig: Record<
  CalloutVariant,
  {
    icon: string;
    label: string;
    border: string;
    bg: string;
    title: string;
    body: string;
  }
> = {
  info: {
    icon: "ℹ️",
    label: "Info",
    border: "border-beagle-tan",
    bg: "bg-beagle-cream-dark",
    title: "text-beagle-brown-dark",
    body: "text-beagle-espresso",
  },
  tip: {
    icon: "💡",
    label: "Tip",
    border: "border-beagle-amber",
    bg: "bg-beagle-cream",
    title: "text-beagle-brown-dark",
    body: "text-beagle-espresso",
  },
  warning: {
    icon: "⚠️",
    label: "Warning",
    border: "border-beagle-tan-dark",
    bg: "bg-beagle-cream-dark",
    title: "text-beagle-brown-dark",
    body: "text-beagle-espresso",
  },
  danger: {
    icon: "🚨",
    label: "Important",
    border: "border-beagle-brown",
    bg: "bg-beagle-cream-dark",
    title: "text-beagle-brown-dark",
    body: "text-beagle-espresso",
  },
};

export default function Callout({
  variant = "info",
  title,
  children,
  className = "",
}: CalloutProps) {
  const config = variantConfig[variant];
  const heading = title ?? config.label;

  return (
    <aside
      aria-label={heading}
      className={[
        "my-6 flex gap-3 rounded-xl border-l-4 p-4",
        config.border,
        config.bg,
        className,
      ].join(" ")}
    >
      <span className="flex-shrink-0 text-xl leading-none" aria-hidden="true">
        {config.icon}
      </span>
      <div className="flex flex-col gap-1">
        <p className={["text-sm font-semibold", config.title].join(" ")}>
          {heading}
        </p>
        <div className={["text-sm leading-relaxed", config.body].join(" ")}>
          {children}
        </div>
      </div>
    </aside>
  );
}
