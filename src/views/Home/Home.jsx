import HomeHamburger from "../../assets/img/home-hb.png";
import Star from "../../assets/img/star.png";
import Rank from "../../assets/img/rank.png";
import "./Home.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Coupon from "../../components/Coupon/Coupon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = ({ burgers, user, couponCode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBurger, setSelectedBurger] = useState(null);
  const [isHomeLoaded, setIsHomeLoaded] = useState(false);
  const creationsRef = useRef(null);

  const handleClick = (burger) => {
    setSelectedBurger(burger);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsHomeLoaded(true);
    }, 1000);
    const element = creationsRef.current;
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
      },
      duration: 1,
      opacity: 0,
      y: 40,
    });
  }, []);

  return (
    <section id="home">
      <Coupon
        user={user}
        isHomeLoaded={isHomeLoaded}
        setIsHomeLoaded={setIsHomeLoaded}
        couponCode={couponCode}
      />
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

            <Link to="/menus" className="yellow-button">
              Commander
            </Link>
          </div>
          <img src={HomeHamburger} alt="" className="header-img" />
        </div>
      </div>

      <div className="our-creations" ref={creationsRef}>
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
          {burgers.map((burger) => (
            <>
              <div className="our-creations-item" key={burger.id}>
                <div className="our-creations-item-img-wrapper">
                  <img
                    src={burger.image}
                    alt=""
                    className="our-creations-item-img"
                  />
                </div>
                <div className="our-creations-item-text column">
                  <span className="our-creations-item-name">{burger.name}</span>
                  <p className="our-creations-item-description">
                    {burger.description}
                  </p>
                  <div className="our-creation-item-footer">
                    <div className="our-creation-item-stats">
                      <div className="row">
                        <>
                          <img src={Star} alt="" />
                          <span>{burger.note}</span>
                        </>
                      </div>
                      <div className="row">
                        {burger.rank <= 3 && (
                          <>
                            <img src={Rank} alt="" />
                            <span>#{burger.rank} Commandes</span>
                          </>
                        )}
                      </div>
                    </div>
                    <button
                      className="yellow-button see-more"
                      onClick={() => handleClick(burger)}
                    >
                      Voir plus
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}

          <Modal
            burger={selectedBurger}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
