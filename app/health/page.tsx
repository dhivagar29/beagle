import type { Metadata } from "next";
import Image from "next/image";
import BreadcrumbNav from "@/components/ui/BreadcrumbNav";
import TableOfContents from "@/components/ui/TableOfContents";
import PageContent from "@/content/health/page.mdx";

export const metadata: Metadata = {
  title: "Beagle Health Guide — Common Conditions, Vaccines & Vet Care",
  description:
    "Complete Beagle health guide: common breed-specific conditions, vaccination schedule, vet visit frequency, preventive care, and emergency warning signs every owner needs.",
  openGraph: {
    title: "Beagle Health Guide | Conditions, Vaccines & Preventive Care",
    description:
      "Keep your Beagle healthy with our expert guide covering common Beagle illnesses, vaccination timelines, routine vet care, and when to seek emergency help.",
    url: "https://beaglehub.com/health",
    type: "article",
  },
  keywords: [
    "Beagle health problems",
    "Beagle vaccination schedule",
    "common Beagle diseases",
    "Beagle vet care",
    "Beagle preventive health",
  ],
  alternates: {
    canonical: "https://beaglehub.com/health",
  },
};

export default function HealthPage() {
  return (
    <div className="mx-auto max-w-content px-4 pb-16 sm:px-6 lg:px-8">
      {/* Page hero image */}
      <div className="relative mb-8 h-56 w-full overflow-hidden rounded-xl sm:h-72">
        <Image
          src="https://picsum.photos/seed/beagle-health/1200/400"
          alt="Beagle dog at a veterinary checkup"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-beagle-espresso/40 to-transparent" />
      </div>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Health" }]}
        className="mb-6"
      />

      <div className="flex gap-10 lg:items-start">
        {/* Main content */}
        <article className="min-w-0 flex-1">
          <PageContent />
        </article>

        {/* Sticky TOC sidebar */}
        <aside className="hidden w-56 shrink-0 xl:block">
          <div className="sticky top-24">
            <TableOfContents />
          </div>
        </aside>
      </div>
    </div>
  );
}
