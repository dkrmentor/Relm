import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import "../../assets/Style/travelbucketlist.css";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../loading_spinner";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const TravelBucketlist = () => {
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [isLoading] = useState(false);

  const navigate = useNavigate();

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setCityDropdownOpen(false);
  };

  const handleSubmit = () => {
    navigate("/home"); // Redirect to "/home"
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
    height="200"
    style={{ border: 0, borderRadius: "50px" }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>
<div className="travel-info">


      <div className="city-names">
        <p>City 1</p>
        <p>City 2</p>
        <p>City 3</p>
        <p>City 4</p>
        <p>City 5</p>
      </div>
      <div className="search-bar">
        <button
          className={`plus-button ${cityDropdownOpen ? 'active' : ''}`}
          onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
        {cityDropdownOpen && (
          <div className="city-dropdown-content">
            <p onClick={() => handleCitySelect("City 1")}>City 1</p>
            <p onClick={() => handleCitySelect("City 2")}>City 2</p>
            <p onClick={() => handleCitySelect("City 3")}>City 3</p>
            <p onClick={() => handleCitySelect("City 4")}>City 4</p>
            <p onClick={() => handleCitySelect("City 5")}>City 5</p>
          </div>
        )}
        <button className="search-button" >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      </div>
      {selectedCity && <p>Selected City: {selectedCity}</p>}

      <button
          className="submit-button"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? <LoadingSpinner /> : <FontAwesomeIcon icon={faAngleRight} />}
        </button>
  

    </div>
  );
};

export default TravelBucketlist;