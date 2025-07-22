import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Wrench } from "lucide-react";

const Vehicles = () => {
  const { t } = useTranslation();

  const vehicleCategories = [
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      titleKey: "vehicles.carsAndVans.title",
      descKey: "vehicles.carsAndVans.description"
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      titleKey: "vehicles.carParts.title", 
      descKey: "vehicles.carParts.description"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {t("vehicles.title")}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t("vehicles.subtitle")}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {vehicleCategories.map((category, index) => (
            <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {t(category.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-center">
                  {t(category.descKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              {t("vehicles.cta.title")}
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t("vehicles.cta.description")}
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {t("vehicles.cta.button")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;