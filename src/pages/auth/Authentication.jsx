import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import AuthLayout from "../../components/auth/AuthLayout";

import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import GoogleLogin from "./GoogleLogin";
import EmailVerification from "./EmailVerification";

import "../../styles/auth.css";

function Authentication({ initialPage = "login" }) {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [registeredEmail, setRegisteredEmail] = useState("");

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  const changePage = (page) => {
    setCurrentPage(page);

    if (page === "login") {
      navigate("/login");
    }

    if (page === "register") {
      navigate("/register");
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "register":
        return (
          <Register
            setPage={changePage}
            onRegistrationSuccess={(email) => {
              setRegisteredEmail(email);
              setCurrentPage("emailVerification");
            }}
          />
        );

      case "forgotPassword":
        return <ForgotPassword setPage={setCurrentPage} />;

      case "googleLogin":
        return <GoogleLogin setPage={setCurrentPage} />;

      case "emailVerification":
        return (
          <EmailVerification
            setPage={changePage}
            email={registeredEmail}
          />
        );

      case "login":
      default:
        return <Login setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="authentication-container">
      <Navbar
        onLoginClick={() => changePage("login")}
        onRegisterClick={() => changePage("register")}
      />

      <AuthLayout currentPage={currentPage}>
        {renderCurrentPage()}
      </AuthLayout>
    </div>
  );
}

export default Authentication;