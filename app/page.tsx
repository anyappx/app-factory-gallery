const apps = [
  {
    id: 'tip-calculator',
    name: 'Tip Calculator',
    description: 'Calculate tips and split bills easily',
    category: 'Calculator',
    color: '#3B82F6',
    icon: '💰',
    status: 'Live',
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Track your body mass index',
    category: 'Calculator',
    color: '#10B981',
    icon: '⚖️',
    status: 'Live',
  },
  {
    id: 'pomodoro-timer',
    name: 'Pomodoro Timer',
    description: 'Focus timer with work/break intervals',
    category: 'Timer',
    color: '#EF4444',
    icon: '🍅',
    status: 'Live',
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert between different units',
    category: 'Converter',
    color: '#8B5CF6',
    icon: '📐',
    status: 'Live',
  },
  {
    id: 'no-contacts-tracker',
    name: 'No Contacts Tracker',
    description: 'Track people you want to stay in touch with',
    category: 'Tracker',
    color: '#F59E0B',
    icon: '👥',
    status: 'Live',
  },
]

const templates = [
  { name: 'Calculator', count: 1, icon: '🧮' },
  { name: 'Tracker', count: 1, icon: '📊' },
  { name: 'Timer', count: 1, icon: '⏱️' },
  { name: 'Checklist', count: 0, icon: '✅' },
  { name: 'Converter', count: 1, icon: '🔄' },
]

export default function Home() {
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
        <div className="flex justify-center gap-4 text-sm">
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
            <div key={t.name} className="bg-white rounded-xl p-4 text-center shadow-sm border hover:shadow-md transition-shadow">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition-shadow"
            >
              {/* App Icon Header */}
              <div
                className="h-32 flex items-center justify-center"
                style={{ backgroundColor: app.color }}
              >
                <span className="text-6xl">{app.icon}</span>
              </div>

              {/* App Details */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{app.name}</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    {app.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{app.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{app.category}</span>
                  <button className="text-sm text-blue-600 font-medium hover:text-blue-800">
                    View Demo →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="grid md:grid-cols-4 gap-8 text-center">
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
    </main>
  )
}
