"use client";

import ParticlesBg from "./particles-bg";
import ProfileSidebar from "./profile-sidebar";
import RightNavbar from "./right-navbar";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import ExperienceSection from "@/components/sections/experience-section";

export default function PortfolioShell() {
    return (
        <main className="relative h-screen overflow-auto md:overflow-hidden bg-[radial-gradient(circle_at_top_left,_#2a0d10_0%,_transparent_30%),radial-gradient(circle_at_top_right,_#17090d_0%,_transparent_25%),linear-gradient(135deg,_#14090a_0%,_#0b0b0f_55%,_#050507_100%)] text-zinc-100 md:h-screen md:overflow-hidden">
            <ParticlesBg />

            <div className="relative z-10 grid h-full grid-cols-1 gap-6 p-4 md:grid-cols-[400px_minmax(0,1fr)_100px] md:p-6">
                <aside className="order-1 h-auto md:order-none md:h-[calc(100vh-48px)]">
                    <ProfileSidebar />
                </aside>

                <section className="center-scroll order-3 h-auto overflow-visible md:order-none md:h-[calc(100vh-48px)] md:overflow-y-auto md:overflow-x-hidden md:pr-2 md:snap-y md:snap-mandatory">
                    <div className="flex flex-col gap-0">
                        <HeroSection />
                        <ProjectsSection />
                        <ExperienceSection/>
                        <AboutSection />
                        <ContactSection />
                    </div>
                </section>

                <aside className="hidden md:flex items-center justify-center md:h-[calc(100vh-48px)]">
                    <RightNavbar />
                </aside>
            </div>
            <div className="fixed bottom-0 left-0 right-0 z-50 flex h-30 items-center justify-around md:hidden">
                <RightNavbar mobile />
            </div>
        </main>
    );
}