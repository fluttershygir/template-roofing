import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Home, Hammer, Ruler, CheckSquare } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* HEADER - Industrial & Bold */}
      <header className="fixed top-0 w-full z-50 bg-slate-900 text-white border-b border-orange-600">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-2 rounded-sm transform -skew-x-12">
              <Hammer className="text-white w-6 h-6 transform skew-x-12" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">Apex<span className="text-orange-500">Roofing</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-bold uppercase tracking-wide text-sm">
            <Link href="#" className="hover:text-orange-500 transition-colors">Services</Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">Projects</Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">Warranty</Link>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-none px-8 font-bold uppercase tracking-wider skew-x-[-10deg] border-2 border-transparent hover:border-white transition-all">
            <span className="skew-x-[10deg]">Free Estimate</span>
          </Button>
        </div>
      </header>

      {/* HERO - Split Layout */}
      <section className="pt-20 lg:h-[90vh] flex flex-col lg:flex-row relative">
        <div className="bg-slate-900 text-white lg:w-1/2 flex flex-col justify-center px-12 py-20 lg:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border-l-4 border-orange-500 mb-8 w-fit">
                    <Shield className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-bold uppercase tracking-widest text-slate-300">Lifetime Warranty</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-black uppercase leading-[0.9] mb-8">
                    Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Wheather</span><br />
                    Any Storm.
                </h1>
                <p className="text-xl text-slate-400 mb-10 max-w-md font-medium">
                    Premier roofing contractors serving the metro area. We don't just patch holes; we engineer protection for your family.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="h-16 px-8 rounded-none bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-wider text-lg">
                        Get Inspection
                    </Button>
                    <Button size="lg" variant="outline" className="h-16 px-8 rounded-none border-2 border-slate-700 text-white hover:bg-white hover:text-slate-900 font-bold uppercase tracking-wider text-lg">
                        Our Process
                    </Button>
                </div>
            </div>
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
        </div>
        <div className="lg:w-1/2 bg-slate-200 relative min-h-[400px]">
            {/* Abstract House Shape / Image Placeholder */}
            <div className="absolute inset-0 bg-slate-300 flex items-center justify-center overflow-hidden">
                 <div className="w-[120%] h-[120%] bg-[url('https://images.unsplash.com/photo-1632759929288-667cb15516e8?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 opacity-80 mix-blend-multiply"></div>
                 <div className="absolute inset-0 bg-orange-600/10 mix-blend-overlay"></div>
            </div>
            <div className="absolute bottom-0 left-0 bg-orange-600 text-white p-8 lg:p-12 max-w-sm">
                <p className="font-black text-4xl mb-2">50+</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-90">Years of combined experience in residential & commercial</p>
            </div>
        </div>
      </section>

      {/* SERVICES - Grid Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-slate-100 pb-8">
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 mb-4 tracking-tight">Our Expertise</h2>
                    <p className="text-lg text-slate-600 font-medium">Precision craftsmanship meeting industrial-grade materials.</p>
                </div>
                <Link href="#" className="text-orange-600 font-bold uppercase tracking-wider flex items-center gap-2 hover:translate-x-2 transition-transform mt-6 md:mt-0">
                    View All Services <ArrowRight className="w-5 h-5" />
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-0 border-t border-l border-slate-200">
                {[
                    { title: "Residential", icon: Home, desc: "Asphalt, Tile, & Metal roofing tailored for curb appeal and longevity." },
                    { title: "Commercial", icon: rulerIcon, desc: "TPO, EPDM, and flat roof systems designed for business continuity." },
                    { title: "Restoration", icon: CheckSquare, desc: "Full-scale repairs after hail, wind, or storm damage events." }
                ].map((s, i) => (
                    <div key={i} className="group border-r border-b border-slate-200 p-12 hover:bg-slate-50 transition-colors relative">
                        <div className="absolute top-6 right-6 text-slate-200 group-hover:text-orange-200 transition-colors">
                            <s.icon size={64} strokeWidth={1} />
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-4 relative z-10">{s.title}</h3>
                        <p className="text-slate-600 font-medium leading-relaxed relative z-10 mb-8">{s.desc}</p>
                        <div className="w-12 h-1 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* STATS - Bar */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-slate-800">
            <div>
                <p className="text-5xl font-black text-orange-500 mb-2">24h</p>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-400">Response Time</p>
            </div>
            <div>
                <p className="text-5xl font-black text-orange-500 mb-2">5k+</p>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-400">Roofs Installed</p>
            </div>
            <div>
                <p className="text-5xl font-black text-orange-500 mb-2">A+</p>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-400">BBB Rating</p>
            </div>
            <div>
                <p className="text-5xl font-black text-orange-500 mb-2">25yr</p>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-400">Labor Warranty</p>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-orange-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-8 leading-tight">
                  Don't wait for the<br/>leak to start.
              </h2>
              <p className="text-orange-100 text-xl font-medium mb-12 max-w-2xl mx-auto">
                  Schedule a preventative inspection today and save thousands in future repairs.
              </p>
              <Button className="bg-white text-orange-600 hover:bg-slate-900 hover:text-white px-10 py-8 text-xl font-bold uppercase rounded-none transition-all shadow-2xl">
                  Detect Issues Now
              </Button>
          </div>
      </section>

    </div>
  );
}

const rulerIcon = Ruler;
