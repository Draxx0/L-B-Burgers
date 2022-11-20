import "./Error.scss";
import Logo from "../../assets/img/logo-2x.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="error">
      <img src={Logo} alt="" />
      <div className="container">
        <h1>Erreur 404</h1>
        <p>La page que vous recherchez n'existe pas</p>
        <button className="yellow-button" onClick={() => handleClick()}>
          Revenir à la dernière page
        </button>
      </div>
    </div>
  );
};

export default Error;
