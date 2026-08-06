import { FiArrowLeft, FiChevronRight, FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function GoogleLogin({ setPage }) {
  const navigate = useNavigate();

  const accounts = [
    {
      id: 1,
      name: "Urvi Chavda",
      email: "urvi@gmail.com",
      initials: "UC",
    },
    {
      id: 2,
      name: "Work Account",
      email: "urvi.work@gmail.com",
      initials: "WA",
    },
  ];

  const handleAccountSelect = (account) => {
    localStorage.setItem(
      "aiBusinessUser",
      JSON.stringify({
        name: account.name,
        email: account.email,
        loginMethod: "google",
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="auth-card-content">
      <button
        type="button"
        className="auth-back-button"
        onClick={() => setPage("login")}
      >
        <FiArrowLeft />
        Back to login
      </button>

      <div className="google-header-icon">
        <FcGoogle />
      </div>

      <div className="auth-title-area">
        <h2>Choose an account</h2>

        <p>
          Continue to AI Business Management Platform using Google.
        </p>
      </div>

      <div className="google-account-list">
        {accounts.map((account) => (
          <button
            type="button"
            className="google-account-card"
            key={account.id}
            onClick={() => handleAccountSelect(account)}
          >
            <span className="google-account-avatar">
              {account.initials}
            </span>

            <span className="google-account-details">
              <strong>{account.name}</strong>
              <small>{account.email}</small>
            </span>

            <FiChevronRight />
          </button>
        ))}

        <button
          type="button"
          className="google-account-card"
          onClick={() => {
            const email = window.prompt("Enter your Google email:");

            if (email) {
              handleAccountSelect({
                name: "Google User",
                email,
              });
            }
          }}
        >
          <span className="google-account-avatar other-account">
            <FiUser />
          </span>

          <span className="google-account-details">
            <strong>Use another account</strong>
            <small>Sign in with a different Google account</small>
          </span>

          <FiChevronRight />
        </button>
      </div>

      <p className="auth-terms-text">
        This is a frontend demonstration. Real Google authentication
        requires Google OAuth integration.
      </p>
    </div>
  );
}

export default GoogleLogin;