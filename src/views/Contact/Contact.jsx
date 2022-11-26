import "./Contact.scss";
import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

const Contact = ({ user }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const { firstname, lastname } = user;
  const contactRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCredentials("");
    toast.success(
      "Votre message a bien été envoyé ! Vous allez être redirigé",
      {
        position: "bottom-right",
      }
    );
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  useEffect(() => {
    const element = contactRef.current;
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
    <>
      <section id="contact" ref={contactRef}>
        <div className="page-column">
          <h1 className="page-title">L&B - Contact</h1>
          <p className="page-text">
            Pour toutes demande de contact merci de passer par le formulaire
            ci-dessous, si votre demande concerne un partenariat veuillez
            prendre contact avec monsieur FORT William à l’adresse mail suivante
            - william.l&b@gmail.com
          </p>
        </div>

        <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
            <div className="left-form">
              <div className="form-group column">
                <label className="form-label">Votre prénom</label>
                <input
                  type="text"
                  className="form-input"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className="form-group column">
                <label className="form-label">Votre nom</label>
                <input
                  type="text"
                  className="form-input"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className="form-group column">
                <label className="form-label">
                  Quel est le sujet de votre demande
                </label>
                <select
                  name="subject"
                  id=""
                  className="form-input"
                  onChange={(e) => handleChange(e)}
                  required
                >
                  <option value="Sélectionner le sujet">
                    Sélectionner le sujet
                  </option>
                  <option value="Sélectionner le sujet">
                    Je n'ai pas reçus ma commande.
                  </option>
                  <option value="Sélectionner le sujet">
                    J'ai étais débité deux fois.
                  </option>
                  <option value="Sélectionner le sujet">
                    Questions de santé.
                  </option>
                  <option value="Sélectionner le sujet">Autres</option>
                </select>
              </div>
            </div>

            <div className="right-form">
              <div className="form-group column">
                <label className="form-label">Votre demande</label>
                <textarea
                  id=""
                  cols="30"
                  rows="13"
                  name="request"
                  onChange={(e) => handleChange(e)}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <input type="submit" value="Envoyer" className="yellow-button" />
        </form>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
