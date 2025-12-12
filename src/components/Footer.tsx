import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold neon-text text-primary">
            ArabFunded
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            {t('footer.rights')}
          </p>

          {/* Social Links Placeholder */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
              <span className="text-muted-foreground text-lg">𝕏</span>
            </div>
            <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
              <span className="text-muted-foreground text-lg">in</span>
            </div>
            <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
              <span className="text-muted-foreground text-lg">📷</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
