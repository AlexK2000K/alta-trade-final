import { useTranslation } from 'react-i18next';
import { Check, Users, Clock, DollarSign } from 'lucide-react';

export default function WhyUs() {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: <Check className="text-white" />,
      title: "Proven Expertise",
      description: "Years of experience in international trade with deep understanding of global markets and regulations."
    },
    {
      icon: <Users className="text-white" />,
      title: "Trusted Network",
      description: "Extensive network of verified suppliers, manufacturers, and logistics partners worldwide."
    },
    {
      icon: <Clock className="text-white" />,
      title: "Timely Delivery",
      description: "Commitment to meeting deadlines with efficient project management and clear communication."
    },
    {
      icon: <DollarSign className="text-white" />,
      title: "Cost Optimization",
      description: "Strategic sourcing and negotiation to deliver maximum value and competitive pricing."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('whyUs.title')}
          </h1>
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
    </div>
  );
}
