import Shop from "../../components/Shop/Shop";
import HomeHamburger from "../../assets/img/home-hb.png";
import Star from "../../assets/img/star.png";
import Rank from "../../assets/img/rank.png";
import "./Home.scss";

const Home = ({ menus, isShopActive, setIsShopActive }) => {
  console.log(menus);
  return (
    <>
      <Shop isShopActive={isShopActive} setIsShopActive={setIsShopActive} />
      <section>
        <div className="home-header">
          <div className="row">
            <div className="slogan-container column">
              <h1 className="slogan">
                Un bon{" "}
                <span className="colored">
                  hamburger est la base du vrai bonheur
                </span>{" "}
                , alors qu'attendez vous ?
              </h1>

              <button className="yellow-button">Commander</button>
            </div>
            <img src={HomeHamburger} alt="" className="header-img" />
          </div>
        </div>

        <div className="our-creations">
          <h2 className="our-creations-title">Découvrer nos créations</h2>

          <div className="filter row">
            <select name="select" id="" className="select-filter">
              <option value="filtrer">Filtrer</option>
              <option value="Boeuf">Boeuf</option>
              <option value="Poulet">Poulet</option>
              <option value="Poisson">Poisson</option>
              <option value="Vegan">Vegan</option>
            </select>

            <span className="reset-filter">Réinitialiser</span>
          </div>

          <div className="our-creations-items-container">
            {menus.map((menu) => (
              <div className="our-creations-item" key={menu.id}>
                <div className="our-creations-item-img-wrapper">
                  <img
                    src={menu.image}
                    alt=""
                    className="our-creations-item-img"
                  />
                </div>
                <div className="our-creations-item-text column">
                  <span className="our-creations-item-name">{menu.name}</span>
                  <p className="our-creations-item-description">
                    {menu.description}
                  </p>
                  <div className="our-creation-item-footer">
                    <div className="our-creation-item-stats">
                      <div className="row">
                        <>
                          <img src={Star} alt="" />
                          <span>{menu.note}</span>
                        </>
                      </div>
                      <div className="row">
                        {menu.rank <= 3 && (
                          <>
                            <img src={Rank} alt="" />
                            <span>#{menu.rank} Commandes</span>
                          </>
                        )}
                      </div>
                    </div>
                    <button className="yellow-button see-more">
                      Voir plus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
