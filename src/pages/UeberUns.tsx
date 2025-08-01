import { Users, Award, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import artisLogo from "@/assets/artis-logo.jpg";
import { SEOHelmet } from "@/components/SEOHelmet";

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet 
        title="Über uns - TEMPO Transport GmbH"
        description="Professionelle Logistik- und Transportdienstleistungen seit über 8 Jahren. TEMPO Transport GmbH - Ihr zuverlässiger Partner für effiziente Transportlösungen."
        keywords="Unternehmen, Team, Erfahrung, Logistik, Transportwesen, TEMPO Geschichte"
      />
      <Header />
      
      <div className="corporate-container">
        {/* Banner Section */}
        <section className="banner-section">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Über uns - TEMPO Transport GmbH
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Ihr zuverlässiger Partner für Logistik und Transport mit über 8 Jahren Erfahrung
            </p>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Unsere Geschichte
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Die TEMPO Transport GmbH wurde mit der Vision gegründet, erstklassige Logistikdienstleistungen 
                  und modernste Transporttechnik unter einem Dach zu vereinen. Seit unserer Gründung 
                  haben wir uns als zuverlässiger Partner für Industrie, Handel und Gewerbe etabliert.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Unser interdisziplinäres Team aus erfahrenen Logistikexperten und Transportprofis 
                  arbeitet täglich daran, innovative Lösungen für komplexe Transportaufgaben zu entwickeln und 
                  höchste Qualitätsstandards zu gewährleisten.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/0fa64624-3ffd-44f5-aaca-de67ea2081ee.png" 
                  alt="Logistik und Transport - LKW, Flugzeug und Pakete auf Weltkarte" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-8 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Unsere Werte
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="service-box">
                <div className="service-icon">
                  <Award />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Qualität & Präzision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Höchste Qualitätsstandards und millimetergenaue Präzision sind die Grundlage 
                  unserer Arbeit. Jedes Projekt wird mit größter Sorgfalt und nach neuesten 
                  technischen Standards durchgeführt.
                </p>
              </div>

              <div className="service-box">
                <div className="service-icon">
                  <Users />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Partnerschaftliche Zusammenarbeit
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wir verstehen uns als Partner unserer Kunden und arbeiten eng mit allen 
                  Projektbeteiligten zusammen. Transparente Kommunikation und verlässliche 
                  Betreuung stehen im Mittelpunkt unserer Arbeitsweise.
                </p>
              </div>

              <div className="service-box">
                <div className="service-icon">
                  <Calendar />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Termintreue & Zuverlässigkeit
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pünktliche Lieferung und Einhaltung vereinbarter Termine sind für uns 
                  selbstverständlich. Unsere Kunden können sich auf unsere Zusagen verlassen 
                  und termingerecht planen.
                </p>
              </div>

              <div className="service-box">
                <div className="service-icon">
                  <MapPin />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Regionale Verbundenheit
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Als regional verwurzeltes Unternehmen kennen wir die örtlichen Gegebenheiten 
                  und Besonderheiten. Diese Ortskenntnisse fließen in unsere Planungen ein und 
                  ermöglichen optimale Lösungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Lernen Sie uns kennen
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie mehr über unser 
              Unternehmen erfahren? Nehmen Sie gerne Kontakt mit uns auf.
            </p>
            <Link 
              to="/kontakt"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              Kontakt aufnehmen →
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default UeberUns;