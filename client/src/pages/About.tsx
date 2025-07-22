import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=700" 
              alt="International shipping containers and trade operations" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          
          <div className="lg:pl-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h1>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-600">
                {t('about.description')}
              </p>
              <div className="bg-navy-800 text-white p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Key Operating Principles:</h4>
                <p className="text-blue-100">
                  {t('about.mission')}
                </p>
              </div>
              <p className="text-gray-600">
                {t('about.vision')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
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
    </div>
  );
}
