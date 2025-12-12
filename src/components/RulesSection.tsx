import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Target, 
  TrendingDown, 
  Clock, 
  Calendar, 
  Ban, 
  Bot, 
  Users, 
  UserX, 
  AlertTriangle 
} from 'lucide-react';

const RulesSection = () => {
  const { t } = useLanguage();

  const rules = [
    { key: 'rules.rule1', icon: Target, type: 'info' },
    { key: 'rules.rule2', icon: Target, type: 'info' },
    { key: 'rules.rule3', icon: TrendingDown, type: 'warning' },
    { key: 'rules.rule4', icon: TrendingDown, type: 'warning' },
    { key: 'rules.rule5', icon: Clock, type: 'success' },
    { key: 'rules.rule6', icon: Calendar, type: 'info' },
    { key: 'rules.rule7', icon: Ban, type: 'danger' },
    { key: 'rules.rule8', icon: Bot, type: 'danger' },
    { key: 'rules.rule9', icon: Users, type: 'danger' },
    { key: 'rules.rule10', icon: UserX, type: 'danger' },
    { key: 'rules.rule11', icon: AlertTriangle, type: 'danger' },
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'info':
        return 'border-blue-500/30 bg-blue-500/5';
      case 'warning':
        return 'border-amber-500/30 bg-amber-500/5';
      case 'success':
        return 'border-emerald-500/30 bg-emerald-500/5';
      case 'danger':
        return 'border-red-500/30 bg-red-500/5';
      default:
        return 'border-border/50 bg-card/50';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'info':
        return 'text-blue-400';
      case 'warning':
        return 'text-amber-400';
      case 'success':
        return 'text-emerald-400';
      case 'danger':
        return 'text-red-400';
      default:
        return 'text-primary';
    }
  };

  return (
    <section id="rules" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          {t('rules.title')}
        </h2>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <div
                key={rule.key}
                className={`group rounded-xl p-4 border backdrop-blur-sm transition-all duration-300 hover:scale-102 hover:border-primary/50 animate-slide-up ${getTypeStyles(rule.type)}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg bg-background/50 ${getIconColor(rule.type)}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-foreground/90 text-sm leading-relaxed pt-1">
                    {t(rule.key)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
