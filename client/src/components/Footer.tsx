import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Linkedin } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Alta Trade Ltd." 
                className="h-12 w-auto filter brightness-0 invert"
              />
              <div className="text-xl font-bold">
                <span className="text-white">Alta</span>
                <span className="text-blue-300"> Trade</span>
                <span className="text-sm font-normal text-gray-400 ml-1">Ltd.</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/alta-trade-ltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href="/"><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">{t('navigation.home')}</span></Link></li>
              <li><Link href="/about"><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">{t('navigation.about')}</span></Link></li>
              <li><Link href="/services"><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">{t('navigation.services')}</span></Link></li>
              <li><Link href="/industries"><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">{t('navigation.industries')}</span></Link></li>
              <li><Link href="/contact"><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">{t('navigation.contact')}</span></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('services.supplyChain.title')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('services.procurement.title')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('services.documentation.title')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('services.analysis.title')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors whitespace-nowrap">{t('footer.privacy')}</a>
            <Link href="/terms-of-service">
              <span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer whitespace-nowrap">{t('footer.terms')}</span>
            </Link>
            <Link href="/cookie-policy">
              <span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer whitespace-nowrap">{t('footer.cookies')}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
