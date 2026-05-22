export default function Credibility() {
  const items = [
    "VTU Portal",
    "NSDC",
    "Skill India",
    "AICTE Affiliated",
    "Startup India",
    "IIT Alumni Network",
  ];

  return (
    <section id="credibility" className="bg-surface border-y border-border py-4.5">
      <div className="container-atos">
        <div className="flex items-center gap-7 overflow-x-auto scrollbar-hide">
          <span className="text-xs font-semibold text-subtle uppercase tracking-widest whitespace-nowrap">
            Recognized &amp; Listed on
          </span>
          <div className="w-px h-4 bg-border flex-shrink-0" aria-hidden="true" />
          <div className="flex items-center gap-1.5 flex-wrap">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="text-sm font-medium text-ink whitespace-nowrap">{item}</span>
                {idx < items.length - 1 && <div className="w-0.75 h-0.75 bg-border-dk rounded-full" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
