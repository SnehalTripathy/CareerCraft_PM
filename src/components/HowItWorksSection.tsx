import { Upload, Zap, MessageSquare, Briefcase } from 'lucide-react';
import dashboardMockup from '@/assets/dashboard-mockup.jpg';

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload or build your resume",
      description: "Start with your existing resume or build a new one using our intelligent templates."
    },
    {
      number: "02", 
      icon: Zap,
      title: "Optimize for ATS with one click",
      description: "Our AI analyzes job descriptions and optimizes your resume for applicant tracking systems."
    },
    {
      number: "03",
      icon: MessageSquare,
      title: "Practice interviews with AI coach",
      description: "Simulate real interviews with personalized questions and receive instant feedback."
    },
    {
      number: "04",
      icon: Briefcase,
      title: "Get matched with jobs + apply",
      description: "Receive curated job recommendations and apply with confidence using your optimized materials."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and transform your job search with our streamlined process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="flex items-start space-x-6 animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-md">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-3">
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mr-4">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dashboard Mockup */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 blur-3xl transform scale-105"></div>
              <img 
                src={dashboardMockup}
                alt="CareerCraft Dashboard - Resume Optimizer Interface"
                className="relative w-full rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};