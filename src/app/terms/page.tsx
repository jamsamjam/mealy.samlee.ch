import React from "react"
import Link from "next/link"
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, ShieldCheck, AlertTriangle, Globe, ArrowLeft, Scale, UserCheck, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms & Conditions — Mealy",
  description:
    "Read the terms that govern your use of Mealy. Clear, concise, and built for a local‑first nutrition app.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Back */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="size-4" />
              <span className="text-sm font-medium">Back</span>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">Terms & Conditions</h1>
            <p className="mt-2 text-sm text-slate-500">Last updated: August 26, 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        {/* Agreement */}
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><FileText className="size-6 text-emerald-600"/> Agreement to Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">By downloading, accessing, or using Mealy (the “App” or “Service”), you agree to these Terms & Conditions (the “Terms”). If you do not agree, do not use the Service.</p>
            <p className="text-slate-700">These Terms form a binding agreement between you and the operator of Mealy ("we", "us").</p>
          </CardContent>
        </Card>

        {/* Eligibility & Accounts */}
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><UserCheck className="size-6 text-emerald-600"/> Eligibility & Accounts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">You must be capable of entering into a contract in your jurisdiction to use the Service. If you are under the age where consent is required, use Mealy only with a parent or guardian.</p>
            <p className="text-slate-700">If the App later offers accounts or cloud sync, you are responsible for safeguarding your login credentials and for all activity under your account.</p>
          </CardContent>
        </Card>

        {/* License & Acceptable Use */}
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><ShieldCheck className="size-6 text-emerald-600"/> License & Acceptable Use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">We grant you a limited, non‑exclusive, non‑transferable license to use the App for personal, non‑commercial purposes in accordance with these Terms.</p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Do not reverse‑engineer, modify, or redistribute the App except where permitted by law.</li>
              <li>Do not use the Service for unlawful activity or to infringe others’ rights.</li>
              <li>Do not attempt to access non‑public features, systems, or data.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Health & Nutrition Disclaimer */}
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><AlertTriangle className="size-6 text-amber-600"/> Health & Nutrition Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">Mealy provides general nutrition tracking and calculations (e.g., based on MyPlate/DRI formulas). It does not provide medical advice and is not a substitute for professional diagnosis or treatment. Consult a qualified professional for medical or dietary guidance specific to you.</p>
          </CardContent>
        </Card>

        {/* Third‑party & Content Sources */}
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Globe className="size-6 text-emerald-600"/> Third‑party Services & Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">Food nutrition data is retrieved from third‑party sources such as USDA FoodData Central. We are not responsible for the availability, accuracy, or changes to third‑party services.</p>
            <p className="text-slate-700">Links to third‑party sites or services do not imply endorsement. Your use of them may be governed by their separate terms and privacy policies.</p>
          </CardContent>
        </Card>

        {/* Changes, Availability, Beta */}
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Wrench className="size-6 text-emerald-600"/> Changes, Availability, Beta Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">We may add, modify, or remove features, and may suspend or discontinue the Service in whole or in part. From time to time we may offer beta features; these are provided on a best‑effort basis and may be changed or removed without notice.</p>
          </CardContent>
        </Card>

        {/* Liability & Warranties (concise) */}
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><Scale className="size-6 text-emerald-600"/> Limitation of Liability & Warranties</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">The Service is provided “as is” and “as available”. To the maximum extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, and non‑infringement.</p>
            <p className="text-slate-700">To the extent permitted by law, we will not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of data, profits, or revenues arising from your use of the Service.</p>
          </CardContent>
        </Card>

        {/* Privacy link */}
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><ShieldCheck className="size-6 text-emerald-600"/> Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">Your use of the Service is also governed by our <Link href="/privacy" className="underline underline-offset-4 hover:text-emerald-700">Privacy Policy</Link>.</p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="rounded-2xl border-slate-200 bg-emerald-50">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Questions?</h2>
            <p className="text-slate-700 mb-4">Contact us for any questions about these Terms.</p>
            <a href="mailto:hello@mealy.samlee.ch" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold">hello@mealy.samlee.ch</a>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
