import { useState } from 'react';
import './Registrate.css';
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa6';
import { BsCalendarDate } from 'react-icons/bs';

export default function Registrate() {
  const [role, setRole] = useState('Talent');
  const [gender, setGender] = useState('Male');
  const [region, setRegion] = useState('');

  const regions = [
    'Andijon viloyati',
    'Buxoro viloyati',
    'Farg‘ona viloyati',
    'Jizzax viloyati',
    'Namangan viloyati',
    'Navoiy viloyati',
    'Qashqadaryo viloyati',
    'Qoraqalpog‘iston Respublikasi',
    'Samarqand viloyati',
    'Sirdaryo viloyati',
    'Surxondaryo viloyati',
    'Toshkent viloyati',
    'Toshkent shahri',
  ];

  return (
    <div className="container">
      <div className="card">
        {/* Toggle */}
        <div className="toggle">
          <button
            className={role === 'Talent' ? 'active' : ''}
            onClick={() => setRole('Talent')}
          >
            <FaUser /> Talent
          </button>
          <button
            className={role === 'Company' ? 'active' : ''}
            onClick={() => setRole('Company')}
          >
            <FaBuilding /> Company
          </button>
        </div>

        {/* Form */}
        <form className="form">
          <div className="field">
            <label>First name *</label>
            <div className="input-box">
              <FaUser className="icon" />
              <input type="text" placeholder="Enter name" required />
            </div>
          </div>

          <div className="field">
            <label>Last name *</label>
            <div className="input-box">
              <FaUser className="icon" />
              <input type="text" placeholder="Enter last name" required />
            </div>
          </div>

          <div className="field">
            <label>Email *</label>
            <div className="input-box">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="example@mail.com" required />
            </div>
          </div>

          <div className="field">
            <label>Password *</label>
            <div className="input-box">
              <FaLock className="icon" />
              <input type="password" placeholder="••••••" required />
            </div>
          </div>

          {/* Gender */}
          <div className="field">
            <label>Gender *</label>
            <div className="gender-box">
              <button
                type="button"
                className={gender === 'Male' ? 'selected' : ''}
                onClick={() => setGender('Male')}
              >
                Male
              </button>
              <button
                type="button"
                className={gender === 'Female' ? 'selected' : ''}
                onClick={() => setGender('Female')}
              >
                Female
              </button>
            </div>
          </div>

          <div className="field">
            <label>Date of birth *</label>
            <div className="input-box">
              <BsCalendarDate className="icon" />
              <input type="date" required />
            </div>
          </div>

          {/* Location */}
          <div className="field">
            <label>Location *</label>
            <div className="input-box">
              <FaMapMarkerAlt className="icon" />
              <select
                required
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="">Tanlang...</option>
                {regions.map((r, index) => (
                  <option key={index} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="field">
            <label>Phone *</label>
            <div className="input-box">
              <FaPhone className="icon" />
              <input type="tel" placeholder="+998" required />
            </div>
          </div>

          <div className="buttons">
            <button type="button" className="back">
              Back
            </button>
            <button type="submit" className="next">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
