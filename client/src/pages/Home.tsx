import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Globe, FileText, TrendingUp, Handshake, Shield, Factory, Cpu, Package, Sprout, Zap, Shirt, Home as HomeIcon, Car, Check, Users, Clock, DollarSign } from 'lucide-react';

export default function Home() {
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

  const industries = [
    { icon: <Factory className="text-navy-800 text-2xl" />, name: "Manufacturing", description: "Raw materials, components, and finished goods" },
    { icon: <Cpu className="text-navy-800 text-2xl" />, name: "Technology", description: "Electronics, software, and IT equipment" },
    { icon: <Package className="text-navy-800 text-2xl" />, name: "Logistics & Transportation", description: "Shipping, freight forwarding, and supply chain solutions" },
    { icon: <Sprout className="text-navy-800 text-2xl" />, name: "Agriculture", description: "Food products and agricultural commodities" },
    { icon: <Zap className="text-navy-800 text-2xl" />, name: "Energy", description: "Renewable energy and power solutions" },
    { icon: <Shirt className="text-navy-800 text-2xl" />, name: "Textiles", description: "Apparel, fabrics, and fashion accessories" },
    { icon: <HomeIcon className="text-navy-800 text-2xl" />, name: "Construction", description: "Building materials and construction equipment" },
    { icon: <Car className="text-navy-800 text-2xl" />, name: "Automotive", description: "Vehicle parts and automotive accessories" }
  ];

  const advantages = [
    {
      icon: <Check className="text-white" />,
      title: t('whyUs.advantages.expertise.title'),
      description: t('whyUs.advantages.expertise.description')
    },
    {
      icon: <Users className="text-white" />,
      title: t('whyUs.advantages.network.title'),
      description: t('whyUs.advantages.network.description')
    },
    {
      icon: <Clock className="text-white" />,
      title: t('whyUs.advantages.delivery.title'),
      description: t('whyUs.advantages.delivery.description')
    },
    {
      icon: <DollarSign className="text-white" />,
      title: t('whyUs.advantages.optimization.title'),
      description: t('whyUs.advantages.optimization.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-800 to-navy-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-[0px] pb-[0px]">
          <div className="text-center">
            <div className="max-w-5xl mx-auto mb-8">
              <div className="bg-gradient-to-br from-white via-blue-50 to-navy-50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-navy-200 shadow-xl hover:shadow-2xl transition-all duration-300 pl-[50px] pr-[50px] mt-[23px] mb-[23px]">
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-navy-900 font-medium text-center tracking-wide">
                  {t('hero.subtitle')}
                </p>
              </div>
            </div>
            
            
            
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-16 bg-white pt-[6px] pb-[6px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
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
      </section>
      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('industries.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('industries.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-white text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Why Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('whyUs.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('whyUs.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-800 rounded-lg flex items-center justify-center">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:pl-8">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=700" 
                alt="Professional business team meeting" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>
      {/* Company Information Section */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.companyInfo.title')}
            </h2>
            <p className="text-lg text-navy-700 font-medium mb-6">
              {t('about.companyInfo.subtitle')}
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              {t('about.companyInfo.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=700" 
                alt="International shipping containers and trade operations" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
            
            <div className="lg:pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('about.title')}
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  {t('about.description')}
                </p>
                <div className="bg-navy-800 text-white p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">Key Operating Principles:</h4>
                  <p className="text-blue-100">
                    {t('about.mission')}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-800 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-800 mb-2">25+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-800 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-800 mb-2">$200M+</div>
                  <div className="text-sm text-gray-600">Trade Volume</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
