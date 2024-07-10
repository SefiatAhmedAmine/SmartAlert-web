import React, { useEffect, useMemo, useRef, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import SelectComponent from '../utils/SelectComponent';
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Marquee from 'react-fast-marquee';
import styles from './car-deatils.module.css';

SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
function CarDeatilsPage() {
  const [isSticky, setIsSticky] = useState(false);

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
                      <a className="nav-link" href="#car-img">Image du Vehicule</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#car-info">Informations du Vehicule</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#kye-features">Fonctionnalites principales</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#overview">Aperçu</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#performance">Moteur &amp; Performance</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#car-color">Couleur</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#car-milage">Kilometrage</a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="#faqs">FAQ</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#qus-ans">Question &amp; Answer</a>
                    </li> */}
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
                              10
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
                                <SwiperSlide className="swiper-slide">
                                  <img src="assets/img/inner-page/product-img-02.png" alt="image" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <img src="assets/img/inner-page/product-img-03.png" alt="image" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <img src="assets/img/inner-page/product-img-04.png" alt="image" />
                                </SwiperSlide>
                              </div>
                            </Swiper>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="interior" role="tabpanel" aria-labelledby="interior-tab">
                          <div className="product-img">
                            <div className="number-of-img">
                              <img src="assets/img/home1/icon/gallery-icon-1.svg" alt="" />
                              10
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
                                <SwiperSlide className="swiper-slide">
                                  <img src="assets/img/inner-page/interior-01.png" alt="image" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <img src="assets/img/inner-page/interior-02.png" alt="image" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <img src="assets/img/inner-page/interior-03.png" alt="image" />
                                </SwiperSlide>
                              </div>
                            </Swiper>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="video-clip" role="tabpanel" aria-labelledby="video-clip-tab">
                          <div className="video-area">
                            <video autoPlay loop="loop" muted preload="auto" controls>
                              <source src="assets/video/home4/car-video.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="color-clip" role="tabpanel" aria-labelledby="color-clip-tab">
                          <div className="product-img2">
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
                                <SwiperSlide className="swiper-slide">
                                  <div className="car-color-wrap">
                                    <div className="car-img">
                                      <img src="assets/img/inner-page/color-car-05.png" alt="" />
                                    </div>
                                    <div className="content">
                                      <h5>Lamborghini Murciélago (Black)</h5>
                                    </div>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <div className="car-color-wrap">
                                    <div className="car-img">
                                      <img src="assets/img/inner-page/color-car-06.png" alt="" />
                                    </div>
                                    <div className="content">
                                      <h5>Lamborghini Murciélago (Blue)</h5>
                                    </div>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                  <div className="car-color-wrap">
                                    <div className="car-img">
                                      <img src="assets/img/inner-page/color-car-07.png" alt="" />
                                    </div>
                                    <div className="content">
                                      <h5>Lamborghini Murciélago (Pink)</h5>
                                    </div>
                                  </div>
                                </SwiperSlide>
                                <div className="swiper-slide">
                                  <div className="car-color-wrap">
                                    <div className="car-img">
                                      <img src="assets/img/inner-page/color-car-08.png" alt="" />
                                    </div>
                                    <div className="content">
                                      <h5>Lamborghini Murciélago (Orange)</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Swiper>
                          </div>
                        </div>
                      </div>
                      <ul className="nav nav-tabs" id="myTab5" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="exterior-tab" data-bs-toggle="tab" data-bs-target="#exterior" type="button" role="tab" aria-controls="exterior" aria-selected="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M19 0H18V14H0V15H18V30H19V0Z" />
                            </svg>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                <mask id="mask0_1673_2706" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={20} height={20}>
                                  <rect width={20} height={20} fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1673_2706)">
                                  <path d="M2.62728 10.356H17.3726C17.461 10.356 17.5458 10.3205 17.6083 10.2573C17.6708 10.194 17.7059 10.1083 17.7059 10.0189V6.34867C17.7065 6.25941 17.6719 6.17359 17.6099 6.11003L15.2766 3.75061C15.2141 3.6874 15.1293 3.65187 15.0409 3.65186H2.62728C2.53887 3.65186 2.45409 3.68737 2.39158 3.75058C2.32906 3.81379 2.29395 3.89952 2.29395 3.98892V10.0189C2.29395 10.1083 2.32906 10.194 2.39158 10.2573C2.45409 10.3205 2.53887 10.356 2.62728 10.356ZM17.0393 6.48821V9.68185H10.6336V4.32631H14.9003L17.0393 6.48821ZM2.96061 4.32631H9.96695V9.68185H2.96061V4.32631Z" />
                                  <path d="M16.2257 1.43225C16.1632 1.36904 16.0784 1.33352 15.99 1.3335H0.333333C0.244928 1.3335 0.160143 1.36901 0.0976311 1.43222C0.0351189 1.49543 0 1.58116 0 1.67056V15.493C0 15.5824 0.0351189 15.6682 0.0976311 15.7314C0.160143 15.7946 0.244928 15.8301 0.333333 15.8301C1.16365 15.8306 1.95981 16.1644 2.54694 16.7581C3.13406 17.3518 3.46414 18.1568 3.46467 18.9964C3.46467 19.0858 3.49979 19.1716 3.5623 19.2348C3.62481 19.298 3.70959 19.3335 3.798 19.3335H19.6667C19.7551 19.3335 19.8399 19.298 19.9024 19.2348C19.9649 19.1716 20 19.0858 20 18.9964V5.38799C20 5.2986 19.9649 5.21288 19.9023 5.14969L16.2257 1.43225ZM0.666667 15.1708V2.00762H15.852L19.3333 5.52753V16.5854H13.2377C13.1493 16.5855 13.0645 16.621 13.002 16.6842L11.0483 18.6594H4.117C4.03735 17.7612 3.64825 16.9199 3.01762 16.2823C2.38699 15.6446 1.55491 15.2513 0.666667 15.1708ZM11.9913 18.6594L13.3767 17.2596H19.3333V18.6594H11.9913Z" />
                                  <path d="M4.81734 6.25912L5.28867 5.78252L7.53867 8.05734L7.067 8.53394L4.81734 6.25912ZM6.03967 5.81791L6.511 5.34131L7.975 6.82167L7.50367 7.29828L6.03967 5.81791ZM11.7773 6.26013L12.2487 5.78353L14.4987 8.05835L14.027 8.53495L11.7773 6.26013ZM13 5.81892L13.4713 5.34198L14.9353 6.82235L14.464 7.29895L13 5.81892ZM12.9197 13.5042C13.0081 13.5042 13.0929 13.4687 13.1554 13.4055C13.2179 13.3423 13.253 13.2566 13.253 13.1672V11.9875C13.253 11.8981 13.2179 11.8123 13.1554 11.7491C13.0929 11.6859 13.0081 11.6504 12.9197 11.6504H10.8837C10.6406 11.6504 10.4074 11.748 10.2355 11.9219C10.0636 12.0957 9.967 12.3315 9.967 12.5773C9.967 12.8231 10.0636 13.0589 10.2355 13.2327C10.4074 13.4066 10.6406 13.5042 10.8837 13.5042H12.9197ZM10.6337 12.5773C10.6338 12.5103 10.6602 12.4461 10.7071 12.3987C10.7539 12.3514 10.8174 12.3247 10.8837 12.3245H12.5863V12.8301H10.8837C10.8174 12.8299 10.7539 12.8032 10.7071 12.7559C10.6602 12.7085 10.6338 12.6443 10.6337 12.5773ZM5.24634 11.6504H3.21C2.96689 11.6504 2.73373 11.748 2.56182 11.9219C2.38991 12.0957 2.29333 12.3315 2.29333 12.5773C2.29333 12.8231 2.38991 13.0589 2.56182 13.2327C2.73373 13.4066 2.96689 13.5042 3.21 13.5042H5.24567C5.33407 13.5042 5.41886 13.4687 5.48137 13.4055C5.54388 13.3423 5.579 13.2566 5.579 13.1672V11.9875C5.579 11.8982 5.54397 11.8125 5.48161 11.7494C5.41924 11.6862 5.33463 11.6506 5.24634 11.6504ZM4.913 12.8301H3.21C3.1437 12.8301 3.08011 12.8035 3.03322 12.7561C2.98634 12.7087 2.96 12.6444 2.96 12.5773C2.96 12.5103 2.98634 12.446 3.03322 12.3986C3.08011 12.3511 3.1437 12.3245 3.21 12.3245H4.91234L4.913 12.8301Z" />
                                </g>
                              </svg>
                              Exterior(10)
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 0H1V14H19V15H1V30H0V0Z" />
                            </svg>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="Interior(15)" data-bs-toggle="tab" data-bs-target="#interior" type="button" role="tab" aria-controls="interior" aria-selected="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M19 0H18V14H0V15H18V30H19V0Z" />
                            </svg>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                <mask id="mask0_1673_2691" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={20} height={20}>
                                  <rect width={20} height={20} fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1673_2691)">
                                  <path d="M3.8709 14.58H3.17017V6.13965C3.171 5.50898 3.43648 4.90438 3.90835 4.45849C4.38023 4.0126 5.01996 3.76184 5.6872 3.76123H14.4926C15.1599 3.76184 15.7996 4.0126 16.2715 4.45849C16.7433 4.90438 17.0088 5.50898 17.0096 6.13965V14.5797H16.3089V6.13965C16.3083 5.68459 16.1167 5.24835 15.7762 4.92663C15.4357 4.60492 14.9741 4.424 14.4926 4.42356H5.6872C5.20575 4.424 4.74414 4.60492 4.40364 4.92663C4.06314 5.24835 3.87155 5.68459 3.8709 6.13965V14.58Z" />
                                  <path d="M12.9207 4.42365H7.25947C6.95361 4.42304 6.66047 4.3079 6.44423 4.10345C6.22799 3.899 6.10627 3.62189 6.10571 3.3328V1.35111C6.10627 1.06201 6.22799 0.784906 6.44423 0.580455C6.66047 0.376003 6.95361 0.260867 7.25947 0.260254H12.9207C13.2265 0.260867 13.5197 0.376003 13.7359 0.580455C13.9522 0.784906 14.0739 1.06201 14.0745 1.35111V3.3328C14.0739 3.62189 13.9522 3.899 13.7359 4.10345C13.5197 4.3079 13.2265 4.42304 12.9207 4.42365ZM7.25947 0.922582C7.13946 0.923192 7.02455 0.968546 6.93972 1.04879C6.85489 1.12903 6.807 1.23767 6.80645 1.35111V3.3328C6.807 3.44623 6.85489 3.55487 6.93972 3.63512C7.02455 3.71536 7.13946 3.76071 7.25947 3.76132H12.9207C13.0407 3.76071 13.1556 3.71536 13.2404 3.63512C13.3253 3.55487 13.3732 3.44623 13.3737 3.3328V1.35111C13.3732 1.23767 13.3253 1.12903 13.2404 1.04879C13.1556 0.968546 13.0407 0.923192 12.9207 0.922582H7.25947ZM12.8156 16.6271H7.36458C7.27166 16.6271 7.18254 16.5922 7.11683 16.5301C7.05113 16.4679 7.01421 16.3837 7.01421 16.2959V9.00299C7.01449 8.72073 7.13327 8.4501 7.34447 8.25055C7.55566 8.05099 7.84201 7.9388 8.14064 7.93863H12.0395C12.3382 7.9388 12.6245 8.05099 12.8357 8.25055C13.0469 8.4501 13.1657 8.72073 13.1659 9.00299V16.2952C13.166 16.3388 13.157 16.3819 13.1395 16.4222C13.1219 16.4624 13.0961 16.499 13.0636 16.5298C13.031 16.5606 12.9924 16.5851 12.9498 16.6018C12.9073 16.6185 12.8617 16.6271 12.8156 16.6271ZM7.71495 15.9647H12.4652V9.00299C12.465 8.89636 12.4201 8.79415 12.3403 8.71878C12.2605 8.64342 12.1523 8.60104 12.0395 8.60096H8.14064C8.02783 8.60104 7.91966 8.64342 7.83986 8.71878C7.76005 8.79415 7.71513 8.89636 7.71495 9.00299V15.9647Z" />
                                  <path d="M7.36451 13.2402H12.8159V13.9026H7.36451V13.2402ZM7.36451 5.51517H12.8159V6.1775H7.36451V5.51517ZM16.0687 20.2603H4.11135C3.39867 20.2596 2.7154 19.9916 2.21146 19.5153C1.70752 19.039 1.42408 18.3932 1.42334 17.7196V15.4537C1.42371 15.1339 1.55826 14.8273 1.79747 14.6012C2.03668 14.375 2.36103 14.2477 2.69937 14.2473H4.12957C4.38221 14.2479 4.63037 14.3104 4.84988 14.4286C5.06938 14.5468 5.25276 14.7168 5.38213 14.9219L6.03556 15.9647H14.1444L14.7982 14.9219C14.9275 14.7168 15.1108 14.5468 15.3303 14.4286C15.5497 14.3104 15.7978 14.2479 16.0504 14.2473H17.4806C17.819 14.2477 18.1433 14.375 18.3825 14.6012C18.6218 14.8273 18.7563 15.1339 18.7567 15.4537V17.7196C18.7559 18.3932 18.4725 19.039 17.9686 19.5153C17.4646 19.9916 16.7813 20.2596 16.0687 20.2603ZM2.69937 14.9096C2.54682 14.9099 2.4006 14.9673 2.29276 15.0693C2.18492 15.1713 2.12426 15.3095 2.12407 15.4537V17.7196C2.12463 18.2176 2.33418 18.695 2.70675 19.0472C3.07931 19.3993 3.58446 19.5974 4.11135 19.5979H16.0687C16.5956 19.5974 17.1007 19.3993 17.4733 19.0472C17.8458 18.695 18.0554 18.2176 18.0559 17.7196V15.4537C18.0558 15.3095 17.9951 15.1713 17.8873 15.0693C17.7794 14.9673 17.6332 14.9099 17.4806 14.9096H16.0504C15.9194 14.91 15.7907 14.9424 15.6769 15.0038C15.563 15.0651 15.468 15.1533 15.4009 15.2597L14.6448 16.4648C14.6138 16.5142 14.5697 16.5552 14.5168 16.5836C14.464 16.6121 14.4043 16.627 14.3435 16.6271H5.83551C5.7747 16.627 5.71495 16.6121 5.66212 16.5836C5.60929 16.5552 5.5652 16.5142 5.53419 16.4648L4.77915 15.2597C4.71211 15.1532 4.61703 15.0651 4.50319 15.0037C4.38934 14.9424 4.26062 14.9099 4.12957 14.9096H2.69937ZM11.8418 2.41282H8.33817C8.24525 2.41282 8.15613 2.37793 8.09043 2.31583C8.02472 2.25372 7.98781 2.16949 7.98781 2.08166V0.591418C7.98781 0.503588 8.02472 0.419355 8.09043 0.35725C8.15613 0.295144 8.24525 0.260254 8.33817 0.260254H11.8418C11.9348 0.260254 12.0239 0.295144 12.0896 0.35725C12.1553 0.419355 12.1922 0.503588 12.1922 0.591418V2.08166C12.1922 2.16949 12.1553 2.25372 12.0896 2.31583C12.0239 2.37793 11.9348 2.41282 11.8418 2.41282ZM8.68854 1.75049H11.4915V0.922582H8.68854V1.75049Z" />
                                </g>
                              </svg>
                              Interior(15)
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 0H1V14H19V15H1V30H0V0Z" />
                            </svg>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="video-clip-tab" data-bs-toggle="tab" data-bs-target="#video-clip" type="button" role="tab" aria-controls="video-clip" aria-selected="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M19 0H18V14H0V15H18V30H19V0Z" />
                            </svg>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                                <mask id="mask0_1673_2677" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={20} height={20}>
                                  <rect width={20} height={20} fill="#D9D9D9" />
                                </mask>
                                <g mask="url(#mask0_1673_2677)">
                                  <path d="M10 0C4.48566 0 0 4.48609 0 10C0 15.5139 4.48566 20 10 20C15.5143 20 20 15.5139 20 10C20 4.48609 15.5143 0 10 0ZM10 19.1667C4.94547 19.1667 0.83332 15.0545 0.83332 10C0.83332 4.94547 4.94547 0.83332 10 0.83332C15.0545 0.83332 19.1667 4.94547 19.1667 10C19.1667 15.0545 15.0545 19.1667 10 19.1667Z" />
                                  <path d="M13.9754 9.6499L8.14211 5.8999C8.01434 5.8165 7.84914 5.81201 7.7173 5.88443C7.65152 5.92022 7.59661 5.97309 7.55836 6.03747C7.52012 6.10186 7.49995 6.17537 7.5 6.25025V13.7503C7.5 13.9028 7.58301 14.0428 7.7173 14.1161C7.77847 14.1494 7.84702 14.1669 7.91668 14.1669C7.99481 14.1669 8.07375 14.1449 8.14211 14.1006L13.9754 10.3506C14.0943 10.2741 14.1667 10.1419 14.1667 10.0003C14.1667 9.85865 14.0943 9.72643 13.9754 9.6499ZM8.33332 12.9869V7.01361L12.9793 10.0003L8.33332 12.9869Z" />
                                </g>
                              </svg>
                              Video Clip
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 0H1V14H19V15H1V30H0V0Z" />
                            </svg>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="color-clip-tab" data-bs-toggle="tab" data-bs-target="#color-clip" type="button" role="tab" aria-controls="color-clip" aria-selected="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M19 0H18V14H0V15H18V30H19V0Z" />
                            </svg>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="bi bi-palette" viewBox="0 0 16 16">
                                <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
                              </svg>
                              Colours
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={30} viewBox="0 0 19 30">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 0H1V14H19V15H1V30H0V0Z" />
                            </svg>
                          </button>
                        </li>
                      </ul>
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
                          <h6>25,100 Km</h6>
                          <span>Kilometrage</span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="assets/img/inner-page/icon/engine.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>22,231 cc</h6>
                          <span>Engine</span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="assets/img/inner-page/icon/fuel.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Petrol + Gas</h6>
                          <span>Type de Carburant</span>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <img src="assets/img/inner-page/icon/condition.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Occasion</h6>
                          <span>Condition</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-item mb-50" id="kye-features">
                  {/* <div className="kye-features">
                    <div className="title mb-20">
                      <h5>Key Features</h5>
                    </div>
                    <ul>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Premium Wheel
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Moonroof
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Premium Audio
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Navigation
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Front Heated Seats
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Premium Seat Material
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Bluetooth
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Premium Seat Material
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Front Heated Seats
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Remote Engine Start
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Blind Spot System
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                          <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                          <path d="M8.22751 3.72747C8.22217 3.73264 8.21716 3.73816 8.21251 3.74397L5.60776 7.06272L4.03801 5.49222C3.93138 5.39286 3.79034 5.33876 3.64462 5.34134C3.49889 5.34391 3.35985 5.40294 3.25679 5.506C3.15373 5.60906 3.0947 5.7481 3.09213 5.89382C3.08956 6.03955 3.14365 6.18059 3.24301 6.28722L5.22751 8.27247C5.28097 8.32583 5.34463 8.36788 5.4147 8.39611C5.48476 8.42433 5.5598 8.43816 5.63532 8.43676C5.71084 8.43536 5.78531 8.41876 5.85428 8.38796C5.92325 8.35716 5.98531 8.31278 6.03676 8.25747L9.03076 4.51497C9.13271 4.40796 9.18845 4.26514 9.18593 4.11737C9.18341 3.9696 9.12284 3.82875 9.0173 3.72529C8.91177 3.62182 8.76975 3.56405 8.62196 3.56446C8.47417 3.56486 8.33247 3.62342 8.22751 3.72747Z" />
                        </svg> Multi-Zone Climate Control
                      </li>
                    </ul>
                  </div> */}
                </div>
                <div className="single-item mb-50" id="overview">
                  <div className="overview">
                    <div className="title mb-25">
                      <h5>Aperçu</h5>
                    </div>
                    <div className="overview-content">
                      <ul>
                        <li><span>Marque</span> lamborghini</li>
                        <li><span>Modele</span> lamborghini ave11</li>
                        <li><span>Annee</span> 2023</li>
                        <li><span>Kilometrage</span> 25,100 miles</li>
                        <li><span>Num. de portes</span> 4 doors</li>
                        <li><span>Ville</span> right</li>
                        <li><span>Color’s</span> sky blue</li>
                      </ul>
                      <ul>
                        <li><span>Premiere Main</span> 22,231 cc</li>
                        <li><span>Boite a vitesse</span> no</li>
                        <li><span>Steating Catacity</span> 08</li>
                        <li><span>Type de Carburant</span> petrol+gas</li>
                        <li><span>No. of Cylinder</span> 03</li>
                        <li><span>Transmission</span> Manual</li>
                        <li><span>Wheel’s</span> 04</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-item mb-50" id="performance">
                  <div className="engine-performance">
                    <div className="title mb-25">
                      <h5>Engine Performance</h5>
                    </div>
                    <div className="overview-content">
                      <ul>
                        <li><span>Engine Size</span> 3.5 L</li>
                        <li><span>Induction</span> Aspirated</li>
                        <li><span>Cylinders</span> 6 cyl</li>
                        <li><span>Engine Config</span> In-line</li>
                      </ul>
                      <ul>
                        <li><span>Valve Gear</span> DOHC with VVT</li>
                        <li><span>Fuel Injection</span> Direct Injection</li>
                        <li><span>Power</span> 140 kw 7000 rpm</li>
                        <li><span>Engine Location</span> front</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-item mb-50" id="car-milage">
                  <div className="car-milage">
                    <div className="title mb-25">
                      <h5>Lamborghini Mileage</h5>
                    </div>
                    <div className="overview-content">
                      <ul>
                        <li><span>Petrol (Manual)</span> 24.0 kmpl</li>
                        <li><span>Petrol (Automatic)</span> 22.0 kmpl</li>
                      </ul>
                      <ul>
                        <li><span>Diesel (Manual)</span> 25.0 kmpl</li>
                        <li><span>CNG (Manual)</span> 20 km/kg</li>
                      </ul>
                    </div>
                  </div>
                </div>
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
                      <input type="text" placeholder="Ex- Jhon Numan" />
                    </div>
                    <div className="form-inner mb-20">
                      <label>Email*</label>
                      <input type="email" placeholder="Ex- info@gmail.com" />
                    </div>
                    <div className="form-inner mb-20">
                      <label>Numero</label>
                      <input id="phone" type="tel" placeholder="phone" name="phone" />
                    </div>
                    <div className="form-inner mb-20">
                      <label>Message*</label>
                      <textarea placeholder="Write your message..." defaultValue={""} />
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