import React from 'react';

const StepControlar = ({ handleClick, currentStep, steps }) => {
  return (
    <div className='container flex justify-around mb-8 mt-4'>
      {/* Go back Button */}
      <button
        onClick={() => handleClick("back")}
        className={`text-slate-700 bg-white py-2 px-4 font-semibold rounded-xl border-2 border-slate-300 cursor-pointer hover:bg-slate-500 hover:text-white transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={currentStep === 1} // Disable button when on the first step
      >
        Go back
      </button>

      {/* Next/Confirm button */}
      <button
        onClick={() => handleClick("next")}
        className='text-white bg-blue-500 py-2 px-4 font-semibold rounded-xl border-2 cursor-pointer hover:bg-slate-500 hover:text-white transition duration-200 ease-in-out'
      >
        {currentStep === steps.length ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default StepControlar;
