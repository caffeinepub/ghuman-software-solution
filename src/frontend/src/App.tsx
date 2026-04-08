import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  BarChart3,
  Brain,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Globe,
  Layers,
  Mail,
  Menu,
  Phone,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// Neural network SVG background
function NeuralNetworkBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="neural"
          x="0"
          y="0"
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="40" cy="40" r="2" fill="#1E6FA8" />
          <circle cx="0" cy="0" r="1.5" fill="#1E6FA8" />
          <circle cx="80" cy="0" r="1.5" fill="#1E6FA8" />
          <circle cx="0" cy="80" r="1.5" fill="#1E6FA8" />
          <circle cx="80" cy="80" r="1.5" fill="#1E6FA8" />
          <line
            x1="40"
            y1="40"
            x2="0"
            y2="0"
            stroke="#1E6FA8"
            strokeWidth="0.5"
          />
          <line
            x1="40"
            y1="40"
            x2="80"
            y2="0"
            stroke="#1E6FA8"
            strokeWidth="0.5"
          />
          <line
            x1="40"
            y1="40"
            x2="0"
            y2="80"
            stroke="#1E6FA8"
            strokeWidth="0.5"
          />
          <line
            x1="40"
            y1="40"
            x2="80"
            y2="80"
            stroke="#1E6FA8"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#neural)" />
    </svg>
  );
}

// Navbar
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#why" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-navbar" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2"
          data-ocid="nav.link"
        >
          <div className="w-8 h-8 bg-navy rounded-md flex items-center justify-center">
            <Cpu className="w-4 h-4 text-black font-bold" />
          </div>
          <span className="font-bold text-black text-lg leading-tight">
            <span className="font-bold text-black">GHUMAN</span>
            <span className="text-black font-bold text-sm block -mt-1">
              Software Solution
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-black hover:text-black transition-colors"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <Button
            className="bg-navy text-black font-bold hover:bg-navy-dark text-sm px-5"
            data-ocid="nav.primary_button"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-black font-bold"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-ocid="nav.toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-border px-4 pb-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-sm font-bold text-black hover:text-black border-b border-border/50 last:border-0"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="w-full mt-3 bg-navy text-black font-bold hover:bg-navy-dark"
              data-ocid="nav.primary_button"
            >
              Get a Quote
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-16 min-h-screen flex items-center overflow-hidden neural-bg"
    >
      <NeuralNetworkBg />
      {/* Gradient orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-accent-blue/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-black mb-4">
            Ghuman Software Solution
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            Empowering Businesses with{" "}
            <span className="text-black font-bold">Intelligent</span> Solutions.
          </h1>
          <p className="text-black font-bold text-lg leading-relaxed mb-8 max-w-lg">
            India-based technology company specializing in Machine Learning,
            Artificial Intelligence, Data Analytics, and cutting-edge IT
            services. Transforming businesses through innovation and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-navy text-black font-bold hover:bg-navy-dark px-8 group"
              data-ocid="hero.primary_button"
            >
              Explore Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-navy text-black font-bold hover:bg-navy hover:text-black px-8"
              data-ocid="hero.secondary_button"
            >
              Contact Us
            </Button>
          </div>

          {/* Stats strip */}
          <div className="mt-12 flex gap-8">
            {[
              { value: "50+", label: "Clients Served" },
              { value: "120+", label: "Projects Done" },
              { value: "5+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-black">{stat.value}</p>
                <p className="text-xs text-black font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-blue/10 to-cyan-400/5 blur-2xl scale-110" />
            <img
              src="/assets/generated/hero-illustration-transparent.dim_600x500.png"
              alt="AI and Machine Learning illustration"
              className="relative w-full max-w-[540px] drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description:
        "Build intelligent systems that learn, reason, and adapt. Our AI solutions automate complex processes, enhance decision-making, and unlock new business opportunities.",
      color: "from-blue-600/10 to-blue-400/5",
    },
    {
      icon: Layers,
      title: "Machine Learning",
      description:
        "Harness the power of data-driven algorithms. We design, train, and deploy ML models that continuously improve and deliver accurate predictions for your business.",
      color: "from-indigo-600/10 to-indigo-400/5",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights. Our analytics services help you understand trends, patterns, and opportunities hidden within your business data.",
      color: "from-cyan-600/10 to-cyan-400/5",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-black mb-3">
            What We Do
          </p>
          <h2 className="text-4xl font-bold text-black mb-4">Core Services</h2>
          <p className="text-black font-bold text-lg max-w-xl mx-auto">
            End-to-end technology solutions built on the foundation of AI, ML,
            and data intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`services.item.${i + 1}`}
            >
              <Card className="h-full shadow-card card-hover border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 border border-blue-100`}
                  >
                    <service.icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-black font-bold leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-black font-bold text-sm hover:gap-2 transition-all gap-1"
                    data-ocid={`services.item.${i + 1}.link`}
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Ghuman Section
function WhyGhumanSection() {
  const valuePoints = [
    {
      icon: Award,
      title: "Proven Expertise",
      desc: "5+ years delivering AI and ML solutions across industries with measurable results.",
    },
    {
      icon: Brain,
      title: "Innovative Solutions",
      desc: "Leveraging the latest advancements in deep learning, NLP, and computer vision.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      desc: "We align closely with your goals to deliver solutions that truly make a difference.",
    },
    {
      icon: Globe,
      title: "India-Based Global Team",
      desc: "A world-class team based in India, delivering global-standard tech at competitive costs.",
    },
  ];

  const stats = [
    { value: "50+", label: "Happy Clients", icon: Users },
    { value: "120+", label: "Projects Delivered", icon: TrendingUp },
    { value: "98%", label: "Client Satisfaction", icon: Award },
    { value: "5+", label: "Years of Excellence", icon: CheckCircle2 },
  ];

  return (
    <section id="why" className="py-24 neural-bg relative overflow-hidden">
      <NeuralNetworkBg />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-black mb-3">
            Our Advantage
          </p>
          <h2 className="text-4xl font-bold text-black mb-10">Why Ghuman?</h2>
          <div className="space-y-6">
            {valuePoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy flex items-center justify-center shadow-md">
                  <point.icon className="w-5 h-5 text-black font-bold" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">{point.title}</h4>
                  <p className="text-black font-bold text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — stats card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-0 shadow-card-hover rounded-2xl overflow-hidden">
            <div className="gradient-navy p-8 pb-6">
              <p className="text-black font-bold text-sm mb-1">
                Our Track Record
              </p>
              <h3 className="text-black font-bold text-2xl">
                Delivering Excellence
              </h3>
              <p className="text-black font-bold text-sm mt-2">
                Consistently exceeding client expectations across projects
              </p>
            </div>
            <CardContent className="p-0">
              <div className="grid grid-cols-2">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`p-6 flex flex-col items-center text-center border-border ${
                      i % 2 === 0 ? "border-r" : ""
                    } ${i < 2 ? "border-b" : ""}`}
                  >
                    <stat.icon className="w-6 h-6 text-black mb-2" />
                    <p className="text-3xl font-bold text-black">
                      {stat.value}
                    </p>
                    <p className="text-xs text-black font-bold mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-muted/50 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p className="text-sm text-black font-bold">
                  ISO-quality processes · Agile delivery · End-to-end support
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Contact CTA Strip
function ContactStrip() {
  return (
    <section
      id="contact"
      className="gradient-navy py-20 relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-white/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full border border-white/5 translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-black font-bold text-xs tracking-widest uppercase mb-3">
            Ready to Transform?
          </p>
          <h2 className="text-4xl font-bold text-black mb-4">Get in Touch</h2>
          <p className="text-black font-bold text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s discuss how we can empower your business with intelligent
            AI and ML solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            <a
              href="tel:+919464502161"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-6 py-4 text-black"
              data-ocid="contact.link"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-black font-bold text-xs">India</p>
                <p className="font-bold text-lg text-black">+91 9464502161</p>
              </div>
            </a>
            <a
              href="https://www.khushimastra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-6 py-4 text-black"
              data-ocid="contact.link"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-black font-bold text-xs">Website</p>
                <p className="font-bold text-lg text-black">
                  www.khushimastra.com
                </p>
              </div>
            </a>
          </div>

          <Button
            size="lg"
            className="bg-white text-black font-bold hover:bg-white/90 px-10 text-base shadow-xl"
            data-ocid="contact.primary_button"
          >
            <Mail className="mr-2 w-5 h-5" />
            Send Us a Message
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-accent-blue rounded-md flex items-center justify-center">
                <Cpu className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="font-bold text-black text-base leading-none">
                  GHUMAN
                </p>
                <p className="text-black font-bold text-xs">
                  Software Solution
                </p>
              </div>
            </div>
            <p className="text-black font-bold text-sm leading-relaxed">
              Empowering businesses through Machine Learning, AI, Data
              Analytics, and innovative IT services from India.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-black mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Data Analytics",
                "IT Consulting",
                "Custom Software",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-black font-bold hover:text-black text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-black mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-black font-bold text-sm">
                <Phone className="w-4 h-4 text-black flex-shrink-0" />
                <span>+91 9464502161</span>
              </li>
              <li className="flex items-center gap-2 text-black font-bold text-sm">
                <Globe className="w-4 h-4 text-black flex-shrink-0" />
                <a
                  href="https://www.khushimastra.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors text-black font-bold"
                >
                  www.khushimastra.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-black font-bold text-sm">
                <Globe className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-black font-bold text-xs">
          <p>© {year} Ghuman Software Solution. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-bold hover:text-black transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyGhumanSection />
        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
