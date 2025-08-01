import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHelmet 
        title="Impressum - TEMPO Transport GmbH"
        description="Rechtliche Angaben und Impressum der TEMPO Transport GmbH für Logistik und Transportdienstleistungen."
        keywords="Impressum, Rechtliches, Kontaktdaten, TEMPO Transport GmbH"
      />
      <Header />
      
      <div className="corporate-container">
        <section className="banner-section">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Impressum
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Rechtliche Informationen über die TEMPO Transport GmbH
            </p>
          </div>
        </section>

        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-muted/20 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Firmeninformationen</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p><strong>Firmenname:</strong> TEMPO Transport GmbH</p>
                <p><strong>Geschäftsführer:</strong> Kaan Andre Gündüz</p>
                <p><strong>Anschrift:</strong> Lange Heide 15<br />
                   50374 Erftstadt</p>
                <p><strong>Telefon:</strong> +49 241 94223026</p>
                <p><strong>E-Mail:</strong> info@tempo-logistik.de</p>
                <p><strong>Handelsregister:</strong> HRB 110780</p>
                <p><strong>Registergericht:</strong> Amtsgericht Köln</p>
                <p><strong>USt-IdNr.:</strong> DE378729105</p>
              </div>
            </div>

            <div className="mt-12 bg-muted/20 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Haftungsausschluss</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">Inhalt des Onlineangebotes</h3>
                <p>
                  Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder 
                  Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich 
                  auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung 
                  der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger 
                  Informationen verursacht wurden, sind grundsätzlich ausgeschlossen.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Verweise und Links</h3>
                <p>
                  Bei direkten oder indirekten Verweisen auf fremde Internetseiten ("Links"), die außerhalb 
                  des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich 
                  in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch 
                  möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
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

export default Impressum;