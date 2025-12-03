// SEO Optimization Utility

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: string
  canonical?: string
  noindex?: boolean
}

export const seo = {
  // Update page metadata
  updateMeta(config: SEOConfig): void {
    // Update title
    document.title = config.title

    // Update or create meta tags
    this.setMetaTag('description', config.description)
    
    if (config.keywords) {
      this.setMetaTag('keywords', config.keywords.join(', '))
    }

    // Open Graph tags
    this.setMetaTag('og:title', config.title, 'property')
    this.setMetaTag('og:description', config.description, 'property')
    this.setMetaTag('og:type', config.ogType || 'website', 'property')
    
    if (config.ogImage) {
      this.setMetaTag('og:image', config.ogImage, 'property')
    }

    // Twitter Card tags
    this.setMetaTag('twitter:card', 'summary_large_image')
    this.setMetaTag('twitter:title', config.title)
    this.setMetaTag('twitter:description', config.description)
    
    if (config.ogImage) {
      this.setMetaTag('twitter:image', config.ogImage)
    }

    // Canonical URL
    if (config.canonical) {
      this.setCanonical(config.canonical)
    }

    // Robots meta
    if (config.noindex) {
      this.setMetaTag('robots', 'noindex, nofollow')
    } else {
      this.setMetaTag('robots', 'index, follow')
    }
  },

  // Set or update a meta tag
  setMetaTag(name: string, content: string, attribute: string = 'name'): void {
    let element = document.querySelector(`meta[${attribute}="${name}"]`)
    
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attribute, name)
      document.head.appendChild(element)
    }
    
    element.setAttribute('content', content)
  },

  // Set canonical URL
  setCanonical(url: string): void {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    
    link.href = url
  },

  // Generate structured data (JSON-LD)
  setStructuredData(data: any): void {
    let script = document.querySelector('script[type="application/ld+json"]')
    
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    
    script.textContent = JSON.stringify(data)
  },

  // Organization structured data
  setOrganizationData(): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'IRSDL CyberSecure',
      url: 'https://irsdl.com',
      logo: 'https://irsdl.com/logo.png',
      description: 'Affordable and reliable VAPT services for startups and small businesses',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        availableLanguage: ['English', 'Hindi']
      },
      sameAs: [
        'https://linkedin.com/company/irsdl',
        'https://twitter.com/irsdl',
        'https://facebook.com/irsdl'
      ]
    }
    
    this.setStructuredData(data)
  }
}
