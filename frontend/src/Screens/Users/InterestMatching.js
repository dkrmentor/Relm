import React, { useEffect, useState } from "react";
import { userProfile } from "../../api";
import "../../assets/Style/addprofile.css";
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
      const profileData = formValues;
      console.log("profileData");
console.log(profileData);
      await userProfile(userId, token, profileData);

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
        <div className="accordion">
          <h2>Health & Fitness</h2>
          <select
            name="health&fitness"
            value={formValues["health&fitness"]}
            onChange={handleChange}
            required
          >
            <option value="">Select option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </select>
        </div>

        <div className="accordion">
          <h2>Sports and Creation</h2>
          <select
            name="sportsAndCreation"
            value={formValues["sportsAndCreation"]}
            onChange={handleChange}
            required
          >
            <option value="">Select option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </select>
        </div>

        <div className="accordion">
          <h2>Creative & Performance</h2>
          <select
            name="creative&Performance"
            value={formValues["creative&Performance"]}
            onChange={handleChange}
            required
          >
            <option value="">Select option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </select>
        </div>

        <div className="accordion">
          <h2>Special Interest Housing</h2>
          <select
            name="specialInterestHousing"
            value={formValues["specialInterestHousing"]}
            onChange={handleChange}
            required
          >
            <option value="">Select option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </select>
        </div>

        <div className="accordion">
          <h2>Education and Student Life</h2>
          <select
            name="educationAndStudentLife"
            value={formValues["educationAndStudentLife"]}
            onChange={handleChange}
            required
          >
            <option value="">Select option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </select>
        </div>

        <div className="accordion">
          <h2>Lifestyle & Entertainment</h2>
          <select
            name="lifestyle&entertainment"
            value={formValues["lifestyle&entertainment"]}
            onChange={handleChange}
            required
          >
            <option value="">Select option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </select>
        </div>

        <div className="accordion">
          <h2>Business and Entrepreneurship</h2>
          <select
            name="businessAndEntrepreneurship"
            value={formValues["businessAndEntrepreneurship"]}
            onChange={handleChange}
            required
          >
            <option value="">Select option</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
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