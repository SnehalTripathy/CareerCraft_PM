import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { HighlightsBar } from '@/components/HighlightsBar';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { PricingSection } from '@/components/PricingSection';
import { CompetitiveAdvantageSection } from '@/components/CompetitiveAdvantageSection';
import { CallToActionSection } from '@/components/CallToActionSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Quick Highlights Bar */}
      <HighlightsBar />
      
      {/* Problem Section */}
      <ProblemSection />
      
      {/* Solution Section */}
      <SolutionSection />
      
      {/* How It Works */}
      <HowItWorksSection />
      
      {/* Pricing */}
      <PricingSection />
      
      {/* Competitive Advantage */}
      <CompetitiveAdvantageSection />
      
      {/* Call to Action */}
      <CallToActionSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
