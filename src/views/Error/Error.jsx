import "./Error.scss";
import Logo from "../../assets/img/logo-2x.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <img src={Logo} alt="" />
      <div className="container">
        <h1>Erreur 404</h1>
        <p>La page que vous recherchez n'existe pas</p>
        <div className="nav-column">
          <button className="yellow-button" onClick={() => navigate(-1)}>
            Revenir à la dernière page
          </button>

          <button className="yellow-button" onClick={() => navigate("/")}>
            Revenir à la page de connexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
