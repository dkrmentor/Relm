import React, { useEffect, useState } from "react";
import { userProfile } from "../../api";
import "../../assets/Style/interestmatching.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../loading_spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const InterestMatching = () => {
  const [formValues, setFormValues] = useState({
    "health&fitness": "",
    "sportsAndCreation": "",
    "creative&Performance": "",
    "specialInterestHousing": "",
    "educationAndStudentLife": "",
    "lifestyle&entertainment": "",
    "businessAndEntrepreneurship": ""
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const invalidAccordions = Object.values(formValues).some((value) => value === "");
    if (invalidAccordions) {
      toast.error("Please fill in all the accordions", { autoClose: 2000 });
      return;
    }

    setIsLoading(true);

    try {
      const profileData =  {
        accordionList: formValues,
      }; 
     
      await userProfile(userId, token, profileData);

      toast.success("Profile added", { autoClose: 2000 });
      navigate("/travelbucketlist"); // Redirect 
    } catch (error) {
      toast.error("Error creating profile", { autoClose: 2000 });
    }

    setIsLoading(false);
  };

  return (
    <div className="user-info layout-container">
      <form>
        <div className="accordion">
          {/* <h2>Health & Fitness</h2> */}
          <select
            name="health&fitness"
            value={formValues["health&fitness"]}
            onChange={handleChange}
            required
          >
            <option disabled value="">Health & Fitness</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Masters">Masters</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Greek Associations">Greek Associations</option>
            <option value="Foreign Exchange">Foreign Exchange</option>
          </select>
        </div>

        <div className="accordion">
          {/* <h2>Sports and Creation</h2> */}
          <select
            name="sportsAndCreation"
            value={formValues["sportsAndCreation"]}
            onChange={handleChange}
            required
          >
            <option disabled value="">Sports and Creation</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Masters">Masters</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Greek Associations">Greek Associations</option>
            <option value="Foreign Exchange">Foreign Exchange</option>
          </select>
        </div>

        <div className="accordion">
          {/* <h2>Creative & Performance</h2> */}
          <select
            name="creative&Performance"
            value={formValues["creative&Performance"]}
            onChange={handleChange}
            required
          >
            <option disabled value="">Creative & Performance</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Masters">Masters</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Greek Associations">Greek Associations</option>
            <option value="Foreign Exchange">Foreign Exchange</option>
          </select>
        </div>

        <div className="accordion">
          {/* <h2>Special Interest Housing</h2> */}
          <select
            name="specialInterestHousing"
            value={formValues["specialInterestHousing"]}
            onChange={handleChange}
            required
          >
            <option disabled value="">Special Interest Housing</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Masters">Masters</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Greek Associations">Greek Associations</option>
            <option value="Foreign Exchange">Foreign Exchange</option>
          </select>
        </div>

        <div className="accordion">
          {/* <h2>Education and Student Life</h2> */}
          <select
            name="educationAndStudentLife"
            value={formValues["educationAndStudentLife"]}
            onChange={handleChange}
            required
          >
            <option disabled value="">Education and Student Life</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Masters">Masters</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Greek Associations">Greek Associations</option>
            <option value="Foreign Exchange">Foreign Exchange</option>
          </select>
        </div>

        <div className="accordion">
          {/* <h2>Lifestyle & Entertainment</h2> */}
          <select
            name="lifestyle&entertainment"
            value={formValues["lifestyle&entertainment"]}
            onChange={handleChange}
            required
          >
            <option disabled value="">Lifestyle & Entertainment</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Masters">Masters</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Greek Associations">Greek Associations</option>
            <option value="Foreign Exchange">Foreign Exchange</option>
          </select>
        </div>

        <div className="accordion">
          {/* <h2>Business and Entrepreneurship</h2> */}
          <select
            name="businessAndEntrepreneurship"
            value={formValues["businessAndEntrepreneurship"]}
            onChange={handleChange}
            required
          >
            <option disabled value="">Business and Entrepreneurship</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Masters">Masters</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Greek Associations">Greek Associations</option>
            <option value="Foreign Exchange">Foreign Exchange</option>
          </select>
        </div>

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

export default InterestMatching;