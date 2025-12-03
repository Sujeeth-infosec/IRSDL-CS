export type Service = {
  slug: string
  title: string
  tagline: string
  overview: string
  methodology: string[]
  tools: string[]
  benefits: string[]
}

export const services: Service[] = [
  {
    slug: 'vapt',
    title: 'Vulnerability Assessment & Penetration Testing',
    tagline: 'Simulate real adversaries, discover exposure, and prioritize fixes.',
    overview:
      'Our VAPT teams fuse automated scanners with elite manual exploitation to map every attack path. Findings are risk-ranked with remediation guidance aligned to your SDLC cadence.',
    methodology: ['Scope alignment & threat modeling', 'Automated discovery & fingerprinting', 'Manual exploitation & pivoting', 'Executive & developer-ready reporting'],
    tools: ['Burp Suite', 'Nessus', 'Nmap', 'Cobalt Strike', 'Custom exploit chains'],
    benefits: ['Eliminate critical CVEs before adversaries weaponize them', 'Gain executive-ready risk narratives', 'Accelerate fixes with prioritised playbooks'],
  },
  {
    slug: 'red-team',
    title: 'Red Teaming & Adversary Simulation',
    tagline: 'Train blue teams against stealthy nation-state-grade operations.',
    overview:
      'We simulate advanced threat actors with multi-week campaigns across physical, social, and cyber vectors. Every engagement concludes with purple-team uplift and resilience coaching.',
    methodology: ['Reconnaissance & OSINT fusion', 'Initial access & lateral movement', 'Privilege escalation & objective pursuit', 'Purple-team workshop & hardening'],
    tools: ['Mythic', 'Cobalt Strike', 'BloodHound', 'Custom tradecraft', 'Hardware implants'],
    benefits: ['Expose gaps in detective controls', 'Measure SOC readiness with MITRE ATT&CK mapping', 'Achieve executive clarity on breach impact'],
  },

  {
    slug: 'threat-intelligence',
    title: 'Threat Intelligence & Digital Risk',
    tagline: 'Actionable intelligence mapped directly to your business crown jewels.',
    overview:
      'We enrich global feeds with proprietary sensors, dark web monitoring, and industry-specific research to deliver curated intelligence briefs.',
    methodology: ['Intelligence requirements workshop', 'Collection management & fusion', 'Analysis & priority intelligence reports', 'Leadership briefings & KPIs'],
    tools: ['Recorded Future', 'Intel 471', 'MISP', 'Dark web sensors', 'AI-assisted enrichment'],
    benefits: ['Forecast campaigns targeting your industry', 'Align defenders on high-fidelity alerts', 'Reduce noise with tailored context'],
  },
  {
    slug: 'cloud-security',
    title: 'Cloud Security Engineering',
    tagline: 'Hardening for AWS, Azure, and GCP with guardrails and IaC drift control.',
    overview:
      'We embed cloud security architects who codify least privilege, integrate CSPM, and orchestrate multi-cloud monitoring.',
    methodology: ['Cloud posture assessment', 'Identity & access refactoring', 'IaC guardrails & policy-as-code', 'Continuous compliance dashboards'],
    tools: ['AWS Security Hub', 'Azure Defender', 'GCP SCC', 'Terraform', 'OPA/Rego'],
    benefits: ['Reduce cloud misconfigurations by design', 'Gain audit-ready evidence', 'Enable faster, safer cloud releases'],
  },
  {
    slug: 'devsecops',
    title: 'DevSecOps & Secure SDLC',
    tagline: 'Shift-left security with automated gates, SBOMs, and secure pipelines.',
    overview:
      'We integrate SAST, DAST, SCA, and container scanning into your CI/CD to keep velocity high while blocking risky artifacts.',
    methodology: ['SDLC maturity review', 'Toolchain integration & orchestration', 'Developer enablement workshops', 'Continuous improvement metrics'],
    tools: ['GitHub Advanced Security', 'Snyk', 'GitLab Ultimate', 'Trivy', 'OWASP ZAP'],
    benefits: ['Prevent vulnerabilities before deployment', 'Empower dev teams with guardrails', 'Gain real-time compliance evidence'],
  },
  {
    slug: 'incident-response',
    title: 'Incident Response & Crisis Management',
    tagline: 'Battle-tested responders contain, eradicate, and recover at speed.',
    overview:
      'We provide on-retainer IR squads, tabletop exercises, and digital forensics expertise to manage breaches confidently.',
    methodology: ['Preparedness & tabletop simulations', '24/7 on-call containment', 'Forensics & root-cause analytics', 'Executive communications & recovery'],
    tools: ['Velociraptor', 'CrowdStrike Falcon', 'EnCase', 'KAPE', 'Custom forensic tooling'],
    benefits: ['Shorten dwell time dramatically', 'Protect reputation with decisive actions', 'Capture lessons to strengthen defenses'],
  },
  {
    slug: 'digital-forensics',
    title: 'Digital Forensics & eDiscovery',
    tagline: 'Evidence-grade investigations across endpoints, cloud, and mobile.',
    overview:
      'Certified forensic examiners preserve chain-of-custody, reconstruct timelines, and support legal teams with defensible reports.',
    methodology: ['Acquisition & preservation', 'Artifact parsing & timeline reconstruction', 'Malware & memory analysis', 'Expert witness-ready reporting'],
    tools: ['Magnet AXIOM', 'Cellebrite', 'Volatility', 'X-Ways', 'FTK'],
    benefits: ['Maintain defensible evidence', 'Accelerate legal outcomes', 'Understand exactly what happened and when'],
  },
  {
    slug: 'malware-analysis',
    title: 'Malware Analysis & Reverse Engineering',
    tagline: 'Detonate, dissect, and neutralize advanced payloads.',
    overview:
      'Reverse engineers analyze binaries, produce YARA signatures, and feed intelligence straight into your SOC detections.',
    methodology: ['Static & dynamic analysis', 'Sandbox detonation & behavior capture', 'Signature & rule creation', 'Detection engineering handoff'],
    tools: ['Ghidra', 'IDA Pro', 'Cuckoo Sandbox', 'YARA', 'Custom sandboxes'],
    benefits: ['Speed up response with high-fidelity IoCs', 'Strengthen detection-as-code', 'Understand adversary capabilities deeply'],
  },
  {
    slug: 'security-consulting',
    title: 'Security Strategy & Consulting',
    tagline: 'Align board-level risk appetite with actionable cyber programs.',
    overview:
      'Fractional CISOs craft roadmaps, maturity models, and governance frameworks that unlock budget and executive alignment.',
    methodology: ['Current-state assessment', 'Target operating model design', 'Program roadmap & budgeting', 'Metrics & board reporting'],
    tools: ['NIST CSF', 'ISO 27001', 'CIS Controls', 'Risk quantification models', 'GRC platforms'],
    benefits: ['Gain clarity on investment priorities', 'Demonstrate measurable risk reduction', 'Create resilient governance structures'],
  },
]

