import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import NotFound from './pages/NotFound'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'
import WebPentest from './pages/pentest/WebPentest'
import AIPentest from './pages/pentest/AIPentest'
import MobilePentest from './pages/pentest/MobilePentest'
import APIPentest from './pages/pentest/APIPentest'
import CloudPentest from './pages/pentest/CloudPentest'
import NetworkPentest from './pages/pentest/NetworkPentest'
import Healthcare from './pages/industries/Healthcare'
import SaaS from './pages/industries/SaaS'
import Fintech from './pages/industries/Fintech'
import Manufacturing from './pages/industries/Manufacturing'
import PublicSector from './pages/industries/PublicSector'
import SecurityResearch from './pages/process/SecurityResearch'
import ThreatModeling from './pages/process/ThreatModeling'
import PentestExecution from './pages/process/PentestExecution'
import ReportingHardening from './pages/process/ReportingHardening'

const App = () => {
  return (
    <>
      <ScrollToTop />
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
          path="industries/healthcare"
          element={
            <PageTransition>
              <Healthcare />
            </PageTransition>
          }
        />
        <Route
          path="industries/saas"
          element={
            <PageTransition>
              <SaaS />
            </PageTransition>
          }
        />
        <Route
          path="industries/fintech"
          element={
            <PageTransition>
              <Fintech />
            </PageTransition>
          }
        />
        <Route
          path="industries/manufacturing"
          element={
            <PageTransition>
              <Manufacturing />
            </PageTransition>
          }
        />
        <Route
          path="industries/public-sector"
          element={
            <PageTransition>
              <PublicSector />
            </PageTransition>
          }
        />
        <Route
          path="process/security-research"
          element={
            <PageTransition>
              <SecurityResearch />
            </PageTransition>
          }
        />
        <Route
          path="process/threat-modeling"
          element={
            <PageTransition>
              <ThreatModeling />
            </PageTransition>
          }
        />
        <Route
          path="process/pentest-execution"
          element={
            <PageTransition>
              <PentestExecution />
            </PageTransition>
          }
        />
        <Route
          path="process/reporting-hardening"
          element={
            <PageTransition>
              <ReportingHardening />
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

