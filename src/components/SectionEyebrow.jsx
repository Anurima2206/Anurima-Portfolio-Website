// Terminal-style label used above section headings, e.g. "~/about"
export default function SectionEyebrow({ children }) {
  return (
    <p className="section-eyebrow text-sm mb-3 flex items-center gap-2">
      <span className="text-muted">$</span>
      {children}
      <span className="inline-block w-[7px] h-[16px] bg-accent align-middle animate-blink" />
    </p>
  );
}
