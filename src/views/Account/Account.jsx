import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Account.scss";

const Account = ({ user, setUser, couponCode }) => {
  const [credentials, setCredentials] = useState({});
  const { firstname, lastname, email } = user;

  const handleFocus = (e) => {
    setUser({ ...user, [e.target.name]: null });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, ...credentials });
    toast.success("Vos informations ont bien été modifiées", {
      position: "bottom-right",
    });
  };

  const handleCopyCode = (index) => {
    navigator.clipboard.writeText(couponCode[index].code);
    toast.success(`Le code ${couponCode[index].code} copié avec succès !`, {
      position: "bottom-right",
    });
  };

  return (
    <section id="account">
      <h1 className="page-title">L&B - Mon compte</h1>

      <div className="row">
        <form className="account-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              name="firstname"
              id="firstName"
              value={firstname}
              onChange={(e) => handleChange(e)}
              onFocus={(e) => handleFocus(e)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Nom</label>
            <input
              type="text"
              name="lastname"
              id="lastName"
              value={lastname}
              onChange={(e) => handleChange(e)}
              onFocus={(e) => handleFocus(e)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => handleChange(e)}
              onFocus={(e) => handleFocus(e)}
              required
            />
          </div>

          <input
            type="submit"
            className="yellow-button"
            value="Valider les informations"
          />
        </form>

        <div className="coupon-code-container">
          <h2 className="coupon-code-title">Mes codes promos</h2>
          {couponCode.map((coupon, index) =>
            coupon.isAlreadyUsed === false ? (
              <button
                className="coupon-code-text yellow-button"
                onClick={() => handleCopyCode(index)}
                key={coupon}
              >
                {coupon.code}
              </button>
            ) : null
          )}

          {couponCode.every((coupon) => coupon.isAlreadyUsed === true) && (
            <p className="coupon-nocode-text">
              Vous n'avez pas de code promo disponible
            </p>
          )}
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Account;
