// app/page.tsx
'use client';

import React, { useState } from 'react';
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
  Shield
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    alert('Asante! Thank you for subscribing. We will be in touch soon.');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-tight">Trauma Competent Care</span>
                <span className="text-xs text-teal-600 font-medium">East Africa Initiative</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">About</a>
              <a href="#training" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Training</a>
              <a href="#impact" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Our Impact</a>
              <a href="#resources" className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Resources</a>
              <button className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-teal-700 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 rounded-md">About</a>
              <a href="#training" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 rounded-md">Training</a>
              <a href="#impact" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 rounded-md">Our Impact</a>
              <a href="#resources" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 rounded-md">Resources</a>
              <button className="w-full mt-4 bg-teal-600 text-white px-6 py-3 rounded-full font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-emerald-50 opacity-70" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-teal-100/30 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
                <MapPin className="w-4 h-4" />
                <span>Serving East Africa • Based in Tanzania</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Healing Communities Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                  Trauma Competent Care
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Empowering caregivers, educators, and community leaders across East Africa with culturally-responsive trauma-informed practices. Building resilient communities, one connection at a time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-teal-600/30">
                  <Play className="w-5 h-5" />
                  <span>Start Free Course</span>
                </button>
                <button className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 transition-all flex items-center justify-center">
                  <span>Learn More</span>
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {i === 1 ? 'TZ' : i === 2 ? 'KE' : i === 3 ? 'UG' : 'RW'}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-gray-900">500+</span> trained across East Africa
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center">
                  {/* Placeholder for hero image - replace with actual image */}
                  <div className="text-center p-8">
                    <Users className="w-24 h-24 text-teal-600 mx-auto mb-4 opacity-50" />
                    <p className="text-gray-500">Community Training Session</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" fill="currentColor" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Watch Our Story</p>
                      <p className="text-sm text-gray-600">See how we are transforming care in Tanzania</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-400 rounded-full opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Trauma Affects Our Communities Deeply
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            From the streets of Dar es Salaam to rural villages in Arusha, trauma impacts children, families, and communities across Tanzania and East Africa. It is often the invisible barrier preventing connection, education, and positive change. We are here to help you understand and respond with compassion.
          </p>
          
          {/* Email Signup */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
            <button 
              type="submit"
              className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            By subscribing, you agree to our Terms and Conditions. Join our community of caregivers.
          </p>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Understand',
                description: 'Learn the impact of trauma on brain development and behavior, with focus on experiences common in East African contexts.',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                icon: HandHeart,
                title: 'Recognize',
                description: 'Identify overwhelming emotions and challenging behaviors rooted in traumatic stress within your community and family settings.',
                color: 'bg-rose-100 text-rose-600'
              },
              {
                icon: Shield,
                title: 'Respond',
                description: 'Develop skills to respond with connection and cultural understanding rather than punishment or exclusion.',
                color: 'bg-emerald-100 text-emerald-600'
              }
            ].map((pillar, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Trainer Program Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  {/* Placeholder for training image */}
                  <div className="text-center p-8">
                    <Award className="w-24 h-24 text-amber-600 mx-auto mb-4 opacity-50" />
                    <p className="text-gray-500">Trainer Certification Session</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                <Users className="w-4 h-4" />
                <span>Become a Trainer</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Join Our Affiliate Trainer Program
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Trauma Competent Care East Africa&apos;s Affiliate Trainer Program empowers local leaders, social workers, teachers, and healthcare providers to bring trauma-informed care training into their communities. This program equips Tanzanian and East African trainers to create meaningful change and foster resilience.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Comprehensive training materials in Swahili and English',
                  'Ongoing mentorship and support',
                  'Access to global best practices adapted for local contexts',
                  'Join a network of East African trauma-informed care advocates'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition-all transform hover:scale-105 inline-flex items-center space-x-2">
                <span>Learn More</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Training Section */}
      <section className="py-20 bg-gradient-to-br from-teal-900 to-emerald-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>Advanced Certification</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold">
                Advanced Trauma Competent Care Certification
              </h2>
              
              <p className="text-lg text-teal-100 leading-relaxed">
                This intensive program provides rigorous understanding of how to implement trauma-informed principles in schools, hospitals, orphanages, and community organizations across Tanzania and East Africa. Move from awareness to full competency.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-bold text-2xl mb-1">40+ Hours</p>
                  <p className="text-teal-200 text-sm">Of intensive training</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-bold text-2xl mb-1">Certificate</p>
                  <p className="text-teal-200 text-sm">Recognized across East Africa</p>
                </div>
              </div>
              
              <button className="bg-white text-teal-900 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-all transform hover:scale-105 inline-flex items-center space-x-2">
                <span>Register Now</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-teal-800 to-emerald-800 flex items-center justify-center border border-white/10">
                  {/* Placeholder for advanced training image */}
                  <div className="text-center p-8">
                    <Globe className="w-24 h-24 text-teal-300 mx-auto mb-4 opacity-50" />
                    <p className="text-teal-200">Advanced Training Workshop</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Impact in East Africa</h2>
            <p className="text-lg text-gray-600">Making a difference across Tanzania and beyond</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Caregivers Trained', sublabel: 'Across East Africa' },
              { number: '12', label: 'Regions in Tanzania', sublabel: 'Active programs' },
              { number: '50+', label: 'Organizations', sublabel: 'Partnering with us' },
              { number: '10,000+', label: 'Children Impacted', sublabel: 'Through trained adults' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-teal-50 transition-colors">
                <p className="text-4xl lg:text-5xl font-bold text-teal-600 mb-2">{stat.number}</p>
                <p className="font-semibold text-gray-900">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <span className="text-xl font-bold">Trauma Competent Care</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Building trauma-informed communities across East Africa, starting with Tanzania. Empowering caregivers, educators, and leaders to heal and transform lives.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                  >
                    <span className="text-xs font-bold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Training Programs', 'Become a Trainer', 'Resources', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Dar es Salaam, Tanzania<br />East Africa</span>
                </li>
                <li>info@traumacompetentcare.org</li>
                <li>+255 123 456 789</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Trauma Competent Care East Africa. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}