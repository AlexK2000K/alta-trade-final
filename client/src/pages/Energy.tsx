import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Zap, Sun, Cpu, Smartphone, Plane } from "lucide-react";

const Energy = () => {
  const { t } = useTranslation();

  const energyCategories = [
    {
      icon: <Battery className="w-8 h-8 text-blue-600" />,
      titleKey: "energy.batteries.title",
      descKey: "energy.batteries.description"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      titleKey: "energy.inverters.title", 
      descKey: "energy.inverters.description"
    },
    {
      icon: <Sun className="w-8 h-8 text-blue-600" />,
      titleKey: "energy.solarPanels.title",
      descKey: "energy.solarPanels.description"
    },
    {
      icon: <Battery className="w-8 h-8 text-blue-600" />,
      titleKey: "energy.portablePower.title",
      descKey: "energy.portablePower.description"
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      titleKey: "energy.computerEquipment.title",
      descKey: "energy.computerEquipment.description"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      titleKey: "energy.homeAppliances.title",
      descKey: "energy.homeAppliances.description"
    },
    {
      icon: <Plane className="w-8 h-8 text-blue-600" />,
      titleKey: "energy.quadcopters.title",
      descKey: "energy.quadcopters.description"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {t("energy.title")}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t("energy.subtitle")}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {energyCategories.map((category, index) => (
            <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">
                  {t(category.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
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
              {t("energy.cta.title")}
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t("energy.cta.description")}
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {t("energy.cta.button")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energy;