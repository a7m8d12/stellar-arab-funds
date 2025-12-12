import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:arabfunded@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          {t('contact.title')}
        </h2>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <label className="block text-sm font-medium text-foreground/80 mb-2">
                {t('contact.name')}
              </label>
              <div className="relative">
                <User className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 ${isRTL ? 'right-4' : 'left-4'}`} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full py-4 rounded-xl bg-card/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all duration-300 ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'}`}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <label className="block text-sm font-medium text-foreground/80 mb-2">
                {t('contact.email')}
              </label>
              <div className="relative">
                <Mail className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 ${isRTL ? 'right-4' : 'left-4'}`} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full py-4 rounded-xl bg-card/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all duration-300 ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'}`}
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <label className="block text-sm font-medium text-foreground/80 mb-2">
                {t('contact.message')}
              </label>
              <div className="relative">
                <MessageSquare className={`absolute top-4 text-muted-foreground w-5 h-5 ${isRTL ? 'right-4' : 'left-4'}`} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full py-4 rounded-xl bg-card/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all duration-300 resize-none ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'}`}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 neon-box hover:scale-[1.02] animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              <span>{t('contact.send')}</span>
              <Send className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
