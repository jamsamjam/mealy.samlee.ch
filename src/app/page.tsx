"use client"

import React from "react"
import { motion } from "framer-motion"
import { Apple, BadgeCheck, BarChart3, CalendarDays, Camera, ChevronRight, Database, Github, Image as ImageIcon, Lock, PlusCircle, Settings2, Sparkles, TrendingUp, UploadCloud, User, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function MealyLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-emerald-600 grid place-items-center text-white font-bold">M</div>
            <span className="font-semibold tracking-tight">Mealy</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-emerald-600">Features</a>
            <a href="#analytics" className="hover:text-emerald-600">Analytics</a>
            <a href="#faq" className="hover:text-emerald-600">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="rounded-2xl">
              <a href="#cta">Get Started</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            >
              Nutrition tracking that’s <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">accurate</span> & effortless.
            </motion.h1>
            <p className="mt-4 text-lg text-slate-600">
              Mealy helps you log meals fast, analyze nutrition with official MyPlate methodology, and hit your goals with confidence.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button size="lg" className="rounded-2xl" asChild>
                <a href="#download">Download the app</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl" asChild>
                <a href="#features">Explore features <ChevronRight className="ml-1 size-4" /></a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1"><BadgeCheck className="size-4"/> MyPlate-based targets</div>
              <div className="flex items-center gap-1"><Lock className="size-4"/> Local-first privacy</div>
              <div className="flex items-center gap-1"><Database className="size-4"/> USDA Food Data Central</div>
            </div>
          </div>
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="aspect-[9/19] rounded-[2.2rem] border border-slate-200 bg-white shadow-2xl p-3">
              <div className="h-full w-full rounded-[1.7rem] bg-gradient-to-br from-slate-50 to-slate-100 grid place-items-center">
                <div className="text-center px-6">
                  <div className="mx-auto size-16 rounded-2xl bg-emerald-600 grid place-items-center text-white text-2xl font-bold">M</div>
                  <p className="mt-4 text-slate-500">Replace with app screenshots</p>
                  <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
                    <div className="flex items-center gap-1"><Utensils className="size-3"/> Log Meals</div>
                    <div className="flex items-center gap-1"><BarChart3 className="size-3"/> Analytics</div>
                    <div className="flex items-center gap-1"><CalendarDays className="size-3"/> Calendar</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 place-items-center opacity-70">
          {[
            "Expo",
            "React Native",
            "USDA FDC",
            "MyPlate.gov",
            "React Query",
            "AsyncStorage",
          ].map((t) => (
            <div key={t} className="text-sm">{t}</div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Everything you need to stay on track</h2>
            <p className="mt-2 text-slate-600">Fast logging, precise targets, meaningful insights.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={<Utensils className="size-5"/>} title="Meal Logging" desc="Search USDA foods, set portions by grams, add notes & photos."/>
            <FeatureCard icon={<ImageIcon className="size-5"/>} title="Photo Capture" desc="Camera & gallery with persistent, optimized storage."/>
            <FeatureCard icon={<CalendarDays className="size-5"/>} title="Calendar" desc="Monthly overview, daily details, edit or delete with confirmation."/>
            <FeatureCard icon={<BarChart3 className="size-5"/>} title="Analytics" desc="Daily targets vs intake, weekly averages, trends, dynamic insights."/>
            <FeatureCard icon={<Settings2 className="size-5"/>} title="Profile & Goals" desc="Age, height, weight, activity, pregnancy/lactation adjustments."/>
            <FeatureCard icon={<Database className="size-5"/>} title="Accurate Targets" desc="DRI EER formulas + official MyPlate methodology implementation."/>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Camera className="size-5"/> Smart photo workflow</CardTitle>
                <CardDescription>Persistent image storage with caching and error handling.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">Store thumbnails and originals separately, and keep your library tidy over time.</CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><TrendingUp className="size-5"/> Offline-first, online-ready</CardTitle>
                <CardDescription>Local data via AsyncStorage; optional cloud sync in roadmap.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">Use Mealy anywhere. When you’re back online, your data stays safe.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analytics showcase */}
      <section id="analytics" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold">See your progress at a glance</h3>
            <p className="mt-2 text-slate-600">Daily calories, macros, and week-over-week trends. Color-coded bars show where you’re on target and where to adjust.</p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex items-center gap-2"><BadgeCheck className="size-4 text-emerald-600"/> Auto-refresh on screen focus</li>
              <li className="flex items-center gap-2"><BadgeCheck className="size-4 text-emerald-600"/> Weekly averages & meal counts</li>
              <li className="flex items-center gap-2"><BadgeCheck className="size-4 text-emerald-600"/> Insights based on real data</li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow"
          >
            {/* Replace with a real chart/screenshot */}
            <div className="h-64 grid place-items-center text-slate-400">Analytics Screenshot Placeholder</div>
          </motion.div>
        </div>
      </section>

      {/* CTA Download */}
      <section id="download" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold">Ready to try Mealy?</h3>
          <p className="mt-2 text-slate-600">Track meals in seconds and get science-backed guidance.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button size="lg" className="rounded-2xl" asChild>
              <a href="#" aria-label="App Store"><Apple className="mr-2 size-5"/> App Store</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl" asChild>
              <a href="#" aria-label="Google Play coming soon"><ImageIcon className="mr-2 size-5"/> Google Play (soon)</a>
            </Button>
          </div>
          <p className="mt-3 text-xs text-slate-500">Let us know if you'd like to join our Android beta testing program.</p>
        </div>
      </section>

      {/* Email capture (optional) */}
      <section id="cta" className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Get launch updates</CardTitle>
              <CardDescription>No spam. We'll only email you once it's available on Google Play Store.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="you@example.com" required/>
                <Button type="submit" className="rounded-2xl">Notify me</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-center">Frequently asked questions</h3>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Faq q="How accurate are the nutrition targets?" a="Targets are computed with official DRI EER formulas and MyPlate.gov methodology, with adjustments for age, activity, and pregnancy/lactation."/>
            <Faq q="Is my data private?" a="Yes. Mealy stores data locally by default. You can export JSON, and optional cloud sync is on the roadmap."/>
            <Faq q="Can I edit or delete meals?" a="Absolutely. Use the Calendar to edit portions, notes, and attachments, or delete with confirmation."/>
            <Faq q="Does Mealy work offline?" a="Yes. Search results and your data are cached so you can log even without a connection."/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 border-t bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div>
            <span className="text-lg font-bold text-slate-700">Mealy</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="/privacy" className="text-slate-600 hover:text-emerald-600 transition-colors">Privacy</a>
            <span className="text-slate-400">•</span>
            <a href="/terms" className="text-slate-600 hover:text-emerald-600 transition-colors">Terms & Conditions</a>
          </div>
          
          <div>
            <p className="text-xs text-slate-500">&copy; 2025 Mealy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Reusable components
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">{icon} {title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
    </Card>
  )
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="text-base">{q}</CardTitle>
        <CardDescription className="text-slate-600">{a}</CardDescription>
      </CardHeader>
    </Card>
  )
}
