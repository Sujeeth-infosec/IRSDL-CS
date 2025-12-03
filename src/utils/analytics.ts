// Analytics Integration Utility

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

export const analytics = {
  // Initialize Google Analytics
  init(measurementId: string): void {
    if (typeof window === 'undefined') return

    // Load gtag script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []
    window.gtag = function() {
      window.dataLayer?.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', measurementId, {
      send_page_view: false // We'll send manually
    })

    // Set default consent mode
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    })
  },

  // Track page view
  pageView(url: string, title?: string): void {
    if (typeof window === 'undefined' || !window.gtag) return
    
    window.gtag('event', 'page_view', {
      page_path: url,
      page_title: title || document.title
    })
  },

  // Track custom event
  event(eventName: string, params?: Record<string, any>): void {
    if (typeof window === 'undefined' || !window.gtag) return
    
    window.gtag('event', eventName, params)
  },

  // Track button click
  trackClick(buttonName: string, location?: string): void {
    this.event('button_click', {
      button_name: buttonName,
      location: location || window.location.pathname
    })
  },

  // Track form submission
  trackFormSubmit(formName: string, success: boolean): void {
    this.event('form_submit', {
      form_name: formName,
      success: success
    })
  },

  // Track service inquiry
  trackServiceInquiry(service: string): void {
    this.event('service_inquiry', {
      service_name: service
    })
  },

  // Track download
  trackDownload(fileName: string): void {
    this.event('file_download', {
      file_name: fileName
    })
  }
}
