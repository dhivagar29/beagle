import type { Metadata } from "next";
import Image from "next/image";
import BreadcrumbNav from "@/components/ui/BreadcrumbNav";
import TableOfContents from "@/components/ui/TableOfContents";
import PageContent from "@/content/breed-overview/page.mdx";

export const metadata: Metadata = {
  title: "Beagle Breed Overview — History, Temperament & Characteristics",
  description:
    "Learn everything about the Beagle breed — from ancient scent-hound origins and AKC standards to temperament, size, lifespan, and what makes Beagles unique.",
  openGraph: {
    title: "Beagle Breed Overview | History, Traits & AKC Standards",
    description:
      "Explore the full Beagle breed profile: origins, physical traits, temperament, AKC standards, and what to expect as a Beagle owner.",
    url: "https://beaglehub.com/breed-overview",
    type: "article",
  },
  keywords: [
    "Beagle breed history",
    "Beagle temperament",
    "AKC Beagle standards",
    "Beagle characteristics",
    "Beagle dog profile",
  ],
  alternates: {
    canonical: "https://beaglehub.com/breed-overview",
  },
};

export default function BreedOverviewPage() {
  return (
    <div className="mx-auto max-w-content px-4 pb-16 sm:px-6 lg:px-8">
      {/* Page hero image */}
      <div className="relative mb-8 h-56 w-full overflow-hidden rounded-xl sm:h-72">
        <Image
          src="https://picsum.photos/seed/beagle-breed/1200/400"
          alt="Beagle dog standing in a field"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-beagle-espresso/40 to-transparent" />
      </div>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Breed Overview" }]}
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
