import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiBriefcase,
  FiCamera,
  FiCheckCircle,
  FiEdit3,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSave,
  FiUser,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/profile.css";

const defaultProfile = {
  name: "Urvi Chavda",
  email: "urvi@example.com",
  phone: "+91 98765 43210",
  role: "Administrator",
  company: "AI Business Platform",
  department: "Management",
  location: "Surat, Gujarat",
  bio:
    "Managing business operations, projects, clients and team activities using the AI Business Management Platform.",
  profileImage: "",
};

function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] =
    useState(defaultProfile);

  const [editing, setEditing] =
    useState(false);

  const [saved, setSaved] =
    useState(false);

  /* =========================
     LOAD PROFILE
  ========================= */

  useEffect(() => {
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
  }, []);

  /* =========================
     INPUT CHANGE
  ========================= */

  const handleChange = (
    field,
    value
  ) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* =========================
     IMAGE UPLOAD
  ========================= */

  const handleImageChange = (
    event
  ) => {
    const file =
      event.target.files?.[0];

    if (!file) return;

    /* Basic validation */

    const validTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (
      !validTypes.includes(
        file.type
      )
    ) {
      alert(
        "Please select JPG, PNG or WEBP image."
      );

      return;
    }

    if (
      file.size >
      2 * 1024 * 1024
    ) {
      alert(
        "Profile image must be less than 2 MB."
      );

      return;
    }

    const reader =
      new FileReader();

    reader.onload = () => {
      setProfile((prev) => ({
        ...prev,

        profileImage:
          reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  /* =========================
     SAVE PROFILE
  ========================= */

  const handleSave = () => {
    if (
      !profile.name.trim()
    ) {
      alert(
        "Please enter your full name."
      );

      return;
    }

    if (
      !profile.email.trim()
    ) {
      alert(
        "Please enter your email address."
      );

      return;
    }

    localStorage.setItem(
      "userProfile",
      JSON.stringify(profile)
    );

    /*
      Sync Profile data with
      Settings profile section
    */

    try {
      const savedSettings =
        JSON.parse(
          localStorage.getItem(
            "appSettings"
          ) || "{}"
        );

      const updatedSettings = {
        ...savedSettings,

        profile: {
          ...savedSettings.profile,

          name:
            profile.name,

          email:
            profile.email,

          phone:
            profile.phone,

          location:
            profile.location,
        },
      };

      localStorage.setItem(
        "appSettings",
        JSON.stringify(
          updatedSettings
        )
      );
    } catch {
      // Ignore settings sync error
    }

    /*
      Important:
      DashboardLayout listens
      for this event.
    */

    window.dispatchEvent(
      new Event(
        "profileUpdated"
      )
    );

    setEditing(false);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  /* =========================
     CANCEL EDIT
  ========================= */

  const handleCancel = () => {
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
      setProfile(
        defaultProfile
      );
    }

    setEditing(false);
  };

  /* =========================
     INITIALS
  ========================= */

  const initials =
    profile.name
      ?.split(" ")
      .filter(Boolean)
      .map(
        (word) =>
          word[0]
      )
      .join("")
      .slice(0, 2)
      .toUpperCase() ||
    "UC";

  return (
    <DashboardLayout>

      <main className="profile-page">

        {/* =====================
            BACK
        ===================== */}

        <button
          type="button"
          className="profile-back-button"
          onClick={() =>
            navigate(
              "/dashboard"
            )
          }
        >
          <FiArrowLeft />

          Back to Dashboard
        </button>

        {/* =====================
            HEADER
        ===================== */}

        <section className="profile-header">

          <div>

            <span className="profile-page-label">
              MY ACCOUNT
            </span>

            <h1>
              My Profile
            </h1>

            <p>
              Manage your personal and
              professional account
              information.
            </p>

          </div>

          <div className="profile-header-actions">

            {!editing ? (
              <button
                type="button"
                className="profile-edit-button"
                onClick={() =>
                  setEditing(
                    true
                  )
                }
              >
                <FiEdit3 />

                Edit Profile
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="profile-cancel-button"
                  onClick={
                    handleCancel
                  }
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="profile-save-button"
                  onClick={
                    handleSave
                  }
                >
                  <FiSave />

                  Save Changes
                </button>
              </>
            )}

          </div>

        </section>

        {/* =====================
            SUCCESS MESSAGE
        ===================== */}

        {saved && (
          <div className="profile-success-message">

            <FiCheckCircle />

            Profile updated successfully.

          </div>
        )}

        {/* =====================
            PROFILE CARD
        ===================== */}

        <section className="profile-main-card">

          <div className="profile-cover" />

          <div className="profile-main-content">

            {/* AVATAR */}

            <div className="profile-avatar-wrapper">

              <div className="profile-avatar">

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

              {editing && (
                <>
                  <label
                    htmlFor="profile-image"
                    className="profile-camera-button"
                    title="Change profile photo"
                  >
                    <FiCamera />
                  </label>

                  <input
                    id="profile-image"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={
                      handleImageChange
                    }
                    style={{
                      display:
                        "none",
                    }}
                  />
                </>
              )}

            </div>

            {/* MAIN INFO */}

            <div className="profile-main-info">

              <h2>
                {profile.name}
              </h2>

              <p>
                {profile.role}
              </p>

              <span>
                {
                  profile.company
                }
              </span>

            </div>

          </div>

        </section>

        {/* =====================
            INFORMATION GRID
        ===================== */}

        <section className="profile-grid">

          {/* PERSONAL INFORMATION */}

          <div className="profile-info-card">

            <div className="profile-card-heading">

              <div className="profile-heading-icon">

                <FiUser />

              </div>

              <div>

                <span>
                  PERSONAL
                </span>

                <h3>
                  Personal Information
                </h3>

              </div>

            </div>

            <div className="profile-form-grid">

              <ProfileField
                label="Full Name"
                icon={<FiUser />}
                value={
                  profile.name
                }
                disabled={
                  !editing
                }
                onChange={(value) =>
                  handleChange(
                    "name",
                    value
                  )
                }
              />

              <ProfileField
                label="Email Address"
                icon={<FiMail />}
                type="email"
                value={
                  profile.email
                }
                disabled={
                  !editing
                }
                onChange={(value) =>
                  handleChange(
                    "email",
                    value
                  )
                }
              />

              <ProfileField
                label="Phone Number"
                icon={<FiPhone />}
                value={
                  profile.phone
                }
                disabled={
                  !editing
                }
                onChange={(value) =>
                  handleChange(
                    "phone",
                    value
                  )
                }
              />

              <ProfileField
                label="Location"
                icon={<FiMapPin />}
                value={
                  profile.location
                }
                disabled={
                  !editing
                }
                onChange={(value) =>
                  handleChange(
                    "location",
                    value
                  )
                }
              />

            </div>

          </div>

          {/* PROFESSIONAL INFORMATION */}

          <div className="profile-info-card">

            <div className="profile-card-heading">

              <div className="profile-heading-icon">

                <FiBriefcase />

              </div>

              <div>

                <span>
                  PROFESSIONAL
                </span>

                <h3>
                  Work Information
                </h3>

              </div>

            </div>

            <div className="profile-form-grid">

              <ProfileField
                label="Role"
                value={
                  profile.role
                }
                disabled={
                  !editing
                }
                onChange={(value) =>
                  handleChange(
                    "role",
                    value
                  )
                }
              />

              <ProfileField
                label="Department"
                value={
                  profile.department
                }
                disabled={
                  !editing
                }
                onChange={(value) =>
                  handleChange(
                    "department",
                    value
                  )
                }
              />

              <div className="profile-full-field">

                <ProfileField
                  label="Company"
                  value={
                    profile.company
                  }
                  disabled={
                    !editing
                  }
                  onChange={(value) =>
                    handleChange(
                      "company",
                      value
                    )
                  }
                />

              </div>

            </div>

          </div>

        </section>

        {/* =====================
            BIO
        ===================== */}

        <section className="profile-bio-card">

          <div className="profile-card-heading">

            <div className="profile-heading-icon">

              <FiUser />

            </div>

            <div>

              <span>
                ABOUT
              </span>

              <h3>
                Profile Bio
              </h3>

            </div>

          </div>

          <div className="profile-form-group">

            <label>
              About You
            </label>

            <textarea
              rows="5"
              value={
                profile.bio
              }
              disabled={
                !editing
              }
              onChange={(e) =>
                handleChange(
                  "bio",
                  e.target.value
                )
              }
              placeholder="Write something about yourself..."
            />

          </div>

        </section>

      </main>

    </DashboardLayout>
  );
}

/* =========================
   PROFILE FIELD
========================= */

function ProfileField({
  label,
  value,
  onChange,
  disabled,
  icon,
  type = "text",
}) {
  return (
    <div className="profile-form-group">

      <label>
        {label}
      </label>

      <div className="profile-input-wrapper">

        {icon && (
          <span className="profile-input-icon">
            {icon}
          </span>
        )}

        <input
          type={type}
          value={
            value || ""
          }
          disabled={
            disabled
          }
          onChange={(e) =>
            onChange(
              e.target.value
            )
          }
          className={
            icon
              ? "profile-input-with-icon"
              : ""
          }
        />

      </div>

    </div>
  );
}

export default Profile;