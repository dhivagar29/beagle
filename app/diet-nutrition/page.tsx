import type { Metadata } from "next";
import Image from "next/image";
import BreadcrumbNav from "@/components/ui/BreadcrumbNav";
import TableOfContents from "@/components/ui/TableOfContents";
import PageContent from "@/content/diet-nutrition/page.mdx";

export const metadata: Metadata = {
  title: "Beagle Diet & Nutrition — Feeding Guides by Age & Weight",
  description:
    "Complete Beagle nutrition guide: age-based feeding schedules, best food choices, foods to avoid, weight management tips, and portion sizes for every life stage.",
  openGraph: {
    title: "Beagle Diet & Nutrition | Feeding Schedules & Food Guides",
    description:
      "Learn what to feed your Beagle at every life stage — puppy, adult, and senior — plus which foods are dangerous and how to prevent obesity.",
    url: "https://beaglehub.com/diet-nutrition",
    type: "article",
  },
  keywords: [
    "Beagle diet",
    "Beagle feeding schedule",
    "best food for Beagles",
    "Beagle nutrition",
    "Beagle weight management",
  ],
  alternates: {
    canonical: "https://beaglehub.com/diet-nutrition",
  },
};

export default function DietNutritionPage() {
  return (
    <div className="mx-auto max-w-content px-4 pb-16 sm:px-6 lg:px-8">
      {/* Page hero image */}
      <div className="relative mb-8 h-56 w-full overflow-hidden rounded-xl sm:h-72">
        <Image
          src="https://picsum.photos/seed/beagle-diet/1200/400"
          alt="Beagle dog with food bowl"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-beagle-espresso/40 to-transparent" />
      </div>

      <BreadcrumbNav
        items={[{ label: "Home", href: "/" }, { label: "Diet & Nutrition" }]}
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
