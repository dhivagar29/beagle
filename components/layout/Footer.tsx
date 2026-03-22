import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/breed", label: "Breed Overview" },
  { href: "/diet", label: "Diet & Nutrition" },
  { href: "/training", label: "Training" },
  { href: "/health", label: "Health" },
  { href: "/grooming", label: "Grooming" },
  { href: "/puppy-care", label: "Puppy Care" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-beagle-cream-dark bg-beagle-espresso text-beagle-cream">
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-serif text-lg font-bold text-beagle-cream transition-colors hover:text-beagle-tan-light"
              aria-label="BeagleHub home"
            >
              <span className="text-xl" aria-hidden="true">
                🐾
              </span>
              BeagleHub
            </Link>
            <p className="max-w-xs text-sm text-beagle-tan-light">
              Your community hub for beagle lovers — breed info, care guides,
              and more.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-beagle-tan">
              Pages
            </h2>
            <ul
              className="grid grid-cols-2 gap-x-8 gap-y-1.5 sm:grid-cols-1"
              role="list"
            >
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-beagle-tan-light transition-colors hover:text-beagle-cream"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-beagle-brown pt-6 text-center text-xs text-beagle-tan">
          <p>© {year} BeagleHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
