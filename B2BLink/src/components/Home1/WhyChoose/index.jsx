import { useTranslations } from 'next-intl';
import React from 'react'
import CountUp from 'react-countup';

function index() {
  const t = useTranslations()
  return (
  <div className="why-choose-area pt-90 pb-90 mb-100" style={{  background: 'linear-gradient(to right, #FFA07A, #FFDAB9, #FFE4B5)'
  }}>
      <div className="container">
        <div className="row mb-50 g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="choose-card">
              <div className="choose-top">
                <div className="choose-icon">
                  <img src="assets/img/home1/icon/affordable.svg" alt="" />
                </div>
                <h5><span>Interface</span> conviviale</h5>
              </div>
              <p>Interface utilisateur intuitive et facile à utiliser pour une expérience facile et agréable.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="choose-card">
              <div className="choose-top">
                <div className="choose-icon">
                  <img src="assets/img/home1/icon/guarantee.svg" alt="" />
                </div>
                <h5>Accés sécurisé
                <span></span></h5>
              </div>
              <p>Respect des normes de sécurité pour une meilleure confidentialité des données.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="choose-card">
              <div className="choose-top">
                <div className="choose-icon">
                  <img src="assets/img/home1/icon/warranty.svg" alt="" />
                </div>
                <h5>Portail <span>unique</span></h5>
              </div>
              <p>Accès regroupé aux principaux sites de vente au Maroc tels qu'Avito, Wandaloo, etc.</p>
            </div>
          </div>
        </div>
        <div className="our-activetis">
          <div className="row justify-content-center g-lg-4 gy-5">
            <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-lg-start justify-content-sm-center wow fadeInUp" data-wow-delay="200ms">
              <div className="single-activiti">
                <div className="icon">
                  <img src="assets/img/home1/icon/av-car.svg" alt="" />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter"><CountUp delay={2} end={100} /></h5>
                    <span>K+</span>
                  </div>
                  <p>Voiture Disponible</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-sm-center wow fadeInUp" data-wow-delay="300ms">
              <div className="single-activiti">
                <div className="icon">
                  <img src="assets/img/home1/icon/sold-car.svg" alt="" />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter"><CountUp delay={2} end={40} /></h5>
                    <span>K+</span>
                  </div>
                  <p>Voiture vendue</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-sm-center wow fadeInUp" data-wow-delay="400ms">
              <div className="single-activiti">
                <div className="icon">
                  <img src="assets/img/home1/icon/use-car.svg" alt="" />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter"><CountUp delay={2} end={200} /></h5>
                    <span>K+</span>
                  </div>
                  <p>Voitures d'occasions</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-sm-6 d-flex justify-content-lg-end justify-content-sm-center wow fadeInUp" data-wow-delay="500ms">
              <div className="single-activiti">
                <div className="icon">
                  <img src="assets/img/home1/icon/happy-customar.svg" alt="" />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter"><CountUp delay={2} end={80} /></h5>
                    <span>%</span>
                  </div>
                  <p>Satisfaction des clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="trustpilot-review">
              <strong>Excellent!</strong>
              <img src="assets/img/home1/icon/trustpilot-star2.svg" alt="" />
              <p>5.0 Rating out of <strong>5.0</strong> based on <a href="#"><strong>&nbsp;245354&nbsp;</strong>
                  reviews</a></p>
              <img src="assets/img/home1/icon/trustpilot-logo.svg" alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </div>

  )
}

export default index