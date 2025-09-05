import { CheckCircle, Sparkles, Users, BarChart } from 'lucide-react';

export const CompetitiveAdvantageSection = () => {
  const advantages = [
    {
      icon: Sparkles,
      title: "All-in-One AI Platform",
      description: "Resume optimization, interview simulation, and job matching integrated seamlessly in one powerful platform."
    },
    {
      icon: BarChart,
      title: "Personalized AI Insights", 
      description: "Advanced machine learning algorithms provide tailored recommendations based on your unique career profile and goals."
    },
    {
      icon: Users,
      title: "Scalable SaaS Solution",
      description: "Built for individuals, teams, and enterprises with flexible pricing and enterprise-grade security."
    }
  ];

  const features = [
    "AI-powered resume and interview integration",
    "Advanced ATS optimization technology", 
    "Real-time job market insights",
    "Personalized career growth recommendations",
    "Enterprise-ready with SSO and analytics",
    "Continuous learning from market trends",
    "Industry-specific customization",
    "24/7 AI-powered career coaching"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">CareerCraft</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another career tool. We're your intelligent career companion, built for the modern job market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Key Advantages */}
          <div className="space-y-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div 
                  key={advantage.title}
                  className="flex items-start space-x-4 animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Feature Checklist */}
          <div className="bg-gradient-card p-8 rounded-2xl shadow-lg animate-scale-in">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Complete Career Acceleration
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={feature}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    3x
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Faster job placement
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    95%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ATS pass rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};