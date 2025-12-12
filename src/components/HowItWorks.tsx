import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, TrendingUp, Award, Wallet, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const { t, isRTL } = useLanguage();

  const steps = [
    { key: 'howItWorks.step1', icon: Target, color: 'from-purple-500 to-violet-600' },
    { key: 'howItWorks.step2', icon: TrendingUp, color: 'from-violet-500 to-indigo-600' },
    { key: 'howItWorks.step3', icon: CheckCircle2, color: 'from-indigo-500 to-blue-600' },
    { key: 'howItWorks.step4', icon: Award, color: 'from-blue-500 to-cyan-600' },
    { key: 'howItWorks.step5', icon: Wallet, color: 'from-cyan-500 to-teal-600' },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          {t('howItWorks.title')}
        </h2>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.key}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connector Line (hidden on mobile and for last item) */}
                {index < steps.length - 1 && (
                  <div
                    className={`hidden md:block absolute top-12 h-0.5 w-full bg-gradient-to-r from-primary/50 to-primary/20 ${
                      isRTL ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'
                    }`}
                    style={{ zIndex: 0 }}
                  />
                )}

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 text-center relative z-10 hover:scale-105 transition-all duration-300 h-full group-hover:border-primary/50">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center neon-box">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mt-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-semibold text-foreground leading-relaxed">
                    {t(step.key)}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
