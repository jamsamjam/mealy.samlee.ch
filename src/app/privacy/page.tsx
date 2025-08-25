// app/privacy/page.tsx
// Mealy Privacy Policy page for Next.js App Router
// Tailwind + shadcn/ui. Replace placeholders (email/domain) before deploying.

import React from "react"
import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Database, Eye, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy — Mealy",
  description:
    "Learn how Mealy collects, uses, and protects your data. Local-first by default with optional cloud sync on the roadmap.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
            <p className="mt-4 text-lg text-slate-600">
              How we protect and handle your data
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Last updated: August 26, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        {/* Introduction */}
        <Card className="rounded-2xl border-slate-200">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="size-6 text-emerald-600" />
              <h2 className="text-xl font-semibold text-slate-900">Our Commitment</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Mealy is a nutrition tracking app that helps you log meals and analyze nutrition using
              official guidance. We take privacy seriously and design our product with a local-first approach.
            </p>
          </CardContent>
        </Card>

        {/* Data Collection */}
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Database className="size-6 text-emerald-600" />
              Data we collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Data you store locally</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Meal logs (foods, portions, notes)</li>
                <li>• Photos you attach to meals</li>
                <li>• Profile and goal settings (age, height, weight, activity level, pregnancy/lactation status)</li>
                <li>• Preferences (units, notifications, theme)</li>
              </ul>
              <p className="mt-4 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
                This information remains on your device. Mealy reads/writes it using the operating system's secure
                storage (AsyncStorage). You can export your data as JSON from the app.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Data you provide to us</h3>
              <ul className="space-y-3 text-slate-700">
                <li>
                  <strong>Email address</strong> — only if you sign up for launch updates or beta testing. We use it to
                  send product emails (e.g., when Android is available) and operational notices.
                </li>
                <li>
                  <strong>Support messages</strong> — if you contact us, we may keep your message to help resolve the issue.
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Automatically collected information</h3>
              <p className="text-slate-700">
                We may collect minimal, privacy‑preserving diagnostics (e.g., crash reports) to improve reliability.
                When enabled, these reports exclude meal contents and personal metrics.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* How we use information */}
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Eye className="size-6 text-emerald-600" />
              How we use information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-slate-700">
              <li>• Provide and maintain the app and its features</li>
              <li>• Respond to support requests and communicate about updates you opted into</li>
              <li>• Improve performance, reliability, and usability</li>
            </ul>
          </CardContent>
        </Card>

        {/* Sharing and Security */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg">Sharing and third parties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-slate-900 mb-2">We do not sell personal data.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">USDA FoodData Central:</p>
                <p className="text-slate-700">We query their API to fetch nutrition data. Requests may include
                food search terms and pagination info, but not your profile or meal history.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Service providers:</p>
                <p className="text-slate-700">If we use email or crash reporting vendors, they will process data on
                our behalf under confidentiality agreements and only for the stated purposes.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <Lock className="size-5 text-emerald-600" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="text-slate-700">
                We follow industry best practices to protect data. However, no method of transmission or storage is 100%
                secure. Keep your device and backups protected with a passcode and OS security features.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg">Your rights</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="text-slate-700">
                Depending on your location (e.g., EU/EEA under GDPR, California under CCPA/CPRA), you may have rights to
                access, correct, export, or delete your personal data, and to object or restrict certain processing.
                To exercise rights, contact us using the details below.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg">Data retention</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="text-slate-700">
                Local data stays on your device until you delete it (via in‑app deletion, uninstall, or OS settings).
                If you subscribed with an email, we keep it until you unsubscribe or request deletion.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <Card className="rounded-2xl border-slate-200 bg-emerald-50">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Questions?</h2>
            <p className="text-slate-700 mb-4">
              For privacy questions or requests, contact us at
            </p>
            <a 
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold" 
              href="mailto:privacy@mealy.app"
            >
              privacy@mealy.app
            </a>
          </CardContent>
        </Card>

        {/* Roadmap Note */}
        <Card className="rounded-2xl border-slate-200 bg-blue-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-900 mb-2">Roadmap: Optional cloud sync</h3>
            <p className="text-sm text-slate-700">
              We are exploring an optional cloud sync to enable multi‑device access. If introduced, it will be opt‑in
              and accompanied by a dedicated data processing notice detailing what is synced, where it is stored, and
              how you can control it.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}