import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechStack from "./TechStack";
import profileImage from "@/assets/profile-hero.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen hero-bg flex items-center relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-lg text-primary font-medium">Hello.</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                I'm Danyal Sarwar
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient-accent bg-gradient-to-r from-primary to-primary/70 bg-clip-text">
                Software Developer
              </h2>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              I create innovative digital solutions with clean code and modern
              design. Specializing in full-stack development and user
              experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-accent hover-glow transition-smooth px-8 py-6 text-lg font-semibold"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="mr-2 h-5 w-5" />
                Got a project?
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-6 text-lg font-semibold"
              >
                <a href="/my_resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  My Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative flex justify-center animate-slide-in-up">
            {/* Orange accent circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-primary to-primary/70 opacity-20 animate-glow-pulse"></div>
            </div>

            {/* Profile image */}
            <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="/me.png"
                alt="Jensen Omega - Software Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
