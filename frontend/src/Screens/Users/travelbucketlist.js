import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../loading_spinner";
import { userProfile } from "../../api";
import "../../assets/Style/travelbucketlist.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const TravelBucketlist = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [cityList, setCityList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userId"));
  }, []);

  const handleAddCity = () => {
    if (selectedCity.trim() !== "") {
      setCityList((prevList) => [...prevList, selectedCity.trim()]);
      setSelectedCity("");
    }
  };

  const handleSubmit = async () => {
    if (cityList.length === 0) {
      toast.error("Please add at least one city", { autoClose: 2000 });
      return;
    }

    setIsLoading(true);
    console.log(cityList);
    try {
      const profileData = {
        cities: cityList,
        
      };
     
      await userProfile(userId, token, profileData);

      toast.success("Profile updated", { autoClose: 2000 });
      navigate("/profile"); // Redirect to the profile page
    } catch (error) {
      toast.error("Error updating profile", { autoClose: 2000 });
    }

    setIsLoading(false);
  };

  return (
    <div className="travel-bucketlist layout-container">
      <div className="map">
        {/* Display your map or map component here */}
        {/* You can use an external map library or API */}
        {/* For example, using an iframe with Google Maps */}
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102311.01822577446!2d-74.0059413!3d40.7127837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1613044534545!5m2!1sen!2sin"
          width="250"
          height="150"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="travel-info">
        <div className="city-list">
          {cityList.map((city, index) => (
            <div key={index}>{city}</div>
          ))}
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter city name"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faPlus}
            onClick={handleAddCity}
            className="search-icon"
          />
        </div>

        <button
          className="submit-button"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <FontAwesomeIcon icon={faAngleRight} />
          )}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TravelBucketlist;
