import "./Footer.scss";
import { React } from "react";
import Logo from "../../../images/logo text.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  function handleTermsClick() {
    navigate("/terms");
  }
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (

    <footer className='footer'>
        <div className="footer-components">
          <img className="footer-flex" src={Logo}></img>
          <div className="terms-block">
            <span onClick={handleTermsClick}>{t("Terms And Conditions")}</span>
          </div>
        </div>
    </footer>
  )
}

export default Footer;