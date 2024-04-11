import React from 'react';
import { FiUser, FiBell, FiLock, FiHelpCircle } from 'react-icons/fi'; // Import icons
import "../assets/css/index.css";
const settingsOptions = [
  { id: 1, name: 'Account', icon: <FiUser /> },
  { id: 2, name: 'Notifications', icon: <FiBell /> },
  { id: 3, name: 'Privacy', icon: <FiLock /> },
  { id: 4, name: 'Help', icon: <FiHelpCircle /> },
];

function SettingsPage() {
  return (
    <div className="settings-main">
      <h1>Settings</h1>
      <ul className="settings-list">
        {settingsOptions.map((option) => (
          <li key={option.id} className="settings-option">
            {option.icon}
            <span className="option-name">{option.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SettingsPage;