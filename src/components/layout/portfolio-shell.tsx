"use client";

import ParticlesBackground from "./particles-bg";
import ProfileSidebar from "./profile-sidebar";
import RightNavbar from "./right-navbar";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import Particles from "@tsparticles/react";

export default function PortfolioShell() {
    return (
        <main className="relative h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_#2a0d10_0%,_transparent_30%),radial-gradient(circle_at_top_right,_#17090d_0%,_transparent_25%),linear-gradient(135deg,_#14090a_0%,_#0b0b0f_55%,_#050507_100%)] text-zinc-100">
            <Particles
                className="absolute inset-0 -z-10"
                options={{
                    fpsLimit: 60,
                    particles: {
                        number: { value: 15 },
                        links: { enable: false }, // ❌ obligatorio
                        move: { enable: true, speed: 0.3 },
                        size: { value: 2 },
                        opacity: { value: 0.3 },
                    },
                    detectRetina: false,
                }}
            />
            <div className="relative z-10 grid h-full grid-cols-1 gap-6 p-4 md:grid-cols-[300px_minmax(0,1fr)_100px] md:p-6">
                <aside className="h-auto md:h-[calc(100vh-48px)]">
                    <ProfileSidebar />
                </aside>

                <section className="center-scroll order-3 h-auto overflow-visible md:order-none md:h-[calc(100vh-48px)] md:overflow-y-auto md:overflow-x-hidden md:pr-2">
                    <div className="flex flex-col gap-12 pb-10">
                        <HeroSection />
                        <ProjectsSection />
                        <AboutSection />
                        <ContactSection />
                    </div>
                </section>

                <aside className="order-2 flex h-auto items-center justify-center md:order-none md:h-[calc(100vh-48px)]">
                    <RightNavbar />
                </aside>
            </div>
        </main>
    );
}