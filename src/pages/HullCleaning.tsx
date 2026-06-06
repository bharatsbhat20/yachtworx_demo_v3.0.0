import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Droplets, ArrowRight, ChevronRight, Brush, Camera, Gauge, Waves,
  Calendar, AlertTriangle, Award, Wrench, BadgeCheck, HelpCircle,
  Shield, Fuel, Leaf, MapPin, Anchor,
} from 'lucide-react';
import { Footer } from '../components/layout/Footer';

// ─── Hero stats ──────────────────────────────────────────────────────────────

const heroStats = [
  { value: '2,400+', label: 'Hull-Cleaning Pros' },
  { value: '30%',    label: 'Typical Fuel Penalty Avoided' },
  { value: '1–6 mo', label: 'Typical Service Cycle' },
  { value: '48',     label: 'States Covered' },
];

// ─── Why it matters cards ────────────────────────────────────────────────────

const impacts = [
  {
    icon: Fuel,
    title: 'Fuel & range',
    text: 'A light slime layer can cost 10% in fuel economy. Heavy hard growth can cost more than 30%. Cleaning is one of the highest-ROI maintenance items on the boat.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    text: 'A clean hull holds its rated speed. A fouled one bleeds knots, blunts handling, and quietly retrains you to expect less of the boat than she should give.',
  },
  {
    icon: Shield,
    title: 'Hull & paint longevity',
    text: "Marine growth attacks paint chemistry and grips into gelcoat repair patches. Regular cleaning keeps antifouling working as designed and extends the life of every coat.",
  },
  {
    icon: Leaf,
    title: 'Invasive species & ecology',
    text: 'Fouled hulls move non-native species between waterways. Compliant cleaning, with capture where required, keeps your boat out of the spotlight and your regional ecosystems intact.',
  },
];

// ─── Fouling stages ──────────────────────────────────────────────────────────

const foulingStages = [
  {
    stage: 'Stage 1',
    name: 'Slime layer',
    text: 'A microscopic biofilm — diatoms, bacteria, fine algae. Invisible at first, but already costing measurable fuel. Easily removed with a soft pad or cloth.',
    color: 'bg-teal-100 text-teal-700',
    bar: 'w-1/4 bg-teal-500',
  },
  {
    stage: 'Stage 2',
    name: 'Soft growth',
    text: 'Visible green algae, hair-like macroalgae, early tubeworm and barnacle settlement. Still tractable with paint-friendly tools if caught now.',
    color: 'bg-ocean-100 text-ocean-700',
    bar: 'w-2/4 bg-ocean-500',
  },
  {
    stage: 'Stage 3',
    name: 'Hard growth',
    text: 'Mature barnacles, calcareous tubeworms, mussels. Requires firmer tooling that risks paint, and often signals an overdue antifouling refresh.',
    color: 'bg-amber-100 text-amber-700',
    bar: 'w-3/4 bg-amber-500',
  },
  {
    stage: 'Stage 4',
    name: 'Heavy fouling',
    text: 'Layered communities that no longer come off cleanly. By here the conversation has shifted from cleaning to a yard haul, sand, and full repaint.',
    color: 'bg-red-100 text-red-700',
    bar: 'w-full bg-red-500',
  },
];

// ─── In-water vs on-the-hard ─────────────────────────────────────────────────

const inWaterRow = (label: string, water: string, hard: string, waterTone: string, hardTone: string) => (
  { label, water, hard, waterTone, hardTone }
);
const compareRows = [
  inWaterRow('Cost',              'Lower — no haul required',                         'Higher — haul included',                      'text-teal-700', 'text-amber-700'),
  inWaterRow('Downtime',          'A few hours, in your slip',                        'Days, at the yard',                            'text-teal-700', 'text-amber-700'),
  inWaterRow('Method',            'Soft pad or brush by a diver',                     'Pressure wash + manual scrubbing',             'text-gray-700', 'text-gray-700'),
  inWaterRow('Paint impact',      'Minimal on intact ablative',                       'Most aggressive on heavy growth',              'text-teal-700', 'text-amber-700'),
  inWaterRow('Heavy growth',      'Limited — risks damaging paint',                   'Right tool for the job',                       'text-amber-700', 'text-teal-700'),
  inWaterRow('Regulations',       'Restricted in WA & some CA waters',                'Yard captures washdown water',                 'text-red-700',  'text-teal-700'),
];

// ─── Methods ─────────────────────────────────────────────────────────────────

const methods = [
  {
    icon: Droplets,
    title: 'Soft pad / cloth',
    text: 'The default for routine cleaning of slime and early growth. Works with ablative antifouling rather than against it — exposing fresh biocide as the top layer is wiped.',
  },
  {
    icon: Brush,
    title: 'Soft to medium brush',
    text: "Moderate growth and harder paint surfaces. Trained divers pick a stiffness matched to your paint chemistry — a stiffer brush than your paint can carry costs you a season's worth of biocide in one pass.",
  },
  {
    icon: Wrench,
    title: 'Stiff brush / chisel work',
    text: "Reserved for hard growth on hard or no-biocide paint. Expect paint wear and budget for it — and if you find yourself needing this regularly, it's a sign the cleaning cycle is too long.",
  },
  {
    icon: Waves,
    title: 'ROV & surface-supplied',
    text: "Larger yachts and deep keels are often cleaned by surface-supplied divers or remotely operated vehicles, which extend bottom time and reduce diver fatigue on long jobs.",
  },
  {
    icon: Camera,
    title: 'Inspection-grade cleaning',
    text: "Every clean is also a survey. The diver photographs anodes, propellers, struts, the rudder, transducers, and any blister activity, and uploads the lot to your digital twin.",
  },
  {
    icon: Award,
    title: 'Eco-compliant operations',
    text: 'Operators using paint-safe tooling, capture systems where required, and ecologically appropriate methods are flagged in their profile, so your service plan stays on the right side of local rules.',
  },
];

// ─── Schedule guide ──────────────────────────────────────────────────────────

const scheduleGuide = [
  { factor: 'Tropical / warm saltwater',  cycle: 'Every 4–6 weeks',  band: 'red' },
  { factor: 'Temperate saltwater (summer)', cycle: 'Every 6–10 weeks', band: 'amber' },
  { factor: 'Temperate saltwater (winter)', cycle: 'Every 3–4 months', band: 'teal' },
  { factor: 'Cold saltwater (PNW, NE)',   cycle: 'Every 3–6 months', band: 'teal' },
  { factor: 'Brackish / mixed',           cycle: 'Every 3–6 months', band: 'ocean' },
  { factor: 'Freshwater (warm)',          cycle: 'Every 3–6 months', band: 'ocean' },
  { factor: 'Freshwater (cool / lakes)',  cycle: 'Seasonally or less', band: 'ocean' },
];

const scheduleBand: Record<string, string> = {
  red:   'bg-red-100 text-red-700',
  amber: 'bg-amber-100 text-amber-700',
  teal:  'bg-teal-100 text-teal-700',
  ocean: 'bg-ocean-100 text-ocean-700',
};

// ─── Diver criteria ──────────────────────────────────────────────────────────

const diverCriteria = [
  {
    icon: BadgeCheck,
    title: 'Commercial dive certification',
    text: 'PADI Divemaster is recreational. Commercial hull-cleaning operators carry the relevant DCBC, ADCI, or local commercial credentials, and we surface them on every profile.',
  },
  {
    icon: Shield,
    title: 'Insurance & liability',
    text: "General liability and marine pollution coverage — not just personal dive insurance. Yachtworx confirms each provider's certificates are current before they take a job.",
  },
  {
    icon: Droplets,
    title: 'Paint-aware tooling',
    text: 'Soft pads, brushes graded by stiffness, and the judgement to pick the right one. Operators describe their toolkit and the paint systems they are certified to clean.',
  },
  {
    icon: Camera,
    title: 'Photo-documented work',
    text: "Every clean lands in your vault as a date-stamped photo set — anodes, propellers, paint condition. You see exactly what she looked like, not just what's on the invoice.",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'Is hull cleaning legal where I am?',
    a: "In-water cleaning of biocidal antifouling is restricted in several jurisdictions, most prominently Washington and parts of California, to keep biocides and invasive species out of the water column. Yachtworx tags each operator with the local rules they comply with, so you do not have to research the regulation yourself.",
  },
  {
    q: 'How often should the boat be cleaned?',
    a: 'In warm saltwater, plan on every four to six weeks. In cool saltwater or brackish water, every three to six months. Freshwater boats can often go a full season. The exact cadence depends on water temperature, paint type, and how often the boat moves — Yachtworx schedules a custom interval per vessel.',
  },
  {
    q: 'Will cleaning damage my bottom paint?',
    a: "Done right, no — soft pads on ablative paint actually expose fresh biocide and extend the paint's life. Wrong tool on the wrong paint can strip a season of antifouling in a single pass, which is why operator tool selection matters as much as their dive certification.",
  },
  {
    q: 'Do I need a haulout instead of an in-water clean?',
    a: 'Once growth turns hard and heavy, in-water cleaning starts costing more in paint damage than it saves in fuel. At that point a haulout, pressure wash, and fresh bottom paint is usually the cheaper, longer-lasting answer. The dashboard flags when the cleaning cycle is shortening and a haul is the better call.',
  },
  {
    q: 'What happens to the inspection findings?',
    a: 'They go straight into the vessel record — anode condition, propeller integrity, transducer paint, blister activity, growth patterns. Over time the trend is visible at a glance, and any provider you book next inherits the full history rather than starting from scratch.',
  },
  {
    q: 'Is cleaning included in a haulout?',
    a: 'A pressure wash is standard on every haul, and we treat it as the cleaning event of record. See the haulouts page for how the two events sit alongside each other in the yearly plan.',
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export const HullCleaning: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #0D9B8A 0%, transparent 55%),
                             radial-gradient(circle at 80% 20%, #1A6B9A 0%, transparent 55%)`,
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm px-4 py-2 rounded-full mb-6 font-medium">
              <Droplets size={14} />
              The underwater half of looking after a boat
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Yachtworx supports{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-ocean-300">
                hull cleaning
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              Marine growth is silent, expensive, and locally regulated.
              Yachtworx matches your boat to certified, eco-compliant
              cleaning operators, schedules them on the right cycle, and turns
              every clean into a documented inspection of her underwater half.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link to="/marketplace" className="btn-hero text-base px-8 py-4">
                Find a Cleaning Pro
                <ArrowRight size={18} />
              </Link>
              <Link to="/dashboard" className="btn-ghost text-base px-8 py-4">
                Schedule a Clean
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

      {/* ── WHY IT MATTERS ── */}
      <section className="bg-white border-b border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
              The biggest small job on the boat
            </span>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3">
              Why hull cleaning earns its keep
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {impacts.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ocean-500 to-teal-500 text-white flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading font-bold text-navy-500 mb-2">{c.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FOULING STAGES ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            Anatomy of a fouled hull
          </span>
          <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3">
            From slime to sand-and-repaint
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            The cheaper and cleaner the intervention, the earlier in the
            progression it lands. Yachtworx aims for stages one and two.
          </p>
        </motion.div>

        <div className="space-y-4">
          {foulingStages.map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white rounded-xl border border-gray-200 p-5"
            >
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${s.color}`}>
                    {s.stage}
                  </span>
                  <h3 className="font-heading font-bold text-navy-500">{s.name}</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">{s.text}</p>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${s.bar}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── IN-WATER VS HAULED ── */}
      <section className="bg-white border-y border-gray-200 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
              Two ways to do it
            </span>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3">
              In-water vs on the hard
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              The right choice depends on growth stage, paint, regulation, and
              what else needs doing. The dashboard always tells you which the
              boat needs next.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-navy-500 text-white text-xs font-semibold uppercase tracking-wider">
              <div className="px-5 py-3">Factor</div>
              <div className="px-5 py-3 flex items-center gap-2"><Waves size={14} className="text-teal-300" /> In-water</div>
              <div className="px-5 py-3 flex items-center gap-2"><Anchor size={14} className="text-teal-300" /> Hauled</div>
            </div>
            <div className="divide-y divide-gray-100">
              {compareRows.map((row) => (
                <div key={row.label} className="grid grid-cols-3 text-sm">
                  <div className="px-5 py-3 font-medium text-navy-500">{row.label}</div>
                  <div className={`px-5 py-3 ${row.waterTone}`}>{row.water}</div>
                  <div className={`px-5 py-3 ${row.hardTone}`}>{row.hard}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── METHODS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            Method matters
          </span>
          <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3">
            How the work is actually done
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            The diver's tool selection is half the job. The other half is
            knowing your paint well enough to choose the right one.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {methods.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-ocean-100 text-ocean-600 flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading font-bold text-navy-500 mb-1">{m.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{m.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── SCHEDULE GUIDE ── */}
      <section className="bg-navy-500 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-3 py-1.5 rounded-full mb-4">
              <Calendar size={14} />
              Scheduling on the right cadence
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              The right cycle is local, not universal
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Warmer water grows fouling faster. So does sitting still. The
              same boat in Florida and the Pacific Northwest is on entirely
              different schedules. Yachtworx tunes the cadence to your home
              port, your usage, and your paint, and pushes the next clean to
                your provider before the slime stage shows up at the waterline.
            </p>
            <p className="text-white/70 leading-relaxed">
              When the cycle starts shortening — cleaner returning every five
              weeks instead of every eight — that is the dashboard's signal
              that paint is failing, and the conversation moves to the
              haulout page.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden"
          >
            <div className="px-6 py-4 bg-white border-b border-gray-100 flex items-center gap-2">
              <Calendar size={18} className="text-ocean-600" />
              <p className="font-semibold text-navy-500">Typical cleaning intervals</p>
            </div>
            <div className="divide-y divide-gray-100">
              {scheduleGuide.map((row) => (
                <div key={row.factor} className="px-6 py-3 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-navy-500">{row.factor}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${scheduleBand[row.band]}`}>
                    {row.cycle}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-gray-50 text-xs text-gray-500">
              Ranges are typical — local fouling pressure, hull use, and paint chemistry shift the right answer.
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── REGULATIONS + HAULOUT CALLOUT ── */}
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
              <AlertTriangle size={22} />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy-500 mb-3">
              Regional regulations
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              In-water hull cleaning is increasingly restricted. Washington's
              Department of Ecology, in particular, regulates the in-water
              removal of biocidal antifouling, and several California marinas
              limit cleaning to capture-enabled operators. Many other states
              are headed in the same direction as invasive-species policy
              tightens.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Yachtworx tags each operator with the certifications and capture
              equipment they actually carry, so your service plan stays
              compliant by default.{' '}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-gray-200 p-8 bg-gradient-to-br from-ocean-50 to-teal-50"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-500 to-teal-500 text-white flex items-center justify-center mb-5">
              <Anchor size={22} />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy-500 mb-3">
              When a clean turns into a haul
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cleaning is the right answer until it isn't. Once growth turns
              hard and persistent, repeat cleans cost more in paint damage
              than they save in fuel, and a yard haul with a fresh bottom
              paint becomes the cheaper, longer-lasting move.
            </p>
            <Link
              to="/haulouts"
              className="inline-flex items-center gap-2 bg-white border border-ocean-200 text-ocean-700 hover:bg-ocean-50 text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              How Yachtworx supports haulouts
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── DIVER CRITERIA ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            Who's actually under your boat
          </span>
          <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3">
            What Yachtworx verifies on every cleaning pro
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {diverCriteria.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ocean-500 to-teal-500 text-white flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading font-bold text-navy-500 mb-1">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── DIGITAL TWIN HOOK ── */}
      <section className="bg-navy-500 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-3 py-1.5 rounded-full mb-4">
              <Camera size={14} />
              Every clean is also a survey
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Inspection findings, stored where they belong
            </h2>
            <p className="text-white/70 leading-relaxed">
              Anode condition, propeller and shaft notes, transducer paint,
              blister activity, growth patterns — they all flow into the
              vessel's digital twin alongside the dated photo set. Over time,
              the trend tells you more about the boat than any single visit
              ever could.
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
              'Anode wear logged and trended dive-to-dive',
              'Before/after photos automatically archived',
              'Findings dropped into the Documents vault',
              'Paint condition linked to the next-haul forecast',
            ].map((line) => (
              <div key={line} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                <BadgeCheck size={18} className="text-teal-300 flex-shrink-0 mt-0.5" />
                <span className="text-white/85 text-sm">{line}</span>
              </div>
            ))}
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
            Hull cleaning, answered
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
              Keep her clean. Keep her fast.
            </h2>
            <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Match to a certified cleaning pro near you, schedule on the
              cadence your waters actually demand, and turn every dive into a
              documented record you keep forever.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dashboard"
                className="bg-white text-ocean-700 font-semibold text-base px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
              >
                Schedule a Clean
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/marketplace"
                className="border border-white/40 text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                Find a Cleaning Pro
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
