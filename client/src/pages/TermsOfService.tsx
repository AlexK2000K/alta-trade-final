import { useTranslation } from 'react-i18next';

export default function TermsOfService() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t('termsOfService.title')}
          </h1>
          
          <div className="text-sm text-gray-500 mb-8">
            {t('termsOfService.lastUpdated')}: {t('termsOfService.date')}
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('termsOfService.acceptance.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('termsOfService.acceptance.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('termsOfService.services.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('termsOfService.services.description')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>{t('termsOfService.services.supplyChain')}</li>
                <li>{t('termsOfService.services.procurement')}</li>
                <li>{t('termsOfService.services.documentation')}</li>
                <li>{t('termsOfService.services.consultation')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('termsOfService.eligibility.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('termsOfService.eligibility.description')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>{t('termsOfService.eligibility.businessOnly')}</li>
                <li>{t('termsOfService.eligibility.legalEntity')}</li>
                <li>{t('termsOfService.eligibility.authority')}</li>
                <li>{t('termsOfService.eligibility.compliance')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('termsOfService.userObligations.title')}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {t('termsOfService.userObligations.description')}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>{t('termsOfService.userObligations.accurateInfo')}</li>
                  <li>{t('termsOfService.userObligations.legalCompliance')}</li>
                  <li>{t('termsOfService.userObligations.payment')}</li>
                  <li>{t('termsOfService.userObligations.communication')}</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('termsOfService.payment.title')}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {t('termsOfService.payment.description')}
                </p>
                <div className="bg-navy-50 p-6 rounded-lg">
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>{t('termsOfService.payment.terms')}</li>
                    <li>{t('termsOfService.payment.banking')}</li>
                    <li>{t('termsOfService.payment.currency')}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('termsOfService.limitations.title')}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {t('termsOfService.limitations.description')}
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('termsOfService.limitations.disclaimer')}
                  </h4>
                  <p className="text-gray-600">
                    {t('termsOfService.limitations.disclaimerText')}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('termsOfService.intellectual.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('termsOfService.intellectual.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('termsOfService.confidentiality.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('termsOfService.confidentiality.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('termsOfService.termination.title')}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {t('termsOfService.termination.description')}
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>{t('termsOfService.termination.breach')}</li>
                  <li>{t('termsOfService.termination.nonPayment')}</li>
                  <li>{t('termsOfService.termination.illegal')}</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('termsOfService.governing.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('termsOfService.governing.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('termsOfService.modifications.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('termsOfService.modifications.description')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('termsOfService.contact.title')}
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  {t('termsOfService.contact.description')}
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