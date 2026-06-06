import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Ship, ArrowRight, ChevronRight, Droplets, Calendar, Hammer, Brush,
  Users, Archive, Layers, Shield, Gauge, Anchor, Star, HelpCircle,
} from 'lucide-react';
import { Footer } from '../components/layout/Footer';

// ─── Static content (faithful replica of yachtworxv20.vercel.app/wood-boats) ──

const heroStats = [
  { value: '3,200+', label: 'Wooden & Classic Vessels' },
  { value: '480+',   label: 'Wooden-Boat Specialists' },
  { value: '97%',    label: 'Owner Satisfaction Rate' },
  { value: '48',     label: 'States Covered' },
];

const challenges = [
  {
    icon: Droplets,
    title: 'Moisture & Rot Prevention',
    text: "Wood boats demand vigilant moisture management. Yachtworx tracks hull moisture readings over time, alerts you when levels trend upward, and connects you with certified wooden-boat surveyors before a minor damp patch becomes structural rot.",
  },
  {
    icon: Calendar,
    title: 'Seasonal Haul-Out & Lay-Up',
    text: "Proper winterisation and spring commissioning are non-negotiable for a wooden hull. Our maintenance scheduler builds a custom calendar around your vessel, climate, and storage situation — and notifies your go-to yard at the right time.",
  },
  {
    icon: Hammer,
    title: 'Caulking, Fastening & Seam Work',
    text: "Cotton caulk, paying compound, and bronze fastenings require specialists who still know traditional techniques. Yachtworx's marketplace surfaces only providers with verified wooden-boat experience, not just general fiberglass shops.",
  },
  {
    icon: Brush,
    title: 'Paint, Varnish & Brightwork',
    text: "Oil finishes, spar varnish, and traditional bottom paint have very different maintenance rhythms from modern coatings. Our document vault stores your finish schedules and product history so every new applicator starts with full context.",
  },
];

const features = [
  {
    icon: Users,
    title: 'Wood-Boat Specialist Network',
    text: "We've curated a dedicated category of marine professionals — traditional boatbuilders, wooden-boat surveyors, riggers, and restoration yards — so you're never matched with a shop that's never touched carvel or lapstrake planking.",
  },
  {
    icon: Archive,
    title: 'Digital Build & Repair History',
    text: "Store original lofting drawings, builder certificates, Lloyd's survey reports, and every repair invoice in a single encrypted vault. Prospective buyers and insurers can request a verified history package in one click.",
  },
  {
    icon: Layers,
    title: 'Component-Level Tracking',
    text: "Log individual planks, frames, floors, and fastenings with condition ratings, photos, and service dates. Yachtworx surfaces which components are approaching their next service interval so nothing falls through the cracks.",
  },
  {
    icon: Shield,
    title: 'Insurance Built for Classic Vessels',
    text: "Agreed-value policies, restoration-in-progress coverage, and Lloyd's-approved surveyors are available through our insurance marketplace. We work with insurers who understand that an old-growth teak deck cannot be replaced with fiberglass.",
  },
  {
    icon: Gauge,
    title: 'Moisture & Condition Alerts',
    text: "Connect compatible boat sensors or log manual moisture-meter readings. Yachtworx plots trends over time and flags anomalies — giving you early warning before minor seepage becomes a major repair.",
  },
  {
    icon: Anchor,
    title: 'Marina Berths for Liveaboards & Long-Term Storage',
    text: "Our marina discovery tool filters for yards with covered dry storage, travel-lift capacity appropriate for heavier wooden hulls, and on-site wooden-boat expertise — not just the nearest vacant slip.",
  },
];

const steps = [
  {
    step: '01',
    title: 'Create your vessel profile',
    text: "Enter your boat's builder, construction year, construction method (carvel, lapstrake, cold-moulded, etc.), and rig type. Attach builder certificates or survey reports. Takes ten minutes.",
  },
  {
    step: '02',
    title: 'Find your specialists',
    text: 'Browse the wooden-boat specialist directory. Filter by trade — surveyors, boatbuilders, riggers, varnishers, caulkers. Read verified reviews from other wooden-boat owners.',
  },
  {
    step: '03',
    title: 'Manage everything in one place',
    text: "Log service records, track component condition, schedule haul-outs, and store documents. Your vessel's complete history, always at your fingertips.",
  },
];

const testimonials = [
  {
    quote: "I've owned Lulubelle for eleven years. Yachtworx is the first platform that didn't treat her like a problem to be solved. The specialist network found me a caulker who still uses cotton — I thought those guys were extinct.",
    name: 'David Harrington',
    vessel: '1962 Hinckley Bermuda 40',
  },
  {
    quote: "The document vault alone is worth it. I uploaded every survey and repair receipt going back to 1978. When I refinanced the boat, the bank had a complete history in twenty minutes.",
    name: 'Margaret Osei',
    vessel: '1938 Herreshoff S-Boat',
  },
  {
    quote: "My surveyor uploads condition notes directly into the platform after each annual haul-out. I can see exactly which frames she flagged and track whether they've improved or worsened over three seasons.",
    name: 'Tom Ellroy',
    vessel: '1955 Chris-Craft Riviera',
  },
];

const faqs = [
  {
    q: 'Does Yachtworx support antique and pre-WWII vessels?',
    a: "Yes. Our platform places no age floor on vessels. We've helped owners manage everything from 1920s New England lobster smacks to 1970s wooden production sloops. Older vessels simply get more fields: builder, original registry number, construction method, and Lloyd's class history.",
  },
  {
    q: 'How do I find a surveyor who specialises in wooden boats?',
    a: 'Use the Marketplace filter "Vessel Type: Wood / Classic." Surveyors in this category have self-certified and been reviewed by other wooden-boat owners. We recommend requesting at least three owner reviews before booking, which our profile pages make easy.',
  },
  {
    q: 'Can I store sensitive documents like title and insurance certificates?',
    a: 'All documents in the vault are encrypted at rest and in transit. You control access — you can share a read-only link with a broker, surveyor, or insurer with an expiry date, and revoke access at any time.',
  },
  {
    q: "I'm mid-restoration. Can Yachtworx help during the build phase?",
    a: 'Absolutely. Many of our members open an account during restoration, logging parts sourced, contractors hired, and milestone photos as the project progresses. When the boat launches, the complete provenance record is already built.',
  },
  {
    q: 'Are wooden sailboats and wooden powerboats both supported?',
    a: 'Fully. Yachtworx handles sail, power, and traditional working vessels regardless of propulsion. Component templates differ by type — a gaff-rigged ketch has different maintenance items than a triple-screw commuter — but both are covered.',
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export const WoodBoats: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 15% 85%, #1A6B9A 0%, transparent 55%),
                             radial-gradient(circle at 85% 15%, #C9943A 0%, transparent 55%)`,
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm px-4 py-2 rounded-full mb-6 font-medium">
              <Ship size={14} />
              Purpose-built for traditional vessels
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Yachtworx for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-teal-300">
                Wood Boats
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              Wooden vessels are living things. They require specialists who
              understand their rhythms — and a platform built around their
              unique needs, not retrofitted from a fiberglass checklist.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link to="/dashboard" className="btn-hero text-base px-8 py-4">
                Get Started Free
                <ArrowRight size={18} />
              </Link>
              <Link to="/marketplace" className="btn-ghost text-base px-8 py-4">
                Browse Specialists
                <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats band */}
        <div className="relative z-10 bg-navy-700/40 border-t border-b border-white/10 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-teal-300">
                  {s.value}
                </div>
                <div className="text-white/60 text-sm font-medium mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WOOD BOATS NEED THEIR OWN PLATFORM ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            Why wood boats need their own platform
          </span>
          <h2 className="text-4xl font-heading font-bold text-navy-500 mb-6 leading-tight mt-3">
            Generic marine apps weren't built for your boat
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 text-gray-600 text-lg leading-relaxed"
        >
          <p>
            Most boat management software was designed around modern production
            fiberglass — standard hull forms, commodity parts, and a
            maintenance calendar that could apply to any vessel off a Sarasota
            assembly line. Wooden boats are different in almost every dimension.
            A 1948 Alden schooner needs cotton caulk and linseed oil, not
            gelcoat repair kits. Its insurance valuation is agreed, not actual
            cash value. Its surveyor should know what a butt block looks like.
            Its marina berth should have blocking appropriate for a heavier,
            deeper-draft hull.
          </p>
          <p>
            Yachtworx was built to serve every type of vessel — including the
            ones that deserve the most care. For wooden-boat owners, that means
            specialist directories, condition-aware maintenance tracking, and a
            document vault that preserves provenance for generations.
          </p>
        </motion.div>
      </section>

      {/* ── UNIQUE CHALLENGES ── */}
      <section className="bg-white border-y border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
              What we solve
            </span>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3">
              The unique challenges of wooden-boat ownership
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {challenges.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ocean-500 to-teal-500 text-white flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading font-bold text-navy-500 mb-2">{c.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{c.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            Platform features
          </span>
          <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3">
            Everything a wooden-boat owner needs
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading font-bold text-navy-500 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="bg-navy-500 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold text-teal-300 uppercase tracking-wide">
              Getting started
            </span>
            <h2 className="text-4xl font-heading font-bold text-white mt-3">
              Up and running in three steps
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-ocean-300 mb-3">
                  {s.step}
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-3">{s.title}</h3>
                <p className="text-white/65 leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            Owner stories
          </span>
          <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3">
            Trusted by classic vessel owners
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-3 text-gold-400">
                {[1,2,3,4,5].map((n) => (
                  <Star key={n} size={16} className="fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed flex-1 mb-5">"{t.quote}"</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-navy-500">{t.name}</p>
                <p className="text-sm text-gray-500">{t.vessel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white border-t border-gray-200 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
              FAQ
            </span>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3">
              Common questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-gray-200 p-5"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle size={18} className="text-ocean-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-500 mb-1.5">{f.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-gradient-to-br from-ocean-600 via-teal-600 to-ocean-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Your wooden boat deserves better
            </h2>
            <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Join 3,200+ wooden and classic vessel owners who manage their
              boats on Yachtworx — the only platform that takes traditional
              craftsmanship as seriously as you do.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/dashboard" className="bg-white text-ocean-700 font-semibold text-base px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                Start Free — No Credit Card
                <ArrowRight size={18} />
              </Link>
              <Link to="/marketplace" className="border border-white/40 text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                Browse Specialists
                <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
