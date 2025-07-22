import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Factory, Cpu, Package, Sprout, Zap, Shirt, Home, Car } from 'lucide-react';

export default function Industries() {
  const { t } = useTranslation();

  const industries = [
    { icon: <Factory className="text-navy-800 text-2xl" />, name: "Manufacturing", description: "Raw materials, components, and finished goods", link: null },
    { icon: <Cpu className="text-navy-800 text-2xl" />, name: "Technology", description: "Electronics, software, and IT equipment", link: null },
    { icon: <Package className="text-navy-800 text-2xl" />, name: "Logistics & Transportation", description: "Shipping, freight forwarding, and supply chain solutions", link: null },
    { icon: <Sprout className="text-navy-800 text-2xl" />, name: "Agriculture", description: "Food products and agricultural commodities", link: null },
    { icon: <Zap className="text-navy-800 text-2xl" />, name: "Energy", description: "Renewable energy and power solutions", link: "/energy" },
    { icon: <Shirt className="text-navy-800 text-2xl" />, name: "Textiles", description: "Apparel, fabrics, and fashion accessories", link: null },
    { icon: <Home className="text-navy-800 text-2xl" />, name: "Construction", description: "Building materials and construction equipment", link: null },
    { icon: <Car className="text-navy-800 text-2xl" />, name: "Automotive", description: "Vehicle parts and automotive accessories", link: "/vehicles" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('industries.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('industries.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="h-full">
              {industry.link ? (
                <Link href={industry.link}>
                  <Card className="bg-white text-center transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:scale-105 cursor-pointer hover:bg-blue-50 border-2 hover:border-blue-200">
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 bg-navy-100 hover:bg-blue-200">
                        {industry.icon}
                      </div>
                      <h3 className="font-semibold mb-2 transition-colors duration-300 text-gray-900 hover:text-blue-700">
                        {industry.name}
                        <span className="ml-1 text-blue-600">→</span>
                      </h3>
                      <p className="text-sm text-gray-600 flex-1">{industry.description}</p>
                      <div className="mt-3">
                        <span className="text-xs text-blue-600 font-medium">{t('industries.clickToExplore')}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <Card className="bg-white text-center transition-all duration-300 h-full flex flex-col hover:shadow-md">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-navy-100">
                      {industry.icon}
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-gray-600 flex-1">{industry.description}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
