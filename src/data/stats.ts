export const stats = [
  { label: 'Indian enterprises protected', value: 320, suffix: '+' },
  { label: 'CERT-In incidents contained (2024)', value: 1860, suffix: '' },
  { label: 'Cloud workloads on Indian regions', value: 5700, suffix: '+' },
  { label: 'Average response time in metros (min)', value: 11, suffix: '' },
]

export const detailedStats = {
  clients: {
    total: 320,
    bfsi: 120,
    healthcare: 45,
    government: 30,
    saas: 85,
    manufacturing: 40
  },
  coverage: {
    cities: 15,
    states: 22,
    socLocations: ['Bengaluru', 'Gurugram', 'Mumbai', 'Hyderabad']
  },
  performance: {
    uptime: 99.9,
    responseTime: 11,
    threatsBlocked: 1200000,
    vulnerabilitiesFound: 45000
  },
  compliance: {
    certIn: true,
    iso27001: true,
    soc2: true,
    pciDss: true,
    rbi: true,
    irdai: true,
    sebi: true
  }
}

export const indianMetrics = {
  dataLocalization: '100%',
  bilingualSupport: true,
  certInAlignment: '100%',
  indianCloudRegions: ['AWS Mumbai', 'AWS Hyderabad', 'Azure Central India', 'GCP Delhi'],
  regulatoryFrameworks: ['RBI', 'IRDAI', 'SEBI', 'MeitY', 'NPCI']
}
