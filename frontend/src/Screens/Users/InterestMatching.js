import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../loading_spinner";
// import { updateProfile } from "../../api";
import "../../assets/Style/addprofile.css";

const InterestMatching = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [accordionValues, setAccordionValues] = useState({
    accordion1: "",
    accordion2: "",
    accordion3: "",
    accordion4: "",
    accordion5: "",
    accordion6: "",
    accordion7: ""
  });
  const navigate = useNavigate();

  const handleAccordionChange = (accordion, value) => {
    setAccordionValues((prevValues) => ({
      ...prevValues,
      [accordion]: value
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const token = localStorage.getItem("token");
    const userId = 1; // Set the appropriate user ID

    try {
      // await updateProfile(userId, token, accordionValues);s
      toast.success("Profile updated", { autoClose: 2000 });
      navigate("/interestmatching"); // Redirect to "/interestmatching"
    } catch (error) {
      toast.error("Error updating profile", { autoClose: 2000 });
    }

    setIsLoading(false);
  };

  return (
    <div className="user-info layout-container">
      <div className="accordion-container">
        <div className="accordion">
          <input
            type="checkbox"
            id="accordion1"
            className="accordion-input"
          />
          <label className="accordion-label" htmlFor="accordion1">
            Accordion 1
          </label>
          <div className="accordion-content">
            <div className="choices">
              <label>
                <input
                  type="radio"
                  name="accordion1"
                  value="Choice 1"
                  checked={accordionValues.accordion1 === "Choice 1"}
                  onChange={() => handleAccordionChange("accordion1", "Choice 1")}
                />
                Choice 1
              </label>
              <label>
                <input
                  type="radio"
                  name="accordion1"
                  value="Choice 2"
                  checked={accordionValues.accordion1 === "Choice 2"}
                  onChange={() => handleAccordionChange("accordion1", "Choice 2")}
                />
                Choice 2
              </label>
              <label>
                <input
                  type="radio"
                  name="accordion1"
                  value="Choice 3"
                  checked={accordionValues.accordion1 === "Choice 3"}
                  onChange={() => handleAccordionChange("accordion1", "Choice 3")}
                />
                Choice 3
              </label>
              <label>
                <input
                  type="radio"
                  name="accordion1"
                  value="Choice 4"
                  checked={accordionValues.accordion1 === "Choice 4"}
                  onChange={() => handleAccordionChange("accordion1", "Choice 4")}
                />
                Choice 4
              </label>
              <label>
                <input
                  type="radio"
                  name="accordion1"
                  value="Choice 5"
                  checked={accordionValues.accordion1 === "Choice 5"}
                  onChange={() => handleAccordionChange("accordion1", "Choice 5")}
                />
                Choice 5
              </label>
            </div>
          </div>
        </div>

        {/* Repeat the above structure for the remaining accordions */}
        {/* Accordion 2 */}
        {/* Accordion 3 */}
        {/* Accordion 4 */}
        {/* Accordion 5 */}
        {/* Accordion 6 */}
        {/* Accordion 7 */}
      </div>

      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? <LoadingSpinner /> : <FontAwesomeIcon icon={faAngleRight} />}
      </button>

      <ToastContainer />
    </div>
  );
};

export default InterestMatching;
