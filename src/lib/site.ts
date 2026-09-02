export const BUSINESS = {
  name: "LG Pick & Drop Laundry",
  tagline: "Experience Original Quality, Every Time",
  operator: "Afri General Trading Ltd",
  operatorNote: "Operated by Afri General Trading Ltd — the sole distributor of LG Electronics in Juba",
  address: "AFRI Shopping Centre, Hai Tijaria Road, Juba, South Sudan",
  areaNote: "Hai Tijjaria Road, around Freedom Hospital, Juba, South Sudan",
  hours: "Mon – Sat: 8:00 AM – 6:00 PM",
  phones: [
    { display: "+211 922 723 289", tel: "+211922723289" },
    { display: "+211 926 605 084", tel: "+211926605084" },
  ],
  whatsappPrimary: "211922723289",
  whatsappSecondary: "211926605084",
  maps:
    "https://www.google.com/maps/search/?api=1&query=AFRI%20Shopping%20Centre%2C%20Hai%20Tijaria%20Road%2C%20Juba%2C%20South%20Sudan",
  services: [
    "Professional Washing",
    "Stain Treatment",
    "Gentle Drying",
    "Steam Ironing",
    "Neat Folding or Hanging",
    "Protective Packaging",
  ],
  servicesShort: ["Professional Washing", "Steam Ironing", "Suits & Gowns", "Blankets & Comforters", "Curtains"],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Equipment", href: "/equipment" },
  { label: "Contact", href: "/contact" },
];

export function waLink(number: string, text?: string) {
  return `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

export const BOOKING_WA_TEXT =
  "Hello LG Pick & Drop Laundry, I'd like to book a pickup.";

export const EQUIPMENT_WA_TEXT =
  "Hello, I'm interested in starting my own laundry with LG commercial equipment.";