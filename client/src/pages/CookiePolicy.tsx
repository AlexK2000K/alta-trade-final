import { useTranslation } from 'react-i18next';

export default function CookiePolicy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t('cookiePolicy.title')}
          </h1>
          
          <div className="text-sm text-gray-500 mb-8">
            {t('cookiePolicy.lastUpdated')}: {t('cookiePolicy.date')}
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('cookiePolicy.whatAreCookies.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('cookiePolicy.whatAreCookies.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('cookiePolicy.howWeUseCookies.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('cookiePolicy.howWeUseCookies.description')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>{t('cookiePolicy.howWeUseCookies.functionality')}</li>
                <li>{t('cookiePolicy.howWeUseCookies.preferences')}</li>
                <li>{t('cookiePolicy.howWeUseCookies.security')}</li>
                <li>{t('cookiePolicy.howWeUseCookies.analytics')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('cookiePolicy.typesOfCookies.title')}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {t('cookiePolicy.typesOfCookies.essential.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('cookiePolicy.typesOfCookies.essential.description')}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {t('cookiePolicy.typesOfCookies.functional.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('cookiePolicy.typesOfCookies.functional.description')}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {t('cookiePolicy.typesOfCookies.analytics.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('cookiePolicy.typesOfCookies.analytics.description')}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('cookiePolicy.managingCookies.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('cookiePolicy.managingCookies.description')}
              </p>
              <div className="bg-navy-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t('cookiePolicy.managingCookies.browserSettings')}
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Chrome: Settings → Privacy and Security → Cookies</li>
                  <li>Firefox: Settings → Privacy & Security → Cookies</li>
                  <li>Safari: Preferences → Privacy → Cookies</li>
                  <li>Edge: Settings → Privacy → Cookies</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('cookiePolicy.thirdPartyCookies.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('cookiePolicy.thirdPartyCookies.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('cookiePolicy.updates.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('cookiePolicy.updates.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('cookiePolicy.contact.title')}
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  {t('cookiePolicy.contact.description')}
                </p>
                <div className="space-y-2">
                  <p className="text-gray-900">
                    <strong>Alta Trade Ltd.</strong>
                  </p>
                  <p className="text-gray-600">
                    Email: kazmirchuk.o.life@gmail.com
                  </p>
                  <p className="text-gray-600">
                    Phone: +1 204 430 9931
                  </p>
                  <p className="text-gray-600">
                    Address: Burrard Building, 1111 - 1030 West Georgia, Vancouver, BC, V6E-2Y3, Canada
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}