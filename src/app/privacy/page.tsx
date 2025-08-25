import React from "react"
import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Database, Globe, Lock, Users } from "lucide-react"

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

        {/* Your Data */}
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Database className="size-6 text-emerald-600" />
              Your Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">What stays on your device</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Meal logs (foods, portions, notes)</li>
                <li>• Photos you attach to meals</li>
                <li>• Profile settings (age, height, weight, activity level)</li>
                <li>• App preferences (units, notifications, theme)</li>
              </ul>
              <p className="mt-4 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
                <strong>Local-first approach:</strong> This data stays on your device using secure storage. You can export it as JSON anytime. Deleted when you uninstall the app.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-slate-900 mb-3">What we may collect</h3>
              <ul className="space-y-3 text-slate-700">
                <li>
                  <strong>Email address</strong> — only if you sign up for updates. Kept until you unsubscribe.
                </li>
                <li>
                  <strong>Support messages</strong> — if you contact us for help.
                </li>
                <li>
                  <strong>Crash reports</strong> — minimal diagnostics to fix bugs (excludes personal data).
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Third-party Services */}
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Globe className="size-6 text-emerald-600" />
              Third-party Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold text-slate-900">USDA FoodData Central</p>
              <p className="text-slate-700">We query their API to fetch nutrition data. Only food search terms are sent, not your meal history or profile.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Service providers</p>
              <p className="text-slate-700">Email and crash reporting services process data on our behalf under confidentiality agreements.</p>
            </div>
          </CardContent>
        </Card>

        {/* Security & Your Rights */}
        <Card className="rounded-2xl border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Lock className="size-6 text-emerald-600" />
              Security & Your Rights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Security</h3>
              <p className="text-slate-700">
                We follow industry best practices to protect data. Keep your device secure with a passcode and OS security features.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Your rights</h3>
              <p className="text-slate-700">
                You may have rights to access, correct, export, or delete your personal data (GDPR, CCPA). Contact us below to exercise these rights.
              </p>
            </div>
          </CardContent>
        </Card>

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
              hello@mealy.samlee.ch
            </a>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}