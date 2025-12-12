import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.howItWorks': 'كيف تعمل المنصة',
    'nav.pricing': 'الأسعار',
    'nav.rules': 'القواعد',
    'nav.contact': 'تواصل معنا',
    
    // Hero
    'hero.badge': 'قريباً – Coming Soon',
    'hero.title': 'ArabFunded',
    'hero.subtitle': 'منصة حسابات ممولة للمتداولين في الشرق الأوسط. الإطلاق الرسمي قريباً.',
    'hero.emailPlaceholder': 'أدخل بريدك الإلكتروني',
    'hero.cta': 'أعلمني عند الإطلاق',
    'hero.success': 'شكراً! سنعلمك عند الإطلاق',
    
    // How it works
    'howItWorks.title': 'كيف تعمل المنصة؟',
    'howItWorks.step1': 'اختر التحدي',
    'howItWorks.step2': 'اجتز المرحلة الأولى (8%)',
    'howItWorks.step3': 'اجتز المرحلة الثانية (5%)',
    'howItWorks.step4': 'احصل على حساب ممول',
    'howItWorks.step5': 'اسحب أرباحك أسبوعياً',
    
    // Pricing
    'pricing.title': 'اختر حجم حسابك',
    'pricing.phase1Target': 'هدف المرحلة الأولى',
    'pricing.phase2Target': 'هدف المرحلة الثانية',
    'pricing.dailyLoss': 'الحد الأقصى للخسارة اليومية',
    'pricing.totalLoss': 'الحد الأقصى للخسارة الكلية',
    'pricing.duration': 'مدة التحدي',
    'pricing.unlimited': 'غير محدودة',
    'pricing.minDays': 'الحد الأدنى لاجتياز كل مرحلة',
    'pricing.days': '3 أيام',
    'pricing.cta': 'ابدأ التحدي',
    
    // Rules
    'rules.title': 'قوانين ArabFunded',
    'rules.rule1': 'هدف المرحلة 1 هو 8%',
    'rules.rule2': 'هدف المرحلة 2 هو 5%',
    'rules.rule3': 'الحد الأقصى للخسارة اليومية 4%',
    'rules.rule4': 'الحد الأقصى للخسارة الكلية 8%',
    'rules.rule5': 'مدة التحدي غير محدودة',
    'rules.rule6': 'لا يمكنك اجتياز أي مرحلة قبل 3 أيام',
    'rules.rule7': 'ممنوع القمار أو التداول العشوائي',
    'rules.rule8': 'ممنوع استخدام روبوتات التداول بدون موافقة',
    'rules.rule9': 'ممنوع مشاركة الحساب',
    'rules.rule10': 'ممنوع اجتياز حساب شخص آخر',
    'rules.rule11': 'ممنوع التداول في الحساب الممول بطريقة تخالف القوانين',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال',
    'contact.success': 'تم إرسال رسالتك بنجاح!',
    
    // Footer
    'footer.rights': '© ArabFunded – جميع الحقوق محفوظة',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.howItWorks': 'How It Works',
    'nav.pricing': 'Pricing',
    'nav.rules': 'Rules',
    'nav.contact': 'Contact Us',
    
    // Hero
    'hero.badge': 'Coming Soon',
    'hero.title': 'ArabFunded',
    'hero.subtitle': 'A funded account platform for traders in the Middle East. Official launch coming soon.',
    'hero.emailPlaceholder': 'Enter your email',
    'hero.cta': 'Notify Me at Launch',
    'hero.success': 'Thank you! We\'ll notify you at launch',
    
    // How it works
    'howItWorks.title': 'How It Works?',
    'howItWorks.step1': 'Choose Your Challenge',
    'howItWorks.step2': 'Pass Phase 1 (8%)',
    'howItWorks.step3': 'Pass Phase 2 (5%)',
    'howItWorks.step4': 'Get Your Funded Account',
    'howItWorks.step5': 'Withdraw Profits Weekly',
    
    // Pricing
    'pricing.title': 'Choose Your Account Size',
    'pricing.phase1Target': 'Phase 1 Target',
    'pricing.phase2Target': 'Phase 2 Target',
    'pricing.dailyLoss': 'Max Daily Loss',
    'pricing.totalLoss': 'Max Total Loss',
    'pricing.duration': 'Challenge Duration',
    'pricing.unlimited': 'Unlimited',
    'pricing.minDays': 'Minimum Days Per Phase',
    'pricing.days': '3 Days',
    'pricing.cta': 'Start Challenge',
    
    // Rules
    'rules.title': 'ArabFunded Rules',
    'rules.rule1': 'Phase 1 target is 8%',
    'rules.rule2': 'Phase 2 target is 5%',
    'rules.rule3': 'Maximum daily loss is 4%',
    'rules.rule4': 'Maximum total loss is 8%',
    'rules.rule5': 'Challenge duration is unlimited',
    'rules.rule6': 'Minimum 3 days to pass each phase',
    'rules.rule7': 'No gambling or random trading',
    'rules.rule8': 'No trading bots without approval',
    'rules.rule9': 'No account sharing',
    'rules.rule10': 'No passing someone else\'s account',
    'rules.rule11': 'No trading in funded account against rules',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.success': 'Your message has been sent successfully!',
    
    // Footer
    'footer.rights': '© ArabFunded – All Rights Reserved',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
