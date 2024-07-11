import React, { useEffect, useMemo, useRef, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import SelectComponent from '../utils/SelectComponent';
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Marquee from 'react-fast-marquee';
import { useCar } from '../contexts/CarContext';
import { formatDate } from '../utils/formatDate'; // Import the utility function
import styles from './car-deatils.module.css';
import 'swiper/swiper-bundle.min.css';


SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
function CarDeatilsPage() {
  const [isSticky, setIsSticky] = useState(false);

  const { car } = useCar();

  if (!car) {
    return <p>No car data available.</p>;
  }

  // const slideSettings = {
  //   navigation: true,
  //   pagination: { clickable: true },
  // };

  const carSlide = useMemo(()=>{
    return {
      speed: 1500,
      spaceBetween: 40,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        420: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2
        },
      }
      }
  })
  const upcommingSlide = useMemo(()=>{
    return {
      slidesPerView: 3,
      speed: 1500,
      spaceBetween: 25,
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 3
        },
      }
      }
  })
  const slideSettings = useMemo(()=>{
    return {
        slidesPerView: "auto",
        speed: 1500,
        spaceBetween: 25,
        loop: true,
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
        },
        navigation: {
            nextEl: ".next-4",
            prevEl: ".prev-4",
        },

        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1400: {
                slidesPerView: 2
            },
        }
        }
  })
  const slideSetting = useMemo(()=>{
    return {
        slidesPerView: "auto",
        speed: 1500,
        spaceBetween: 25,
        loop: true,
        autoplay: {
            delay: 2500, // Autoplay duration in milliseconds
        },
        navigation: {
            nextEl: ".product-stand-next",
            prevEl: ".product-stand-prev",
        },

        }
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 600) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const phoneInputField = useRef(null);

  useEffect(() => {
    if (phoneInputField.current) {
      window.intlTelInput(phoneInputField.current, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });
    }
  }, []);


  const [contactData, setContactData] = useState({
    phoneNumber: '+990737621432',
    email: 'info@gmail.com',
    whatsapp: '+990737621432',
  });

  const handleClick = (type) => {
    let hrefValue = '';
    let newText = '';

    switch (type) {
      case 'phoneNumber':
        hrefValue = `tel:${contactData.phoneNumber}`;
        newText = contactData.phoneNumber;
        break;
      case 'emailAdress':
        hrefValue = `mailto:${contactData.email}`;
        newText = contactData.email;
        break;
      case 'emailAdresss':
        hrefValue = contactData.whatsapp
          ? `https://api.whatsapp.com/send?phone=${contactData.whatsapp}&text=Hello this is the starting message`
          : '';
        newText = contactData.whatsapp || 'Whatsapp';
        break;
      default:
        break;
    }

    // Set the href attribute and update the text for the clicked element
    const element = document.getElementById(type);
    if (element) {
      const link = element.querySelector('a');
      link.setAttribute('href', hrefValue);
      link.textContent = `${newText}`;
    }
  };

  return (
    <>
    <MainLayout>
      <div className="car-details-area pt-30 mb-100">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12 position-relative">
              <div className={`car-details-menu ${isSticky? "sticky":""}` }>
                <nav id="navbar-example2" className="navbar">
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a className="nav-link" href="#car-img">Images du Vehicule</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#car-info">Informations du Vehicule</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#overview">Aperçu</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#performance">Moteur &amp; Performance</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#car-color">Source</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset={0} className="scrollspy-example" tabIndex={0}>
              <div className="single-item mb-50" id="car-img">
    <div className="car-img-area">
      <div className="tab-content mb-30" id="myTab5Content">
        <div className="tab-pane fade show active" id="exterior" role="tabpanel" aria-labelledby="exterior-tab">
          <div className="product-img">
            <div className="number-of-img">
              <img src="assets/img/home1/icon/gallery-icon-1.svg" alt="" />
              {car.carImages.length}
            </div>
            <a href="#" className="fav">
              <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                </path>
              </svg>
            </a>
            <div className="slider-btn-group">
              <div className="product-stand-next swiper-arrow">
                <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                </svg>
              </div>
              <div className="product-stand-prev swiper-arrow">
                <svg width={8} height={13} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                </svg>
              </div>
            </div>
            <Swiper {...slideSetting} className="swiper product-img-slider">
              <div className="swiper-wrapper">
                {car.carImages.length > 0 ? (
                  car.carImages.map((image, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <img src={image} alt={`Car Image ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                    </SwiperSlide>
                  ))
                ) : (
                  <SwiperSlide className="swiper-slide">
                    <div style={{ textAlign: 'center', width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', color: '#ccc' }}>
                      Image Introuvable
                    </div>
                  </SwiperSlide>
                )}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
                <div className="single-item mb-50" id="car-info">
                  <div className="car-info">
                    <div className="title mb-20">
                      <h5>Informations </h5>
                    </div>
                    <ul>
                      <li>
                        <div className="icon">
                          <img src="assets/img/inner-page/icon/mileage.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>{car.isNewCar ? "0 Km": car.mileage}</h6>
                          <span>Kilometrage</span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="assets/img/inner-page/icon/engine.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Annee</h6>
                          <span>{car.carYear || 'Inconnu'}</span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="assets/img/inner-page/icon/fuel.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>{car.carFuel && car.carFuel.value}</h6>
                          <span>Type de Carburant</span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="assets/img/inner-page/icon/condition.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>{car.isNewCar? "Neuve": "Occasion"}</h6>
                          <span>Condition</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-item mb-50" id="overview">
                  <div className="overview">
                    <div className="title mb-25">
                      <h5>Aperçu</h5>
                    </div>
                    <div className="overview-content">
                      <ul>
                        <li><span>Prix</span> {car.price} MAD</li>
                        <li><span>Marque</span> {(car.carBrand?.translations?.fr || 'Inconnu')}</li>
                        <li><span>Modele</span> {(car.carModel?.translations?.fr || 'Inconnu')}</li>
                        <li><span>Kilometrage</span> {car.isNewCar ? "0 Km": car.mileage || 'Inconnu'}</li>
                        <li><span>Num. de portes</span> {car.carDoor || "Inconnu"}</li>
                      </ul>
                      <ul>
                        <li><span>Ville</span> {car.carCity?.translations?.fr || "Inconnu"}</li>
                        <li><span>Premiere Main</span> {car.isNewCar? 'N/A': car.carFirstHand?.translations?.fr || 'Inconnu'}</li>
                        <li><span>Boite a vitesse</span> {car.isNewCar? 'N/A': car.carBV?.translations?.fr || 'N/A'}</li>
                        <li><span>Postee le</span> {car.datePosted && formatDate(car.datePosted)}</li>
                        <li><span>Type de Carburant</span> {car.carFuel && car.carFuel.value}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {car.source ? (
  <div className="single-item mb-50" id="overview">
    <div className="overview">
      <div className="title mb-25">
        <h5>Source de l'annonce</h5>
      </div>
      <div className="overview-content">
        <ul>
          <li><span>Source</span> {car.source.label}</li>
        </ul>
        <ul>
          <li><span>Lien</span> {car.source.url}</li>
        </ul>
      </div>
    </div>
  </div>
) : (
  <></>
)}

                
              </div>
            </div>
            <div className="col-lg-4">
              <div className="car-details-sidebar">
                <div className="contact-info mb-50">
                <div className="single-contact" id="phoneNumber">
                  <a onClick={() => handleClick('phoneNumber')}>
                    <i className="bx bx-phone-call" /> Numeros de Telephone
                  </a>
                </div>
                <div className="single-contact" id="emailAdress">
                  <a onClick={() => handleClick('emailAdress')}>
                    <i className="bx bx-at" /> Email
                  </a>
                </div>
                <div className="single-contact" id="emailAdresss">
                  <a onClick={() => handleClick('emailAdresss')}>
                    <i className="bx bxl-whatsapp" /> Whatsapp
                  </a>
                </div>
                </div>
                <div className={`inquiry-form mb-40 ${styles.gradientBackground}`}>
                  <div className="title">
                    <h4>Pour plus d'informations </h4>
                    <p>If choose this car to contact easily with us.</p>
                  </div>
                  <form>
                    <div className="form-inner mb-20">
                      <label>Nom*</label>
                      <input type="text" placeholder="Ex- Nom Prenom" />
                    </div>
                    <div className="form-inner mb-20">
                      <label>Email*</label>
                      <input type="email" placeholder="Ex- nom@gmail.com" />
                    </div>
                    <div className="form-inner mb-20">
                      <label>Numero</label>
                      <input id="phone" type="tel" placeholder="Téléphone" name="phone" />
                    </div>
                    <div className="form-inner mb-20">
                      <label>Message*</label>
                      <textarea placeholder="Ecrivez votre message ici..." defaultValue={""} />
                    </div>
                    <div className="form-inner">
                      <button className="primary-btn3" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                          <path d="M13.8697 0.129409C13.9314 0.191213 13.9736 0.269783 13.991 0.355362C14.0085 0.44094 14.0004 0.529754 13.9678 0.610771L8.78063 13.5781C8.73492 13.6923 8.65859 13.7917 8.56003 13.8653C8.46148 13.9389 8.34453 13.9839 8.22206 13.9954C8.09958 14.0068 7.97633 13.9842 7.86586 13.9301C7.75539 13.876 7.66199 13.7924 7.59594 13.6887L4.76304 9.23607L0.310438 6.40316C0.206426 6.33718 0.122663 6.24375 0.0683925 6.13318C0.0141218 6.02261 -0.00854707 5.89919 0.00288719 5.77655C0.0143215 5.65391 0.0594144 5.53681 0.13319 5.43817C0.206966 5.33954 0.306557 5.2632 0.420973 5.21759L13.3883 0.0322452C13.4694 -0.000369522 13.5582 -0.00846329 13.6437 0.00896931C13.7293 0.0264019 13.8079 0.0685926 13.8697 0.1303V0.129409ZM5.65267 8.97578L8.11385 12.8427L12.3329 2.29554L5.65267 8.97578ZM11.7027 1.66531L1.1555 5.88436L5.02333 8.34466L11.7027 1.66531Z" />
                        </svg> Envoyer Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </MainLayout>
    </>
  )
}

export default CarDeatilsPage;