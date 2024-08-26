import React, { useState, useEffect, useRef } from 'react';
import MainLayout from '../layout/MainLayout';
import CarLeftSidebar from '../components/Home1/CarLeftSideBar';
import SelectComponent from '../utils/SelectComponent';
import { useRouter } from 'next/router';
import { fetchCars, search } from '../utils/api'; // Ensure you have this import for your fetchCars function
import { useCar } from '../contexts/CarContext';
import Link from 'next/link';
import axios from 'axios';
import { useLocale, useTranslations } from 'next-intl';
import { getBaseUri } from '../utils/globalFunctions';

const preprocessCarData = (car, isNewCar) => {
  if (isNewCar) {
    return {
      ...car,
      id: car.id,
      label: car.carLabel,
      uri: car.carUri,
      price: car.carMinPrice || car.carMaxPrice || 'N/A',
      image: car.carDefaultImage,
      brand: car.carBrand,
      model: car.carModel,
      fuel: car.raw?.fuel || 'N/A', // Assuming 'raw' contains the necessary info
      electric: car.raw?.electric || 'N/A', // Adjust based on actual data
      mileage: null, // New cars don't have mileage data
      city: null // New cars don't have city data
    };
  } else {
    return {
      ...car,
      id: car.id,
      label: car.label,
      uri: car.carUri,
      price: car.carPrice,
      image: car.carDefautlImage,
      brand: car.carBrand,
      model: car.carModel,
      fuel: car.carFuel?.value || 'N/A',
      electric: car.carElectric || 'N/A',
      mileage: `${car.carMileageMin} - ${car.carMileageMax} miles`,
      city: car.carCity?.label || 'Unknown city'
    };
  }
};

// const processBrands = (data, t, locale) => {
const processBrands = (data, locale) => {
  let itemsNameResult = []
  for (let index = 0; index < data[0].valeurs.length; index++) {
    itemsNameResult.push({
      label: data[0].valeurs[index].translations[locale] ??
        data[0].valeurs[index].value,
      value:
        data[0].id + "|" + data[0].valeurs[index].id + "|" + data[0].valeurs[index].key,
    });
  }
  itemsNameResult.sort((a, b) =>
    a.label.toLowerCase().localeCompare(b.label.toLowerCase(), undefined, { sensitivity: 'base' })
  );
  itemsNameResult.unshift({
    // label: t("Common.all"),
    label: "Tout",
    value: 0,
  });
  let res = {
    critereon: { id: data.id, label: data.label },
    valeurs: itemsNameResult
  }
  return res
}

const processModels = (data, locale) => {
  let itemsModelResult = []
  for (let index = 0; index < data.valeurs.length; index++) {
    itemsModelResult.push({
      label: data.valeurs[index].translations[locale] ??
        data.valeurs[index].translations.fr ?? data.valeurs[index].value,
      value: data.id + "|" + data.valeurs[index].id + "|" + data.valeurs[index].key,
    });
  }
  // console.log("models:", itemsModelResult);
  itemsModelResult.sort((a, b) =>
    a.label.toLowerCase().localeCompare(b.label.toLowerCase(), undefined, { sensitivity: 'base' })
  );
  itemsModelResult.unshift({
    // label: t("Common.all"),
    label: "Tout",
    value: 0,
  });
  let res = {
    critereon: { id: data.id, label: data.label },
    valeurs: itemsModelResult
  }
  return res
}

// const processCities = (data, t, locale) => {
const processCities = (data, locale) => {
  let itemsCityResult = []
  for (let index = 0; index < data.length; index++) {
    itemsCityResult.push({
      label: data[index].translations[locale] ??
        data[index].label,
      value: data[index].id,
    });
  }
  itemsCityResult.unshift({
    // label: t("Common.all"),
    label: "Tout",
    value: 0,
  });
  let res = {
    critereon: {},
    valeurs: itemsCityResult
  }
  return itemsCityResult
}

// const processSources = (data, t) => {
const processSources = (data) => {
  let itemsSourcesResult = []
  for (let index = 0; index < data.length; index++) {
    itemsSourcesResult.push({
      label: getBaseUri(data[index].url) ?? data[index].label,
      value: data[index].id,
    });
  }
  itemsSourcesResult.sort((a, b) =>
    a.label.toLowerCase().localeCompare(b.label.toLowerCase(), undefined, { sensitivity: 'base' })
  );
  itemsSourcesResult.unshift({
    // label: t("Common.all"),
    label: "Tout",
    value: 0,
  });
  let res = {
    critereon: {},
    valeurs: itemsSourcesResult
  }
  return itemsSourcesResult;
}

const processChips = (data) => {
  let chipsResult = []
  for (let index = 0; index < data.length; index++) {
    chipsResult.push({
      label: data[index].label,
      valeurs: data[index].valeurs,
      id: data[index].id,
      defaultValue: data[index].defaultValue,
    });
  }
  return chipsResult
}

const processSliders = (data) => {
  let sliderResult = []
  for (let index = 0; index < data.length; index++) {
    let rangeValues = [];
    if (data[index].rangeValues) {
      data[index].rangeValues.sort((a, b) => {
        return a - b;
      });
      rangeValues.splice(0, rangeValues.length);
      for (let j = 0; j < data[index].rangeValues.length; j++) {
        const element = data[index].rangeValues[j];
        rangeValues.push({
          label: element,
          value: j + "$" + Math.random(),
        });
      }
    }
    rangeValues = rangeValues.reverse();
    sliderResult.push({
      label: data[index].label,
      minValue: parseInt(data[index].minValue),
      maxValue: parseInt(data[index].maxValue),
      rangeValues: rangeValues,
      id: data[index].id,
    });
  }
  return sliderResult
}

function CarListingLeftSidebar({ productId, brands, sources, cities, sliders, chips }) {
  const locale = useLocale()
  const t = useTranslations()
  // brands = processBrands(brands, t, locale)
  brands = processBrands(brands, locale)
  // sources = processSources(sources, t)
  sources = processSources(sources)
  // cities = processCities(cities, t, locale)
  cities = processCities(cities, locale)
  sliders = processSliders(sliders)
  chips = processChips(chips)
  const [models, setModels] = useState([])
  const secteurs = []
  const [activeClass, setActiveClass] = useState('grid-group-wrapper');
  const [cars, setCars] = useState([]); // Initialize as an empty array
  const values = useRef({})
  const { setCar } = useCar();
  const router = useRouter();
  const conditions = ["Used Car", "New Car"];
  const currentPage = router.query.page ?? 0; // Initialize currentPage state
  const selectedCondition = router.query.condition === 'new' ? 'New Car' : 'Used Car';
  // console.log("CONDITION", selectedCondition, "PAGE", currentPage);

  useEffect(() => {
    const alert = router.query.alert;
    const loadCars = async () => {
      try {
        // console.log(`Fetching cars for condition: ${selectedCondition}`);
        const data = await fetchCars(selectedCondition, alert, currentPage);
        // console.log('Raw API response:', data);

        const isNewCar = selectedCondition === 'New Car';
        const carArray = Array.isArray(data) ? data : Object.keys(data).map(key => data[key]);
        const processedCars = carArray.map(car => preprocessCarData(car, isNewCar));

        // console.log('Processed car array:', processedCars);
        setCars(processedCars || []); // Ensure carArray is an array
      } catch (error) {
        console.error('Error loading cars', error);
        setCars([]); // Set cars to an empty array on error
      }
    };

    loadCars();
  }, [router.query]);

  function loadModels() {
    if (values.current.valueName && values.current.valueName.length > 1) {
      const brandId =values.current.valueName.split("|")[1]
      axios.get(`/api/valeurs/comboListParent/${brandId}`)
        .then(response => {
          console.log("modelsss", response.data);
          const mods = processModels(response.data, locale)
          setModels(mods)
        })
    }
  }

  const toggleView = () => {
    setActiveClass(activeClass === 'grid-group-wrapper' ? 'list-group-wrapper' : 'grid-group-wrapper');
  };

  const handlePageChange = (page) => {
    if (page >= 0) {
      const routerOpts = { ...router.query, page }
      router.push({ pathname: router.pathname, query: routerOpts }, undefined, { shallow: false });
    }
  };

  const handleViewDetails = (car) => {
    setCar(car);
    console.log("car to show", car);
    router.push({
      pathname: '/car-deatils',
      query: {
        id: car.id,
        condition: router.query.condition ?? "used"
      }
    });
  };

  async function handleSearch(e) {
    // e.preventDefault()
    const newAlert = await search(productId, values.current, "search" + crypto.randomUUID(), selectedCondition);
    console.log("newAlert", newAlert);
    // Update the URL with the new searchTerm
    if (newAlert?.data?.id) {
      let routerOpts = {
        condition: router.query.condition,
        alert: newAlert.data.id,
        page: 0
      };
      if (routerOpts != router.query)
        router.push({ pathname: router.pathname, query: routerOpts }, undefined, { shallow: false });
    }
  }

  // Determine the cars to display on the current page
  const carsToDisplay = cars.slice((currentPage - 1) * 10, currentPage * 10);

  return (
    <MainLayout>
      <div className="product-page pt-50 mb-50">
        <div className="container">
          <div className="row g-xl-4 gy-5">
            <CarLeftSidebar
              brands={brands}
              onBrandChange={(critereon, val) => {
                values.current = {
                  ...values.current,
                  valueName: val.value,
                  valueNameLabel: val.label,
                  valueNameModel: undefined,
                  valueNameModelLabel: undefined,
                }
                console.log("CURRENT VALUES : ", values.current);
                loadModels()
              }}
              models={models}
              onModelChange={(critereon, val) => {
                values.current = {
                  ...values.current,
                  valueNameModel: val.value,
                  valueNameModelLabel: val.label,
                }
                console.log("CURRENT VALUES : ", values.current);
              }}
              cities={cities}
              onCityChange={(critereon, val) => {
                values.current = {
                  ...values.current,
                  valueLocationCity: val.value,
                  valueLocationCityLabel: val.label,
                  valueLocationSectLabel: undefined,
                  valueLocationSect: undefined
                }
                console.log("CURRENT VALUES : ", values.current);
              }}
              secteurs={secteurs}
              onSecteurChange={(critereon, val) => {
                values.current = {
                  ...values.current,
                  valueLocationSect: val.value,
                  valueLocationSectLabel: val.label,
                }
                console.log("CURRENT VALUES : ", values.current);
              }}
              chips={chips}
              onChipChange={(critereon, val) => {
                values.current = {
                  ...values.current,
                  [critereon.id + "|" + critereon.label]: val.id != 0 ? val.key + "&" + val.value + "&" + val.id : undefined,
                }
                console.log("CURRENT VALUES : ", values.current);
              }}
              sliders={sliders}
              onSliderChange={(critereon, val) => {
                values.current = {
                  ...values.current,
                  [critereon.id + "|" + critereon.label + "_max"]: val[1] ? val[1] + "&" + val[1] : undefined,
                  [critereon.id + "|" + critereon.label + "_min"]: val[0] ? val[0] + "&" + val[0] : undefined,
                }
              }
              }
              onSearchClick={handleSearch}
            />
            <div className="col-xl-8 order-xl-2 order-1">
              <div className="row mb-40">
                <div className="col-lg-12">
                  <div className="show-item-and-filte">
                    {/* <p>Affichage de <strong>{cars.length}</strong> voiture(s) disponibles en stock</p> */}
                    <div className="filter-view">
                      {/* <div className="filter-atra">
                        <h6>Filtrer par:</h6>
                        <form>
                          <div className="form-inner">
                            <SelectComponent
                              placeholder="select conditions"
                              options={conditions}
                              value={selectedCondition}
                              onChange={(e) => setSelectedCondition(e.target.value)}
                            />
                          </div>
                        </form>
                      </div> */}
                      <div className="view">
                        <ul className="btn-group list-grid-btn-group">
                          <li className={`${activeClass === "grid-group-wrapper" ? "active" : ""} grid`} onClick={() => setActiveClass('grid-group-wrapper')}>
                            {/* SVG for grid view */}
                          </li>
                          <li className={`${activeClass === "list-group-wrapper" ? "active" : ""} lists`} onClick={() => setActiveClass('list-group-wrapper')}>
                            {/* SVG for list view */}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-grid-main">
                <div className={`list-grid-product-wrap ${activeClass}`}>
                  <div className="row g-4 justify-content-center mb-40">
                    {cars.length > 0 ? (
                      cars.map((car, index) => (
                        <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay={`${200 + index * 100}ms`} key={car.id}>
                          <div className="product-card">
                            <div className="product-img">
                              <a href="#" className="fav">
                                {/* SVG for favorite */}
                              </a>
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    {car.image ? (
                                      <img
                                        src={car.image}
                                        alt="image"
                                        style={{ height: '400px', width: '100%', objectFit: 'cover' }}
                                      />
                                    ) : (
                                      <div style={{ height: '400px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
                                        <span>Image not available</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h5><a onClick={() => handleViewDetails(car)}>{car.label || 'No label available'}</a></h5>
                              <div className="price-location">
                                <div className="price">
                                  <strong>${car.price}</strong>
                                </div>
                                <div className="location">
                                  <a href="#"><i className="bi bi-geo-alt" /> {car.city}</a>
                                </div>
                              </div>
                              <ul className="features">
                                {selectedCondition === 'Used Car' && car.mileage && (
                                  <>
                                    <li>
                                      <img src="assets/img/home4/icon/miles.svg" alt="" />
                                      {car.mileage}
                                    </li>
                                  </>
                                )}
                                {car.fuel && (
                                  <li>
                                    <img src="assets/img/home4/icon/fuel.svg" alt="" />
                                    {car.fuel}
                                  </li>
                                )}
                                {car.electric && (
                                  <li>
                                    <img src="assets/img/home4/icon/electric.svg" alt="" />
                                    {car.electric}
                                  </li>
                                )}
                              </ul>
                              <div className="content-btm">
                                <a className="view-btn2" onClick={() => handleViewDetails(car)}>
                                  {/* SVG for view details */}
                                  View Details
                                </a>
                                <div className="brand">
                                  <Link href="/single-brand-category">
                                    <img src="assets/img/home1/icon/mercedes-01.svg" alt="image" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No cars available.</p>
                    )}
                  </div>
                  <div className="pagination-and-next-prev">
                    {/* <div className="pagination">
                      <ul>
                        {[...Array(2)].map((_, i) => (
                          <li key={i} className={currentPage === i + 1 ? 'active' : ''}>
                            <a href="#" onClick={() => handlePageChange(i + 1)}>{String(i + 1).padStart(2, '0')}</a>
                          </li>
                        ))}
                      </ul>
                    </div> */}
                    <div className="next-prev-btn">
                      <ul>
                        <li>
                          <button className='primary-btn3' onClick={() => handlePageChange(currentPage - 1)} >
                            {/* SVG for prev */}
                            Prev
                          </button>
                        </li>
                        <li>
                          <button className='primary-btn3' onClick={() => handlePageChange(currentPage + 1)}>
                            Next
                            {/* SVG for next */}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}


// This function gets called at build time
export async function getStaticProps(context) {
  // console.log("getStaticProps is running"); // This should appear in your terminal
  // console.log("host", process.env.NEXT_PUBLIC_API_URI);
  // Call an external API endpoint to get posts
  const productId = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URI}/api/products`)
    .then((response) => {
      return response.data[0].id;
    }).catch(err => { throw err });

  let brands = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URI}/api/combo-lists/product/${productId}`)
  brands = brands?.data

  let cities = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URI}/api/cities?sort=popular,desc&sort=label,asc&size=700&page=0`)
  cities = cities?.data

  let sources = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URI}/api/sources`)
  sources = sources?.data

  let sliders = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URI}/api/sliders/product/${productId}`)
  sliders = sliders?.data

  let chips = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URI}/api/radio-buttons/product/${productId}`)
  chips = chips?.data
  // console.log("sttic", brands, cities, sources, chips, sliders);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      productId,
      brands,
      sources,
      cities,
      sliders,
      chips,
      messages: (await import(`../messages/${context.locale}.json`)).default
    },
  }
}

export default CarListingLeftSidebar;
