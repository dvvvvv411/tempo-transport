import { Calculator, Building, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet 
        title="Marina Technik GmbH - Die Montage und Metallbearbeitung aller Art"
        description="Ihr zuverlässiger Partner für professionelle Metallbearbeitung und Montagedienstleistungen. Schweißarbeiten, CNC-Bearbeitung, Blechbearbeitung und komplette Montage."
        keywords="Metallbearbeitung, Montage, Schweißen, CNC-Bearbeitung, Blechbearbeitung, Stahlbau, Marina Technik GmbH"
      />
      <Header />
      
      <div className="corporate-container">
        {/* Banner Section */}
        <section className="banner-section">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Willkommen bei Marina Technik GmbH
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Ihr zuverlässiger Partner für die Montage und Metallbearbeitung aller Art
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
                Metallbearbeitung
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Professionelle Metallbearbeitung und Schweißarbeiten für Ihr Unternehmen. 
                Von der ersten Anfrage bis zur erfolgreichen Montage.
              </p>
              <Link 
                to="/ingenieurburo"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                Mehr erfahren →
              </Link>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <Building />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                CNC-Bearbeitung
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Moderne CNC-Technologie und präzise Fertigung. Hochwertige Metallbearbeitung 
                und maßgenaue Bauteile für maximale Qualität.
              </p>
              <Link 
                to="/3d-scanner"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                Zu den Services →
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-8 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Unsere Leistungen im Überblick
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calculator className="text-primary-foreground w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Metallbearbeitung</h3>
                <p className="text-muted-foreground">
                  Professionelle Schweißarbeiten und Metallbearbeitung
                </p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building className="text-primary-foreground w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">CNC-Bearbeitung</h3>
                <p className="text-muted-foreground">
                  Moderne CNC-Technologie für präzise Bauteile
                </p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Wrench className="text-primary-foreground w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Montage</h3>
                <p className="text-muted-foreground">
                  Komplette Montage von der Planung bis zur Umsetzung
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

export default Index;