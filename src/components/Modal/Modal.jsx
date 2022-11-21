import "./Modal.scss";
import Close from "../../assets/img/close.png";
import Meat from "../../assets/img/meat-icon.png";
import Bread from "../../assets/img/bread-icon.png";
import Cheese from "../../assets/img/cheese-icon.png";
import Sauce from "../../assets/img/sauce-icon.png";

const Modal = ({ burger, isOpen, setIsOpen }) => {
  return (
    <div className={isOpen ? "modal active" : "modal"} key={burger?.id}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-title">Détails</span>
          <img
            src={Close}
            alt=""
            className="modal-close"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div className="modal-body">
          <img src={burger?.image} alt="" className="modal-img" />
          <div className="modal-text column">
            <span className="modal-name">{burger?.name}</span>
            {burger?.ingredients.map((ingredient) => (
              <ul
                className="modal-ingredients-list"
                key={ingredient?.ingredientsId}
              >
                <li className="modal-ingredients">
                  <img src={Bread} alt="" />
                  <span className="bold">Pain : </span> {ingredient?.bread}
                </li>

                <li className="modal-ingredients">
                  <img src={Meat} alt="" />{" "}
                  <span className="bold">Viande / Poisson : </span>
                  {ingredient?.meat}
                </li>

                <li className="modal-ingredients">
                  <img src={Cheese} alt="" />
                  <span className="bold">Fromage : </span> {ingredient?.cheese}
                </li>

                <li className="modal-ingredients">
                  <img src={Sauce} alt="" />
                  <span className="bold">Sauce : </span> {ingredient?.sauce}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
