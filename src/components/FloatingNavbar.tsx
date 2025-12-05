import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconShield,
  IconInfoCircle,
  IconSchool,
  IconBriefcase,
  IconMail,
} from "@tabler/icons-react";

export default function FloatingNavbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Services",
      icon: (
        <IconShield className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/services",
    },
    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Training",
      icon: (
        <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/training",
    },
    {
      title: "Careers",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/careers",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock
        items={links}
        desktopClassName="bg-slate-800/90 backdrop-blur-md border border-slate-700/50"
        mobileClassName="bg-slate-800/90 backdrop-blur-md"
      />
    </div>
  );
}