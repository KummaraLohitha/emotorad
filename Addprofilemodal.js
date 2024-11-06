import React, { useState } from 'react';

function AddProfileModal() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1) setStep(2);
    else alert('Profile Added!');
  };

  return (
    <div className="modal">
      <h2>Add New Profile</h2>
      <div className="tabs">
        <button onClick={() => setStep(1)} className={step === 1 ? 'active' : ''}>Basic</button>
        <button onClick={() => setStep(2)} className={step === 2 ? 'active' : ''}>Contact</button>
      </div>
      <form>
        {step === 1 && (
          <div className="basic-form">
            <label>
              Enter Name*
              <input type="text" name="name" onChange={handleChange} />
            </label>
            <label>
              Enter Email*
              <input type="email" name="email" onChange={handleChange} />
            </label>
            <label>
              Enter Phone*
              <input type="tel" name="phone" onChange={handleChange} />
            </label>
          </div>
        )}
        {step === 2 && <div>Contact Form Fields</div>}
        <button type="button" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
}

export default AddProfileModal;
