"use client";

import RightNavbar from "./right-navbar";
import TopNavbar from "./top-navbar";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import ExperienceSection from "@/components/sections/experience-section";

export default function PortfolioShell() {
    return (
        <main className="relative flex flex-col min-h-screen lg:h-screen lg:overflow-hidden bg-[radial-gradient(circle_at_top_left,#2a0d10_0%,transparent_30%),radial-gradient(circle_at_top_right,#17090d_0%,transparent_25%),linear-gradient(135deg,#14090a_0%,#0b0b0f_55%,#050507_100%)] text-zinc-100">

            <section
                className="center-scroll flex-1 overflow-y-auto overflow-x-hidden scroll-smooth lg:snap-y lg:snap-proximity"
                style={{ willChange: "scroll-position" }}
            >
                <TopNavbar />
                <div className="mx-auto w-full max-w-5xl px-6 pb-6 flex flex-col">
                    <HeroSection />
                    <ProjectsSection />
                    <ExperienceSection />
                    <AboutSection />
                    <ContactSection />
                </div>
            </section>

            <div className="fixed left-0 right-0 z-50 flex justify-center lg:hidden" style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}>
                <RightNavbar mobile />
            </div>
        </main>
    );
}
