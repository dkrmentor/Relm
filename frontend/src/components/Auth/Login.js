import React, { useContext, useState } from "react";
import { postLogin } from "../../api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logoIcon from '../../assets/Images/logoIcon.png';
import "../../assets/Style/login.css";

const LoginPage = () => {
  const { handleLogin } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await postLogin(username, password);
      if (user) {
        toast.success("Login successful", { autoClose: 2000 });
        localStorage.setItem('isLoggedIn', 'true');
        handleLogin(true);
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 2000);
      } else {
        toast.error("Invalid login credentials", { autoClose: 2000 });
      }
    } catch (error) {
      toast.error("An error occurred", { autoClose: 2000 });
    }
  };

  return (
    <div className="login-page">
      <div className="logo-icon-container mid-container mid1">
        <img src={logoIcon} alt="Logo" />
      </div>

      <div className="login-page__content mid-container mid2">
        <form className="login-page__form" onSubmit={handleSubmit}>
          <input
            className="login-page__input"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
            required
          />

          <input
            className="login-page__input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <button className="login-page__button" type="submit">
            Validate member
          </button>
          <p className="para-title">
            <small>Forgot password?</small>
          </p>
        </form>
      </div>

      <div className="extra-container mid-container mid3">
        <div className="ending-container">
          <p className="">Sign in with</p>
          <img width="40" src={logoIcon} alt="Logo" />
          <img width="40" src={logoIcon} alt="Logo" />
        </div>
        <div className="ending-container">
          <p className="foot-title">Terms of Service | Privacy Policy | Help</p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default LoginPage;