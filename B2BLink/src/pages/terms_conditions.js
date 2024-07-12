import React from "react";
import MainLayout from "../layout/MainLayout";
import styles from './terms_conditions.module.css';

function ReturnEnchange() {
  return (
    <MainLayout>
      <div className="return-and-exchange-pages pt-100 mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="update-date mb-30">
                <h6>
                  <i className="bi bi-caret-right-fill" /> Dernière modification
                </h6>
                <p>12 Juillet, 2024</p>
              </div>
            </div>
            <div className="col-lg-12 mb-40">
              <div className="return-and-exchange">
                <h4 className={styles.primaryTitle}>Termes et conditions d'utilisation
                </h4>
                <p>
                Les termes et conditions d'utilisation sont essentiels pour protéger les droits des utilisateurs et de l'entreprise, clarifier les règles d'utilisation, garantir la confidentialité des données personnelles et fournir des informations importantes sur les services offerts par l'application Smart Alert.
                </p>
                <ul className={styles.conditions}>
                  <li>
                    <strong>1 ) Acceptation des conditions:</strong> En utilisant cette application mobile d'e-commerce, vous acceptez pleinement et sans réserve les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez cesser d'utiliser l'application immédiatement.


                  </li>
                  <li>
                    <strong>2 ) Utilisation de l'application:</strong> Vous êtes autorisé à utiliser cette application uniquement à des fins personnelles et non commerciales. Vous ne pouvez pas reproduire, distribuer, modifier ou exploiter le contenu de cette application sans autorisation préalable.
                  </li>
                  <li>
                    <strong>3 ) Compte utilisateur:</strong> Lors de la création d'un compte utilisateur, vous devez fournir des informations exactes, complètes et à jour. Vous êtes responsable de la confidentialité de vos identifiants de connexion et de toutes les activités effectuées sur votre compte.
                  </li>
                  <li>
                    <strong>4 ) Produits et transactions:</strong> Les produits affichés dans l'application sont soumis à disponibilité. Les prix, les descriptions et les images des produits sont fournis à titre indicatif et peuvent être sujets à des modifications sans préavis. Les transactions effectuées via l'application sont régies par les politiques de paiement, de livraison et de retour spécifiées.
                  </li>
                  <li>
                    <strong>5 ) Propriété intellectuelle:</strong> Tous les droits de propriété intellectuelle liés à l'application, y compris les logos, les marques commerciales et le contenu, sont la propriété de la société ou de ses concédants de licence. Vous n'êtes pas autorisé à utiliser, reproduire ou distribuer ces éléments sans autorisation préalable.
                  </li>
                  <li>
                    <strong>6 ) Responsabilité:</strong> Tous les droits de propriété intellectuelle liés à l'application, y compris les logos, les marques commerciales et le contenu, sont la propriété de la société ou de ses concédants de licence. Vous n'êtes pas autorisé à utiliser, reproduire ou distribuer ces éléments sans autorisation préalable.
                  </li>
                  <li>
                    <strong>7 ) Modifications des conditions:</strong> Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les modifications seront effectives dès leur publication dans l'application. Il vous est conseillé de consulter régulièrement les conditions d'utilisation pour prendre connaissance des éventuelles mises à jour.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ReturnEnchange;
