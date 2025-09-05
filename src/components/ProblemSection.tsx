import { AlertTriangle, FileX, Clock } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      icon: FileX,
      title: "Writing resumes that stand out",
      description: "Generic templates don't showcase your unique value proposition to employers."
    },
    {
      icon: AlertTriangle,
      title: "Passing ATS filters",
      description: "Applicant tracking systems reject qualified candidates due to poor formatting."
    },
    {
      icon: Clock,
      title: "Preparing confidently for interviews",
      description: "Limited practice opportunities lead to missed opportunities and failed interviews."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Challenges Job Seekers Face
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern job searching is more complex than ever. Let's address the real problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={problem.title}
                className="text-center p-6 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Stat */}
        <div className="text-center bg-gradient-card p-8 rounded-2xl shadow-lg animate-scale-in">
          <div className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            75%
          </div>
          <p className="text-lg text-foreground font-medium mb-2">
            of resumes never reach recruiters due to ATS filters
          </p>
          <p className="text-muted-foreground">
            Don't let technology be the barrier to your dream job
          </p>
        </div>
      </div>
    </section>
  );
};