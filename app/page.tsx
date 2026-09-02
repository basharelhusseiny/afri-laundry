import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "LG Pick & Drop Laundry — Professional Laundry in Juba | By Afri General Trading",
  description:
    "LG Pick & Drop Laundry in Juba — professional washing, steam ironing, gentle drying and protective packaging on genuine LG commercial machines. Operated by Afri General Trading Ltd. Mon–Sat 8:00 AM–6:00 PM.",
  openGraph: {
    title: "LG Pick & Drop Laundry — Juba",
    description: "Experience Original Quality, Every Time. Professional laundry care on genuine LG commercial machines.",
    url: "/",
    images: ["/assets/machines-wall-desktop.webp"],
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}