import axios from 'axios';

export const login = async (email, password) => {
  try {
    const res = await axios.post('/api/auth/login', { email, password });
    return res.data;
  } catch (err) {
    console.error('Error logging in', err);
    throw new Error(err.response?.data?.message || 'Error logging in');
  }
};

export const signup = async (userData) => {
  try {
    const res = await axios.post('/api/auth/register', userData);
    return res.data;
  } catch (err) {
    console.error('Error registering', err);
    throw new Error(err.response?.data?.message || 'Error registering');
  }
};
