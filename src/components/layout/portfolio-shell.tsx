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
        <main className="relative min-h-screen bg-[radial-gradient(circle_at_top_left,_#2a0d10_0%,_transparent_30%),radial-gradient(circle_at_top_right,_#17090d_0%,_transparent_25%),linear-gradient(135deg,_#14090a_0%,_#0b0b0f_55%,_#050507_100%)] text-zinc-100">
            <ParticlesBg />

            <div className="relative z-10 grid h-full grid-cols-1 gap-4 p-4 lg:grid-cols-[320px_1fr_80px] xl:grid-cols-[400px_1fr_100px] lg:h-screen lg:p-6 lg:overflow-hidden">
                
                <aside className="hidden lg:block h-full">
                    <ProfileSidebar />
                </aside>

                <section className="center-scroll h-full overflow-y-auto overflow-x-hidden lg:pr-4 lg:snap-y lg:snap-mandatory scroll-smooth">
                    <div className="lg:hidden w-full mb-6">
                        <ProfileSidebar />
                    </div>
                    
                    <div className="flex flex-col gap-0">
                        <HeroSection />
                        <ProjectsSection />
                        <ExperienceSection/>
                        <AboutSection />
                        <ContactSection />
                    </div>
                </section>

                <aside className="hidden lg:flex items-center justify-center h-full">
                    <RightNavbar />
                </aside>
            </div>

            <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center lg:hidden">
                <RightNavbar mobile />
            </div>
        </main>
    );
}