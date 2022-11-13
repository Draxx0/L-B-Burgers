import "./Auth.scss";
import logo from "../../assets/img/logo-2x.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ setUser, setIsAuth }) => {
  const [credentials, setCredentials] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(credentials);
    setIsAuth(true);
    navigate("/home");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    localStorage.setItem("credentials", JSON.stringify(credentials));
  };
  return (
    <div className="auth">
      <form action="" className="auth-form" onSubmit={(e) => handleSubmit(e)}>
        <img src={logo} alt="" className="logo" />
        <div className="form-group">
          <label className="input-label">Votre prénom</label>
          <input
            type="text"
            name="firstname"
            className="input-auth"
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label className="input-label">Votre Nom</label>
          <input
            type="text"
            name="lastname"
            className="input-auth"
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <input type="submit" value="GO !" />
      </form>
    </div>
  );
};

export default Auth;
