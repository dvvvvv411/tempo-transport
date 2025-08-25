import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="corporate-footer">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link to="/impressum" className="hover:text-primary transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-primary transition-colors">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:text-primary transition-colors">
              AGB
            </Link>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <div>© 2025 Marina Technik GmbH. Alle Rechte vorbehalten.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;