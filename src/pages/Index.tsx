import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-foreground">Danyal Sarwar</h3>
              <p className="text-muted-foreground">Software Developer</p>
            </div>
            <div className="text-muted-foreground text-center md:text-right">
              <p>&copy; 2025 Danyal Sarwar. All rights reserved.</p>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;