import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import Training from './pages/Training'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import NotFound from './pages/NotFound'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'
import CookieConsent from './components/CookieConsent'
import { analytics } from './utils/analytics'
import { seo } from './utils/seo'
import { cookieConsent } from './utils/cookieConsent'
import WebPentest from './pages/pentest/WebPentest'
import AIPentest from './pages/pentest/AIPentest'
import MobilePentest from './pages/pentest/MobilePentest'
import APIPentest from './pages/pentest/APIPentest'
import CloudPentest from './pages/pentest/CloudPentest'
import NetworkPentest from './pages/pentest/NetworkPentest'
import WebAPITraining from './pages/training/WebAPITraining'
import EthicalHacking from './pages/training/EthicalHacking'
import NetworkPentestTraining from './pages/training/NetworkPentest'
import CloudPentestTraining from './pages/training/CloudPentest'

const App = () => {
  const location = useLocation()

  useEffect(() => {
    // Initialize analytics (replace with your GA4 measurement ID)
    analytics.init('G-XXXXXXXXXX')
    
    // Set organization structured data
    seo.setOrganizationData()
    
    // Apply saved cookie preferences
    const preferences = cookieConsent.getPreferences()
    if (cookieConsent.hasConsent()) {
      cookieConsent.applyPreferences(preferences)
    }
  }, [])

  useEffect(() => {
    // Track page views on route change
    if (cookieConsent.hasConsent() && cookieConsent.getPreferences().statistic) {
      analytics.pageView(location.pathname + location.search)
    }
  }, [location])

  return (
    <>
      <ScrollToTop />
      <CookieConsent />
      <Routes>
      <Route element={<MainLayout />}>
        <Route
          index
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="services"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />
        <Route
          path="services/:slug"
          element={
            <PageTransition>
              <ServiceDetail />
            </PageTransition>
          }
        />
        <Route
          path="about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="training"
          element={
            <PageTransition>
              <Training />
            </PageTransition>
          }
        />
        <Route
          path="contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="careers"
          element={
            <PageTransition>
              <Careers />
            </PageTransition>
          }
        />
        <Route
          path="pentest/web"
          element={
            <PageTransition>
              <WebPentest />
            </PageTransition>
          }
        />
        <Route
          path="pentest/ai"
          element={
            <PageTransition>
              <AIPentest />
            </PageTransition>
          }
        />
        <Route
          path="pentest/mobile"
          element={
            <PageTransition>
              <MobilePentest />
            </PageTransition>
          }
        />
        <Route
          path="pentest/api"
          element={
            <PageTransition>
              <APIPentest />
            </PageTransition>
          }
        />
        <Route
          path="pentest/cloud"
          element={
            <PageTransition>
              <CloudPentest />
            </PageTransition>
          }
        />
        <Route
          path="pentest/network"
          element={
            <PageTransition>
              <NetworkPentest />
            </PageTransition>
          }
        />
        <Route
          path="training/web-api-mobile"
          element={
            <PageTransition>
              <WebAPITraining />
            </PageTransition>
          }
        />
        <Route
          path="training/ethical-hacking"
          element={
            <PageTransition>
              <EthicalHacking />
            </PageTransition>
          }
        />
        <Route
          path="training/network-pentest"
          element={
            <PageTransition>
              <NetworkPentestTraining />
            </PageTransition>
          }
        />
        <Route
          path="training/cloud-pentest"
          element={
            <PageTransition>
              <CloudPentestTraining />
            </PageTransition>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <PageTransition>
            <NotFound />
          </PageTransition>
        }
      />
    </Routes>
    </>
  )
}

export default App

