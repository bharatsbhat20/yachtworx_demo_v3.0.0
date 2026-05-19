import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ClipboardCheck, Search, FileText, Anchor, ArrowRight, ChevronRight,
  CheckCircle, Ship, Gauge, Camera, Scale, Wrench, Award, Users,
} from 'lucide-react';
import { Footer } from '../components/layout/Footer';

// ─── Static content ───────────────────────────────────────────────────────────

const surveyTypes = [
  {
    icon: Search,
    title: 'Pre-purchase survey',
    text: 'The full condition and valuation inspection — structure, systems, moisture readings, and a sea trial — that a buyer relies on before closing.',
  },
  {
    icon: ClipboardCheck,
    title: 'Insurance & condition survey',
    text: 'The periodic condition report underwriters require to write or renew cover, with clear recommendations graded by urgency.',
  },
  {
    icon: Scale,
    title: 'Appraisal & valuation',
    text: 'An independent fair-market valuation for financing, estate, donation, or dispute — backed by comparable-vessel evidence.',
  },
  {
    icon: Camera,
    title: 'Damage & claims survey',
    text: 'Assess the extent and likely cause of damage, scope the repair, and document everything an insurer needs to settle a claim.',
  },
  {
    icon: Ship,
    title: 'New-build & commissioning',
    text: 'Verify a new or refitted vessel against its specification and class requirements before she is accepted and put into service.',
  },
  {
    icon: Wrench,
    title: 'Rig & specialised surveys',
    text: 'Standing-rigging inspections, tonnage measurement for registration, and other focused surveys where deep subject expertise matters.',
  },
];

const surveyorTools = [
  {
    icon: Gauge,
    title: 'The digital twin, before you board',
    text: 'Open the vessel record ahead of the appointment — component history, service intervals, health score, and past survey findings — so you arrive already briefed.',
  },
  {
    icon: FileText,
    title: 'Document vault delivery',
    text: 'Pull registration, prior surveys, and manufacturer paperwork in one place, then deliver your finished report and photo set straight back to the owner.',
  },
  {
    icon: Users,
    title: 'Matched to survey requests',
    text: 'Owners and buyers searching for a survey are matched to accredited surveyors by location, vessel type, and specialism — qualified work, routed to you.',
  },
  {
    icon: Award,
    title: 'Credentials front and centre',
    text: 'Your SAMS, NAMS, ABYC, or IIMS accreditations are displayed and verified, feeding a trust score that sets serious professionals apart.',
  },
];

const workflow = [
  {
    step: '01',
    title: 'Create your surveyor profile',
    text: 'List your accreditations, specialisms, and service area. Verified credentials unlock a verified badge on every listing and report.',
  },
  {
    step: '02',
    title: 'Receive matched requests',
    text: 'Get notified when an owner or buyer near you needs a survey that fits your expertise. Review the brief, quote, and accept on your terms.',
  },
  {
    step: '03',
    title: 'Review the vessel digitally',
    text: 'Study the digital twin and document vault before the visit so your time aboard is spent on inspection, not paperwork archaeology.',
  },
  {
    step: '04',
    title: 'Survey, document, deliver',
    text: 'Capture findings and photos, attach them to the vessel record, and deliver a professional report through the vault. Payment is handled in-platform.',
  },
];

const accreditations = ['SAMS', 'NAMS', 'ABYC', 'IIMS'];

const faqs = [
  {
    q: 'Which accreditations does Yachtworx recognise?',
    a: 'We support the major marine-survey bodies — SAMS, NAMS, ABYC, and IIMS among them. You upload your credentials during onboarding and they are verified before your profile goes live.',
  },
  {
    q: 'Can I see the boat’s history before I survey her?',
    a: 'Yes. Once a survey is booked you get read access to the vessel’s digital twin — components, service history, documents, and any prior survey findings — so you can prepare properly.',
  },
  {
    q: 'How do owners and buyers find me?',
    a: 'Survey requests are matched to surveyors by location, vessel type, and specialism. Your accreditations, reviews, and trust score determine where you rank in those matches.',
  },
  {
    q: 'How is the report delivered and how do I get paid?',
    a: 'You deliver the finished report and photo set through the document vault, attached to the vessel record. Scheduling and payment are handled inside Yachtworx — no chasing invoices.',
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export const Surveyors: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #1A6B9A 0%, transparent 55%),
                             radial-gradient(circle at 80% 20%, #0D9B8A 0%, transparent 55%)`,
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-teal-400/15 border border-teal-400/30 text-teal-200 text-sm px-4 py-2 rounded-full mb-6 font-medium">
              <ClipboardCheck size={14} />
              For marine surveyors
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Survey work,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-ocean-300">
                without the busywork
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              Yachtworx connects accredited marine surveyors with the owners,
              buyers, and insurers who need them — and gives you the vessel
              history, tools, and reporting workflow to do the job well.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link to="/register-provider" className="btn-hero text-base px-8 py-4">
                Join as a surveyor
                <ArrowRight size={18} />
              </Link>
              <Link to="/provider-dashboard" className="btn-ghost text-base px-8 py-4">
                Back to dashboard
                <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Yachtworx for surveyors */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            Why surveyors work here
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-600 mt-2 mb-6">
            A platform that respects your expertise
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              A marine survey is a judgement call built on experience — but the
              work around it rarely is. Tracking down a vessel’s service
              history, chasing paperwork, scheduling, and invoicing all eat into
              the time you should be spending aboard.
            </p>
            <p>
              Yachtworx removes that friction. Every vessel on the platform
              already carries a digital twin: components, service records,
              documents, and prior findings. When a survey is booked, that
              history is yours to review before you ever step on deck.
            </p>
            <p>
              The result is a cleaner job — qualified leads matched to your
              specialism, the vessel’s background in hand, and a reporting
              and payment workflow that simply works.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Survey types */}
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
              Every kind of survey
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-600 mt-2">
              Surveys supported on Yachtworx
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              From a buyer’s pre-purchase inspection to an insurer’s
              claims survey, requests are routed to the surveyor with the right
              accreditation and experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {surveyTypes.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ocean-500 to-teal-500 text-white flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading font-bold text-navy-600 mb-1.5">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Surveyor tools */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
            Built for the job
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-600 mt-2">
            Tools that do the legwork
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {surveyorTools.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-navy-100 text-navy-600 flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading font-bold text-navy-600 mb-1.5">{t.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-navy-600 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-teal-300 uppercase tracking-wide">
              How it works
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
              From request to report
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workflow.map((w, i) => (
              <motion.div
                key={w.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="text-2xl font-heading font-bold text-teal-300 mb-3">{w.step}</div>
                <h3 className="font-heading font-bold text-white text-sm mb-2">{w.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations + trust */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wide">
              Verified, and seen to be
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-600 mt-2 mb-4">
              Accreditation that owners can trust
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Owners and insurers want a surveyor whose credentials hold up.
              Yachtworx verifies your accreditations during onboarding and
              displays them on every listing and report, so the value of your
              qualifications is visible at a glance.
            </p>
            <div className="flex flex-wrap gap-3">
              {accreditations.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center gap-1.5 bg-ocean-50 text-ocean-700 text-sm font-semibold px-3 py-1.5 rounded-lg border border-ocean-100"
                >
                  <Award size={14} />
                  {a}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {[
              'Credentials verified before your profile goes live',
              'Verified badge shown on listings and delivered reports',
              'Reviews from owners and buyers build your reputation',
              'A trust score that rewards proven, accredited work',
            ].map((line) => (
              <div key={line} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
                <CheckCircle size={18} className="text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{line}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-y border-gray-200 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Surveying on Yachtworx, answered
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
                  <FileText size={18} className="text-ocean-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-navy-600 mb-1">{f.q}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Put your survey practice on Yachtworx
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              Get matched to the right work, walk aboard already briefed, and
              deliver reports without the busywork.
            </p>
            <Link to="/register-provider" className="btn-hero text-base px-8 py-4 inline-flex">
              Join as a surveyor
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
