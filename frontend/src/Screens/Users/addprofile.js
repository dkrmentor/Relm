import React, { useEffect, useState } from "react";
import { userProfile } from "../../api";
import "../../assets/Style/addprofile.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../loading_spinner";
import InputValidation from "../../components/common/InputValidation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const AddProfile = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    gender: "",
    birthday: "",
    current_city: "",
    photos: [],
    known_languages: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
   
     setToken(localStorage.getItem("token"))
     setUserId(localStorage.getItem("userId"))
    setFormValues((prevValues) => ({
      ...prevValues,
    }));
  }, []);
  


//  const userId = 1; 


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handlePhotosChange = (event) => {
    const selectedPhotos = Array.from(event.target.files);
    setFormValues((prevValues) => ({
      ...prevValues,
      photos: [...prevValues.photos, ...selectedPhotos],
    }));
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      name,
      email,
      gender,
      birthday,
      current_city,
      photos,
      known_languages,
    } = formValues;

    const isInvalidName = name === "" || name.length < 4;
    const isInvalidEmail = email === "" || !/\S+@\S+\.\S+/.test(email);
    const isInvalidGender = gender === "";
    const isInvalidBirthday = birthday === "";
    const isInvalidCurrentCity = current_city === "";
    const isInvalidPhotos = photos.length === 0;
    const isInvalidKnownLanguages = known_languages === "";

    if (isInvalidName) {
      toast.error("Name is required", { autoClose: 2000 });
      return;
    }
    if (isInvalidEmail) {
      toast.error("Email is required", { autoClose: 2000 });
      return;
    }
    if (isInvalidGender) {
      toast.error("Gender is required", { autoClose: 2000 });
      return;
    }
    if (isInvalidBirthday) {
      toast.error("Birthday is required", { autoClose: 2000 });
      return;
    }
    if (isInvalidCurrentCity) {
      toast.error("Current city is required", { autoClose: 2000 });
      return;
    }
    if (isInvalidPhotos) {
      toast.error("At least one photo is required", { autoClose: 2000 });
      return;
    }
    if (isInvalidKnownLanguages) {
      toast.error("Known languages is required", { autoClose: 2000 });
      return;
    }

    setIsLoading(true);

    


    try {
      const profileData = {
        name,
        email,
        gender,
        birthday,
        current_city,
        photos,
        known_languages,
      };

console.log(userId)
      await userProfile(userId, token, profileData);
      console.log(userId)
      toast.success("Profile added", { autoClose: 2000 });
      navigate("/interestmatching"); // Redirect to "/interestmatching"
    } catch (error) {
      toast.error("Error creating profile", { autoClose: 2000 });
    }

    setIsLoading(false);
  };

  return (
    <div className="user-info layout-container">
      <form>
        <InputValidation
          name="name"
          label="Name"
          type="text"
          value={formValues.name}
          onChange={handleChange}
          required
          minLength={4}
          maxLength={20}
        />
        <InputValidation
          name="email"
          label="Email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        <InputValidation
          name="gender"
          label="Gender"
          type="text"
          value={formValues.gender}
          onChange={handleChange}
          required
        />
        <InputValidation
          name="birthday"
          label="Birthday"
          type="text"
          value={formValues.birthday}
          onChange={handleChange}
          required
        />
        <InputValidation
          name="current_city"
          label="Current City"
          type="text"
          value={formValues.current_city}
          onChange={handleChange}
          required
        />
        <div className="input-validation">
          <label htmlFor="photos">Photos:</label>
          <input
            type="file"
            name="photos"
            id="photos"
            onChange={handlePhotosChange}
            multiple
            accept="image/*"
          />
        </div>
        <div className="gallery-container">
          {formValues.photos.length > 0 && (
            <div className="gallery">
              {formValues.photos.map((photo, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(photo)}
                  alt={`Photo ${index + 1}`}
                  className="gallery-image"
                />
              ))}
            </div>
          )}
        </div>
        <InputValidation
          name="known_languages"
          label="Known Languages"
          type="text"
          value={formValues.known_languages}
          onChange={handleChange}
          required
        />
        <button
          className="submit-button"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? <LoadingSpinner /> : <FontAwesomeIcon icon={faAngleRight} />}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProfile;
