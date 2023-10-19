import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    qualifications: [],
  });

  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedQualifications = checked
        ? [...formData.qualifications, value]
        : formData.qualifications.filter((qualification) => qualification !== value);

      setFormData({ ...formData, qualifications: updatedQualifications });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.firstName.length < 5) {
      alert('First name must be at least 5 characters long.');
    } else {
      setAlertMessage(JSON.stringify(formData, null, 2));
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      qualifications: [],
    });
    setAlertMessage('');
  };

  return (
    <div
      style={{
        backgroundColor: '#ADD8E6',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        width: '50%',
        margin: 'auto',
        border: '2px solid black',
        fontFamily: 'Arial, sans-serif', // Use Arial font
      }}
    >
      <h2 style={{ color: 'green', textDecoration: 'underline' }}>Employee Registration Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '10px', textAlign: 'left', width: '80%', display: 'flex', alignItems: 'center' }}>
          <label style={{ color: 'white', fontWeight: 'bold', width: '30%' }}>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{ marginLeft: '10px', width: '40%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px', textAlign: 'left', width: '80%', display: 'flex', alignItems: 'center' }}>
          <label style={{ color: 'white', fontWeight: 'bold', width: '30%' }}>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={{ marginLeft: '10px', width: '40%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px', textAlign: 'left', width: '80%', display: 'flex', alignItems: 'center' }}>
          <label style={{ color: 'white', fontWeight: 'bold', width: '30%' }}>Email ID:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ marginLeft: '10px', width: '40%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px', textAlign: 'left', width: '80%', display: 'flex', alignItems: 'center' }}>
          <label style={{ color: 'white', fontWeight: 'bold', width: '30%' }}>Mobile Number:</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            style={{ marginLeft: '10px', width: '40%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px', textAlign: 'left', width: '80%' }}>
          <label style={{ color: 'white', fontWeight: 'bold', marginBottom: '5px' }}>Qualifications:</label>
          <label style={{ color: 'white', fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>
            <input
              type="checkbox"
              name="qualifications"
              value="Highschool (10th)"
              checked={formData.qualifications.includes('Highschool (10th)')}
              onChange={handleChange}
              style={{ marginRight: '5px' }}
            />
            Highschool (10th)
          </label>
          <label style={{ color: 'white', fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>
            <input
              type="checkbox"
              name="qualifications"
              value="Higherschool (12th)"
              checked={formData.qualifications.includes('Higherschool (12th)')}
              onChange={handleChange}
              style={{ marginRight: '5px' }}
            />
            Higherschool (12th)
          </label>
          <label style={{ color: 'white', fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>
            <input
              type="checkbox"
              name="qualifications"
              value="Graduation (Bachelors)"
              checked={formData.qualifications.includes('Graduation (Bachelors)')}
              onChange={handleChange}
              style={{ marginRight: '5px' }}
            />
            Graduation (Bachelors)
          </label>
          <label style={{ color: 'white', fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>
            <input
              type="checkbox"
              name="qualifications"
              value="Post Graduation (Masters)"
              checked={formData.qualifications.includes('Post Graduation (Masters)')}
              onChange={handleChange}
              style={{ marginRight: '5px' }}
            />
            Post Graduation (Masters)
          </label>
          <label style={{ color: 'white', fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>
            <input
              type="checkbox"
              name="qualifications"
              value="Other"
              checked={formData.qualifications.includes('Other')}
              onChange={handleChange}
              style={{ marginRight: '5px' }}
            />
            Other
          </label>
        </div>
        <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', width: '50%' }}>
          <button type="submit" style={{ color: 'white', backgroundColor: 'black', padding: '10px', width: '45%' }}>
            Submit
          </button>
          <button type="button" onClick={handleReset} style={{ color: 'white', backgroundColor: 'black', padding: '10px', width: '45%' }}>
            Reset
          </button>
        </div>
      </form>

      {alertMessage && (
        <div style={{ marginTop: '20px' }}>
          <h3>Form Data:</h3>
          <pre>{alertMessage}</pre>
        </div>
      )}
    </div>
  );
};

export default EmployeeForm;

