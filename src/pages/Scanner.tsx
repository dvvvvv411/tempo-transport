import { Scan } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";

const Scanner = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet 
        title="3D-Scanner Vermietung - artis GmbH"
        description="Derzeit nicht verfügbar aufgrund der Insolvenz. Professionelle 3D-Scanner-Technologie für präzise Vermessung und digitale Erfassung."
        keywords="3D-Scanner, Vermietung, Vermessung, Laserscan, Digitalisierung, 3D-Technik"
      />
      <Header />
      
      <div className="corporate-container">
        {/* Title Section */}
        <section className="banner-section">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              3D-Scanner Vermietung
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Professionelle 3D-Scanner-Technologie für präzise Vermessung und digitale Erfassung
            </p>
          </div>
        </section>

        {/* Scanner Models Table */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Verfügbare Scanner-Modelle
            </h2>
            
            <div className="bg-muted/30 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Modell
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Reichweite
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Genauigkeit
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Scan-Rate
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Besonderheiten
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Preis
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground border-b border-border">
                        Aktion
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-background">
                      <td colSpan={7} className="px-6 py-12 text-center border-b border-border">
                        <div className="flex flex-col items-center space-y-4">
                          <Scan className="w-12 h-12 text-muted-foreground" />
                          <p className="text-lg text-muted-foreground font-medium">
                            Nichts verfügbar
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
                  <Scan />
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Flexible Mietkonditionen
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Mieten Sie unsere professionellen 3D-Scanner tage-, wochen- oder monatsweise. 
                  Inklusive Einweisung und technischem Support.
                </p>
              </div>

              <div className="service-box">
                <div className="service-icon">
                  <Scan />
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  Service & Support
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Umfassende Betreuung von der Geräteauswahl bis zur Datenauswertung. 
                  Schulungen und technischer Support inklusive.
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