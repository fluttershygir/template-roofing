"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ContactForm() {
  const searchParams = useSearchParams();
  const isStandalone = searchParams.get("type") === "standalone";
  
  return (
    <Card className="glass border-zinc-800/50 bg-black/40">
      <CardContent className="p-8">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-cyan-500/80 font-mono">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-700"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-cyan-500/80 font-mono">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-700"
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-cyan-500/80 font-mono">Business Name</label>
            <input 
              type="text" 
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-700"
              placeholder="Global Industries Ltd."
            />
          </div>

          {isStandalone && (
            <motion.div 
               initial={{ opacity: 0, height: 0 }}
               animate={{ opacity: 1, height: "auto" }}
               className="space-y-6"
            >
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-cyan-500/80 font-mono">Budget Range</label>
                    <select className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-700 appearance-none cursor-pointer">
                       <option className="bg-zinc-900">$2,500 - $5,000</option>
                       <option className="bg-zinc-900">$5,000 - $10,000</option>
                       <option className="bg-zinc-900">$10,000+</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-cyan-500/80 font-mono">Target Timeline</label>
                     <input 
                      type="text" 
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-700"
                      placeholder="e.g. 4-6 weeks"
                    />
                 </div>
               </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-cyan-500/80 font-mono">Existing Website (Optional)</label>
                  <input 
                    type="url" 
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-700"
                    placeholder="https://"
                  />
                </div>
            </motion.div>
          )}

           <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-cyan-500/80 font-mono">What kind of site do you need?</label>
            <textarea 
              rows={4}
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-700 resize-none"
              placeholder="Describe your project goals, design preferences, or existing website issues..."
            />
          </div>

          <Button className="w-full h-12 rounded-lg bg-gradient-to-r from-cyan-900/50 to-cyan-700/50 text-cyan-100 border border-cyan-500/30 hover:border-cyan-400 hover:text-white transition-all duration-300 mt-4 shadow-[0_0_20px_rgba(0,245,255,0.1)]">
            {isStandalone ? "Request Custom Quote" : "Transmit Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 font-sans">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,40,50,0.2),transparent_70%)] opacity-40"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-cyan-400 transition-colors mb-8 text-sm group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Return to System
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4 tracking-tighter text-white">Initialize Project</h1>
             <p className="text-zinc-400 font-light">
              Tell us about your business. We'll analyze your requirements and prepare a proposal.
            </p>
          </div>

          <Suspense fallback={<div>Loading form...</div>}>
             <ContactForm />
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
}
