import axios from 'axios';

const serverName = '/api';

export const fetchCars = async (condition, alert, page) => {
  try {
    let url = '';
    if (condition === 'New Car') {
      url = `${serverName}/new/announcements?page=${page}&size=10&sort=_id,desc${alert ? "&alert=" + alert : ""}`;
    } else {
      url = `${serverName}/announcements?page=${page}&size=10&sort=datePosted,desc${alert ? "&alert=" + alert : ""}`;
    }
    console.log("fetching cars from", url);
    const response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching cars', error);
    throw error;
  }
};

export const fetchCarDetails = async (id, condition) => {
  try {
    let response;
    console.log("condition detail car", condition, id);
    if (condition === "new")
      response = await axios.get(`/api/details-neuf?id=${id}`);
    else
      response = await axios.get(`/api/details-occas?id=${id}`);
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

const gpt6Token = 471732;

export const login = async (email, password) => {
  try {
    console.log('Login request payload:', {
      username: email,
      password: password,
      expoToken: gpt6Token,
    });
    const response = await axios.post(`${serverName}/authenticate`, {
      username: email,
      password: password,
      expoToken: gpt6Token,
    });
    console.log('Login response:', response);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const signup = async ({ firstName, email, password }) => {
  try {
    const response = await axios.post(`${serverName}/register`, {
      email: email,
      firstName: firstName,
      password: password,
      langKey: 'fr',
    });
    return response.data;
  } catch (error) {
    console.error('Error signing up', error);
    throw error;
  }
};

export async function search(
  productId,
  values,
  alertLabel,
  type
) {
  console.log("ENTERING search with ", type);
  let result = [];
  console.log("values to send::: ", values);
  // console.log("getting announcements for user of token : " + token);

  // if (values.valueNameLabel != t("Common.all")) {
  if (values.valueNameLabel && values.valueNameLabel != "Tout") {
    if (values.valueName.split("|")[0]) {
      result.push({
        label: "brand",
        key: values.valueName.split("|")[2],
        valeur: values.valueNameLabel,
        valeurObject: {
          id: values.valueName.split("|")[1]
        },
        criteria: {
          id: values.valueName.split("|")[0],
        },
      });
    }
  }
  // if (values.valueNameModelLabel != t("Common.all")) {
  if (values.valueNameModelLabel && values.valueNameModelLabel != "Tout") {
    if (values.valueNameModel) {
      result.push({
        label: "model",
        key: values.valueNameModel.split("|")[2],
        valeur: values.valueNameModelLabel,
        valeurObject: {
          id: values.valueNameModel.split("|")[1]
        },
        criteria: {
          id: values.valueNameModel.split("|")[0],
        },
      });
    }
  }

  Object.keys(values).map((element) => {
    let key = "";
    if (
      element.includes("valueNameModel") ||
      element.includes("valueLocationSect") ||
      element.includes("valueLocationCity") ||
      element.includes("valueSource") ||
      element.includes("valueName")
    ) {
    } else {
      if (element.includes("min")) key = "min";
      else if (element.includes("max")) key = "max";
      else key = element.split("|")[1];
      if (values[element]) {
        // console.log(values[element]);

        result.push({
          label: key,
          key: key,
          valeur: (values[element] + "")?.split("$")[0].split("&")[1],
          valeurObject: (values[element] + "")?.split("$")[0].split("&").length > 2 ?
            {
              id: (values[element] + "")?.split("$")[0].split("&")[1],
            } : null,
          criteria: {
            id: element.split("|")[0].split("$")[0] + "",
          },
        });
      }
    }
  });

  let data = {};
  if (
    values.valueLocationSect &&
    // values.valueLocationSectLabel != t("Common.all")
    values.valueLocationSectLabel != "Tout"
  ) {
    data.secteur = {
      id: values.valueLocationSect,
    };
  }
  data.product = {
    id: productId,
  };
  // if (values.valueLocationCityLabel && values.valueLocationCityLabel != t("Common.all")) {
  if (values.valueLocationCityLabel && values.valueLocationCityLabel != "Tout") {
    data.city = {
      id: values.valueLocationCity,
    };
  }
  // if (values.valueSourceLabel && values.valueSourceLabel != t("Common.all")) {
  if (values.valueSourceLabel && values.valueSourceLabel != "Tout") {
    data.sources = [{
      id: values.valueSource
    }]
  }
  data.label = alertLabel;
  data.searches = result;

  let uri = `/api/search-occasion`
  if (type == "New Car") {
    uri = `/api/search-neuf`
  }
  console.log("search object", data);
  console.log("uri", uri);
  return axios
    .post(uri, data)
    .then((response) => {
      console.log("search response", response.data)
      return response.data;
    });
}