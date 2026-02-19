import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, ArrowRight, Shield, Clock, Home, Star } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-white">
            Apex<span className="text-orange-500">Roofing</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors">Residential</Link>
            <Link href="#" className="text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors">Commercial</Link>
            <Link href="#" className="text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors">Storm Damage</Link>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-500 text-white rounded-full px-6">
            Free Inspection
          </Button>
        </div>
      </header>

      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-900/20 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-950/50 border border-orange-800 text-orange-400 text-sm font-medium mb-6">
            #1 Rated Roofing Contractor
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Superior Protection <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              For Your Home
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            From minor repairs to full replacements, we deliver craftsmanship that stands the test of time. Fully licensed and insured.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-900/20">
              <Phone className="mr-2 h-5 w-5" /> (555) ROOF-PRO
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {([
            { label: "50-Year Warranty" },
            { label: "Same-Day Estimates" },
            { label: "5-Star Reviews" },
            { label: "Certified Installers" }
          ] as { label: string }[]).map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-3 text-center">
              <div className="p-3 rounded-full bg-slate-800 text-orange-400">
                <CheckCircle2 size={24} />
              </div>
              <span className="font-semibold text-slate-200">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Roofing Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive roofing solutions tailored to your needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {([
              { title: "Roof Replacement", desc: "Complete tear-off and installation using premium materials like asphalt, metal, or tile." },
              { title: "Storm Damage Repair", desc: "Expert restoration for wind, hail, and water damage. We work directly with your insurance." },
              { title: "Gutter Systems", desc: "Seamless gutter installation and gutter guards to protect your home foundation." },
            ] as { title: string; desc: string }[]).map((service, i) => (
              <Card key={i} className="bg-slate-900 border-slate-800 hover:border-orange-500/50 transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-slate-800 text-orange-400 flex items-center justify-center mb-4">
                    <Home size={24} />
                  </div>
                  <CardTitle className="text-xl text-slate-100">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 mb-6">{service.desc}</CardDescription>
                  <div className="flex items-center text-sm font-medium text-orange-400 cursor-pointer">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-600/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for a New Roof?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Schedule your free, no-obligation inspection today and get peace of mind.
          </p>
          <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-orange-600 hover:bg-slate-100 font-bold">
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
