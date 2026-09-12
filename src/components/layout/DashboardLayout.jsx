import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiBell,
  FiChevronDown,
  FiSettings,
  FiUser,
} from "react-icons/fi";

import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
  const navigate = useNavigate();

  const defaultProfile = {
    name: "Urvi Chavda",
    role: "Administrator",
    email: "urvi@example.com",
    profileImage: "",
  };

  const [profile, setProfile] =
    useState(defaultProfile);

  const [menuOpen, setMenuOpen] =
    useState(false);

  /* =========================
     LOAD PROFILE
  ========================= */

  const loadProfile = () => {
    try {
      const savedProfile =
        JSON.parse(
          localStorage.getItem(
            "userProfile"
          ) || "{}"
        );

      setProfile({
        ...defaultProfile,
        ...savedProfile,
      });
    } catch {
      setProfile(defaultProfile);
    }
  };

  useEffect(() => {
    loadProfile();

    const handleProfileUpdate =
      () => {
        loadProfile();
      };

    window.addEventListener(
      "profileUpdated",
      handleProfileUpdate
    );

    window.addEventListener(
      "storage",
      handleProfileUpdate
    );

    return () => {
      window.removeEventListener(
        "profileUpdated",
        handleProfileUpdate
      );

      window.removeEventListener(
        "storage",
        handleProfileUpdate
      );
    };
  }, []);

  /* =========================
     INITIALS
  ========================= */

  const initials =
    profile.name
      ?.split(" ")
      .filter(Boolean)
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "UC";

  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN */}

      <div className="dashboard-main">

        {/* TOPBAR */}

        <header className="dashboard-topbar">

          <div className="dashboard-topbar-left">

            <div>
              <span className="dashboard-topbar-label">
                WORKSPACE
              </span>

              <strong>
                AI Business Platform
              </strong>
            </div>

          </div>

          <div className="dashboard-topbar-right">

            {/* NOTIFICATION */}

            <button
              type="button"
              className="dashboard-topbar-icon"
              onClick={() =>
                navigate(
                  "/notifications"
                )
              }
              aria-label="Notifications"
            >
              <FiBell />

              <span className="dashboard-notification-dot">
                3
              </span>
            </button>

            {/* USER */}

            <div className="dashboard-user-menu">

              <button
                type="button"
                className="dashboard-user-button"
                onClick={() =>
                  setMenuOpen(
                    (prev) => !prev
                  )
                }
              >

                <div className="dashboard-user-avatar">

                  {profile.profileImage ? (
                    <img
                      src={
                        profile.profileImage
                      }
                      alt={profile.name}
                    />
                  ) : (
                    <span>
                      {initials}
                    </span>
                  )}

                </div>

                <div className="dashboard-user-info">

                  <strong>
                    {profile.name}
                  </strong>

                  <span>
                    {profile.role ||
                      "Administrator"}
                  </span>

                </div>

                <FiChevronDown
                  className={`dashboard-user-chevron ${
                    menuOpen
                      ? "open"
                      : ""
                  }`}
                />

              </button>

              {/* DROPDOWN */}

              {menuOpen && (
                <div className="dashboard-user-dropdown">

                  <div className="dashboard-dropdown-profile">

                    <div className="dashboard-dropdown-avatar">

                      {profile.profileImage ? (
                        <img
                          src={
                            profile.profileImage
                          }
                          alt={
                            profile.name
                          }
                        />
                      ) : (
                        <span>
                          {initials}
                        </span>
                      )}

                    </div>

                    <div>

                      <strong>
                        {profile.name}
                      </strong>

                      <span>
                        {profile.email}
                      </span>

                    </div>

                  </div>

                  <div className="dashboard-dropdown-divider" />

                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);

                      navigate(
                        "/profile"
                      );
                    }}
                  >
                    <FiUser />

                    My Profile
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);

                      navigate(
                        "/settings"
                      );
                    }}
                  >
                    <FiSettings />

                    Settings
                  </button>

                </div>
              )}

            </div>

          </div>

        </header>

        {/* PAGE CONTENT */}

        <div className="dashboard-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;