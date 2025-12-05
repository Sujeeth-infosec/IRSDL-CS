"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Shield, Brain, Globe, TrendingUp } from "lucide-react";

const content = [
  {
    title: "Cyber Security (VAPT)",
    description:
      "Comprehensive Vulnerability Assessment and Penetration Testing services. Identify security weaknesses before attackers do. Our expert team conducts thorough security assessments to protect your digital infrastructure and ensure compliance with industry standards.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] text-white p-8">
        <Shield className="w-16 h-16 mb-4" />
        <h3 className="text-xl font-bold">Cyber Security</h3>
        <p className="text-center text-sm mt-2">VAPT & Security Audits</p>
      </div>
    ),
  },
  {
    title: "AI/ML Development",
    description:
      "Cutting-edge Artificial Intelligence and Machine Learning solutions tailored for your business needs. From predictive analytics to intelligent automation, we develop AI systems that drive innovation and competitive advantage in your industry.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--cyan-500))] text-white p-8">
        <Brain className="w-16 h-16 mb-4" />
        <h3 className="text-xl font-bold">AI/ML Development</h3>
        <p className="text-center text-sm mt-2">Intelligent Solutions</p>
      </div>
    ),
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive, and secure web applications built with the latest technologies. From e-commerce platforms to enterprise solutions, we create scalable web applications that deliver exceptional user experiences and drive business growth.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--red-500))] text-white p-8">
        <Globe className="w-16 h-16 mb-4" />
        <h3 className="text-xl font-bold">Web Development</h3>
        <p className="text-center text-sm mt-2">Modern Web Solutions</p>
      </div>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic digital marketing campaigns that amplify your brand presence and drive measurable results. From SEO optimization to social media management, we help businesses reach their target audience and achieve sustainable growth in the digital landscape.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--violet-500))] text-white p-8">
        <TrendingUp className="w-16 h-16 mb-4" />
        <h3 className="text-xl font-bold">Digital Marketing</h3>
        <p className="text-center text-sm mt-2">Growth & Analytics</p>
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}