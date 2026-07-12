import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p className="text-muted font-mono">
          Designed &amp; developed by{" "}
          <span className="text-white">{profile.name}</span>
        </p>
        <p className="text-muted font-mono">© 2026 {profile.name}</p>
      </div>
    </footer>
  );
}
