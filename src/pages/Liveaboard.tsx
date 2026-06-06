import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home, ArrowRight, ChevronRight, Droplet, Zap, Flame, BatteryCharging,
  Wind, Thermometer, Calendar, Truck, MapPin, Shield, Building2,
  HelpCircle, AlertTriangle, Anchor, Snowflake,
} from 'lucide-react';
import { Footer } from '../components/layout/Footer';

// ─── Hero stats ──────────────────────────────────────────────────────────────

const heroStats = [
  { value: '30,000+', label: 'US Liveaboard Vessels' },
  { value: 'PNW',     label: 'Highest Concentration' },
  { value: 'Weekly',  label: 'Typical Pump-Out Cadence' },
  { value: '180+',    label: 'Liveaboard-Friendly Marinas' },
];

// ─── Systems that matter more aboard ─────────────────────────────────────────

const systems = [
  {
    icon: Droplet,
    title: 'Heads & holding tank',
    text: "Living aboard means the holding tank fills on a residential cadence, not a weekend one. Most liveaboards pump out roughly weekly. Tank capacity, MSD type, and pump-out access dictate the rhythm of the rest of the boat.",
  },
  {
    icon: Droplet,
    title: 'Freshwater & dock connection',
    text: 'Most liveaboards run a continuous shore-water hookup with a pressure regulator and an in-line filter. Tank top-ups become a backup, not the default. Hose hygiene, freeze protection, and winter shutoffs all matter.',
  },
  {
    icon: Zap,
    title: 'Shore power on a real load',
    text: "Residential demand — heater, fridge, kettle, induction hob, laptops — needs more than 30 A in winter. A 50 A pedestal, a marine-grade galvanic isolator, and a properly sized inlet are the entry ticket to comfort.",
  },
  {
    icon: Flame,
    title: 'Heating & ventilation',
    text: "Diesel-fired hydronic or forced-air systems are the PNW standard. Reverse-cycle AC works in warm water and fails in cold. Either way, ventilation strategy matters as much as the heater — moving heat is half the job.",
  },
  {
    icon: BatteryCharging,
    title: 'House bank & DC loads',
    text: 'Living loads — lights, refrigeration, electronics, fans, instruments — punish a bank built for weekend cruising. Lithium retrofits, smart shore chargers, and inverter sizing all come up in year one.',
  },
  {
    icon: Wind,
    title: 'Moisture & condensation',
    text: "A wet climate plus a warm interior equals condensation everywhere it can't escape. Dehumidifiers, hatch insulation, vapour barriers, and active ventilation are how liveaboards keep mould out of cushions and bilge.",
  },
];

// ─── Pump-out cadence reference ──────────────────────────────────────────────

const pumpoutRows = [
  { label: 'Solo liveaboard, small tank',  cadence: 'Weekly',       band: 'amber' },
  { label: 'Couple, mid-size tank',         cadence: 'Weekly',       band: 'amber' },
  { label: 'Family or guests aboard',       cadence: '2× per week',  band: 'red' },
  { label: 'Large tank, low use',           cadence: 'Bi-weekly',    band: 'teal' },
];
const pumpoutBand: Record<string, string> = {
  red:   'bg-red-100 text-red-700',
  amber: 'bg-amber-100 text-amber-700',
  teal:  'bg-teal-100 text-teal-700',
  ocean: 'bg-ocean-100 text-ocean-700',
};

// ─── Marina criteria ─────────────────────────────────────────────────────────

const marinaCriteria = [
  {
    icon: Building2,
    title: 'Liveaboard permit',
    text: "Many marinas cap liveaboard slips at a fraction of total inventory — often 10% under local ordinance. Waiting lists run months to years. The first filter is simply: are they accepting liveaboards?",
  },
  {
    icon: Zap,
    title: 'Pedestal capacity',
    text: '30 A is fine for weekend use; year-round residence in cold weather needs 50 A. Yard profiles list pedestal amperage and how many circuits per slip.',
  },
  {
    icon: Droplet,
    title: 'Pump-out access',
    text: "Slip-side mobile pump-out, dock pump-out station, or boat-to-pump-out-boat. The right answer depends on tank capacity and how often you'd rather move the boat to do it (never).",
  },
  {
    icon: Shield,
    title: 'Liveaboard fees & rules',
    text: 'Most marinas charge a liveaboard premium on top of moorage and require a signed liveaboard addendum covering pets, guests, decks, deliveries, and insurance proof.',
  },
];

// ─── Liveaboard service rhythm ───────────────────────────────────────────────

const rhythm = [
  { icon: Droplet,       label: 'Pump-out',                 cadence: 'Weekly' },
  { icon: Flame,         label: 'Heater service',           cadence: 'Pre-season' },
  { icon: BatteryCharging, label: 'House bank check',        cadence: 'Monthly' },
  { icon: Wind,          label: 'Bilge & moisture sweep',   cadence: 'Monthly' },
  { icon: Zap,           label: 'Shore power inspection',   cadence: 'Annual' },
  { icon: Thermometer,   label: 'Refrigeration / HVAC',     cadence: 'Annual' },
  { icon: Shield,        label: 'Insurance review',         cadence: 'Annual' },
  { icon: Building2,     label: 'Marina addendum review',   cadence: 'Annual' },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'Why is the Pacific Northwest such a liveaboard stronghold?',
    a: "Sheltered water, dense marina infrastructure, a deep service network, and decades of established liveaboard communities on Lake Union, Salmon Bay, Portage Bay, and Shilshole make the PNW the highest-density liveaboard region in the United States. The same reasons that draw new liveaboards there also make services and providers especially well developed — pump-out boats, marine heating techs, and certified electricians are easier to find than almost anywhere else.",
  },
  {
    q: 'How often does my holding tank actually need to be pumped?',
    a: 'Most solo and couple liveaboards plan on weekly pump-outs. Families and guests aboard often push that to twice a week. Larger tanks and lower aboard-time can stretch to bi-weekly, but pump-out is a use-driven schedule rather than a seasonal one — Yachtworx tracks fills and schedules the next service automatically.',
  },
  {
    q: "Where is in-water sewage discharge actually allowed?",
    a: "Most of Puget Sound is a No Discharge Zone, as are stretches of the Florida Keys, the New York Bight, and much of the Great Lakes. Even Type I and II MSDs cannot discharge in NDZ waters — every flush goes to the holding tank. Yachtworx tags marinas, anchorages, and pump-out providers in NDZ regions so the rules are visible at the point of decision.",
  },
  {
    q: 'Will a standard yacht policy cover me as a liveaboard?',
    a: 'Often not. Many recreational marine policies exclude or restrict primary-residence use, which leaves a critical coverage gap. Liveaboard policies and endorsements cover personal property aboard, expanded liability, dock-related risks, and year-round use. Yachtworx surfaces providers who write proper liveaboard policies and stores the endorsements in your document vault.',
  },
  {
    q: 'How does winter heating actually work?',
    a: "Diesel-fired hydronic systems (Webasto, Espar, Wallas) are the PNW gold standard — clean, dry, quiet, fuel-efficient. Forced-air diesel is common on smaller boats. Reverse-cycle heat pumps work above roughly 45°F water temperature and stop being useful in real winter. Whichever you run, annual service before the cold matters more than almost any other maintenance item.",
  },
  {
    q: 'Can Yachtworx schedule the weekly stuff automatically?',
    a: 'Yes. Pump-out, moisture sweeps, heater service, shore-power checks, and marina-addendum reviews all live on the dashboard as recurring jobs. The platform handles cadence, provider matching, and records — you just confirm the visit. Pump-out in particular is treated as a first-class recurring service with a per-vessel cadence.',
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export const Liveaboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 18% 80%, #7C3AED 0%, transparent 55%),
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
              <Home size={14} />
              Built for life aboard, year round
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Yachtworx supports{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-300">
                liveaboard
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              Living aboard isn't a holiday — it's a primary residence with its
              own rhythm of service, regulation, and community. Yachtworx is
              built for that rhythm: pump-outs scheduled, marinas filtered by
              liveaboard policy, insurance organised, and the systems you
              actually depend on tracked.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link to="/marketplace" className="btn-hero text-base px-8 py-4">
                Find Liveaboard Services
                <ArrowRight size={18} />
              </Link>
              <Link to="/dashboard" className="btn-ghost text-base px-8 py-4">
                Start Your Plan
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

      {/* ── WHY IT'S DIFFERENT ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            Why liveaboard is its own thing
          </span>
          <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3 leading-tight">
            A boat is the house — and the schedule changes
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
            For most boat owners, the systems below deck cycle on a seasonal
            calendar. For liveaboards, they cycle on a residential one. The
            holding tank fills every week instead of every season. The shore
            power pedestal carries a fridge running 24/7 and a heater running
            all winter. The cabin condenses moisture every night and needs to
            shed it every day.
          </p>
          <p>
            Nowhere is that pattern more developed than in the{' '}
            <strong>Pacific Northwest</strong>. From Lake Union and Salmon Bay
            through Shilshole, Edmonds, Bremerton, and Tacoma, the PNW holds
            the densest concentration of liveaboard vessels in the United
            States — and, by no coincidence, the most mature service network
            for them. Pump-out boats run weekly routes. Diesel-heater
            specialists keep regular schedules. Marine electricians know what
            a residential shore-power inlet should look like.
          </p>
          <p>
            Yachtworx is built to match that network to the boats that depend
            on it. Pump-out, heating, electrical, insurance, and marina policy
            are all first-class concerns on the platform, not afterthoughts to
            a weekend-cruiser product.
          </p>
        </motion.div>
      </section>

      {/* ── SYSTEMS ── */}
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
              The systems that matter more aboard
            </span>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3">
              Six things liveaboards live by
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {systems.map((c, i) => {
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

      {/* ── PUMP-OUT DEEP DIVE ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
              The weekly service that defines liveaboard
            </span>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3 mb-5">
              Pump-out, scheduled and forgotten
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Holding-tank pump-out is the most distinctive recurring service
                in liveaboard life. Across the Pacific Northwest and a growing
                number of other regions, dedicated pump-out boats run regular
                slip-side routes — bringing the service to the vessel rather
                than the other way around.
              </p>
              <p>
                Yachtworx surfaces local pump-out operators alongside every
                other provider, treats the visit as a recurring job on the
                dashboard, and records each pump for marina compliance and
                personal accounting. No more mental tally of when she was last
                done.
              </p>
              <p>
                Most of Puget Sound is a federal{' '}
                <strong>No Discharge Zone</strong>, meaning even Type I and II
                marine sanitation devices cannot discharge in those waters.
                Pump-out isn't a preference there — it is the only legal route.
              </p>
            </div>
            <div className="mt-6 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <AlertTriangle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 leading-relaxed">
                Yachtworx tags pump-out providers, marinas, and anchorages with
                NDZ status so the right legal route is always visible at the
                point of decision.
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
              <p className="font-semibold">Typical pump-out cadence</p>
            </div>
            <div className="divide-y divide-gray-100">
              {pumpoutRows.map((row) => (
                <div key={row.label} className="px-6 py-4 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-navy-500">{row.label}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${pumpoutBand[row.band]}`}>
                    {row.cadence}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-gray-50 text-xs text-gray-500">
              Cadences are typical — actual schedule depends on tank capacity, head type, and aboard-time.
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MARINA POLICY ── */}
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
              The slip is half the equation
            </span>
            <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3">
              Marina policy is its own filter
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Not every marina permits liveaboards, and the ones that do run
              very different rules. Yachtworx surfaces the criteria that
              actually decide whether a slip works for you.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {marinaCriteria.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white rounded-xl border border-gray-200 p-6"
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

      {/* ── PNW DEEP DIVE ── */}
      <section className="bg-navy-500 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-400/15 border border-purple-300/30 text-purple-100 text-sm px-3 py-1.5 rounded-full mb-4">
              <MapPin size={14} />
              Pacific Northwest, the liveaboard capital
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Where the network runs thickest
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Lake Union, Salmon Bay, Portage Bay, Shilshole, Edmonds,
              Bremerton, Tacoma — the western shoreline of Puget Sound holds
              the densest community of full-time liveaboards in the United
              States. The reasons are old and durable: sheltered water, a
              moderate winter, deep marina infrastructure, and a layered
              culture of working boats and floating homes.
            </p>
            <p className="text-white/70 leading-relaxed">
              The benefit for owners is a service network that runs on a
              residential rhythm rather than a recreational one. Pump-out
              boats keep weekly routes. Diesel-heater techs know every common
              system. Liveaboard-friendly marinas, while still capped, are
              easier to find than anywhere else. Yachtworx surfaces all of it
              with PNW-specific filters.
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
              { icon: Truck,       text: 'Mobile pump-out boats running scheduled weekly routes' },
              { icon: Flame,       text: 'Certified Webasto / Espar / Wallas service techs near every basin' },
              { icon: Snowflake,   text: 'Winterisation and moisture management built into the local rhythm' },
              { icon: Building2,   text: 'Liveaboard-permitted marinas tagged and bookable across Puget Sound' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <Icon size={18} className="text-teal-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white/85 text-sm">{item.text}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE RHYTHM ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            The liveaboard service rhythm
          </span>
          <h2 className="text-4xl font-heading font-bold text-navy-500 mt-3">
            What the dashboard actually schedules
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Every job below shows up as a recurring service in your vessel
            plan, with the right provider matched to the cadence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rhythm.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-white rounded-xl border border-gray-200 p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-3">
                  <Icon size={18} />
                </div>
                <p className="font-heading font-bold text-navy-500 text-sm">{r.label}</p>
                <p className="text-xs text-gray-500 mt-1">{r.cadence}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── INSURANCE + HULL CLEANING CALLOUTS ── */}
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
              <Shield size={22} />
            </div>
            <h3 className="text-xl font-heading font-bold text-navy-500 mb-3">
              Insurance built for living aboard
            </h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Most recreational marine policies restrict or exclude
              primary-residence use — a gap many liveaboards do not notice
              until they need to file. Liveaboard policies cover personal
              property aboard, expanded liability around the dock,
              all-year occupancy, and the everyday risks of life afloat.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Yachtworx flags providers offering proper liveaboard
              endorsements, stores the policy and certificates in your vault,
              and reminds you ahead of every renewal.
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
              Hull care for boats that don't move much
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Liveaboards spend more time in the slip than at sea, which
              changes the fouling story entirely. Stationary hulls foul faster
              and need more regular cleaning. Yachtworx tunes the cleaning
              cycle to actual use patterns and connects you to certified
              cleaning divers near your basin.
            </p>
            <Link
              to="/hull-cleaning"
              className="inline-flex items-center gap-2 bg-white border border-ocean-200 text-ocean-700 hover:bg-ocean-50 text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              How Yachtworx supports hull cleaning
              <ArrowRight size={14} />
            </Link>
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
            Liveaboard, answered
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
            <Home size={32} className="text-white mx-auto mb-5" />
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Make life aboard the easy part
            </h2>
            <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Pump-outs scheduled, heating serviced, electrical inspected,
              insurance organised, and a marina that actually wants you. All
              in one place, on the cadence your home aboard actually runs on.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dashboard"
                className="bg-white text-ocean-700 font-semibold text-base px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
              >
                Start My Plan
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/marketplace"
                className="border border-white/40 text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                Browse Liveaboard Services
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
