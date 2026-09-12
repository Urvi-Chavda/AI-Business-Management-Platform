import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiHome } from "react-icons/fi";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <span>404</span>

        <h1>Page not found</h1>

        <p>
          The page you are looking for does not exist or has been
          moved.
        </p>

        <button type="button" onClick={() => navigate("/")}>
          <FiHome />
          Return to Home
          <FiArrowLeft />
        </button>
      </div>
    </main>
  );
}

export default NotFound;