import "./Order.scss";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Order = ({
  basket,
  basketTotalPrice,
  setBasketTotalPrice,
  couponCode,
  setOrderRecap,
  orderRecap,
}) => {
  const [coupon, setCoupon] = useState("");
  const [credentials, setCredentials] = useState({});
  const orderRef = useRef(null);
  const navigate = useNavigate();

  const promoApply = () => {
    toast.success("Code promo appliqué !", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const promoError = () => {
    toast.error("Veuillez entrer un code promo !", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const promoInvalid = () => {
    toast.error("Code promo invalide !", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const promoAlreadyUsed = () => {
    toast.error("Code promo déjà utilisé", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      coupon === couponCode[0].code &&
      couponCode[0].isAlreadyUsed === false
    ) {
      setBasketTotalPrice(basketTotalPrice * 0.85);
      couponCode[0].isAlreadyUsed = true;
      promoApply();
      return;
    } else if (
      coupon === couponCode[1]?.code &&
      couponCode[1].isAlreadyUsed === false
    ) {
      setBasketTotalPrice(basketTotalPrice * 0.85);
      couponCode[1].isAlreadyUsed = true;
      promoApply();
      return;
    }

    if (coupon === "") {
      promoError();
      return;
    }

    if (
      coupon !== couponCode[0].code &&
      coupon !== couponCode[1]?.code &&
      coupon !== ""
    ) {
      promoInvalid();
      return;
    }

    if (couponCode[0].isAlreadyUsed === true && coupon === couponCode[0].code) {
      promoAlreadyUsed();
      return;
    }

    if (
      couponCode[1]?.isAlreadyUsed === true &&
      coupon === couponCode[1]?.code
    ) {
      promoAlreadyUsed();
      return;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleOrder = () => {
    setOrderRecap(credentials);
    navigate("/order-recap");
  };

  useEffect(() => {
    const element = orderRef.current;
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
      },
      duration: 1,
      opacity: 0,
      y: 70,
    });
  }, []);
  return (
    <>
      <section className="order" ref={orderRef}>
        <h2 className="page-title">Votre commande</h2>

        {basket.length === 0 ? (
          <div className="empty-basket">
            <p className="empty-text">Votre panier est vide</p>
            <Link to="/menus" className="yellow-button">
              Parcourir les menus
            </Link>
          </div>
        ) : (
          <>
            <div className="order-item-container">
              {basket.map((item) => (
                <div className="order-item" key={item.id}>
                  <div className="order-image-wrapper">
                    <img src={item.image} alt="" className="order-image" />
                  </div>
                  <div className="order-item-text column">
                    <span className="order-item-name">{item.name}</span>
                    <span className="order-item-price">
                      Prix à l'unité : {item.price} €
                    </span>
                    <span className="order-item-quantity">
                      Quantité(s) : {item.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-footer">
              <div className="left-footer">
                <h3 className="payment-title">Paiement</h3>
                <form action="" className="footer-form">
                  <div className="form-group">
                    <label htmlFor="" className="form-label">
                      Numéro de carte
                    </label>
                    <input
                      type="tel"
                      pattern="[0-9\s]{13,19}"
                      maxLength="19"
                      name="cardNumber"
                      inputMode="numeric"
                      placeholder="0000-0000-0000-0000"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="" className="form-label">
                      Date d'expiration
                    </label>
                    <input
                      type="tel"
                      name="cardExpi"
                      pattern="\d*"
                      maxLength="5"
                      onChange={(e) => handleChange(e)}
                      placeholder="MM/AA"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="" className="form-label">
                      Cryptogramme
                    </label>
                    <input
                      type="tel"
                      name="cardCrypto"
                      placeholder="***"
                      maxLength="3"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="" className="form-label">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      placeholder="Votre nom"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="right-footer">
                <div className="order-delivery">
                  <h3 className="order-delivery-title">Livraison</h3>
                  <form action="" className="footer-form">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Ville
                      </label>
                      <input
                        type="text"
                        name="deliveryCity"
                        placeholder="Votre ville"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Code postal
                      </label>
                      <input
                        type="number"
                        name="deliveryPostalCode"
                        placeholder="94300"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Addresse de livraison
                      </label>
                      <input
                        type="text"
                        name="deliveryAddress"
                        placeholder="44 rue de la paix"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Addresse de facturation
                      </label>
                      <input
                        type="text"
                        name="deliveryAddressFacturation"
                        placeholder="44 rue de la paix"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="order-total-price">
              <span className="order-total-price-title">
                Total à payer{" "}
                <span className="colored"> {basketTotalPrice.toFixed(2)} € </span>
              </span>
              <form
                action=""
                className="form-coupon"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="form-group">
                  <label htmlFor="">Vous posséder un code promo ?</label>
                  <input
                    type="text"
                    placeholder="Code promo"
                    className="input-coupon"
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                </div>
                <input type="submit" className="submit-coupon yellow-button" />
              </form>
            </div>

            <div className="order-button-container">
              <button
                to="/order-recap"
                className="order-button yellow-button"
                onClick={() => handleOrder()}
              >
                Procéder au paiment
              </button>
            </div>
          </>
        )}
      </section>
      <ToastContainer />
    </>
  );
};

export default Order;
