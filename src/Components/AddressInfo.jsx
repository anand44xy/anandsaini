import React, { useContext } from 'react';
import { StepperContext } from '../Context/StepperContext';

function AddressInfo({ userData, setUserData, errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="px-20 pt-20">
      <h2 className="text-xl font-semibold mb-4">Address Information</h2>
      <div className="mb-4">
        <label htmlFor="addressLine1" className="block text-sm font-medium">Address Line 1</label>
        <input
          type="text"
          id="addressLine1"
          name="addressLine1"
          value={userData.addressLine1 || ""}
          onChange={handleChange}
          className={`mt-1 p-2 border rounded w-full ${errors.addressLine1 ? 'border-red-500' : ''}`}
        />
        {errors.addressLine1 && <p className="text-red-500 text-sm">{errors.addressLine1}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={userData.city || ""}
          onChange={handleChange}
          className={`mt-1 p-2 border rounded w-full ${errors.city ? 'border-red-500' : ''}`}
        />
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block text-sm font-medium">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={userData.state || ""}
          onChange={handleChange}
          className={`mt-1 p-2 border rounded w-full ${errors.state ? 'border-red-500' : ''}`}
        />
        {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="zipCode" className="block text-sm font-medium">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={userData.zipCode || ""}
          onChange={handleChange}
          className={`mt-1 p-2 border rounded w-full ${errors.zipCode ? 'border-red-500' : ''}`}
        />
        {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
      </div>
    </div>
  );
}

export default AddressInfo;
