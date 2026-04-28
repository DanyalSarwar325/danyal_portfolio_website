import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import project1Image from '@/assets/project-1.jpg';
import project2Image from '@/assets/project-2.jpg';
import project3Image from '@/assets/project-3.jpg';
import ImageCommefce from '@/assets/AICommerce.jpeg';
const ProjectsSection = () => {
  const projects = [
     {
      id: 1,
      title: 'RetailFlow-Garments Tracking System',
      description:
        'Built full-stack garment manufacturing ERP using Next.js 14, TypeScript, MongoDB, and Tailwind CSS. Implemented multi-department workflow tracking with barcode generation and inventory management. Developed automated payroll system with job costing and business reporting dashboards.',
      image: '/Proj_img.png',
      technologies: ['Next Js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://clothing-retail-system-rrbm.vercel.app/',
      githubUrl: '#',
    },
     {
      id: 6,
      title: 'AI Commerce ',
      description:
        'An Urdu Based E-commerce Platform for Homebased Sellers.',
      image: ImageCommefce,
      technologies: ['Python', 'FastAPI', 'Langchain', 'NextJs', 'MongoDB'],
      liveUrl: 'https://ai-commerce-frontend-ten.vercel.app',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description:
        'Scalable e-commerce solution with payment integration, admin dashboard, and inventory management system.',
      image: project2Image,
      technologies: ['Next.js', 'Stripe', 'Tailwind'],
      liveUrl: 'https://danyal-kid-store.vercel.app/',
      githubUrl: 'https://github.com/DanyalSarwar325/danyal_kidStore',
    },
    {
      id: 2,
      title: 'HealthCare Appointment System',
      description:
        'A full-stack web application built with NextJs. Features real-time updates, authentication, and responsive design.',
      image: '/Project_1.JPG',
      technologies: ['React', 'Node.js', 'MongoDB', 'NextJs'],
      liveUrl: 'https://health-care-appointment-system-jne5.vercel.app/',
      githubUrl: 'https://github.com/DanyalSarwar325/HealthCare_Appointment_System',
    },
   
    
   
    {
      id: 4,
      title: 'Events Gallery',
      description:
        'A web application to showcase events with features like RSVP, event details, and user authentication.',
      image: project3Image,
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      liveUrl: 'https://career-dynamics-case-study.vercel.app/',
      githubUrl: '#',
    },
   
  ];

  return (
    <section id="projects" className="py-20 hero-bg relative overflow-hidden">
      <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative z-10 text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-white/80 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A showcase of my recent work, featuring modern applications built with cutting-edge
            technologies and best practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="gradient-card border border-primary/40 hover:border-primary transition-smooth group overflow-hidden animate-slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden p-3 pb-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-smooth"></div>

                {/* Project Links Overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 w-8 p-0"
                      disabled={project.liveUrl === '#'}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 w-8 p-0"
                      disabled={project.githubUrl === '#'}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-primary/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {/* Live Demo */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full hover:bg-primary hover:text-primary-foreground"
                      disabled={project.liveUrl === '#'}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>

                  {/* GitHub Code */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full hover:bg-secondary"
                      disabled={project.githubUrl === '#'}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="relative z-10 text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-white/70 text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
