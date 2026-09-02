import type { Metadata, Viewport } from "next";
import "../src/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "LG Pick & Drop Laundry — Professional Laundry in Juba | By Afri General Trading",
    template: "%s | LG Pick & Drop Laundry, Juba",
  },
  description:
    "LG Pick & Drop Laundry in Juba — professional washing, steam ironing, gentle drying and protective packaging on genuine LG commercial machines. Operated by Afri General Trading Ltd. Mon–Sat 8:00 AM–6:00 PM.",
  applicationName: "LG Pick & Drop Laundry",
  icons: { icon: "/assets/afri-logo.png" },
  metadataBase: new URL("https://afrilaundry.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "LG Pick & Drop Laundry",
    title: "LG Pick & Drop Laundry — Juba",
    description: "Experience Original Quality, Every Time. Professional laundry care on genuine LG commercial machines, Hai Tijaria Road, Juba.",
    images: ["/assets/machines-wall-desktop.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LG Pick & Drop Laundry — Juba",
    description: "Experience Original Quality, Every Time. Professional laundry care on genuine LG commercial machines, Hai Tijaria Road, Juba.",
    images: ["/assets/machines-wall-desktop.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "LG Pick & Drop Laundry",
              description:
                "Professional laundry services on genuine LG commercial machines. Operated by Afri General Trading Ltd, sole distributor of LG Electronics in Juba.",
              slogan: "Experience Original Quality, Every Time",
              telephone: "+211922723289",
              address: {
                "@type": "PostalAddress",
                streetAddress: "AFRI Shopping Centre, Hai Tijaria Road",
                addressLocality: "Juba",
                addressCountry: "SS",
              },
              openingHours: "Mo-Sa 08:00-18:00",
              parentOrganization: { "@type": "Organization", name: "Afri General Trading Ltd" },
            }),
          }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}