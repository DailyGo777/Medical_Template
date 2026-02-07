'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Heart,
  Syringe,
  FileText,
  Stethoscope,
  ArrowRight,
  Menu,
  X,
  Star,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
} from 'lucide-react';

export default function MedicalClinicLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stats = [
    { number: '200+', label: 'Patients Served' },
    { number: '70K+', label: 'Successful Treatments' },
    { number: '44M', label: 'Community Impact' },
  ];

  const services = [
    {
      icon: <Syringe className="w-6 h-6" />,
      title: 'Vaccination & Immunization',
      description:
        'Comprehensive vaccination programs to protect you and your family from preventable diseases.',
      image: '/assets/images/service-vaccination.jpg',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Health Screening Packages',
      description:
        'Complete health checkups designed to detect potential issues early and maintain wellness.',
      image: '/assets/images/screening.jpg',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Chronic Disease Management',
      description:
        'Personalized care plans for managing diabetes, hypertension, and other chronic conditions.',
      image: '/assets/images/chronic.jpg',
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Emergency First Aid & Urgent Care',
      description:
        'Immediate medical attention for urgent health concerns and minor emergencies.',
      image: '/assets/images/emergency.jpg',
    },
  ];

  const satisfactionRates = [
    { percentage: '98%', label: 'General Consultation' },
    { percentage: '96%', label: 'Pediatric Care' },
    { percentage: '91%', label: 'Laboratory & Diagnostics' },
  ];

  const testimonials = [
    {
      rating: 5,
      text: 'The care and attention I received at Medliw was exceptional. The staff is professional and genuinely caring.',
      name: 'Sarah Johnson',
      company: 'Local Resident',
      avatar: '/assets/images/testimonial-1.jpg',
    },
    {
      rating: 5,
      text: 'Best medical facility in the area. They take time to listen and provide thorough explanations.',
      name: 'Michael Chen',
      company: 'Business Owner',
      avatar: '/assets/images/testimonial-2.jpg',
    },
    {
      rating: 5,
      text: 'Family-friendly environment with doctors who truly care about patient wellbeing. Highly recommended!',
      name: 'Emily Rodriguez',
      company: 'Parent of Three',
      avatar: '/assets/images/testimonial-3.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-white to-cyan-50 font-serif">
      {/* ── Navigation ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">Medliw</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-teal-700 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-600 hover:text-teal-700 transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-600 hover:text-teal-700 transition-colors">
                Why Choose
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-teal-700 transition-colors">
                Testimonial
              </a>
              <a href="#faq" className="text-gray-600 hover:text-teal-700 transition-colors">
                FAQs
              </a>
              <button className="bg-teal-700 text-white px-6 py-2.5 rounded-full hover:bg-teal-800 transition-all hover:shadow-lg">
                Contact Us
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-teal-100">
              <div className="flex flex-col space-y-4 px-2">
                <a href="#home" className="text-gray-600 hover:text-teal-700 transition-colors">
                  Home
                </a>
                <a href="#about" className="text-gray-600 hover:text-teal-700 transition-colors">
                  About
                </a>
                <a href="#services" className="text-gray-600 hover:text-teal-700 transition-colors">
                  Why Choose
                </a>
                <a href="#testimonials" className="text-gray-600 hover:text-teal-700 transition-colors">
                  Testimonial
                </a>
                <a href="#faq" className="text-gray-600 hover:text-teal-700 transition-colors">
                  FAQs
                </a>
                <button className="bg-teal-700 text-white px-6 py-2.5 rounded-full hover:bg-teal-800 transition-all w-full">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Trusted Care{' '}
                <span className="inline-flex items-center gap-2 bg-teal-700 text-white px-4 py-1 rounded-full">
                  <Heart className="w-6 h-6" />
                  <Heart className="w-6 h-6" />
                  <Heart className="w-6 h-6" />
                  <Heart className="w-6 h-6" />
                </span>{' '}
                for Every Stage of Life
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience compassionate healthcare delivered by dedicated professionals who prioritize
                your wellbeing and treat you like family.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-teal-700 text-white px-8 py-3 rounded-full hover:bg-teal-800 transition-all hover:shadow-xl flex items-center gap-2 group">
                  Explore Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-teal-700 text-teal-700 px-8 py-3 rounded-full hover:bg-teal-700 hover:text-white transition-all">
                  Book Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                {stats.slice(0, 2).map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-4xl font-bold text-teal-700">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image + floating cards */}
            <div className="relative">
              <div className="bg-linear-to-br from-teal-100 to-cyan-100 rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/images/hero-doctor.jpg"
                    alt="Medical Professional"
                    fill
                    className="object-cover opacity-50"
                  />
                </div>

                {/* Floating doctor card */}
                <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 z-10">
                  <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Dr. Sarah Smith</div>
                    <div className="text-sm text-gray-500">Specialist Doctor</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-teal-700" />
                </div>

                {/* Floating warning card */}
                <div className="absolute bottom-12 left-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs z-10">
                  <div className="text-sm font-semibold text-gray-800 mb-2">Top Fails of Drugs</div>
                  <div className="text-xs text-gray-500 mb-3">Leading causes of medication errors</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-gray-600">• Heart Attacks</div>
                    <div className="text-gray-600">• Brain Damage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Satisfaction cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {satisfactionRates.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="text-5xl font-bold text-teal-700 mb-4">{item.percentage}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{item.label}</div>
                <p className="text-gray-600 text-sm">
                  Our patients consistently rate their experience highly, reflecting our commitment to
                  quality care.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-8 bg-white" id="about">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* First block */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-linear-to-br from-teal-100 to-cyan-100 rounded-2xl h-64 overflow-hidden relative">
                <Image
                  src="/assets/images/about-clinic-1.jpg"
                  alt="Medical Facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-linear-to-br from-teal-200 to-cyan-200 rounded-2xl h-48 mt-8 overflow-hidden relative">
                <Image
                  src="/assets/images/about-clinic-2.jpg"
                  alt="Healthcare Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                More Than a Clinic — We're Your Health Partner
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment goes beyond treating symptoms. We focus on building lasting
                relationships with our patients, understanding their unique health journeys, and
                providing personalized care that addresses both immediate needs and long-term
                wellness goals.
              </p>
            </div>
          </div>

          {/* You can add the missing "Quality Healthcare" and "Bridging Modern Medicine" blocks here if you still have them */}
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-8 bg-linear-to-br from-teal-50 to-cyan-50" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Quality Healthcare, Closer to Home
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-teal-700 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="mt-6 bg-linear-to-br from-teal-100 to-cyan-100 rounded-xl h-32 overflow-hidden relative">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-linear-to-r from-teal-700 to-teal-600 rounded-3xl p-12 relative overflow-hidden text-center space-y-6">
            <h2 className="text-4xl font-bold text-white">Walk In or Book Online — We're Ready</h2>
            <button className="bg-white text-teal-700 px-8 py-3 rounded-full hover:bg-teal-50 transition-all hover:shadow-xl font-semibold">
              Contact Now
            </button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-8 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Compassion You Can Feel, Care You Can Trust
            </h2>
            <div className="flex justify-center items-center gap-2 mt-6">
              <Heart className="w-6 h-6 text-teal-700" />
              <Heart className="w-6 h-6 text-teal-700" />
              <Heart className="w-6 h-6 text-teal-700" />
              <Heart className="w-6 h-6 text-teal-700" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-linear-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-2xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-teal-700 text-teal-700" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold overflow-hidden relative">
                    {t.avatar ? (
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                    ) : (
                      t.name.charAt(0)
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-600">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="bg-linear-to-br from-teal-800 to-teal-700 text-white py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Menu</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="hover:text-teal-200 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-teal-200 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-200 transition-colors">
                    Why Choose
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 shrink-0 mt-1" />
                  <span>4 Lorem Ipsum City, Location</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>+123 456 7890</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>support@medliw.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Subscribe Now</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
                <button className="bg-white text-teal-700 p-2 rounded-full hover:bg-teal-50 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-teal-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-teal-200" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-teal-200" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-teal-200" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-teal-200" />
            </div>
            <div className="text-sm text-teal-200">
              Copyright © {new Date().getFullYear()} Medliw | All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
