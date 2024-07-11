import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import CarLeftSidebar from '../utils/CarLeftSidebar';
import SelectComponent from '../utils/SelectComponent';
import { useRouter } from 'next/router';
import { fetchCars } from '../utils/api'; // Ensure you have this import for your fetchCars function
import { useCar } from '../contexts/CarContext';
import Link from 'next/link';

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

function CarListingLeftSidebar() {
  const [activeClass, setActiveClass] = useState('grid-group-wrapper');
  const [cars, setCars] = useState([]); // Initialize as an empty array
  const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage state
  const [selectedCondition, setSelectedCondition] = useState('Used Car');
  const { setCar } = useCar();
  const router = useRouter();
  const conditions = ["Used Car", "New Car"];

  useEffect(() => {
    const { condition } = router.query;
    if (condition) {
      setSelectedCondition(condition === 'new' ? 'New Car' : 'Used Car');
    }
  }, [router.query]);

  useEffect(() => {
    const loadCars = async () => {
      try {
        console.log(`Fetching cars for condition: ${selectedCondition}`);
        const data = await fetchCars(selectedCondition);
        console.log('Raw API response:', data);

        const isNewCar = selectedCondition === 'New Car';
        const carArray = Array.isArray(data) ? data : Object.keys(data).map(key => data[key]);
        const processedCars = carArray.map(car => preprocessCarData(car, isNewCar));

        console.log('Processed car array:', processedCars);
        setCars(processedCars || []); // Ensure carArray is an array
      } catch (error) {
        console.error('Error loading cars', error);
        setCars([]); // Set cars to an empty array on error
      }
    };

    loadCars();
  }, [selectedCondition]);

  const toggleView = () => {
    setActiveClass(activeClass === 'grid-group-wrapper' ? 'list-group-wrapper' : 'grid-group-wrapper');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewDetails = (car) => {
    setCar(car);
    router.push('/car-deatils');
  };

  // Determine the cars to display on the current page
  const carsToDisplay = cars.slice((currentPage - 1) * 10, currentPage * 10);

  return (
    <MainLayout>
      <div className="product-page pt-100 mb-100">
        <div className="container">
          <div className="row g-xl-4 gy-5">
            <CarLeftSidebar />
            <div className="col-xl-8 order-xl-2 order-1">
              <div className="row mb-40">
                <div className="col-lg-12">
                  <div className="show-item-and-filte">
                  <p>Affichage de <strong>{cars.length}</strong> voiture(s) disponibles en stock</p>
                    <div className="filter-view">
                      <div className="filter-atra">
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
                      </div>
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
                    {carsToDisplay.length > 0 ? (
                      carsToDisplay.map((car, index) => (
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
                    <div className="pagination">
                      <ul>
                        {[...Array(2)].map((_, i) => (
                          <li key={i} className={currentPage === i + 1 ? 'active' : ''}>
                            <a href="#" onClick={() => handlePageChange(i + 1)}>{String(i + 1).padStart(2, '0')}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="next-prev-btn">
                      <ul>
                        <li>
                          <a href="#" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            {/* SVG for prev */}
                            Prev
                          </a>
                        </li>
                        <li>
                          <a href="#" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === 2}>
                            Next
                            {/* SVG for next */}
                          </a>
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

export default CarListingLeftSidebar;
