import axios from 'axios';

const serverName = '/api';

export const fetchCars = async (condition, page) => {
  try {
    let url = '';
    if (condition === 'New Car') {
      url = `${serverName}/new/announcements?page=${page}&size=10&sort=_id,desc`;
    } else {
      url = `${serverName}/announcements?page=${page}&size=10&sort=datePosted,desc`;
    }

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching cars', error);
    throw error;
  }
};

export const fetchCarDetails = async (id) => {
  try {
    const response = await axios.get(`https://smartalert-backend-stag.b2blink.ma:8080/api/cars/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching car details', error);
    throw error;
  }
};

export const fetchMultichoiceCriteria = async () => {
  try {
    const response = await axios.get(`${serverName}/radio-buttons/product/64b66e3c52b46f2c79eb2661`);
    return response.data;
  } catch (error) {
    console.error('Error fetching multichoice criteria', error);
    throw error;
  }
};

export const fetchSliderCriteria = async () => {
  try {
    const response = await axios.get(`${serverName}/sliders/product/64b66e3c52b46f2c79eb2661`);
    return response.data;
  } catch (error) {
    console.error('Error fetching slider criteria', error);
    throw error;
  }
};

export const fetchCities = async () => {
  try {
    const response = await axios.get(`${serverName}/cities?sort=popular,desc&sort=label,asc&size=700`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cities', error);
    throw error;
  }
};

export const fetchSectors = async (cityId) => {
  try {
    console.log(`Fetching sectors for city ID: ${cityId}`);
    const response = await axios.get(`${serverName}/secteurs?city=${cityId}`);
    console.log('Sectors fetched:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching sectors', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const fetchBrands = async () => {
  try {
    const response = await axios.get(`${serverName}/combo-lists/product/64b66e3c52b46f2c79eb2661`);
    return response.data[0].valeurs; // Adjusted to return the correct array of brands
  } catch (error) {
    console.error('Error fetching brands', error);
    throw error;
  }
};

export const fetchModels = async (brandId) => {
  try {
    console.log(`Fetching models for brand ID: ${brandId}`);
    const response = await axios.get(`${serverName}/valeurs/comboListParent/${brandId}`);
    console.log('Models fetched:', response.data);
    return response.data.valeurs;
  } catch (error) {
    console.error('Error fetching models', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const fetchFilteredCars = async (carType, searchDTO) => {
  try {
    const url = carType === 'neuf' ? `${serverName}/new/announcements/search` : `${serverName}/alerts/search`;
    const response = await axios.post(url, searchDTO);
    return response.data;
  } catch (error) {
    console.error('Error fetching filtered cars', error);
    throw error;
  }
};
