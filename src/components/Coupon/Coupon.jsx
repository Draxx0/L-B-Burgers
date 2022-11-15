import "./Coupon.scss";
import Close from "../../assets/img/close.png";
import { toast, ToastContainer } from "react-toastify";
const CouponCode = ({ user, isHomeLoaded, setIsHomeLoaded }) => {
  const { firstname } = user;
  const handleClick = () => {
    navigator.clipboard.writeText("L&B-536489");
    toast.success("Code copié avec succès !");
  };
  return (
    <div className={isHomeLoaded ? "coupon-code active-coupon" : "coupon-code"}>
      <div className="coupon-code-wrapper">
        <img
          src={Close}
          alt=""
          className="close-coupon"
          onClick={() => setIsHomeLoaded(false)}
        />
        <div className="coupon-code-header">
          <h2 className="coupon-code-title">
            Un code promo pour vous{" "}
            <span className="colored">{firstname} 🎉</span>
          </h2>

          <p className="coupon-code-text">
            Bonjour ! C'est la première fois que vous commander sur L&B Burgers
            ? Super, j'ai un code pour vous afin de vous{" "}
            <span className="colored bold">économiser 15%</span> sur votre
            première commande ! Veuillez cliquer sur le code afin de le copié.
          </p>

          <div className="coupon-code-code">
            <span
              className="coupon-code-code-text"
              onClick={() => handleClick()}
            >
              L&B-536489
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CouponCode;
