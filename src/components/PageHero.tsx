interface PageHeroProps {
  label: string;
  title: string;
  lead?: string;
}

export default function PageHero({ label, title, lead }: PageHeroProps) {
  return (
    <header className="bg-black pb-16 pt-28 text-white md:pb-20 md:pt-36">
      <div className="container-x">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{label}</p>
        <h1 className="h-display mt-3">{title}</h1>
        {lead && <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{lead}</p>}
      </div>
    </header>
  );
}