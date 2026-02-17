'use client';

import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Users, 
  BookOpen, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  Play,
  Award,
  Globe,
  HandHeart,
  Brain,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Clock,
  Target,
  Lightbulb,
  Handshake,
  Quote
} from 'lucide-react';

const testimonials = [
  {
    quote: "This training transformed how we care for children in our orphanage in Arusha. We now understand behavior as communication.",
    author: "Maria Ndosi",
    role: "Director, Hope Children's Home",
    location: "Arusha, Tanzania",
    stars: 5
  },
  {
    quote: "As a teacher in Dar es Salaam, I see traumatized children daily. Now I have the tools to help them regulate and learn.",
    author: "Joseph Mwinyi",
    role: "Primary School Teacher",
    location: "Dar es Salaam, Tanzania",
    stars: 5
  },
  {
    quote: "The culturally-adapted approach made all the difference. This isn't just Western psychology—it's relevant to East African communities.",
    author: "Dr. Sarah Ochieng",
    role: "Clinical Psychologist",
    location: "Nairobi, Kenya",
    stars: 5
  },
  {
    quote: "After just one workshop, my entire team shifted how we respond to children in crisis. The impact was immediate and profound.",
    author: "Grace Kamau",
    role: "Program Manager, Bright Futures NGO",
    location: "Kampala, Uganda",
    stars: 5
  },
  {
    quote: "The Swahili materials made it accessible to our entire staff, including those with limited English. Truly inclusive training.",
    author: "Hassan Juma",
    role: "Social Worker",
    location: "Mombasa, Kenya",
    stars: 5
  },
  {
    quote: "I became a certified trainer and now bring this knowledge to rural communities that never had access to mental health resources.",
    author: "Amina Uwase",
    role: "Community Health Worker",
    location: "Kigali, Rwanda",
    stars: 5
  },
  {
    quote: "Our school's suspension rates dropped by 40% after staff completed the program. Children feel safe and supported now.",
    author: "Peter Olweny",
    role: "Headmaster, St. Andrew's Primary",
    location: "Kisumu, Kenya",
    stars: 5
  },
  {
    quote: "Understanding trauma's connection to learning changed everything about how I teach. I wish I'd had this 10 years ago.",
    author: "Fatuma Said",
    role: "Special Education Teacher",
    location: "Zanzibar, Tanzania",
    stars: 5
  },
  {
    quote: "The holistic approach that weaves in African values of community and Ubuntu was unlike anything I've experienced in professional training.",
    author: "Ndiaye Otieno",
    role: "Youth Counselor",
    location: "Arusha, Tanzania",
    stars: 5
  },
  {
    quote: "We've seen remarkable improvements in caregiver-child relationships at our clinic since implementing these practices.",
    author: "Dr. Lilian Mwangi",
    role: "Pediatric Nurse Manager",
    location: "Nairobi, Kenya",
    stars: 5
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://res.cloudinary.com/dacpiss4b/image/upload/v1770831022/image1_aiajnn.jpg',
    'https://res.cloudinary.com/dacpiss4b/image/upload/v1770831021/image3_xchjyi.jpg',
    'https://res.cloudinary.com/dacpiss4b/image/upload/v1770831021/image2_xwisvs.jpg'
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Asante sana! Thank you for subscribing. We will be in touch soon.');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">

      {/* ── Marquee animation styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
        h1,h2,h3 { font-family: 'DM Serif Display', serif; }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.15s ease both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.3s ease both; }
      `}</style>

      {/* ── Top Bar ── */}
      <div className="bg-slate-900 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-orange-400" />
            <span>Serving East Africa • Headquarters: Dar es Salaam, Tanzania</span>
          </span>
          <div className="hidden sm:flex items-center gap-5">
            <a href="tel:+255123456789" className="hover:text-orange-400 transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3" /><span>+255 123 456 789</span>
            </a>
            <a href="mailto:info@traumacompetentcare.org" className="hover:text-orange-400 transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3" /><span>info@traumacompetentcare.org</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-orange-500" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-tight tracking-tight" style={{fontFamily:'DM Serif Display, serif'}}>Trauma Competent Care</span>
                <span className="text-xs text-orange-600 font-semibold tracking-wider uppercase">East Africa Initiative</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {['About Us','Training','Our Impact','Become a Trainer','Resources'].map((item, i) => (
                <a key={i} href={`#${item.toLowerCase().replace(/\s+/g,'-').replace("'","")}`}
                  className="text-slate-700 hover:text-orange-600 transition-colors font-medium text-sm uppercase tracking-wide">
                  {item}
                </a>
              ))}
              <button className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-orange-500/30 text-sm">
                Get Started
              </button>
            </div>

            <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl z-50">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {['About Us','Training','Our Impact','Become a Trainer','Resources'].map((item, i) => (
                <a key={i} href="#" onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium">{item}</a>
              ))}
              <button className="w-full mt-4 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold">
                Get Started Today
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-orange-900/70" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-950/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl space-y-8">
            <div className="fade-up inline-flex items-center gap-2 bg-white/95 border border-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold shadow-md backdrop-blur-sm">
              <MapPin className="w-4 h-4" />
              <span>Now Serving Tanzania, Kenya, Uganda & Rwanda</span>
            </div>

            <h1 className="fade-up-2 text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Healing Starts With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-400">
                Understanding
              </span>
            </h1>

            <p className="fade-up-3 text-xl text-slate-100 leading-relaxed">
              Equipping caregivers, educators, and community leaders across East Africa with trauma-informed knowledge and culturally-responsive practices. Together, we are building resilient communities where every child and adult can thrive.
            </p>

            <div className="fade-up-3 flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-orange-500/40">
                <Play className="w-5 h-5" fill="currentColor" />
                <span>Start Free Intro Course</span>
              </button>
              <button className="bg-white/95 text-slate-900 border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:shadow-lg transition-all flex items-center justify-center group backdrop-blur-sm">
                <span>Explore Programs</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-white/30">
              <div className="flex -space-x-3">
                {[
                  { src: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1771353145/tanzania_yij6cb.png', alt: 'Tanzania' },
                  { src: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1771353145/kenya_xz2tvq.png', alt: 'Kenya' },
                  { src: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1771353145/uganda_zkys3a.png', alt: 'Uganda' },
                  { src: 'https://res.cloudinary.com/dacpiss4b/image/upload/v1771353144/rwanda_ekxhbp.png', alt: 'Rwanda' },
                ].map((f, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden bg-white">
                    <img src={f.src} alt={f.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-white text-lg">1,200+ Professionals Trained</p>
                <p className="text-slate-200 text-sm">Across 4 East African Countries</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrentImageIndex(i)}
              className={`h-3 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'w-8 bg-orange-500' : 'w-3 bg-white/60 hover:bg-white'}`}
            />
          ))}
        </div>
      </section>

      {/* ── About / Subscribe ── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Trauma is the Hidden Barrier to<br />
            <span className="text-orange-500">Connection and Growth</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Across East Africa, from the bustling streets of Dar es Salaam to the rural communities of Arusha, trauma affects children, families, and professionals in ways we often do not recognize. It manifests as behavioral challenges, learning difficulties, and broken relationships—but it does not have to be this way.
          </p>

          <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Begin Your Journey Today</h3>
            <p className="text-slate-600 mb-8">Join thousands of East African professionals learning to create trauma-informed environments</p>
            <form onSubmit={handleSubscribe} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                required
              />
              <button type="submit" className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all whitespace-nowrap text-lg shadow-lg">
                Get Access
              </button>
            </form>
            <p className="text-xs text-slate-500 mt-4">By subscribing, you agree to our Terms and Conditions. We respect your privacy.</p>
          </div>
        </div>
      </section>

      {/* ── Three Pillars ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">The Three Pillars of Trauma Competent Care</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Our approach is built on three foundational principles that guide every interaction and intervention</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain, title: 'Understand',
                description: 'Deepen your knowledge of how trauma affects brain development, behavior, and relationships. Learn about adverse childhood experiences (ACEs) common in East African contexts and their long-term impacts.',
                color: 'bg-blue-50 text-blue-600'
              },
              {
                icon: HandHeart, title: 'Recognize',
                description: 'Identify signs of traumatic stress in children and adults. Learn to see beyond challenging behaviors to the unmet needs and pain beneath, whether in classrooms, clinics, or communities.',
                color: 'bg-rose-50 text-rose-600'
              },
              {
                icon: Shield, title: 'Respond',
                description: 'Develop practical skills to respond with empathy, connection, and cultural sensitivity. Move from punishment to healing, from exclusion to inclusion, from fear to safety.',
                color: 'bg-emerald-50 text-emerald-600'
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 group">
                <div className={`w-20 h-20 ${pillar.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{pillar.description}</p>
                <a href="#" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Training Programs ── */}
      <section id="training" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-semibold uppercase tracking-wider text-sm">Our Programs</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Training Designed for East Africa</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">From introductory courses to professional certification, we offer training that fits your needs and schedule</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Free Intro */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-6">
                  <Star className="w-4 h-4" fill="currentColor" /><span>Most Popular</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Introduction to Trauma-Informed Care</h3>
                <p className="text-slate-300 mb-6 text-lg">Perfect for beginners. This 20-minute course introduces the fundamentals of trauma and its impact on individuals and communities in East Africa.</p>
                <ul className="space-y-3 mb-8">
                  {['Completely free','Available in English and Swahili','Mobile-friendly format','Certificate of completion'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500" />
                      <span className="text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all">
                  Start Learning Free
                </button>
              </div>
            </div>

            {/* Certification */}
            <div className="bg-white border-2 border-slate-100 rounded-3xl p-8 lg:p-12 hover:border-orange-200 transition-all duration-300 group">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4" /><span>Professional</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Trauma Competent Care Certification</h3>
              <p className="text-slate-600 mb-6 text-lg">Comprehensive 40-hour certification program for professionals. Deep dive into trauma theory, practical interventions, and organizational implementation.</p>
              <ul className="space-y-3 mb-8">
                {['In-person and virtual options','Culturally-adapted curriculum','Ongoing mentorship included','Recognized certification'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-all">
                View Curriculum
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Users,  title: 'Organizational Training', desc: 'Customized workshops for schools, NGOs, and healthcare facilities', duration: '1-3 days' },
              { icon: Globe,  title: 'Community Workshops',     desc: 'Accessible training for community leaders and caregivers',           duration: 'Half-day' },
              { icon: Clock,  title: 'Continuing Education',    desc: 'Advanced modules for certified professionals',                        duration: 'Ongoing' }
            ].map((p, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-100">
                <p.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h4>
                <p className="text-slate-600 mb-4">{p.desc}</p>
                <div className="flex items-center text-sm text-slate-500 gap-1">
                  <Clock className="w-4 h-4" />{p.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Affiliate Trainer ── */}
      <section id="become-a-trainer" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-[2rem] opacity-30 blur-2xl" />
              <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src="https://res.cloudinary.com/dacpiss4b/image/upload/v1770831022/image1_aiajnn.jpg"
                    alt="Affiliate Trainer Certification" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8">
                  <p className="text-white font-semibold text-lg">Join our network of 50+ certified trainers across East Africa</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-orange-500 text-white rounded-2xl p-4 shadow-xl z-10">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm opacity-90">Certified Trainers</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                <Target className="w-4 h-4" /><span>Expand Your Impact</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Become a Certified Affiliate Trainer
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our Affiliate Trainer Program empowers local professionals—social workers, teachers, counselors, and healthcare providers—to bring trauma-informed care training to their own communities. This is not just training; it is a movement led by East Africans for East Africans.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 py-4">
                {[
                  { icon: BookOpen,  text: 'Comprehensive training manual in Swahili & English' },
                  { icon: Handshake, text: 'Ongoing mentorship and support' },
                  { icon: Globe,     text: 'Access to global best practices' },
                  { icon: Users,     text: 'Join a network of change-makers' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30">
                  <span>Apply Now</span><ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-semibold hover:border-orange-500 hover:text-orange-600 transition-all">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact + Testimonials ── */}
      <section id="our-impact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-500/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Impact Across East Africa</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Measurable change in communities throughout Tanzania and beyond</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { number: '1,200+', label: 'Professionals Trained', sublabel: 'Across 4 countries' },
              { number: '18',     label: 'Regions in Tanzania',   sublabel: 'Active programs' },
              { number: '85+',    label: 'Partner Organizations', sublabel: 'Schools, NGOs, clinics' },
              { number: '25,000+',label: 'Children Impacted',     sublabel: 'Through trained adults' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">{stat.number}</p>
                <p className="font-semibold text-white text-lg">{stat.label}</p>
                <p className="text-slate-400 text-sm">{stat.sublabel}</p>
              </div>
            ))}
          </div>

          {/* ── Scrolling Testimonials Marquee ── */}
          <div>
            <p className="text-center text-slate-400 uppercase tracking-widest text-sm font-semibold mb-10">
              Voices From Our Community
            </p>

            <div className="relative overflow-hidden">
              {/* Edge fades */}
              <div className="absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />

              {/* Scrolling track — duplicated for seamless loop */}
              <div className="flex gap-6 animate-marquee w-max py-2">
                {[...testimonials, ...testimonials].map((t, idx) => (
                  <div
                    key={idx}
                    className="w-[480px] flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-9 hover:bg-white/10 transition-colors cursor-default select-none"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-orange-400" fill="currentColor" />
                      ))}
                    </div>

                    {/* Quote */}
                    <Quote className="w-7 h-7 text-orange-500/40 mb-3" />
                    <p className="text-slate-200 text-sm leading-relaxed mb-6">
                      {t.quote}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg">
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm leading-tight">{t.author}</p>
                        <p className="text-orange-400 text-xs mt-0.5">{t.role}</p>
                        <p className="text-slate-500 text-xs flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3" />{t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-600 font-semibold uppercase tracking-wider text-sm">Why Trauma Competent Care</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6 leading-tight">Culturally-Responsive, Evidence-Based, Community-Focused</h2>
              <p className="text-lg text-slate-600 mb-8">
                We do not just import Western models. We collaborate with local experts, elders, and professionals to ensure our training resonates with East African values, traditions, and contexts.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Local Expertise',     desc: 'Our curriculum is developed in partnership with Tanzanian and East African mental health professionals', icon: MapPin },
                  { title: 'Sustainable Impact',  desc: 'We train local trainers, ensuring knowledge stays and grows within the community',                       icon: Lightbulb },
                  { title: 'Holistic Approach',   desc: 'Addressing spiritual, emotional, and physical aspects of healing in line with African holistic health perspectives', icon: Heart }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-slate-100 rounded-2xl p-6 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <Handshake className="w-16 h-16 text-slate-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-500">Community Partnership</p>
                  </div>
                </div>
                <div className="bg-orange-100 rounded-2xl p-6 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-orange-400 mx-auto mb-2" />
                    <p className="text-sm text-orange-700">Group Training</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-100 rounded-2xl p-6 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-blue-700">Material Development</p>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-2xl p-6 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-16 h-16 text-slate-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-500">Certification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 font-semibold uppercase tracking-wider text-sm mb-8">Trusted by Leading Organizations Across East Africa</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
            {['Ministry of Health Tanzania','Save the Children','World Vision','UNICEF','Local NGOs'].map((p, i) => (
              <div key={i} className="text-xl font-bold text-slate-400 hover:text-slate-600 transition-colors">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Community?</h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Whether you are an individual looking to learn or an organization seeking training, we are here to support your journey toward trauma-informed care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all hover:scale-105 shadow-xl">
              Start Free Course
            </button>
            <button className="bg-orange-700 text-white border-2 border-orange-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-800 transition-all">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <span className="text-xl font-bold text-white">Trauma Competent Care</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Empowering East African communities with trauma-informed knowledge and skills since 2020.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Programs</h4>
              <ul className="space-y-3">
                {['Introduction Course','Certification Program','Organizational Training','Trainer Program','Resources'].map(l => (
                  <li key={l}><a href="#" className="hover:text-orange-400 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                {['About Us','Our Team','Impact Stories','Careers','Contact'].map(l => (
                  <li key={l}><a href="#" className="hover:text-orange-400 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>123 Community Road<br />Dar es Salaam, Tanzania</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>info@traumacompetentcare.org</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>+255 123 456 789</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© 2024 Trauma Competent Care East Africa. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}