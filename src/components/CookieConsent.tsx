import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Settings } from 'lucide-react'
import { cookieConsent } from '../utils/cookieConsent'
import type { CookiePreferences } from '../utils/cookieConsent'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(cookieConsent.getPreferences())

  useEffect(() => {
    // Show banner if user hasn't given consent
    if (!cookieConsent.hasConsent()) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    cookieConsent.savePreferences({
      necessary: true,
      preference: true,
      statistic: true,
      marketing: true
    })
    setShowBanner(false)
  }

  const handleAcceptNecessary = () => {
    cookieConsent.savePreferences({
      necessary: true,
      preference: false,
      statistic: false,
      marketing: false
    })
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    cookieConsent.savePreferences(preferences)
    setShowSettings(false)
    setShowBanner(false)
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary' || key === 'timestamp') return // Can't disable necessary
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && !showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
            style={{ border: 'none', outline: 'none' }}
          >
            <div 
              className="max-w-7xl mx-auto rounded-2xl shadow-2xl p-6 md:p-8"
              style={{ 
                background: 'rgba(17, 24, 39, 0.98)',
                border: 'none',
                outline: 'none',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div className="flex items-start gap-4" style={{ border: 'none' }}>
                <Cookie className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    We Value Your Privacy
                  </h3>
                  <p className="text-gray-300 mb-4">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                    By clicking "Accept All", you consent to our use of cookies.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                      style={{ border: 'none', outline: 'none' }}
                    >
                      Accept All
                    </button>
                    <button
                      onClick={handleAcceptNecessary}
                      className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
                      style={{ border: 'none', outline: 'none' }}
                    >
                      Necessary Only
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg font-semibold transition-colors flex items-center gap-2"
                      style={{ border: 'none', outline: 'none' }}
                    >
                      <Settings className="w-4 h-4" />
                      Customize
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setShowBanner(false)}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                  style={{ border: 'none', outline: 'none' }}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowSettings(false)}
            style={{ border: 'none' }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              style={{ 
                background: 'rgba(17, 24, 39, 0.98)',
                border: 'none',
                outline: 'none',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div className="p-6" style={{ border: 'none' }}>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Cookie Preferences</h2>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                    style={{ border: 'none', outline: 'none' }}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6" style={{ border: 'none' }}>
                {/* Necessary Cookies */}
                <div className="pb-6" style={{ border: 'none' }}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Necessary Cookies</h3>
                    <div 
                      className="px-3 py-1 bg-gray-700 text-gray-200 text-sm font-semibold rounded-full"
                      style={{ border: 'none' }}
                    >
                      Always Active
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    These cookies are essential for the website to function properly. They enable basic features 
                    like page navigation and access to secure areas.
                  </p>
                </div>

                {/* Preference Cookies */}
                <div className="pb-6" style={{ border: 'none' }}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Preference Cookies</h3>
                    <button
                      onClick={() => togglePreference('preference')}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        preferences.preference ? 'bg-blue-600' : 'bg-gray-700'
                      }`}
                      style={{ border: 'none', outline: 'none' }}
                    >
                      <span
                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          preferences.preference ? 'translate-x-6' : ''
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm">
                    These cookies allow the website to remember your preferences (like language or region) 
                    and provide enhanced, personalized features.
                  </p>
                </div>

                {/* Statistic Cookies */}
                <div className="pb-6" style={{ border: 'none' }}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Statistic Cookies</h3>
                    <button
                      onClick={() => togglePreference('statistic')}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        preferences.statistic ? 'bg-blue-600' : 'bg-gray-700'
                      }`}
                      style={{ border: 'none', outline: 'none' }}
                    >
                      <span
                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          preferences.statistic ? 'translate-x-6' : ''
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously (Google Analytics).
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="pb-6" style={{ border: 'none' }}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">Marketing Cookies</h3>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        preferences.marketing ? 'bg-blue-600' : 'bg-gray-700'
                      }`}
                      style={{ border: 'none', outline: 'none' }}
                    >
                      <span
                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          preferences.marketing ? 'translate-x-6' : ''
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm">
                    These cookies are used to track visitors across websites to display relevant advertisements 
                    and measure campaign effectiveness.
                  </p>
                </div>
              </div>

              <div className="p-6 flex gap-3" style={{ border: 'none' }}>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                  style={{ border: 'none', outline: 'none' }}
                >
                  Save Preferences
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg font-semibold transition-colors"
                  style={{ border: 'none', outline: 'none' }}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CookieConsent
