import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    
    // Safe localStorage access
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLang);
      }
    } catch (error) {
      console.warn('Unable to save language preference:', error);
    }
    
    // Update document direction and lang attribute
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
    
    // Reload the page to apply RTL changes properly
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-[#416D50] text-[#416D50] hover:bg-[#416D50] hover:text-white transition-all duration-200"
      aria-label="Toggle language"
      style={{ fontSize: '14px' }}
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">
        {i18n.language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
}
