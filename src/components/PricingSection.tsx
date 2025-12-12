import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Sparkles } from 'lucide-react';

const PricingSection = () => {
  const { t, isRTL } = useLanguage();

  const plans = [
    { size: '$5,000', price: '$59', popular: false },
    { size: '$10,000', price: '$99', popular: false },
    { size: '$25,000', price: '$199', popular: true },
    { size: '$50,000', price: '$299', popular: false },
  ];

  const features = [
    { key: 'pricing.phase1Target', value: '8%' },
    { key: 'pricing.phase2Target', value: '5%' },
    { key: 'pricing.dailyLoss', value: '4%' },
    { key: 'pricing.totalLoss', value: '8%' },
    { key: 'pricing.duration', value: 'pricing.unlimited' },
    { key: 'pricing.minDays', value: 'pricing.days' },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          {t('pricing.title')}
        </h2>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.size}
              className={`relative group animate-slide-up ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-1 px-4 py-1 bg-primary rounded-full text-primary-foreground text-sm font-semibold neon-box">
                    <Sparkles className="w-4 h-4" />
                    <span>{isRTL ? 'الأكثر شعبية' : 'Most Popular'}</span>
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-primary/50 neon-box'
                    : 'hover:border-primary/30'
                }`}
              >
                {/* Account Size */}
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-primary mb-2">{plan.size}</h3>
                  <p className="text-muted-foreground text-sm">
                    {isRTL ? 'حجم الحساب' : 'Account Size'}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {features.map((feature) => (
                    <div key={feature.key} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="flex-1 text-sm">
                        <span className="text-foreground/80">{t(feature.key)}: </span>
                        <span className="text-foreground font-medium">
                          {feature.value.startsWith('pricing.')
                            ? t(feature.value)
                            : feature.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 neon-box'
                      : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {t('pricing.cta')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
