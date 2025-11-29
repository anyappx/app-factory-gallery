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
    demoUrl: '/demos/tip-calculator/index.html',
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
    demoUrl: '/demos/bmi-calculator/index.html',
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
    demoUrl: '/demos/pomodoro-timer/index.html',
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert between different units',
    category: 'Converter',
    color: '#8B5CF6',
    icon: '📐',
    status: 'Coming Soon',
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
    demoUrl: '/demos/no-contacts-tracker/index.html',
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
function IPhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: 280, height: 580 }}>
      {/* Phone frame */}
      <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-b-2xl z-20" />
        {/* Screen bezel */}
        <div className="absolute inset-2 bg-black rounded-[2.5rem] overflow-hidden">
          {/* Screen content */}
          <div className="absolute inset-1 bg-white rounded-[2.25rem] overflow-hidden">
            {children}
          </div>
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full" />
      </div>
    </div>
  )
}

// Static app preview (fallback when no demo)
function AppPreview({ app }: { app: typeof apps[0] }) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-white" style={{ backgroundColor: app.color }}>
      <span className="text-5xl mb-3">{app.icon}</span>
      <h3 className="text-lg font-bold mb-1 text-center">{app.name}</h3>
      <p className="text-xs opacity-80 text-center mb-4">{app.description}</p>
      <div className="space-y-1.5 w-full">
        {app.features.slice(0, 3).map((f, i) => (
          <div key={i} className="bg-white/20 rounded-lg px-2 py-1.5 text-xs">
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
        <p className="text-gray-500 mb-8">Click any app to try the live demo</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <div
              key={app.id}
              className="cursor-pointer transform hover:scale-105 transition-transform"
              onClick={() => setSelectedApp(app)}
            >
              <IPhoneMockup>
                {app.demoUrl ? (
                  <iframe
                    src={app.demoUrl}
                    className="w-full h-full border-0"
                    title={app.name}
                  />
                ) : (
                  <AppPreview app={app} />
                )}
              </IPhoneMockup>
              <div className="text-center mt-4">
                <h3 className="font-semibold text-gray-900">{app.name}</h3>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-sm text-gray-500">{app.category}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    app.status === 'Live'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {app.status}
                  </span>
                </div>
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

      {/* Fullscreen Modal with interactive demo */}
      {selectedApp && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="flex flex-col md:flex-row items-center gap-8 max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition-colors"
              onClick={() => setSelectedApp(null)}
            >
              ✕
            </button>

            {/* Larger iPhone Preview */}
            <div className="flex-shrink-0 scale-110 md:scale-125 origin-center">
              <IPhoneMockup>
                {selectedApp.demoUrl ? (
                  <iframe
                    src={selectedApp.demoUrl}
                    className="w-full h-full border-0"
                    title={selectedApp.name}
                  />
                ) : (
                  <AppPreview app={selectedApp} />
                )}
              </IPhoneMockup>
            </div>

            {/* Details panel */}
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{selectedApp.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedApp.name}</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">{selectedApp.category}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedApp.status === 'Live'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {selectedApp.status}
                    </span>
                  </div>
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

              {selectedApp.demoUrl && (
                <a
                  href={selectedApp.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Open Fullscreen Demo ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
