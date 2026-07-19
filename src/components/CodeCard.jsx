// A stylised "code editor" card — the signature visual for the dev-themed hero.
export default function CodeCard() {
  const lines = [
    { indent: 0, code: [{ t: "const", c: "text-accent" }, { t: " developer", c: "text-white" }, { t: " = {", c: "text-muted" }] },
    { indent: 1, code: [{ t: "name:", c: "text-accent" }, { t: " 'Anurima Sarkar',", c: "text-emerald-300" }] },
    { indent: 1, code: [{ t: "role:", c: "text-accent" }, { t: " 'Full Stack Developer',", c: "text-emerald-300" }] },
    { indent: 1, code: [{ t: "stack:", c: "text-accent" }, { t: " ['React', 'Node', 'AI'],", c: "text-emerald-300" }] },
    { indent: 1, code: [{ t: "loading:", c: "text-accent" }, { t: " false,", c: "text-accentLight" }] },
    { indent: 0, code: [{ t: "};", c: "text-muted" }] },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto animate-floatSlow">
      <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-full" aria-hidden="true" />
      <div className="relative rounded-xl border border-border bg-card shadow-2xl shadow-black/40 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-white/[0.02]">
          <span className="w-3 h-3 rounded-full bg-red-400/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <span className="w-3 h-3 rounded-full bg-green-400/70" />
          <span className="ml-3 font-mono text-xs text-muted">developer.js</span>
        </div>
        <pre className="p-6 font-mono text-[13px] leading-7 overflow-x-auto">
          {lines.map((line, i) => (
            <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
              {line.code.map((seg, j) => (
                <span key={j} className={seg.c}>
                  {seg.t}
                </span>
              ))}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
