import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Building } from 'lucide-react';

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Freemium",
      icon: Star,
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for getting started with AI career tools",
      features: [
        "Basic resume builder",
        "1 interview simulation per month", 
        "Basic ATS optimization",
        "Limited job matching",
        "Community support"
      ],
      buttonText: "Get Started Free",
      popular: false,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "Premium",
      icon: Zap,
      price: { monthly: 9.99, yearly: 99.99 },
      description: "Complete AI-powered career acceleration",
      features: [
        "Unlimited resume tailoring",
        "Unlimited interview simulations",
        "Advanced ATS optimization",
        "Smart job matching",
        "Skill gap analysis",
        "Cover letter generator",
        "Priority support",
        "Career insights & trends"
      ],
      buttonText: "Start Free Trial",
      popular: true,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "Enterprise",
      icon: Building,
      price: { monthly: "Custom", yearly: "Custom" },
      description: "For universities and companies",
      features: [
        "Everything in Premium",
        "Bulk user management",
        "Custom branding",
        "Advanced analytics",
        "SSO integration",
        "Dedicated account manager",
        "Custom training sessions",
        "API access"
      ],
      buttonText: "Contact Sales",
      popular: false,
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your career goals. Start free, upgrade when you're ready.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-card p-2 rounded-lg shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                !isYearly 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                isYearly 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = typeof plan.price[isYearly ? 'yearly' : 'monthly'] === 'number' 
              ? plan.price[isYearly ? 'yearly' : 'monthly']
              : plan.price[isYearly ? 'yearly' : 'monthly'];

            return (
              <div 
                key={plan.name}
                className={`relative bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in ${
                  plan.popular ? 'ring-2 ring-primary shadow-glow scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-14 h-14 bg-gradient-to-r ${plan.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center mb-2">
                      {typeof price === 'number' ? (
                        <>
                          <span className="text-4xl font-bold text-card-foreground">
                            ${price}
                          </span>
                          <span className="text-muted-foreground ml-2">
                            /{isYearly ? 'year' : 'month'}
                          </span>
                        </>
                      ) : (
                        <span className="text-4xl font-bold text-card-foreground">
                          {price}
                        </span>
                      )}
                    </div>
                    {isYearly && typeof price === 'number' && plan.name === 'Premium' && (
                      <p className="text-sm text-muted-foreground">
                        ${(price / 12).toFixed(2)}/month billed annually
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:shadow-glow' 
                        : 'bg-secondary hover:bg-secondary/80'
                    } transition-all duration-300`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <Button variant="outline" className="hover:bg-primary/5">
            Compare All Features
          </Button>
        </div>
      </div>
    </section>
  );
};