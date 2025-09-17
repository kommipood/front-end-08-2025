import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import english from "../assets/united-kingdom.png"
import estonian from "../assets/estonia.png"

function Menu() {
  const { t, i18n } = useTranslation();
  // return <h1>{t('Welcome to React')}</h1>

  function changeLangEN() {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  }

  function changeLangET() {
    i18n.changeLanguage("et");
    localStorage.setItem("language", "et");
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/cart">{t("menu.cart")}</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("menu.shops")}</Nav.Link>
        
          </Nav>
          <Nav>
          
            <Nav.Link as={Link} to="/contact">{t("menu.contact")}</Nav.Link>
            <Nav.Link as={Link} to="/login">{t("menu.login")}</Nav.Link>
            <Nav.Link as={Link} to="/signup">{t("menu.signup")}</Nav.Link>
            <img className="icon" onClick={changeLangEN} src={english} alt=""></img>
            <img className="icon" onClick={changeLangET} src={estonian} alt=""></img>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;