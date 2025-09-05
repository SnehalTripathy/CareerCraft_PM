import { FileText, Search, MessageSquare, Target } from 'lucide-react';

export const HighlightsBar = () => {
  const highlights = [
    {
      icon: FileText,
      title: "Resume Tailoring",
      description: "AI-powered personalization"
    },
    {
      icon: Search,
      title: "ATS Optimization", 
      description: "Beat applicant tracking systems"
    },
    {
      icon: MessageSquare,
      title: "Interview Simulator",
      description: "Practice with AI feedback"
    },
    {
      icon: Target,
      title: "Smart Job Matching",
      description: "ML-powered recommendations"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={highlight.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-110">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};