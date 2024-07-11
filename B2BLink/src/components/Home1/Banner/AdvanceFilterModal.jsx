import React, { useState, useEffect } from 'react';
import SelectComponent from '@/src/utils/SelectComponent';
import {
  fetchMultichoiceCriteria,
  fetchSliderCriteria,
  fetchCities,
  fetchSectors,
  fetchBrands,
  fetchModels,
  fetchFilteredCars,
} from '../../../utils/api';

const AdvanceFilterModal = () => {
  const [multichoiceCriteria, setMultichoiceCriteria] = useState([]);
  const [sliderCriteria, setSliderCriteria] = useState([]);
  const [cities, setCities] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedCarType, setSelectedCarType] = useState('neuf');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const multichoice = await fetchMultichoiceCriteria();
        const sliders = await fetchSliderCriteria();
        const cityData = await fetchCities();
        const brandData = await fetchBrands();
        setMultichoiceCriteria(multichoice);
        setSliderCriteria(sliders);
        setCities(cityData);
        setBrands(brandData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchSectorsForCity = async () => {
      if (selectedCity) {
        try {
          console.log('Fetching sectors for city', selectedCity);
          const sectorData = await fetchSectors(selectedCity.id);
          setSectors(sectorData);
        } catch (error) {
          console.error('Error fetching sectors for city', error);
        }
      } else {
        setSectors([]);
      }
    };
    fetchSectorsForCity();
  }, [selectedCity]);

  useEffect(() => {
    const fetchModelsForBrand = async () => {
      if (selectedBrand) {
        try {
          console.log('Fetching models for brand', selectedBrand);
          const modelData = await fetchModels(selectedBrand.id);
          setModels(modelData);
        } catch (error) {
          console.error('Error fetching models for brand', error);
        }
      } else {
        setModels([]);
      }
    };
    fetchModelsForBrand();
  }, [selectedBrand]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  const getOptions = (label) => {
    const criteria = multichoiceCriteria.find((criterion) => criterion.label === label);
    return criteria
      ? ['Tout', ...criteria.valeurs.map((value) => value.translations.fr || value.value)]
      : ['Tout'];
  };

  const handleCityChange = (event) => {
    const value = event.target.value;
    const city = cities.find((city) => city.label === value);
    console.log('Selected city:', city);
    setSelectedCity(city);
  };

  const handleBrandChange = (event) => {
    const value = event.target.value;
    const brand = brands.find((brand) => (brand.translations.fr || brand.value) === value);
    console.log('Selected brand:', brand);
    setSelectedBrand(brand);
  };

  const handleModelChange = (event) => {
    const value = event.target.value;
    const model = models.find((model) => (model.translations.fr || model.value) === value);
    console.log('Selected model:', model);
    setSelectedModel(model);
  };

  const handleSectorChange = (event) => {
    const value = event.target.value;
    const sector = sectors.find((sector) => sector.translations.fr === value);
    console.log('Selected sector:', sector);
    setSelectedSector(sector);
  };

  const handleCarTypeChange = (event) => {
    setSelectedCarType(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    const searchDTO = {
      product: { id: '64b66e3c52b46f2c79eb2661' }, // Replace with actual product ID
      label: 'Car Search',
      city: selectedCity ? { id: selectedCity.id } : null,
      secteur: selectedSector ? { id: selectedSector.id } : null,
      sources: [], // Add sources if needed
      searches: [
        {
          label: 'brand',
          key: 'brand',
          valeur: selectedBrand ? selectedBrand.value : null,
          valeurObject: selectedBrand ? { id: selectedBrand.id } : null,
          criteria: { id: 'criteriaBrandId' }, // Replace with actual criteria ID
        },
        {
          label: 'model',
          key: 'model',
          valeur: selectedModel ? selectedModel.value : null,
          valeurObject: selectedModel ? { id: selectedModel.id } : null,
          criteria: { id: 'criteriaModelId' }, // Replace with actual criteria ID
        },
        // Add more search criteria as needed
      ],
    };

    try {
      const response = await fetchFilteredCars(selectedCarType, searchDTO);
      console.log('Filtered cars:', response);
    } catch (error) {
      console.error('Error fetching filtered cars', error);
    }
  };

  return (
    <div className="modal adSearch-modal fade" id="adSearchModal01" tabIndex={-1} aria-labelledby="adSearchModal01Label" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="bi bi-x" />
          </button>
          <div className="modal-body">
            <form onSubmit={handleSearch}>
              <h5 className="main-title">Options Avancées</h5>
              <div className="radio-buttons">
                <label>
                  <input type="radio" value="neuf" checked={selectedCarType === 'neuf'} onChange={handleCarTypeChange} />
                  <span>Neuf</span>
                </label>
                <label>
                  <input type="radio" value="occasion" checked={selectedCarType === 'occasion'} onChange={handleCarTypeChange} />
                  <span>Occasion</span>
                </label>
              </div>
              <div className="row">
                <div className="col-md-6 mb-30">
                  <div className="form-inner">
                    <label>Ville</label>
                    <SelectComponent options={['Tout', ...cities.map((city) => city.label)]} placeholder="Sélectionnez une ville" onChange={handleCityChange} />
                  </div>
                </div>
                <div className="col-md-6 mb-30">
                  <div className="form-inner">
                    <label>Secteur</label>
                    <SelectComponent options={['Tout', ...sectors.map((sector) => sector.translations.fr)]} placeholder="Sélectionnez un secteur" disabled={!selectedCity} onChange={handleSectorChange} />
                  </div>
                </div>
                <h5>Plus de Filtres</h5>
                <div className="row mb-10">
                  <div className="col-md-6 mb-20">
                    <div className="form-inner">
                      <label>Marque</label>
                      <SelectComponent options={['Tout', ...brands.map((brand) => brand.translations.fr || brand.value)]} placeholder="Sélectionnez une marque" onChange={handleBrandChange} />
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="form-inner">
                      <label>Modèle</label>
                      <SelectComponent options={['Tout', ...models.map((model) => model.translations.fr || model.value)]} placeholder="Sélectionnez un modèle" disabled={!selectedBrand} onChange={handleModelChange} />
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="form-inner">
                      <label>Carburant</label>
                      <SelectComponent options={getOptions('fuel')} placeholder="Type de carburant" onChange={(event) => console.log('Carburant selected:', event.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="form-inner">
                      <label>Origine</label>
                      <SelectComponent options={getOptions('vehicle_origin')} placeholder="Sélectionnez l'origine" onChange={(event) => console.log('Origine selected:', event.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="form-inner">
                      <label>Nombre de Portes</label>
                      <SelectComponent options={getOptions('doors')} placeholder="Nombre de portes" onChange={(event) => console.log('Nombre de Portes selected:', event.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="form-inner">
                      <label>Première Main</label>
                      <SelectComponent options={getOptions('first_owner')} placeholder="Sélectionnez la première main" onChange={(event) => console.log('Première Main selected:', event.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="form-inner">
                      <label>Boîte de Vitesse</label>
                      <SelectComponent options={getOptions('gear_box')} placeholder="Sélectionnez la boîte de vitesse" onChange={(event) => console.log('Boîte de Vitesse selected:', event.target.value)} />
                    </div>
                  </div>
                </div>
                <h5>Année et Kilométrage</h5>
                <div className="row">
                  <div className="col-md-6 mb-20">
                    <div className="form-inner">
                      <label>Année Min</label>
                      <input type="number" className="form-control" placeholder="Année Min" />
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="form-inner">
                      <label>Année Max</label>
                      <input type="number" className="form-control" placeholder="Année Max" />
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="form-inner">
                      <label>Min (Km)</label>
                      <input type="number" className="form-control" placeholder="Kilométrage Min" />
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="form-inner">
                      <label>Max (Km)</label>
                      <input type="number" className="form-control" placeholder="Kilométrage Max" />
                    </div>
                  </div>
                </div>
                <h5>Prix</h5>
                <div className="row">
                  <div className="col-md-6 mb-20">
                    <div className="form-inner">
                      <label>Min (Prix)</label>
                      <input type="number" className="form-control" placeholder="Prix Min" />
                    </div>
                  </div>
                  <div className="col-md-6 mb-20">
                    <div className="form-inner">
                      <label>Max (Prix)</label>
                      <input type="number" className="form-control" placeholder="Prix Max" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="apply-btn pt-30">
                <button className="primary-btn2" type="submit">Appliquer Filtres</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceFilterModal;
