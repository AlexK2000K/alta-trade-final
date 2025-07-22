import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Globe, FileText, TrendingUp, Handshake, Shield } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Truck className="text-white text-xl" />,
      title: t('services.supplyChain.title'),
      description: t('services.supplyChain.description')
    },
    {
      icon: <Globe className="text-white text-xl" />,
      title: t('services.procurement.title'),
      description: t('services.procurement.description')
    },
    {
      icon: <FileText className="text-white text-xl" />,
      title: t('services.documentation.title'),
      description: t('services.documentation.description')
    },
    {
      icon: <TrendingUp className="text-white text-xl" />,
      title: t('services.analysis.title'),
      description: t('services.analysis.description')
    },
    {
      icon: <Handshake className="text-white text-xl" />,
      title: t('services.partnership.title'),
      description: t('services.partnership.description')
    },
    {
      icon: <Shield className="text-white text-xl" />,
      title: t('services.risk.title'),
      description: t('services.risk.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
