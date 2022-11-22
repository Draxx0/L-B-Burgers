import "./OrderRecap.scss";

const OrderRecap = ({ orderRecap, basketTotalPrice, basket }) => {
  const {
    cardNumber,
    cardName,
    cardExpi,
    cardCrypto,
    deliveryAddress,
    deliveryAddressFacturation,
    deliveryCity,
  } = orderRecap;
  return (
    <section id="order-recap">
      <h1 className="page-title">Récapitulatif de commande</h1>

      <div className="order-recap-container">
        <div className="burger-recap">
          {basket.map((burger) => (
            <div className="burger-recap-item" key={burger.id}>
              <div className="burger-recap-item-img-wrapper">
                <img
                  src={burger.image}
                  alt=""
                  className="burger-recap-item-img"
                />
              </div>
              <div className="burger-recap-item-text column">
                <span className="burger-recap-item-name">{burger.name}</span>
                <span className="burger-recap-item-price">
                  Prix à l'unité : {burger.price} €
                </span>
                <span className="burger-recap-item-quantity">
                  Quantité(s) : {burger.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="order-recap">
          <div className="order-recap-item">
            <div className="order-recap-item-text column">
              <span className="order-card-number">
                Numéro de la carte :
                <span className="colored"> {cardNumber}</span>
              </span>

              <span className="order-card-number">
                Date d'expiration de le carte :
                <span className="colored"> {cardExpi}</span>
              </span>
              <span className="order-card-number">
                Cryptogramme de la carte :
                <span className="colored"> {cardCrypto}</span>
              </span>
              <span className="order-card-name">
                Nom de la carte : <span className="colored"> {cardName}</span>
              </span>
            </div>

            <div className="delivery-recap-item">
              <div className="delivery-recap-item-text column">
                <span className="delivery-recap-item-address">
                  Adresse de livraison :
                  <span className="colored"> {deliveryAddress}</span>
                </span>
                <span className="delivery-recap-item-address">
                  Addresse de facturation :
                  <span className="colored"> {deliveryAddressFacturation}</span>
                </span>
                <span className="delivery-recap-item-city">
                  Ville de livraison :
                  <span className="colored"> {deliveryCity}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-recap-total-price">
          <span className="order-recap-total-price-text">
            Prix total de la commande :
            <span className="colored"> {basketTotalPrice} €</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default OrderRecap;
