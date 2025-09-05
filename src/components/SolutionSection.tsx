import { Bot, FileText, MessageSquare, BarChart3, Target, TrendingUp } from 'lucide-react';

export const SolutionSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Smart Resume Tailor",
      description: "Instantly personalize resumes and cover letters for each role with AI-powered optimization.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Bot,
      title: "ATS Optimization",
      description: "Ensure resumes pass recruiter filters with intelligent keyword optimization and formatting.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageSquare,
      title: "AI Interview Simulator",
      description: "Practice interviews with real-time AI feedback and personalized improvement suggestions.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: BarChart3,
      title: "Skill & Gap Analysis",
      description: "Discover missing skills and get suggested courses to boost your employability.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Target,
      title: "Smart Job Matching",
      description: "Get personalized job recommendations powered by machine learning algorithms.",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: TrendingUp,
      title: "Continuous Career Coach",
      description: "Ongoing insights on career growth, trending roles, and in-demand skills in your field.",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet <span className="bg-gradient-primary bg-clip-text text-transparent">CareerCraft</span> – Your Smart Career Coach
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform provides everything you need to accelerate your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="bg-card p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};