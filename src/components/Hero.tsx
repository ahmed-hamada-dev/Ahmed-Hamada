"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import DownloadCVButton from "./DownloadCVButton";
import gsap from "gsap";
import TextType from "./TextType";
import StickerPeel from "./StickerPeel";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Advanced GSAP animations
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      sphereRef.current,
      { scale: 0, opacity: 0, filter: "blur(20px)" },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      },
    )
      .fromTo(
        [title1Ref.current, title2Ref.current],
        { y: 100, opacity: 0, skewY: 7 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.2, stagger: 0.1 },
        "-=1",
      )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8",
      )
      .fromTo(
        ctaRef.current?.children || [],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
        "-=0.6",
      );

    // Continuous floating animation for the snowball
    gsap.to(sphereRef.current, {
      y: 20,
      rotation: 5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Mouse movement interaction for the sphere
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(sphereRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden "
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-snow-glow/20 via-transparent to-background -z-10"
        style={{ y }}
      />

      <motion.div
        ref={containerRef}
        className="container mx-auto px-4 flex flex-col items-center text-center relative z-10"
        style={{ y, opacity }}
      >
        {/* Interactive Badge Sticker */}
        <div className="absolute top-0 right-0 md:-top-10 md:-right-10 z-50 hidden lg:block scale-75 md:scale-100">
          <StickerPeel
            imageSrc="/premium-badge.png"
            width={180}
            rotate={-15}
            peelDirection={45}
            lightingIntensity={0.2}
          />
        </div>

        {/* The Snowball (Sphere) */}
        <motion.div
          ref={sphereRef}
          className="relative w-64 h-64 md:w-80 md:h-80 mb-12 group cursor-pointer"
        >
          {/* Main Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-snow-accent via-blue-400 to-purple-600 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700" />

          {/* Sphere Body */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-white/5 to-transparent backdrop-blur-md border border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.2)] overflow-hidden">
            {/* Internal Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
          </div>

          {/* Orbiting Rings */}
          <div className="absolute inset-[-10px] rounded-full border border-white/10 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-[-20px] rounded-full border border-dashed border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-[-30px] rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />

          {/* Floating Particles inside/around */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full blur-[1px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-blue-200 rounded-full blur-[1px] animate-pulse delay-700" />
          <div className="absolute top-1/2 right-10 w-1 h-1 bg-white rounded-full blur-[1px] animate-pulse delay-1000" />
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
          <span ref={title1Ref} className="inline-block text-foreground mr-4">
            AHMED
          </span>
          <span ref={title2Ref} className="inline-block text-snow-accent">
            HAMADA
          </span>
        </h1>

        <motion.p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10 font-medium leading-relaxed"
        >
          Crafting{" "}
          <TextType
            text={[
              "PREMIUM DIGITAL EXPERIENCES",
              "INTUITIVE INTERFACES",
              "SCALABLE ARCHITECTURES",
              "INTELLIGENT AI SYSTEMS",
            ]}
            className="text-snow-accent font-bold"
            typingSpeed={70}
            deletingSpeed={40}
            pauseDuration={2000}
            cursorClassName="text-snow-accent"
          />{" "}
          with
          <span className="text-foreground font-bold"> Next.js</span> &{" "}
          <span className="text-foreground font-bold">Artificial Intelligence</span>.
        </motion.p>

        <motion.div
          ref={ctaRef}
          className="flex flex-wrap gap-6 justify-center"
        >
          <Link href="#projects">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-bold bg-foreground text-background hover:scale-105 transition-transform"
            >
              EXPLORE WORK
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg font-bold border-2 hover:bg-foreground/5 transition-all"
            >
              GET IN TOUCH
            </Button>
          </Link>
          <DownloadCVButton />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-snow-accent to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
