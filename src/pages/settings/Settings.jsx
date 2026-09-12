import { useEffect, useState } from "react";

import {
  FiBell,
  FiBriefcase,
  FiCheckCircle,
  FiEye,
  FiGlobe,
  FiLock,
  FiMonitor,
  FiRefreshCw,
  FiSave,
  FiShield,
  FiSliders,
  FiUser,
} from "react-icons/fi";

import DashboardLayout from "../../components/layout/DashboardLayout";
import "../../styles/settings.css";

const defaultSettings = {
  profile: {
    name: "Urvi Chavda",
    email: "urvi@example.com",
    phone: "+91 98765 43210",
    location: "Surat, Gujarat",
  },

  company: {
    name: "AI Business Platform",
    website: "www.aibusinessplatform.com",
    industry: "Technology",
    address: "Surat, Gujarat",
  },

  notifications: {
    email: true,
    project: true,
    invoice: true,
    chat: true,
    marketing: false,
    push: true,
  },

  security: {
    twoFactor: false,
    loginAlerts: true,
    sessionAlerts: true,
  },

  appearance: {
    theme: "light",
    compactMode: false,
  },

  preferences: {
    language: "English",
    timezone: "Asia/Kolkata",
    currency: "INR",
  },

  privacy: {
    profileVisibility: "team",
    showActivity: true,
    showEmail: false,
  },
};

function Settings() {
  const [activeTab, setActiveTab] =
    useState("profile");

  const [settings, setSettings] =
    useState(defaultSettings);

  const [saved, setSaved] =
    useState(false);

  useEffect(() => {
    const storedSettings =
      localStorage.getItem("appSettings");

    const storedProfile =
      localStorage.getItem("userProfile");

    let loadedSettings = {
      ...defaultSettings,
    };

    if (storedSettings) {
      try {
        const parsedSettings =
          JSON.parse(storedSettings);

        loadedSettings = {
          ...defaultSettings,
          ...parsedSettings,

          profile: {
            ...defaultSettings.profile,
            ...parsedSettings.profile,
          },

          company: {
            ...defaultSettings.company,
            ...parsedSettings.company,
          },

          notifications: {
            ...defaultSettings.notifications,
            ...parsedSettings.notifications,
          },

          security: {
            ...defaultSettings.security,
            ...parsedSettings.security,
          },

          appearance: {
            ...defaultSettings.appearance,
            ...parsedSettings.appearance,
          },

          preferences: {
            ...defaultSettings.preferences,
            ...parsedSettings.preferences,
          },

          privacy: {
            ...defaultSettings.privacy,
            ...parsedSettings.privacy,
          },
        };
      } catch {
        loadedSettings = {
          ...defaultSettings,
        };
      }
    }

    if (storedProfile) {
      try {
        const profile =
          JSON.parse(storedProfile);

        loadedSettings = {
          ...loadedSettings,

          profile: {
            ...loadedSettings.profile,

            name:
              profile.name ||
              loadedSettings.profile.name,

            email:
              profile.email ||
              loadedSettings.profile.email,

            phone:
              profile.phone ||
              loadedSettings.profile.phone,

            location:
              profile.location ||
              loadedSettings.profile.location,
          },
        };
      } catch {
        // Invalid profile data ignore
      }
    }

    setSettings(loadedSettings);
  }, []);

  const updateSection = (
    section,
    field,
    value
  ) => {
    setSettings((prev) => ({
      ...prev,

      [section]: {
        ...prev[section],

        [field]: value,
      },
    }));
  };

  /* =========================
     SAVE SETTINGS
  ========================= */

  const handleSave = () => {
    localStorage.setItem(
      "appSettings",
      JSON.stringify(settings)
    );

    let oldProfile = {};

    try {
      oldProfile =
        JSON.parse(
          localStorage.getItem(
            "userProfile"
          ) || "{}"
        );
    } catch {
      oldProfile = {};
    }

    const updatedProfile = {
      ...oldProfile,

      name:
        settings.profile.name,

      email:
        settings.profile.email,

      phone:
        settings.profile.phone,

      location:
        settings.profile.location,
    };

    localStorage.setItem(
      "userProfile",
      JSON.stringify(updatedProfile)
    );

    /* APPLY THEME IMMEDIATELY */

    window.dispatchEvent(
      new Event("settingsUpdated")
    );

    /* PROFILE SYNC EVENT */

    window.dispatchEvent(
      new Event("profileUpdated")
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  /* =========================
     RESET SETTINGS
  ========================= */

  const handleReset = () => {
    const confirmReset =
      window.confirm(
        "Are you sure you want to reset all settings?"
      );

    if (!confirmReset) return;

    setSettings(defaultSettings);

    localStorage.setItem(
      "appSettings",
      JSON.stringify(defaultSettings)
    );

    window.dispatchEvent(
      new Event("settingsUpdated")
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const handlePasswordChange =
    () => {
      alert(
        "Change Password can be connected with backend authentication later."
      );
    };

  const tabs = [
    {
      id: "profile",
      label: "Profile",
      icon: FiUser,
    },

    {
      id: "company",
      label: "Company",
      icon: FiBriefcase,
    },

    {
      id: "notifications",
      label: "Notifications",
      icon: FiBell,
    },

    {
      id: "security",
      label: "Security",
      icon: FiLock,
    },

    {
      id: "appearance",
      label: "Appearance",
      icon: FiMonitor,
    },

    {
      id: "preferences",
      label: "Preferences",
      icon: FiGlobe,
    },

    {
      id: "privacy",
      label: "Privacy",
      icon: FiShield,
    },
  ];

  return (
    <DashboardLayout>
      <main className="settings-page">

        {/* HEADER */}

        <section className="settings-header">

          <div>

            <span className="settings-page-label">
              ACCOUNT SETTINGS
            </span>

            <h1>
              Settings
            </h1>

            <p>
              Manage your profile,
              company, security and
              application preferences.
            </p>

          </div>

          <div className="settings-header-actions">

            <button
              type="button"
              className="settings-reset-button"
              onClick={handleReset}
            >
              <FiRefreshCw />
              Reset
            </button>

            <button
              type="button"
              className="settings-save-button"
              onClick={handleSave}
            >
              <FiSave />
              Save Changes
            </button>

          </div>

        </section>

        {/* SUCCESS */}

        {saved && (
          <div className="settings-success-message">

            <FiCheckCircle />

            Settings saved successfully.

          </div>
        )}

        <section className="settings-layout">

          {/* SETTINGS SIDEBAR */}

          <aside className="settings-tabs-card">

            <div className="settings-tabs-title">

              <FiSliders />

              <div>

                <span>
                  SETTINGS
                </span>

                <strong>
                  Preferences
                </strong>

              </div>

            </div>

            <div className="settings-tabs-list">

              {tabs.map((tab) => {
                const Icon =
                  tab.icon;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    className={`settings-tab-button ${
                      activeTab ===
                      tab.id
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveTab(
                        tab.id
                      )
                    }
                  >
                    <Icon />

                    {tab.label}
                  </button>
                );
              })}

            </div>

          </aside>

          {/* CONTENT */}

          <section className="settings-content-card">

            {/* =========================
                PROFILE
            ========================= */}

            {activeTab ===
              "profile" && (
              <div>

                <SectionHeader
                  label="PROFILE SETTINGS"
                  title="Personal Information"
                  description="Update your basic account information."
                />

                <div className="settings-form-grid">

                  <FormInput
                    label="Full Name"
                    value={
                      settings.profile
                        .name
                    }
                    onChange={(value) =>
                      updateSection(
                        "profile",
                        "name",
                        value
                      )
                    }
                  />

                  <FormInput
                    label="Email Address"
                    type="email"
                    value={
                      settings.profile
                        .email
                    }
                    onChange={(value) =>
                      updateSection(
                        "profile",
                        "email",
                        value
                      )
                    }
                  />

                  <FormInput
                    label="Phone Number"
                    value={
                      settings.profile
                        .phone
                    }
                    onChange={(value) =>
                      updateSection(
                        "profile",
                        "phone",
                        value
                      )
                    }
                  />

                  <FormInput
                    label="Location"
                    value={
                      settings.profile
                        .location
                    }
                    onChange={(value) =>
                      updateSection(
                        "profile",
                        "location",
                        value
                      )
                    }
                  />

                </div>

              </div>
            )}

            {/* =========================
                COMPANY
            ========================= */}

            {activeTab ===
              "company" && (
              <div>

                <SectionHeader
                  label="COMPANY SETTINGS"
                  title="Business Information"
                  description="Manage your company details."
                />

                <div className="settings-form-grid">

                  <FormInput
                    label="Company Name"
                    value={
                      settings.company
                        .name
                    }
                    onChange={(value) =>
                      updateSection(
                        "company",
                        "name",
                        value
                      )
                    }
                  />

                  <FormInput
                    label="Website"
                    value={
                      settings.company
                        .website
                    }
                    onChange={(value) =>
                      updateSection(
                        "company",
                        "website",
                        value
                      )
                    }
                  />

                  <FormInput
                    label="Industry"
                    value={
                      settings.company
                        .industry
                    }
                    onChange={(value) =>
                      updateSection(
                        "company",
                        "industry",
                        value
                      )
                    }
                  />

                  <FormInput
                    label="Address"
                    value={
                      settings.company
                        .address
                    }
                    onChange={(value) =>
                      updateSection(
                        "company",
                        "address",
                        value
                      )
                    }
                  />

                </div>

              </div>
            )}

            {/* =========================
                NOTIFICATIONS
            ========================= */}

            {activeTab ===
              "notifications" && (
              <div>

                <SectionHeader
                  label="NOTIFICATIONS"
                  title="Notification Preferences"
                  description="Choose which alerts you want to receive."
                />

                <div className="settings-toggle-list">

                  <ToggleRow
                    title="Email Notifications"
                    description="Receive important updates by email."
                    checked={
                      settings
                        .notifications
                        .email
                    }
                    onChange={(value) =>
                      updateSection(
                        "notifications",
                        "email",
                        value
                      )
                    }
                  />

                  <ToggleRow
                    title="Project Updates"
                    description="Receive project and task updates."
                    checked={
                      settings
                        .notifications
                        .project
                    }
                    onChange={(value) =>
                      updateSection(
                        "notifications",
                        "project",
                        value
                      )
                    }
                  />

                  <ToggleRow
                    title="Invoice Alerts"
                    description="Receive invoice and payment notifications."
                    checked={
                      settings
                        .notifications
                        .invoice
                    }
                    onChange={(value) =>
                      updateSection(
                        "notifications",
                        "invoice",
                        value
                      )
                    }
                  />

                  <ToggleRow
                    title="Chat Notifications"
                    description="Receive alerts for new messages."
                    checked={
                      settings
                        .notifications
                        .chat
                    }
                    onChange={(value) =>
                      updateSection(
                        "notifications",
                        "chat",
                        value
                      )
                    }
                  />

                  <ToggleRow
                    title="Push Notifications"
                    description="Allow browser and device alerts."
                    checked={
                      settings
                        .notifications
                        .push
                    }
                    onChange={(value) =>
                      updateSection(
                        "notifications",
                        "push",
                        value
                      )
                    }
                  />

                  <ToggleRow
                    title="Marketing Emails"
                    description="Receive product news and promotional updates."
                    checked={
                      settings
                        .notifications
                        .marketing
                    }
                    onChange={(value) =>
                      updateSection(
                        "notifications",
                        "marketing",
                        value
                      )
                    }
                  />

                </div>

              </div>
            )}

            {/* =========================
                SECURITY
            ========================= */}

            {activeTab ===
              "security" && (
              <div>

                <SectionHeader
                  label="SECURITY"
                  title="Security Settings"
                  description="Protect your account and login activity."
                />

                <div className="settings-security-card">

                  <div>

                    <strong>
                      Password
                    </strong>

                    <span>
                      Change your current
                      account password.
                    </span>

                  </div>

                  <button
                    type="button"
                    onClick={
                      handlePasswordChange
                    }
                  >
                    Change Password
                  </button>

                </div>

                <div className="settings-toggle-list">

                  <ToggleRow
                    title="Two-Factor Authentication"
                    description="Add an extra security step to login."
                    checked={
                      settings.security
                        .twoFactor
                    }
                    onChange={(value) =>
                      updateSection(
                        "security",
                        "twoFactor",
                        value
                      )
                    }
                  />

                  <ToggleRow
                    title="Login Alerts"
                    description="Get notified when a new login is detected."
                    checked={
                      settings.security
                        .loginAlerts
                    }
                    onChange={(value) =>
                      updateSection(
                        "security",
                        "loginAlerts",
                        value
                      )
                    }
                  />

                  <ToggleRow
                    title="Session Alerts"
                    description="Receive alerts about unusual account sessions."
                    checked={
                      settings.security
                        .sessionAlerts
                    }
                    onChange={(value) =>
                      updateSection(
                        "security",
                        "sessionAlerts",
                        value
                      )
                    }
                  />

                </div>

              </div>
            )}

            {/* =========================
                APPEARANCE
            ========================= */}

            {activeTab ===
              "appearance" && (
              <div>

                <SectionHeader
                  label="APPEARANCE"
                  title="Interface Preferences"
                  description="Customize how the platform looks."
                />

                <div className="settings-theme-grid">

                  {[
                    {
                      id: "light",
                      title: "Light",
                      text:
                        "Bright interface",
                    },
                    {
                      id: "dark",
                      title: "Dark",
                      text:
                        "Dark interface",
                    },
                    {
                      id: "system",
                      title: "System",
                      text:
                        "Follow device theme",
                    },
                  ].map((theme) => (
                    <button
                      key={theme.id}
                      type="button"
                      className={`settings-theme-card ${
                        settings
                          .appearance
                          .theme ===
                        theme.id
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        updateSection(
                          "appearance",
                          "theme",
                          theme.id
                        )
                      }
                    >

                      <FiMonitor />

                      <strong>
                        {
                          theme.title
                        }
                      </strong>

                      <span>
                        {theme.text}
                      </span>

                    </button>
                  ))}

                </div>

                <div className="settings-toggle-list settings-toggle-spacing">

                  <ToggleRow
                    title="Compact Mode"
                    description="Reduce spacing to display more content."
                    checked={
                      settings
                        .appearance
                        .compactMode
                    }
                    onChange={(value) =>
                      updateSection(
                        "appearance",
                        "compactMode",
                        value
                      )
                    }
                  />

                </div>

                <div
                  style={{
                    marginTop: "12px",
                    padding: "10px 12px",
                    border:
                      "1px solid #dbe3ef",
                    borderRadius: "8px",
                    fontSize: "7px",
                    color: "#64748b",
                  }}
                >
                  Theme and compact mode
                  will apply after clicking
                  Save Changes.
                </div>

              </div>
            )}

            {/* =========================
                PREFERENCES
            ========================= */}

            {activeTab ===
              "preferences" && (
              <div>

                <SectionHeader
                  label="PREFERENCES"
                  title="Regional Preferences"
                  description="Configure language, timezone and currency."
                />

                <div className="settings-form-grid">

                  <div className="settings-form-group">

                    <label>
                      Language
                    </label>

                    <select
                      value={
                        settings
                          .preferences
                          .language
                      }
                      onChange={(e) =>
                        updateSection(
                          "preferences",
                          "language",
                          e.target.value
                        )
                      }
                    >
                      <option value="English">
                        English
                      </option>

                      <option value="Gujarati">
                        Gujarati
                      </option>

                      <option value="Hindi">
                        Hindi
                      </option>
                    </select>

                  </div>

                  <div className="settings-form-group">

                    <label>
                      Time Zone
                    </label>

                    <select
                      value={
                        settings
                          .preferences
                          .timezone
                      }
                      onChange={(e) =>
                        updateSection(
                          "preferences",
                          "timezone",
                          e.target.value
                        )
                      }
                    >
                      <option value="Asia/Kolkata">
                        India Standard Time
                      </option>

                      <option value="UTC">
                        UTC
                      </option>

                      <option value="America/New_York">
                        New York
                      </option>

                      <option value="Europe/London">
                        London
                      </option>
                    </select>

                  </div>

                  <div className="settings-form-group">

                    <label>
                      Currency
                    </label>

                    <select
                      value={
                        settings
                          .preferences
                          .currency
                      }
                      onChange={(e) =>
                        updateSection(
                          "preferences",
                          "currency",
                          e.target.value
                        )
                      }
                    >
                      <option value="INR">
                        INR - ₹
                      </option>

                      <option value="USD">
                        USD - $
                      </option>

                      <option value="EUR">
                        EUR - €
                      </option>
                    </select>

                  </div>

                </div>

              </div>
            )}

            {/* =========================
                PRIVACY
            ========================= */}

            {activeTab ===
              "privacy" && (
              <div>

                <SectionHeader
                  label="PRIVACY"
                  title="Privacy Settings"
                  description="Control how your information is shown."
                />

                <div className="settings-form-group settings-privacy-select">

                  <label>
                    Profile Visibility
                  </label>

                  <select
                    value={
                      settings.privacy
                        .profileVisibility
                    }
                    onChange={(e) =>
                      updateSection(
                        "privacy",
                        "profileVisibility",
                        e.target.value
                      )
                    }
                  >
                    <option value="team">
                      Team Members
                    </option>

                    <option value="company">
                      Entire Company
                    </option>

                    <option value="private">
                      Private
                    </option>
                  </select>

                </div>

                <div className="settings-toggle-list settings-toggle-spacing">

                  <ToggleRow
                    icon={<FiEye />}
                    title="Show Activity Status"
                    description="Allow team members to see when you are active."
                    checked={
                      settings.privacy
                        .showActivity
                    }
                    onChange={(value) =>
                      updateSection(
                        "privacy",
                        "showActivity",
                        value
                      )
                    }
                  />

                  <ToggleRow
                    title="Show Email Address"
                    description="Allow other members to view your email."
                    checked={
                      settings.privacy
                        .showEmail
                    }
                    onChange={(value) =>
                      updateSection(
                        "privacy",
                        "showEmail",
                        value
                      )
                    }
                  />

                </div>

              </div>
            )}

          </section>

        </section>

      </main>
    </DashboardLayout>
  );
}

/* =========================
   SECTION HEADER
========================= */

function SectionHeader({
  label,
  title,
  description,
}) {
  return (
    <div className="settings-section-header">

      <span>
        {label}
      </span>

      <h2>
        {title}
      </h2>

      <p>
        {description}
      </p>

    </div>
  );
}

/* =========================
   FORM INPUT
========================= */

function FormInput({
  label,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="settings-form-group">

      <label>
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
      />

    </div>
  );
}

/* =========================
   TOGGLE ROW
========================= */

function ToggleRow({
  title,
  description,
  checked,
  onChange,
  icon,
}) {
  return (
    <div className="settings-toggle-row">

      <div className="settings-toggle-info">

        {icon && (
          <div className="settings-toggle-icon">
            {icon}
          </div>
        )}

        <div>

          <strong>
            {title}
          </strong>

          <span>
            {description}
          </span>

        </div>

      </div>

      <button
        type="button"
        className={`settings-switch ${
          checked
            ? "active"
            : ""
        }`}
        onClick={() =>
          onChange(!checked)
        }
        aria-label={title}
      >
        <span />
      </button>

    </div>
  );
}

export default Settings;