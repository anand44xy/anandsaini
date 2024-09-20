import React, { useContext } from 'react';
import { StepperContext } from '../Context/StepperContext';

function PersonalInfo({ userData, setUserData, errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="px-20 pt-20">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name || ""}
          onChange={handleChange}
          className={`mt-1 p-2 border rounded w-full ${errors.name ? 'border-red-500' : ''}`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email || ""}
          onChange={handleChange}
          className={`mt-1 p-2 border rounded w-full ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={userData.phone || ""}
          onChange={handleChange}
          className={`mt-1 p-2 border rounded w-full ${errors.phone ? 'border-red-500' : ''}`}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>
    </div>
  );
}

export default PersonalInfo;
