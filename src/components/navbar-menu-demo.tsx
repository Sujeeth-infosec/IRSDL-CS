"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/pentest/web">Web Pentest</HoveredLink>
            <HoveredLink href="/pentest/api">API Pentest</HoveredLink>
            <HoveredLink href="/pentest/mobile">Mobile Pentest</HoveredLink>
            <HoveredLink href="/pentest/cloud">Cloud Pentest</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Training">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Web Security"
              href="/training/web-api-mobile"
              src="/IRSDL-LOGO.png"
              description="Learn web application security testing"
            />
            <ProductItem
              title="Ethical Hacking"
              href="/training/ethical-hacking"
              src="/IRSDL-LOGO.png"
              description="Complete ethical hacking course"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">Company</HoveredLink>
            <HoveredLink href="/careers">Careers</HoveredLink>
            <HoveredLink href="/contact">Contact</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}