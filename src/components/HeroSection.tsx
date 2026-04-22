import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechStack from "./TechStack";
import profileImage from "/me.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div className="absolute -top-20 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="hero-bg rounded-[2rem] shadow-2xl border border-primary/20 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-10 items-center px-8 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
            <div className="space-y-8 animate-fade-in text-white">
              {/* <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-medium tracking-wide">
                Welcome to my portfolio
              </div> */}

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  I am Danyal 
                  <span className="mt-2 block text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-100">
                    Software Developer
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-blue-50/90 max-w-xl leading-relaxed">
                  Building scalable web experiences that turn ideas into impactful digital products.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-blue-50 px-8 py-6 text-base font-semibold"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Start a project
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/60 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base font-semibold"
                >
                  <a href="#projects">
                    Explore Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end animate-slide-in-up">
              <div className="absolute h-72 w-72 sm:h-80 sm:w-80 rounded-full bg-white/20 blur-2xl"></div>
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl bg-white/95 p-2 shadow-2xl border border-white/70">
                <div className="w-full h-full rounded-[1.25rem] overflow-hidden bg-secondary">
                  <img
                    src={profileImage}
                    alt="Danyal Sarwar - Software Developer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="h-12 sm:h-14 bg-white/95 [clip-path:ellipse(75%_100%_at_50%_0%)]"></div>
        </div>

        <div className="mt-14">
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
