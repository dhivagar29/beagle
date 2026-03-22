import type { Metadata } from "next";
import Image from "next/image";
import BreadcrumbNav from "@/components/ui/BreadcrumbNav";
import TableOfContents from "@/components/ui/TableOfContents";
import PageContent from "@/content/training/page.mdx";

export const metadata: Metadata = {
  title: "Beagle Training Guide — Obedience, House Training & Behavior Tips",
  description:
    "Master Beagle training with our complete guide covering obedience basics, house training, leash manners, recall, and how to manage common behavioral challenges.",
  openGraph: {
    title: "Beagle Training Guide | Obedience, Leash & Behavior Tips",
    description:
      "Step-by-step Beagle training techniques for obedience, house training, leash manners, and fixing problem behaviors like baying and escape attempts.",
    url: "https://beaglehub.com/training",
    type: "article",
  },
  keywords: [
    "Beagle training",
    "house training Beagle",
    "Beagle obedience",
    "leash training Beagle",
    "Beagle behavioral problems",
  ],
  alternates: {
    canonical: "https://beaglehub.com/training",
  },
};

export default function TrainingPage() {
  return (
    <div className="mx-auto max-w-content px-4 pb-16 sm:px-6 lg:px-8">
      {/* Page hero image */}
      <div className="relative mb-8 h-56 w-full overflow-hidden rounded-xl sm:h-72">
        <Image
          src="https://picsum.photos/seed/beagle-training/1200/400"
          alt="Beagle dog on a leash during training"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-beagle-espresso/40 to-transparent" />
      </div>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Training" }]}
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
