import { Mail, Phone, MapPin, Download } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import SectionEyebrow from "./SectionEyebrow";
import Reveal from "./Reveal";
import { profile } from "../data";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
  {
    icon: SiGithub,
    label: "GitHub",
    value: "github.com/anurimasarkar",
    href: profile.github,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/anurimasarkar",
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal>
          <SectionEyebrow>Contacts</SectionEyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
            Let's Connect
          </h2>
          <p className="text-muted max-w-xl mb-12">
            Open to full-stack roles, internships, and interesting collaborations.
            Feel free to reach out.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-center gap-4 bg-card border border-border rounded-xl px-5 py-4 h-full transition-all duration-200 hover:border-accent/50 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-muted">{item.label}</p>
                  <p className="text-white/90 text-sm font-medium truncate">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return (
              <Reveal key={item.label} delay={i * 60}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 bg-accent text-bg font-semibold px-6 py-3 rounded-lg transition-transform duration-200 hover:scale-105 hover:bg-sky-300"
          >
            <Download size={18} />
            Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}
