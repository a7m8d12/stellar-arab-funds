import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const subject = encodeURIComponent('Notify me - ArabFunded Launch');
      const body = encodeURIComponent(`Please notify me at this email: ${email}`);
      window.location.href = `mailto:arabfunded@gmail.com?subject=${subject}&body=${body}`;
      setEmail('');
    }
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">{t('hero.badge')}</span>
          </div>

          {/* Main Title */}
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="text-gradient neon-text">{t('hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            {t('hero.subtitle')}
          </p>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative flex-1">
              <Mail className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 ${isRTL ? 'right-4' : 'left-4'}`} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('hero.emailPlaceholder')}
                className={`w-full py-4 rounded-xl bg-card/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all duration-300 ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'}`}
                required
              />
            </div>
            <button
              type="submit"
              className="group px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 neon-box hover:scale-105"
            >
              <span>{t('hero.cta')}</span>
              <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Floating decorative cards */}
          <div className="mt-20 flex justify-center gap-8 opacity-50">
            <div className="w-16 h-16 rounded-lg glass-card animate-float" style={{ animationDelay: '0s' }} />
            <div className="w-12 h-12 rounded-lg glass-card animate-float" style={{ animationDelay: '0.5s' }} />
            <div className="w-20 h-20 rounded-lg glass-card animate-float" style={{ animationDelay: '1s' }} />
            <div className="w-14 h-14 rounded-lg glass-card animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
