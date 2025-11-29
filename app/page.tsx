'use client'

import { useState } from 'react'

const apps = [
  {
    id: 'tip-calculator',
    name: 'Tip Calculator',
    description: 'Calculate tips and split bills easily',
    category: 'Calculator',
    color: '#3B82F6',
    icon: '💰',
    status: 'Live',
    features: ['Calculate tip percentage', 'Split between people', 'Quick tip buttons'],
    tech: 'React Native + Expo SDK 52',
    demoUrl: null, // Will add when we build web versions
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Track your body mass index',
    category: 'Calculator',
    color: '#10B981',
    icon: '⚖️',
    status: 'Live',
    features: ['Height/weight input', 'BMI calculation', 'Health category display'],
    tech: 'React Native + Expo SDK 52',
    demoUrl: null,
  },
  {
    id: 'pomodoro-timer',
    name: 'Pomodoro Timer',
    description: 'Focus timer with work/break intervals',
    category: 'Timer',
    color: '#EF4444',
    icon: '🍅',
    status: 'Live',
    features: ['25/5/15 min intervals', 'Session tracking', 'History view', 'Notifications'],
    tech: 'React Native + Expo SDK 52',
    demoUrl: null,
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert between different units',
    category: 'Converter',
    color: '#8B5CF6',
    icon: '📐',
    status: 'Live',
    features: ['Multiple categories', 'Swap units', 'Real-time conversion'],
    tech: 'React Native + Expo SDK 52',
    demoUrl: null,
  },
  {
    id: 'no-contacts-tracker',
    name: 'No Contacts Tracker',
    description: 'Track people you want to stay in touch with',
    category: 'Tracker',
    color: '#F59E0B',
    icon: '👥',
    status: 'Live',
    features: ['Contact reminders', 'Last contact date', 'Categories', 'Notifications'],
    tech: 'React Native + Expo SDK 52',
    demoUrl: null,
  },
]

const templates = [
  { name: 'Calculator', count: 2, icon: '🧮' },
  { name: 'Tracker', count: 1, icon: '📊' },
  { name: 'Timer', count: 1, icon: '⏱️' },
  { name: 'Checklist', count: 0, icon: '✅' },
  { name: 'Converter', count: 1, icon: '🔄' },
]

// iPhone mockup component
function IPhoneMockup({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="relative mx-auto" style={{ width: 280, height: 560 }}>
      {/* Phone frame */}
      <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="absolute inset-3 bg-white rounded-[2.25rem] overflow-hidden">
          {/* Status bar */}
          <div className="h-12 bg-gray-900 flex items-center justify-between px-6 text-white text-xs">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>
          {/* App content */}
          <div className="h-[calc(100%-48px)]" style={{ backgroundColor: color }}>
            {children}
          </div>
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full" />
      </div>
    </div>
  )
}

// Fake app screen
function AppScreen({ app }: { app: typeof apps[0] }) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-white">
      <span className="text-6xl mb-4">{app.icon}</span>
      <h3 className="text-xl font-bold mb-2 text-center">{app.name}</h3>
      <p className="text-sm opacity-80 text-center mb-6">{app.description}</p>
      <div className="space-y-2 w-full">
        {app.features.slice(0, 3).map((f, i) => (
          <div key={i} className="bg-white/20 rounded-lg px-3 py-2 text-sm">
            ✓ {f}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const [selectedApp, setSelectedApp] = useState<typeof apps[0] | null>(null)

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          App Factory
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AI-powered mobile app generation in under 60 seconds
        </p>
        <div className="flex justify-center gap-4 text-sm flex-wrap">
          <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
            <span className="font-semibold text-blue-600">{apps.length}</span> Apps Generated
          </div>
          <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
            <span className="font-semibold text-green-600">5</span> Templates
          </div>
          <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
            <span className="font-semibold text-purple-600">8</span> Themes
          </div>
        </div>
      </div>

      {/* Templates */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Templates</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {templates.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-4 text-center shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-3xl mb-2">{t.icon}</div>
              <div className="font-medium text-gray-900">{t.name}</div>
              <div className="text-sm text-gray-500">{t.count} apps</div>
            </div>
          ))}
        </div>
      </section>

      {/* Apps Gallery */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Generated Apps</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <div
              key={app.id}
              className="cursor-pointer transform hover:scale-105 transition-transform"
              onClick={() => setSelectedApp(app)}
            >
              <IPhoneMockup color={app.color}>
                <AppScreen app={app} />
              </IPhoneMockup>
              <div className="text-center mt-4">
                <h3 className="font-semibold text-gray-900">{app.name}</h3>
                <p className="text-sm text-gray-500">{app.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold">5</div>
            <div className="text-blue-100">Templates</div>
          </div>
          <div>
            <div className="text-4xl font-bold">8</div>
            <div className="text-blue-100">Themes</div>
          </div>
          <div>
            <div className="text-4xl font-bold">9</div>
            <div className="text-blue-100">Features</div>
          </div>
          <div>
            <div className="text-4xl font-bold">&lt;60s</div>
            <div className="text-blue-100">Build Time</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>Built with React Native + Expo SDK 52</p>
        <p className="mt-1">Powered by Claude AI</p>
      </footer>

      {/* Modal with iPhone mockup */}
      {selectedApp && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="flex flex-col md:flex-row items-center gap-8 max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* iPhone Preview */}
            <div className="flex-shrink-0">
              <IPhoneMockup color={selectedApp.color}>
                <AppScreen app={selectedApp} />
              </IPhoneMockup>
            </div>

            {/* Details */}
            <div className="bg-white rounded-2xl p-6 max-w-sm">
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white text-xl hover:bg-white/30"
                onClick={() => setSelectedApp(null)}
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{selectedApp.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedApp.name}</h2>
                  <span className="text-sm text-gray-500">{selectedApp.category}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{selectedApp.description}</p>

              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Features</h3>
                <ul className="space-y-1">
                  {selectedApp.features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t text-sm text-gray-500">
                {selectedApp.tech}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
