import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HomeContent from "@/content/home/page.mdx";

export const metadata: Metadata = {
  title: "BeagleHub — Your Complete Beagle Dog Resource",
  description:
    "BeagleHub is your go-to guide for everything Beagle — breed info, health tips, training advice, nutrition, grooming, and puppy care all in one place.",
  openGraph: {
    title: "BeagleHub | The Complete Beagle Dog Resource",
    description:
      "Discover expert Beagle care guides covering health, training, nutrition, grooming, and more. Built for Beagle owners by Beagle lovers.",
    url: "https://beaglehub.com/",
    type: "website",
  },
  keywords: [
    "Beagle dog",
    "Beagle care guide",
    "Beagle breed information",
    "Beagle owner tips",
    "BeagleHub",
  ],
  alternates: {
    canonical: "https://beaglehub.com/",
  },
};

const sections = [
  {
    href: "/breed-overview",
    label: "Breed Overview",
    description:
      "History, AKC standards, temperament & physical characteristics",
  },
  {
    href: "/diet-nutrition",
    label: "Diet & Nutrition",
    description: "Feeding schedules by age, food selection & weight management",
  },
  {
    href: "/training",
    label: "Training",
    description: "Obedience basics, house training, leash manners & behavior",
  },
  {
    href: "/health",
    label: "Health",
    description: "Common conditions, vaccines, vet care & emergency signs",
  },
  {
    href: "/grooming",
    label: "Grooming",
    description: "Coat care, bathing, nail trims, ear cleaning & dental care",
  },
  {
    href: "/puppy-care",
    label: "Puppy Care",
    description: "First week guide, socialization, crate training & milestones",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-80 w-full overflow-hidden sm:h-96">
        <Image
          src="https://picsum.photos/seed/beagle-hero/1200/400"
          alt="A happy Beagle dog outdoors"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-beagle-espresso/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-beagle-cream sm:text-5xl">
            BeagleHub
          </h1>
          <p className="mt-3 max-w-xl text-lg text-beagle-cream/90">
            Your complete resource for Beagle health, training, nutrition,
            grooming, and puppy care.
          </p>
          <Link
            href="/breed-overview"
            className="mt-6 inline-block rounded-lg bg-beagle-amber px-6 py-2.5 text-sm font-semibold text-beagle-espresso transition-colors hover:bg-beagle-amber-light"
          >
            Explore the Guide
          </Link>
        </div>
      </section>

      {/* Navigation cards */}
      <section className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 font-serif text-2xl font-semibold text-beagle-brown-dark">
          Explore BeagleHub
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map(({ href, label, description }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-xl border border-beagle-cream-dark bg-white p-5 shadow-warm transition-shadow hover:shadow-warm-lg"
            >
              <h3 className="font-serif text-lg font-semibold text-beagle-brown-dark transition-colors group-hover:text-beagle-amber">
                {label}
              </h3>
              <p className="mt-1 text-sm text-beagle-brown">{description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* MDX content */}
      <article className="mx-auto max-w-prose px-4 pb-16 sm:px-6 lg:px-8">
        <HomeContent />
      </article>
    </>
  );
}
