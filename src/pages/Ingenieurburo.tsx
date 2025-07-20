import { Calculator, Building, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";

const Ingenieurburo = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet 
        title="Transportlogistik - artis GmbH"
        description="Professionelle Transportdienstleistungen und Logistiklösungen. Effiziente Lieferketten, Speditionsservice und umfassende Projektbetreuung."
        keywords="Transportlogistik, Spedition, Lieferketten, Transport, Logistik, Frachtservice"
      />
      <Header />
      
      <div className="corporate-container">
        {/* Title Section */}
        <section className="banner-section">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Transportlogistik artis GmbH
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Professionelle Transportdienstleistungen und Logistiklösungen für Ihr Unternehmen
            </p>
          </div>
        </section>

        {/* Service Boxes Section */}
        <section className="py-20 px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="service-box">
              <div className="service-icon">
                <Calculator />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Speditionsservice
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Professioneller Transport von Waren und Gütern für Industrie und Handel. 
                Termingerechte Lieferungen nach höchsten Qualitätsstandards.
              </p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <Building />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Lieferkettenmanagement
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fachkundige Begleitung Ihrer Lieferketten von der Bestellung bis zur Zustellung. 
                Qualitätskontrolle und Koordination aller beteiligten Partner.
              </p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <FileText />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Lagerlogistik
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Professionelle Lagerverwaltung, Kommissionierung und Versandabwicklung. 
                Optimierte Lagerprozesse und moderne Warenwirtschaftssysteme.
              </p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <Users />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Logistikberatung
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Umfassende Logistikberatung für Unternehmen, Händler und Produzenten. 
                Optimierungsstudien und kosteneffiziente Transportlösungen.
              </p>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 px-8 bg-muted/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Weitere Informationen
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Laden Sie unsere Leistungsübersicht herunter und erfahren Sie mehr über unsere 
              umfassenden Logistikdienstleistungen.
            </p>
            <Link 
              to="/kontakt"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              Jetzt Beratung anfragen →
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Ingenieurburo;