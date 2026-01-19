import React from "react";
import Link from "next/link";
import { IoLogoInstagram, IoLogoTwitter, IoLogoFacebook, IoLogoLinkedin, IoMdMail, IoMdCall, IoMdPin } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    collections: [
      { name: "All Timepieces", href: "/collections" },
      { name: "New Arrivals", href: "/new-arrivals" },
      { name: "Limited Edition", href: "/limited" },
      { name: "Accessories", href: "/accessories" },
    ],
    company: [
      { name: "Our Heritage", href: "/heritage" },
      { name: "Craftsmanship", href: "/craftsmanship" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Journal", href: "/blog" },
    ],
    support: [
      { name: "Authenticity", href: "/authenticity" },
      { name: "Service & Repair", href: "/service" },
      { name: "Shipping & Returns", href: "/shipping" },
      { name: "Contact Us", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section: Branding & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#0F172A] font-bold text-2xl transition-transform group-hover:rotate-6">W</div>
              <span className="text-2xl font-bold tracking-tighter uppercase">
                Watch<span className="text-slate-400 font-light">Aura</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              Crafting an aura of excellence since 2026. We specialize in the curation and trade of the world’s most prestigious mechanical timepieces.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-slate-400 hover:text-[#B38E44] transition-colors">
                <IoLogoInstagram size={22} />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#B38E44] transition-colors">
                <IoLogoTwitter size={22} />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#B38E44] transition-colors">
                <IoLogoFacebook size={22} />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#B38E44] transition-colors">
                <IoLogoLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-black text-[#B38E44] mb-6">Collections</h4>
            <ul className="space-y-4">
              {footerLinks.collections.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-black text-[#B38E44] mb-6">Experience</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-black text-[#B38E44] mb-6">Concierge</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3 text-sm italic">
                <IoMdPin className="text-[#B38E44]" /> 5th Avenue, New York
              </li>
              <li className="flex items-center gap-3 text-sm">
                <IoMdMail className="text-[#B38E44]" /> support@watchaura.com
              </li>
              <li className="flex items-center gap-3 text-sm">
                <IoMdCall className="text-[#B38E44]" /> +1 (800) AURA-TIME
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-800 mb-10"></div>

        {/* Bottom Section: Legal & Payments */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold">© {currentYear} WatchAura International. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-slate-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Subtle Payment Icons/Text */}
          <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-[9px] uppercase tracking-tighter text-slate-400">Secure Payments via</span>
            <div className="flex gap-2 font-black italic text-xs tracking-tighter">
              <span>VISA</span>
              <span>AMEX</span>
              <span>BITCOIN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
