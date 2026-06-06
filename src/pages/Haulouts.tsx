import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Anchor, Ship, ArrowRight, ChevronRight, Brush, Wrench, Droplets,
  Shield, Zap, Ruler, Calendar, MapPin, AlertTriangle, BadgeCheck,
  HelpCircle, Package, Layers,
} from 'lucide-react';
import { Footer } from '../components/layout/Footer';

// ─── Hero stats ──────────────────────────────────────────────────────────────

const heroStats = [
  { value: '1,150+', label: 'Haulout Yards Listed' },
  { value: '180+',   label: 'Wood-Boat Capable' },
  { value: '50A',    label: 'Up to 100A Shore Power' },
  { value: '48',     label: 'States Covered' },
];

// ─── Reasons to haul ─────────────────────────────────────────────────────────

const reasons = [
  {
    icon: Brush,
    title: 'Bottom painting',
    text: "The single most common reason a boat comes out. In saltwater, ablative or hard antifouling protects the hull and prevents marine growth — typically refreshed every 2–3 years. Freshwater hulls need it far less, sometimes not at all.",
  },
  {
    icon: Shield,
    title: 'Sacrificial anodes (zincs)',
    text: "Galvanic protection keeps your running gear and underwater metals safe. Smaller zincs can often be swapped on the boat by a diver, but larger anodes and any work near the strut, rudder, or shaft is far easier on the hard.",
  },
  {
    icon: Droplets,
    title: 'Thru-hulls & seacocks',
    text: "Anything under the waterline that lets water in or out is a haulout job. Seacocks, raw-water inlets, and transducer fairings get inspected, replaced, or re-bedded properly only when she's blocked up and dry.",
  },
  {
    icon: Wrench,
    title: 'Engine & lower-unit service',
    text: "Even the most basic outboard or sterndrive service — lower-unit oil change, water-pump impeller, sea-strainer — calls for a haulout. Inboard running gear (shafts, cutless bearings, props) is the same.",
  },
  {
    icon: BadgeCheck,
    title: 'Warranty repairs',
    text: "Engine-manufacturer warranty work (e.g. peeling Mercury lower-unit paint) usually requires the boat dry. On vessels too large to trailer, the warranty work has to happen at the yard where she's hauled — so finding a factory-certified shop near a capable lift matters.",
  },
  {
    icon: Layers,
    title: 'Hull cleaning & inspection',
    text: "A pressure wash on haul tells you a lot — blisters, soft spots, paint condition, growth patterns. In-water hull cleaning is heavily regulated in some states (notably Washington), so a yard haul-and-clean is often the cleanest path.",
  },
];

// ─── Yard capability filters ─────────────────────────────────────────────────

const yardCriteria = [
  {
    icon: Ruler,
    title: 'Vessel dimensions',
    text: 'Maximum length overall, beam, and draft a yard can lift and block. We surface these up front so you only see facilities that can actually handle your boat.',
  },
  {
    icon: Anchor,
    title: 'Lift type',
    text: "Most yards run strap-style travel-lifts. A smaller number use forklift-style arms, which distribute load more evenly across the keel — better in theory for wooden hulls, though far less common.",
  },
  {
    icon: Ship,
    title: 'Wood-boat capable',
    text: 'Not every yard will haul a wooden vessel — some decline for liability reasons. Yards that do are flagged on their profile, so traditional-boat owners can plan without guesswork.',
  },
  {
    icon: Package,
    title: 'Blocking vs. trailer',
    text: "Once out, she's either blocked up on stands for service or set on a trailer for transport. Yard profiles list which they offer, and whether overnight or seasonal stand time is available.",
  },
  {
    icon: Zap,
    title: 'Shore power on the hard',
    text: 'Tail-end battery maintenance, dehumidifiers, and onboard tools need power. We list 30 A, 50 A, and (for larger yachts) higher-amperage availability at each yard.',
  },
  {
    icon: Wrench,
    title: 'Owner & outside-vendor work',
    text: 'Many yards allow boat owners — or their preferred mobile mechanic, rigger, or painter — to work on the hard. Others require all work to be performed in-house. The policy is on every yard profile.',
  },
];

// ─── Bottom paint cycle reference ────────────────────────────────────────────

const paintCycle = [
  { label: 'Saltwater (high fouling)',  cycle: '1–2 years',  band: 'red' },
  { label: 'Saltwater (typical)',        cycle: '2–3 years',  band: 'amber' },
  { label: 'Brackish / mixed use',       cycle: '3–4 years',  band: 'teal' },
  { label: 'Freshwater only',            cycle: 'As needed',  band: 'ocean' },
];

const paintBand: Record<string, string> = {
  red:   'bg-red-100 text-red-700',
  amber: 'bg-amber-100 text-amber-700',
  teal:  'bg-teal-100 text-teal-700',
  ocean: 'bg-ocean-100 text-ocean-700',
};

// ─── FAQs ────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'How often does my boat actually need a haulout?',
    a: 'For most saltwater cruising boats, plan on a haulout every 2–3 years for bottom paint, with shorter trips for specific repairs in between. Heavily fouled waters or hard-paint coatings may push that to annual. Freshwater boats can often go much longer between haulouts.',
  },
  {
    q: "I'm already hauled — should I repaint even if it's not due?",
    a: "Generally yes. If the boat is already out of the water for unrelated work, the marginal cost of refreshing the bottom paint is small compared to the cost of a second haulout next season — unless the existing paint was applied within the last year.",
  },
  {
    q: 'Can I do my own work in a yard, or use a mobile mechanic?',
    a: "Many yards welcome owners and outside vendors on the hard, especially for cosmetic and mechanical work. Some require all service to be performed by their in-house team. Each yard profile on Yachtworx states the policy clearly so there are no surprises on launch day.",
  },
  {
    q: 'My boat is too large to trailer — how does that change things?',
    a: 'You are constrained to whatever can be done at the haulout yard itself. That makes the choice of yard much more important: certifications, service capabilities, and partnerships with mobile specialists become deciding factors, not just the lift size.',
  },
  {
    q: "What about Washington State's hull-cleaning rules?",
    a: "Washington heavily regulates in-water hull cleaning to protect marine ecosystems. For many owners that means hull cleaning is most cleanly handled as part of a haulout, in a yard equipped to capture and dispose of washdown water. See the Washington Department of Ecology's HULL flyer for the current rules.",
  },
  {
    q: 'Does Yachtworx track when each underwater job was last done?',
    a: 'Yes. Bottom paint, zincs, lower-unit oil, impeller, thru-hull inspection, and shaft seal work are all first-class components in your digital twin, with intervals tuned to each. The dashboard tells you which jobs are due for the next haul before you book it.',
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export const Haulouts: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 18% 80%, #0D9B8A 0%, transparent 55%),
                             radial-gradient(circle at 82% 20%, #1A6B9A 0%, transparent 55%)`,
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm px-4 py-2 rounded-full mb-6 font-medium">
              <Anchor size={14} />
              The yard side of boat ownership, organised
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Yachtworx supports{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-ocean-300">
                haulouts
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              Most serious annual maintenance happens out of the water. Yachtworx
              matches your boat to yards that can actually handle her, tracks
              every underwater component, and bundles the jobs so a single haul
              earns its keep.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link to="/marketplace" className="btn-hero text-base px-8 py-4">
                Find a Haulout Yard
                <ArrowRight size={18} />
              </Link>
              <Link to="/dashboard" className="btn-ghost text-base px-8 py-4">
                Plan My Next Haul
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

      {/* ── WHY HAULOUTS MATTER ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            Why haulouts matter
          </span>
          <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3 leading-tight">
            A necessary part of owning a serious boat
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
            For larger boats — and most cruising boats kept in salt water — a
            great deal of annual or bi-annual maintenance simply cannot be done
            with the hull wet. Bottom paint, zincs, thru-hulls, shafts,
            cutless bearings, lower-unit service, prop work: the list of jobs
            that live below the waterline is long, and almost all of them ask
            the boat to come out.
          </p>
          <p>
            Yachtworx treats the haulout itself as a first-class event in your
            ownership year. The yards you can actually use are filtered by your
            vessel's length, beam, and draft; the jobs that share a haul are
            bundled together; and the underwater components you would
            otherwise lose track of are all tracked, scheduled, and ready to
            book in one trip.
          </p>
        </motion.div>
      </section>

      {/* ── TOP REASONS ── */}
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
              The jobs that put her on the hard
            </span>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3">
              Why boats come out of the water
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ocean-500 to-teal-500 text-white flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading font-bold text-navy-500 mb-2">{r.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{r.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM PAINT DEEP DIVE ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
              Bottom paint
            </span>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3 mb-5">
              The reason most boats come out
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Antifouling protects the hull from corrosion, marine growth, and
                drag. In saltwater, refresh cycles average <strong>two to
                three years</strong> depending on paint type, region, and how
                often the boat moves. Freshwater hulls are far less demanding —
                some lake boats run a decade between bottom jobs without
                meaningful consequence.
              </p>
              <p>
                A practical rule of thumb: <em>if she is out of the water
                anyway, paint her.</em> The cost of refreshing the bottom while
                she is already on the hard for other work is a fraction of the
                cost of a second haul next year — provided the existing paint
                isn't recent.
              </p>
              <p>
                Yachtworx logs every coat applied — product, colour, date, yard
                — so the next painter starts with the full history, not a guess.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
          >
            <div className="bg-navy-500 text-white px-6 py-4 flex items-center gap-2">
              <Calendar size={18} className="text-teal-300" />
              <p className="font-semibold">Typical bottom-paint cycles</p>
            </div>
            <div className="divide-y divide-gray-100">
              {paintCycle.map((row) => (
                <div key={row.label} className="px-6 py-4 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-navy-500">{row.label}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${paintBand[row.band]}`}>
                    {row.cycle}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-gray-50 text-xs text-gray-500">
              Ranges are typical — actual intervals depend on paint chemistry, water temperature, growth pressure, and use.
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── YARD CRITERIA ── */}
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
              Yard profiles, in detail
            </span>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3">
              What Yachtworx tracks for every haulout yard
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              The basic match is your boat's dimensions. The hard-won
              difference is everything else — lift type, allowed work, and
              power on the hard.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {yardCriteria.map((c, i) => {
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
                  <div className="w-11 h-11 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading font-bold text-navy-500 mb-1">{c.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LIFT TYPES + WOOD BOATS CALLOUT ── */}
      <section className="bg-navy-500 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-3 py-1.5 rounded-full mb-4">
              <Anchor size={14} />
              Strap, forklift, and the wood-boat question
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Not every yard lifts every boat the same way
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              The standard travel-lift cradles the hull in two or four
              webbing straps — fast, well understood, and right for almost
              every modern fibreglass hull. A small number of yards run
              forklift-style lift arms that spread the load along the keel
              instead.
            </p>
            <p className="text-white/70 leading-relaxed">
              Forklift lifts are, in theory, gentler on a wooden hull because
              the load is distributed rather than concentrated under two
              straps. They are rare in practice. Just as important: some yards
              will not haul wooden boats at all, for liability reasons.
              Yachtworx flags both attributes so traditional-boat owners can
              choose with full information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-7"
          >
            <Ship size={28} className="text-teal-300 mb-3" />
            <h3 className="text-xl font-heading font-bold text-white mb-2">
              Own a wooden boat?
            </h3>
            <p className="text-white/70 mb-5 leading-relaxed">
              Yachtworx has a dedicated playbook for timber hulls — yards that
              actually haul them, specialists who understand the work, and
              health scoring tuned for the way a wooden boat lives.
            </p>
            <Link
              to="/wood-boats"
              className="inline-flex items-center gap-2 bg-gold-400/20 border border-gold-400/40 text-gold-200 hover:bg-gold-400/30 text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              Read more about wood boats
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── COORDINATE THE TRIP ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            Make one haul earn its keep
          </span>
          <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3">
            Bundle the jobs a haulout unlocks
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            A haulout is the expensive part. The work itself is comparatively
            cheap. Yachtworx surfaces every overdue and upcoming underwater job
            so they share the same lift.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Brush, title: 'Bottom paint refresh', text: 'Default to a fresh coat unless paint is under a year old.' },
            { icon: Shield, title: 'Zincs & galvanic protection', text: 'Inspect and replace anodes on shafts, struts, rudders, and trim tabs.' },
            { icon: Droplets, title: 'Thru-hulls & seacocks', text: "Service the fittings you can't reach in the water — and re-bed any that weep." },
            { icon: Wrench, title: 'Lower unit / running gear', text: 'Lower-unit oil, water-pump impellers, cutless bearings, shaft seal checks.' },
          ].map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-3">
                  <Icon size={18} />
                </div>
                <h3 className="font-heading font-bold text-navy-500 text-sm mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── WARRANTY & CERTIFICATION ── */}
      <section className="bg-white border-y border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200 p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-400 to-navy-600 text-white flex items-center justify-center mb-5">
              <BadgeCheck size={22} />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy-500 mb-3">
              Factory & warranty-certified providers
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Engine-manufacturer warranty work — Mercury, Yamaha, Volvo Penta,
              Cummins, Yanmar — has to be performed by a certified shop or the
              claim is void. Yachtworx flags each provider's certifications on
              their profile so you can match warranty work to a shop near a
              capable lift.
            </p>
            <p className="text-gray-600 leading-relaxed">
              That matters most for boats too large to trailer: the work has
              to happen wherever you haul out, so the right yard isn't just
              one that can lift the boat — it's one that can either do the
              certified work itself or sit close to a shop that can.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-gray-200 p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-500 to-teal-500 text-white flex items-center justify-center mb-5">
              <AlertTriangle size={22} />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy-500 mb-3">
              Regional rules — Washington & beyond
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Some states heavily regulate in-water hull cleaning to protect
              local waterways. Washington's Department of Ecology, in
              particular, restricts in-water cleaning of biocidal antifouling
              — many yards there now perform cleaning only on the hard with
              washdown-water capture.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Yachtworx tags yards with the relevant local certifications and
              washdown infrastructure, so your service plan stays on the right
              side of the rules.{' '}
              <a
                href="https://ecology.wa.gov/getattachment/9f9f5b86-865a-431c-9254-1216cf5bba49/HULLflyer.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-ocean-600 hover:underline inline-flex items-center gap-1"
              >
                Washington Dept. of Ecology HULL flyer
                <ChevronRight size={14} />
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
            Haulouts, answered
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
                <HelpCircle size={18} className="text-ocean-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy-500 mb-1.5">{f.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
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
            <MapPin size={32} className="text-white mx-auto mb-5" />
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Plan your next haul, then forget about it
            </h2>
            <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Match to a yard that can actually lift your boat, bundle every
              underwater job that is due, and keep the receipts and photos
              attached to her digital twin forever.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dashboard"
                className="bg-white text-ocean-700 font-semibold text-base px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
              >
                Plan My Haul
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/marketplace"
                className="border border-white/40 text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                Browse Yards
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
