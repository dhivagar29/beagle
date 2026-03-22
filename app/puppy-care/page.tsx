import type { Metadata } from "next";
import Image from "next/image";
import BreadcrumbNav from "@/components/ui/BreadcrumbNav";
import TableOfContents from "@/components/ui/TableOfContents";
import PageContent from "@/content/puppy-care/page.mdx";

export const metadata: Metadata = {
  title: "Beagle Puppy Care — Bringing Home Your New Puppy & First-Year Guide",
  description:
    "Your complete Beagle puppy care guide: what to prepare before bringing your puppy home, the critical first week, socialization windows, crate training, and first-year milestones.",
  openGraph: {
    title: "Beagle Puppy Care | First Week, Socialization & Crate Training",
    description:
      "Everything new Beagle puppy owners need — from puppy-proofing your home and the first night to socialization, crate training, and the first-year development timeline.",
    url: "https://beaglehub.com/puppy-care",
    type: "article",
  },
  keywords: [
    "Beagle puppy care",
    "bringing home Beagle puppy",
    "Beagle puppy socialization",
    "Beagle crate training",
    "Beagle puppy first week",
  ],
  alternates: {
    canonical: "https://beaglehub.com/puppy-care",
  },
};

export default function PuppyCarePage() {
  return (
    <div className="mx-auto max-w-content px-4 pb-16 sm:px-6 lg:px-8">
      {/* Page hero image */}
      <div className="relative mb-8 h-56 w-full overflow-hidden rounded-xl sm:h-72">
        <Image
          src="https://picsum.photos/seed/beagle-puppy/1200/400"
          alt="Adorable Beagle puppy"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-beagle-espresso/40 to-transparent" />
      </div>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Puppy Care" }]}
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
