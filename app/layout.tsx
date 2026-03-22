import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BeagleHub",
    template: "%s | BeagleHub",
  },
  description: "Your community hub for beagle lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-beagle-cream font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
