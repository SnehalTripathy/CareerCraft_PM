import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-light/10"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-light/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Join thousands of successful job seekers</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Land Your Dream Job Faster with{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              CareerCraft
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
            Stop letting opportunities slip away. Transform your job search today with AI-powered tools that actually work.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in delay-500">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-10 py-4 h-auto animate-glow-pulse"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:border-primary hover:bg-primary/5 text-lg px-10 py-4 h-auto transition-all duration-300"
            >
              Upgrade to Premium
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in delay-700">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                14 Days
              </div>
              <p className="text-muted-foreground text-sm">
                Free trial, no credit card required
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <p className="text-muted-foreground text-sm">
                Resumes optimized and counting
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                4.9/5
              </div>
              <p className="text-muted-foreground text-sm">
                Average user rating
              </p>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-muted-foreground text-sm animate-fade-in delay-900">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Your data is secure and encrypted</span>
          </div>
        </div>
      </div>
    </section>
  );
};