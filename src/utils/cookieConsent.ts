// Cookie Consent Management Utility

export type CookieCategory = 'necessary' | 'preference' | 'statistic' | 'marketing'

export interface CookiePreferences {
  necessary: boolean
  preference: boolean
  statistic: boolean
  marketing: boolean
  timestamp: number
}

const COOKIE_CONSENT_KEY = 'irsdl_cookie_consent'
const COOKIE_PREFERENCES_KEY = 'irsdl_cookie_preferences'

export const cookieConsent = {
  // Check if user has given consent
  hasConsent(): boolean {
    return localStorage.getItem(COOKIE_CONSENT_KEY) === 'true'
  },

  // Set consent status
  setConsent(consent: boolean): void {
    localStorage.setItem(COOKIE_CONSENT_KEY, consent.toString())
  },

  // Get cookie preferences
  getPreferences(): CookiePreferences {
    const stored = localStorage.getItem(COOKIE_PREFERENCES_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
    // Default: only necessary cookies
    return {
      necessary: true,
      preference: false,
      statistic: false,
      marketing: false,
      timestamp: Date.now()
    }
  },

  // Save cookie preferences
  savePreferences(preferences: Partial<CookiePreferences>): void {
    const current = this.getPreferences()
    const updated = {
      ...current,
      ...preferences,
      necessary: true, // Always true
      timestamp: Date.now()
    }
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(updated))
    this.setConsent(true)
    this.applyPreferences(updated)
  },

  // Apply preferences (enable/disable tracking)
  applyPreferences(preferences: CookiePreferences): void {
    // Google Analytics
    if (preferences.statistic) {
      this.enableGoogleAnalytics()
    } else {
      this.disableGoogleAnalytics()
    }

    // Marketing pixels
    if (preferences.marketing) {
      this.enableMarketingPixels()
    } else {
      this.disableMarketingPixels()
    }
  },

  // Enable Google Analytics
  enableGoogleAnalytics(): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }
  },

  // Disable Google Analytics
  disableGoogleAnalytics(): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied'
      })
    }
  },

  // Enable marketing pixels
  enableMarketingPixels(): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      })
    }
  },

  // Disable marketing pixels
  disableMarketingPixels(): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      })
    }
  },

  // Reset all preferences
  reset(): void {
    localStorage.removeItem(COOKIE_CONSENT_KEY)
    localStorage.removeItem(COOKIE_PREFERENCES_KEY)
  }
}
