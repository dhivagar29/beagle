import type { Metadata } from "next";
import Image from "next/image";
import BreadcrumbNav from "@/components/ui/BreadcrumbNav";
import TableOfContents from "@/components/ui/TableOfContents";
import PageContent from "@/content/grooming/page.mdx";

export const metadata: Metadata = {
  title: "Beagle Grooming Guide — Coat, Bathing, Nails, Ears & Dental Care",
  description:
    "Step-by-step Beagle grooming guide covering coat brushing, bathing frequency, nail trimming, ear cleaning, and dental care to keep your Beagle healthy and clean.",
  openGraph: {
    title: "Beagle Grooming Guide | Coat, Bathing, Nails & Ear Care",
    description:
      "Learn how to groom your Beagle at home — from brushing the short dense coat and bathing, to nail trims, ear cleaning, and preventing dental disease.",
    url: "https://beaglehub.com/grooming",
    type: "article",
  },
  keywords: [
    "Beagle grooming",
    "Beagle coat care",
    "Beagle ear cleaning",
    "Beagle bathing",
    "Beagle nail trimming",
  ],
  alternates: {
    canonical: "https://beaglehub.com/grooming",
  },
};

export default function GroomingPage() {
  return (
    <div className="mx-auto max-w-content px-4 pb-16 sm:px-6 lg:px-8">
      {/* Page hero image */}
      <div className="relative mb-8 h-56 w-full overflow-hidden rounded-xl sm:h-72">
        <Image
          src="https://picsum.photos/seed/beagle-grooming/1200/400"
          alt="Beagle dog being groomed"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-beagle-espresso/40 to-transparent" />
      </div>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Grooming" }]}
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
