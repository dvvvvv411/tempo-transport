import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export const SEOHelmet = ({ 
  title = "Marina Technik GmbH - Die Montage und Metallbearbeitung aller Art",
  description = "Marina Technik GmbH bietet professionelle Metallbearbeitung und Montagedienstleistungen: Schweißarbeiten, CNC-Bearbeitung, Blechbearbeitung und komplette Montage.",
  keywords = "Metallbearbeitung, Montage, Schweißen, CNC-Bearbeitung, Blechbearbeitung, Stahlbau, Marina Technik GmbH",
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