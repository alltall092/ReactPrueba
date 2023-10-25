import './footer.css';
// hola

const Footer = () => {
    return (
      <footer className="footer">
      <div className="footer-content">
        <div className="row">
          <div className="col-md-4">
        <div className="footer-logo">
          <img src="./logo/logo.png" alt="Logo de la Compañía" height="170"  width="350"/>
        </div>
        </div>
        <div className="col-md-8">
        <ul className="footer-list">
  <li>
    <i className="fas fa-code"></i> Desarrollo Web
  </li>
  <li>
    <i className="fas fa-laptop"></i> Front-end y Back-end
  </li>
  <li>
    <i className="fas fa-globe"></i> Diseño Responsivo
  </li>
  <li>
    <i className="fas fa-desktop"></i> Aplicaciones Web
  </li>
  <li>
    <i className="fas fa-cogs"></i> Optimización de Rendimiento
  </li>
</ul>



        </div>
        </div>
        <ul className="footer-list">
          <li>
            <i className="fas fa-user"></i> Julio Alberto Perez
          </li>
          <li>
            <i className="fas fa-envelope"></i> piyoyo279@gmail.com
          </li>
          <li>
            <i className="fas fa-globe"></i> República Dominicana
          </li>
          <li>
            <i className="fas fa-flag"></i> Dominicano
          </li>
          <li>
            <i className="fas fa-phone"></i> +1 829-804-6401
          </li>
        </ul>
      </div>
      <div className="footer-social">
        <a href="#" className="fab fa-facebook"></a>
        <a href="#" className="fas fa-envelope"></a>
        <a href="#" className="fab fa-instagram"></a>

      </div>
    </footer>
    );
  }
  export default Footer;