import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export const SEOHelmet = ({ 
  title = "TEMPO Transport GmbH - Ihr Partner für professionelle Logistikdienstleistungen",
  description = "TEMPO Transport GmbH bietet umfassende Logistikdienstleistungen: Transportlogistik, Fuhrpark-Management sowie professionelle Beratung für Ihr Unternehmen.",
  keywords = "Logistik, Transport, Spedition, Fuhrpark, Lagerlogistik, Transportdienstleistungen, TEMPO Transport GmbH",
  canonical
}: SEOHelmetProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};