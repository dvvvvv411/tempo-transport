import { Calculator, Building, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";

const Ingenieurburo = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet 
        title="Metallbearbeitung - Marina Technik GmbH"
        description="Professionelle Metallbearbeitungsdienstleistungen und Montagelösungen. Schweißarbeiten, CNC-Bearbeitung, Blechbearbeitung und komplette Projektbetreuung."
        keywords="Metallbearbeitung, Schweißen, CNC-Bearbeitung, Montage, Blechbearbeitung, Stahlbau"
      />
      <Header />
      
      <div className="corporate-container">
        {/* Title Section */}
        <section className="banner-section">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Metallbearbeitung Marina Technik GmbH
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Professionelle Metallbearbeitungs- und Montagedienstleistungen für Ihr Unternehmen
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
                Schweißarbeiten
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Professionelle Schweißarbeiten für Industrie und Handwerk. 
                Alle gängigen Schweißverfahren nach höchsten Qualitätsstandards.
              </p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <Building />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                CNC-Bearbeitung
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Präzise CNC-Bearbeitung von Metallen und Werkstoffen. 
                Modernste Maschinen für höchste Genauigkeit und Oberflächenqualität.
              </p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <FileText />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Blechbearbeitung
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Professionelle Blechbearbeitung, Stanzen, Biegen und Formen. 
                Von Einzelstücken bis zur Serienfertigung mit modernster Technik.
              </p>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <Users />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Montage & Assembly
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Komplette Montage und Assemblierung von Metallkonstruktionen. 
                Fachgerechte Installation und Montage vor Ort beim Kunden.
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
              umfassenden Metallbearbeitungsdienstleistungen.
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