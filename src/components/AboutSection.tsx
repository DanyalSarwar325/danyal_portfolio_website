import { Award, Code, Globe, Server, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Creating responsive, modern websites with cutting-edge technologies and optimized performance.',
    },
    {
      icon: Code,
      title: 'Machine Learning',
      description: 'Building intelligent applications using machine learning algorithms and data analysis.',
    }
    // {
    //   icon: Server,
    //   title: 'Website Hosting',
    //   description: 'Reliable hosting solutions with 99.9% uptime, security, and performance optimization.',
    // },
  ];

  const stats = [
    {
      number: '5+',
      label: 'Completed Projects',
      icon: Award,
    },
    {
      number: '95%',
      label: 'Client Satisfaction',
      icon: Users,
    },
    {
      number: '2+',
      label: 'Years of Experience',
      icon: Calendar,
    },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text & Services */}
          <div className="space-y-12 animate-fade-in">
            {/* About Me */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About me
              </h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Software Developer and Software Engineering undergraduate with experience in building responsive, scalable web applications using the MERN stack and Next.js. Passionate about creating clean, user-focused solutions and continuously learning new technologies.
              </p>
             
            </div>

            {/* Services */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className="gradient-card border-border hover:border-primary/30 transition-smooth group animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8 animate-slide-in-up">
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label} 
                  className="gradient-card border-border hover:border-primary/30 transition-smooth group text-center p-8 animate-bounce-in"
                  style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-smooth">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold text-gradient-accent">
                      {stat.number}
                    </div>
                    <div className="text-lg font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Skills Progress Bars */}
            <Card className="gradient-card border-border p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-foreground">
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { skill: 'Frontend Development', percentage: 90 },
                  { skill: 'Backend Development', percentage: 95 },
                  { skill: 'Machine Learning', percentage: 85 },
                  
                ].map((item, index) => (
                  <div key={item.skill} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{item.skill}</span>
                      <span className="text-primary font-semibold">{item.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full gradient-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${item.percentage}%`,
                          animationDelay: `${index * 0.2}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;