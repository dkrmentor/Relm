import axios from "axios";
const BASE_URL = "http://192.168.0.146:3001";

export const postLogin = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    console.log(response.data.token);
    const token = response.data.token;
    localStorage.setItem("token", token);
    const userId = response.data.userId;
    localStorage.setItem("userId", userId);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const userProfile = async (userId, token, profileData) => {
  try {
    const formData = new FormData();
    formData.append('name', profileData.name);
    formData.append('email', profileData.email);
    formData.append('gender', profileData.gender);
    formData.append('birthday', profileData.birthday);
    formData.append('current_city', profileData.current_city);
    profileData.photos.forEach((photo) => {
      formData.append('images', photo);
    });
    formData.append('known_languages', profileData.known_languages);

    const response = await axios.put(`${BASE_URL}/userProfile/${userId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
