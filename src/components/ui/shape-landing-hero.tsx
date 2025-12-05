"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NoiseBackground } from "@/components/ui/noise-background";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-gray-200/[0.3]",
                        "shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-screen flex items-center justify-center overflow-hidden bg-white -ml-4 -mr-4 md:-ml-6 md:-mr-6" style={{ margin: '0 -100vw', padding: 0, width: '100vw', maxWidth: 'none', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.03] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 w-full px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-8 md:mb-12"
                    >
                        <Circle className="h-2 w-2 fill-rose-500/80" />
                        <span className="text-sm text-gray-600 tracking-wide">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-700">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            IRSDL brings Security to your fingertips & streamline tasks.
                            Protecting your digital assets with advanced cybersecurity solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <NoiseBackground
                            containerClassName="w-fit p-1 rounded-full"
                            gradientColors={[
                                "rgb(59, 130, 246)",
                                "rgb(147, 51, 234)",
                                "rgb(236, 72, 153)",
                            ]}
                        >
                            <a
                                href="/contact"
                                className="flex items-center gap-2 cursor-pointer rounded-full bg-gradient-to-r from-neutral-100 via-neutral-100 to-white px-6 py-3 text-black shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)_inset,0px_0.5px_1px_0px_rgba(0,0,0,0.4)] transition-all duration-100 hover:scale-105 active:scale-95 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_rgba(255,255,255,0.1)_inset,0px_1px_0px_0px_rgba(255,255,255,0.2)] font-semibold"
                            >
                                Get In Touch
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </NoiseBackground>

                        <NoiseBackground
                            containerClassName="w-fit p-1 rounded-full"
                            gradientColors={[
                                "rgb(34, 197, 94)",
                                "rgb(59, 130, 246)",
                                "rgb(168, 85, 247)",
                            ]}
                        >
                            <a
                                href="/services"
                                className="flex items-center gap-2 cursor-pointer rounded-full bg-gradient-to-r from-neutral-100 via-neutral-100 to-white px-6 py-3 text-black shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)_inset,0px_0.5px_1px_0px_rgba(0,0,0,0.4)] transition-all duration-100 hover:scale-105 active:scale-95 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_rgba(255,255,255,0.1)_inset,0px_1px_0px_0px_rgba(255,255,255,0.2)] font-semibold"
                            >
                                View Services
                            </a>
                        </NoiseBackground>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }