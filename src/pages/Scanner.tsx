import { Truck } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";

const Scanner = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet 
        title="Fuhrpark-Management - TEMPO Transport GmbH"
        description="Professionelle Fuhrpark-Services für Ihre Transportanforderungen. Moderne Fahrzeugflotte für effiziente Logistiklösungen."
        keywords="Fuhrpark, Fahrzeugflotte, Transport, LKW, Logistik, Spedition"
      />
      <Header />
      
      <div className="corporate-container">
        {/* Title Section */}
        <section className="banner-section">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Fuhrpark-Management
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Professionelle Fuhrpark-Services für Ihre Transportanforderungen und Logistiklösungen
            </p>
          </div>
        </section>

        {/* Scanner Models Table */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Verfügbare Fahrzeuge
            </h2>
            
            <div className="bg-muted/30 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Fahrzeugtyp
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Zuladung
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Laderaum
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Kraftstoff
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Besonderheiten
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Preis
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Verfügbarkeit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-background">
                      <td colSpan={7} className="px-6 py-12 text-center border-b border-border">
                        <div className="flex flex-col items-center space-y-4">
                          <Truck className="w-12 h-12 text-muted-foreground" />
                          <p className="text-lg text-muted-foreground font-medium">
                            Derzeit keine Fahrzeuge verfügbar
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 px-8 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="service-box">
                <div className="service-icon">
                  <Truck />
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Flexible Fahrzeugmiete
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Mieten Sie unsere professionellen Transportfahrzeuge tage-, wochen- oder monatsweise. 
                  Inklusive Einweisung und technischem Support.
                </p>
              </div>

              <div className="service-box">
                <div className="service-icon">
                  <Truck />
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Service & Wartung
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Umfassende Betreuung von der Fahrzeugauswahl bis zur Rückgabe. 
                  Wartung und technischer Support inklusive.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Scanner;