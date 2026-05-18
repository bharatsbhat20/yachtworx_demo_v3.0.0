import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Ship, Anchor, Hammer, Droplets, Wind, Shield, FileText, Wrench,
  CheckCircle, ArrowRight, ChevronRight, Layers, Waves, Sun, Snowflake,
  Gauge, Search,
} from 'lucide-react';
import { Footer } from '../components/layout/Footer';

// ─── Static content ───────────────────────────────────────────────────────────

const constructionMethods = [
  {
    name: 'Carvel',
    blurb: 'Smooth, edge-to-edge planking fastened over sawn or steam-bent frames, with seams payed and caulked. The classic workboat and cruising-yacht build.',
  },
  {
    name: 'Clinker / Lapstrake',
    blurb: 'Overlapping planks riveted along their lands. Light, strong, and traditional — common on tenders, daysailers, and Scandinavian craft.',
  },
  {
    name: 'Strip-planked',
    blurb: 'Narrow strips edge-glued and often nailed, frequently sheathed in epoxy and glass. A stable, low-maintenance hybrid of old and new.',
  },
  {
    name: 'Cold-molded',
    blurb: 'Multiple thin veneers laminated diagonally in epoxy into a monocoque hull. Stiff, light, and seam-free — favoured for performance classics.',
  },
  {
    name: 'Plywood & sheet',
    blurb: 'Marine plywood panels, often stitch-and-glue or hard-chine. Affordable, forgiving, and well suited to trailer-sailers and dinghies.',
  },
  {
    name: 'Plank-on-frame',
    blurb: 'Heavy traditional construction with grown frames, floors, and a substantial backbone. The genuine article — and the most rewarding to maintain.',
  },
];

const componentAreas = [
  {
    icon: Layers,
    title: 'Planking & garboards',
    text: 'Per-strake condition notes, sprung-plank flags, and graving-piece repair history — including the hard-working garboard next to the keel.',
  },
  {
    icon: Droplets,
    title: 'Caulking & seams',
    text: 'Track cotton, oakum, and seam-compound payments seam by seam, with reminders before the next haul-out so weeping seams never surprise you.',
  },
  {
    icon: Hammer,
    title: 'Fastenings',
    text: 'Log bronze, copper, silicon-bronze, or galvanised fastenings and schedule refastening cycles before "nail sickness" loosens a plank.',
  },
  {
    icon: Wrench,
    title: 'Frames, floors & backbone',
    text: 'Monitor sawn and steam-bent frames, floor timbers, keel, deadwood, stem, and sternpost — the structural heart of any wooden hull.',
  },
  {
    icon: Search,
    title: 'Decay & rot watch',
    text: 'Record sounding results and soft-spot locations over time so early fungal decay is caught while it is still a repair, not a rebuild.',
  },
  {
    icon: Sun,
    title: 'Brightwork & coatings',
    text: 'Varnish and paint systems tracked coat by coat, with seasonal reminders so the toerail and transom never reach bare timber.',
  },
];

const seasonalCare = [
  {
    icon: Waves,
    season: 'Spring — taking up',
    text: 'After a dry winter the planks have shrunk. Yachtworx schedules the relaunch, flags the expected "taking-up" leak period, and reminds you to keep the bilge watched until the seams swell tight.',
  },
  {
    icon: Sun,
    season: 'Summer — keep her wet',
    text: 'Topsides and decks above the waterline dry fastest. Maintenance alerts cover deck washing, brightwork touch-ups, and ventilation checks through the sailing season.',
  },
  {
    icon: Anchor,
    season: 'Autumn — haul & survey',
    text: 'Time the annual haul-out, pressure wash, fastening checks, and surveyor visit. Findings drop straight into the vessel record with photos and provider notes.',
  },
  {
    icon: Snowflake,
    season: 'Winter — store with care',
    text: 'A covered, ventilated layup that holds moisture without trapping it. Yachtworx tracks cover condition, humidity, and the jobs queued for the off-season.',
  },
];

const faqs = [
  {
    q: 'My wooden boat has no HIN — can I still create a profile?',
    a: 'Yes. HIN-based autofill is optional. For classic and traditionally built vessels you enter make, model, year, and dimensions manually, and the digital twin works exactly the same.',
  },
  {
    q: 'Can the component tracker handle a refastening?',
    a: 'It is built for it. Fastenings are first-class components with their own service intervals, so you can log a partial or full refastening and have the next cycle scheduled automatically.',
  },
  {
    q: 'Does the health score understand timber?',
    a: 'The health score weights wood-specific components — planking, seams, fastenings, and structural members — and treats seasonal moisture movement as normal rather than as a fault.',
  },
  {
    q: 'Are there providers who actually know wooden boats?',
    a: 'The marketplace lets you filter for shipwrights, traditional caulkers, spar makers, and yards with proven wooden-hull experience, so your boat is matched with the right hands.',
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export const WoodBoats: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 15% 85%, #1A6B9A 0%, transparent 55%),
                             radial-gradient(circle at 85% 15%, #C9943A 0%, transparent 55%)`,
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold-400/15 border border-gold-400/30 text-gold-200 text-sm px-4 py-2 rounded-full mb-6 font-medium">
              <Ship size={14} />
              Built for timber, not just fibreglass
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Yachtworx supports{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-teal-300">
                wood boats
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              A wooden hull is a living structure — it breathes, swells, and asks
              for craftsmanship that fibreglass never will. Yachtworx is built to
              keep classic and traditionally constructed vessels on the water,
              looked after, and fully documented.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link to="/dashboard" className="btn-hero text-base px-8 py-4">
                Add your wooden boat
                <ArrowRight size={18} />
              </Link>
              <Link to="/" className="btn-ghost text-base px-8 py-4">
                Back to home
                <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why wood is different */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            A different kind of boat
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-600 mt-2 mb-6">
            Why wooden hulls need their own approach
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              Most boat-management tools assume a hull that never moves. A
              wooden boat is the opposite. Planks take up moisture and swell in
              the water, shrink again when she is hauled, and the whole
              structure works gently with every sea. That movement is not a
              defect — it is how the boat was designed to behave.
            </p>
            <p>
              The work that keeps her sound is just as distinctive: caulking
              seams, watching fastenings for age, sounding the planking for
              early decay, and keeping a paint or varnish system unbroken so
              water never reaches bare timber. Miss the rhythm of that care and
              small jobs quietly become major restorations.
            </p>
            <p>
              Yachtworx treats your wooden boat as the craft she is. The same
              digital twin, marketplace, and document vault that serve modern
              yachts are tuned here for planking, seams, fastenings, and the
              seasonal cycle a timber hull lives by.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Construction methods */}
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
              Every build, covered
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-600 mt-2">
              Construction methods we support
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              From a clinker tender to a plank-on-frame schooner, Yachtworx
              adapts component tracking to how your boat was actually built.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {constructionMethods.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-ocean-100 text-ocean-600 flex items-center justify-center">
                    <Ship size={16} />
                  </div>
                  <h3 className="font-heading font-bold text-navy-600">{m.name}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{m.blurb}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Component areas */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            The digital twin, in timber
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-600 mt-2">
            Wood-specific component tracking
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Yachtworx ships a component set built for wooden hulls — so the
            things that actually keep her sound are tracked, scheduled, and
            never forgotten.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {componentAreas.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ocean-500 to-teal-500 text-white flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading font-bold text-navy-600 mb-1.5">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Health score band */}
      <section className="bg-navy-600 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-3 py-1.5 rounded-full mb-4">
                <Gauge size={14} />
                Health score, tuned for timber
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                Seasonal movement is normal — and the score knows it
              </h2>
              <p className="text-white/70 leading-relaxed">
                A timber hull that swells in spring and dries in winter is a
                healthy one. Yachtworx weights wood-specific components and
                reads seasonal moisture movement as expected behaviour, so your
                vessel health score reflects genuine condition — fastening age,
                seam integrity, decay findings — not the boat simply doing what
                wooden boats do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              {[
                'Planking, seams & fastenings weighted as structural',
                'Caulking history scheduled against haul-out cycles',
                'Decay soundings logged and trended over the years',
                'Brightwork and paint systems tracked coat by coat',
              ].map((line) => (
                <div key={line} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <CheckCircle size={18} className="text-teal-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white/85 text-sm">{line}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seasonal care */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            The wooden-boat year
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-600 mt-2">
            Seasonal care, scheduled for you
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {seasonalCare.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.season}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="font-heading font-bold text-navy-600 text-sm mb-2">{s.season}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Specialists + documentation */}
      <section className="bg-white border-y border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200 p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-400 to-navy-600 text-white flex items-center justify-center mb-5">
              <Wind size={22} />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy-600 mb-3">
              Matched with real shipwrights
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Wooden boats need hands that know them. The Yachtworx marketplace
              lets you filter for traditional shipwrights, caulkers, spar and
              mast makers, and yards with proven timber-hull experience —
              complete with reviews from other wooden-boat owners. The right
              specialist, matched to the job your boat actually needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-gray-200 p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-500 text-white flex items-center justify-center mb-5">
              <FileText size={22} />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy-600 mb-3">
              A provenance worth keeping
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A classic boat is only as valuable as her record. The document
              vault keeps surveys, restoration photographs, receipts, original
              drawings, and rig specifications in one place — a continuous
              history that protects the vessel and travels with her to the next
              custodian.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            Common questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-600 mt-2">
            Wooden boats, answered
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
              className="bg-white rounded-xl border border-gray-200 p-5"
            >
              <div className="flex items-start gap-3">
                <Shield size={18} className="text-ocean-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-navy-600 mb-1">{f.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Anchor size={32} className="text-teal-300 mx-auto mb-5" />
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Bring your wooden boat aboard
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              Create her digital twin, schedule the care she needs, and keep
              every plank, seam, and fastening on the record.
            </p>
            <Link to="/dashboard" className="btn-hero text-base px-8 py-4 inline-flex">
              Get started
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
