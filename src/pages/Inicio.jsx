import { Link } from "react-router-dom";
import FeatureItem from "../components/FeatureItem";

const Inicio = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">
            ESTILO URBANO <br />{" "}
            <span className="highlight-text">REDEFINIDO</span>
          </h2>
          <p className="hero-subtitle">
            Descubre nuestra colección exclusiva de ropa urbana minimalista
          </p>
          <Link to="/Products" className="btn-primary">
            EXPLORAR COLECCIÓN
          </Link>
        </div>
      </section>

      <section className="features-section">
        <div className="features-grid">
          <FeatureItem
            iconClass="fi fi-rr-magic-wand"
            title="DISEÑO ÚNICO"
            text="Piezas exclusivas con estética urbana y minimalista"
          />
          <FeatureItem
            iconClass="fi fi-rr-checkbox"
            title="CALIDAD PREMIUM"
            text="Materiales de alta calidad para máxima durabilidad"
          />
          <FeatureItem
            iconClass="fi fi-rr-shipping-fast"
            title="ENVÍO RÁPIDO"
            text="Entrega express en 24-48 horas"
          />
        </div>
      </section>
    </div>
  );
};

export default Inicio;
