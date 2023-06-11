import axios from "axios";
const BASE_URL = "http://192.168.100.8:3001";

export const postLogin = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    console.log(response.data.token);
    const token = response.data.token;
    localStorage.setItem("token", token);
    const userId = response.data.id;
    console.log(userId);
    localStorage.setItem("userId", userId);
    console.log(localStorage.getItem("userId"));
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const userProfile = async (userId, token, profileData) => {
  try {
    console.log("profileData", profileData);
    const formData = new FormData();
    // Add the existing fields
    formData.append('name', profileData.name);
    formData.append('email', profileData.email);
    formData.append('gender', profileData.gender);
    formData.append('birthday', profileData.birthday);
    formData.append('current_city', profileData.current_city);
    // Check if photos exist and add them to the form data
    if (profileData.photos) {
      profileData.photos.forEach((image) => {
        formData.append('images', image);
      });
    }

    formData.append('known_languages', profileData.known_languages);


    formData.append('interest', JSON.stringify(profileData));
    // console.log("interest",profileData["interest"]]);
console.log(formData);
console.log(profileData.interest);
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