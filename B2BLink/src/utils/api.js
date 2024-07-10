import axios from 'axios';

const serverName = '/api';

// Function to fetch cars based on condition and page number
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
