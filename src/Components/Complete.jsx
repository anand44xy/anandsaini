import React, { useContext } from 'react';
import { StepperContext } from '../Context/StepperContext';

function Complete({ userData }) {
  const handleSubmit = () => {
    console.log('Final submitted data:', userData);
    // Handle final submission logic here
  };

  return (
    <div className="px-20 pt-20">
      <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
      <div className="mb-2">
        <strong>Name:</strong> {userData.name}
      </div>
      <div className="mb-2">
        <strong>Email:</strong> {userData.email}
      </div>
      <div className="mb-2">
        <strong>Phone:</strong> {userData.phone}
      </div>
      <div className="mb-4">
        <strong>Address:</strong> {userData.addressLine1}, {userData.city}, {userData.state}, {userData.zipCode}
      </div>
      <h3 className="text-lg text-green-500">Congratulations! Your data has been submitted successfully!</h3>
      <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
        Confirm & Submit
      </button>
    </div>
  );
}

export default Complete;
