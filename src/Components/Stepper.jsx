import React, { useState, useEffect, useRef } from 'react';

const Stepper = ({ steps, currentStep }) => {
    const [newStep, setNewStep] = useState([]);
    const stepRef = useRef();

    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps];
        let count = 0;

        while (count < newSteps.length) {
            if (count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    Complete: true,
                };
            } else if (count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    Complete: true,
                };
            } else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    Complete: false,
                };
            }
            count++;
        }
        return newSteps;
    };

    useEffect(() => {
        const stepsState = steps.map((step, index) => ({
            description: step,
            Completed: false,
            Highlighted: index === 0,
            selected: index === 0,
        }));

        stepRef.current = stepsState;
        const current = updateStep(currentStep - 1, stepRef.current);
        setNewStep(current);
    }, [steps, currentStep]);

    const displaySteps = newStep.map((step, index) => (
        <div key={index} className={index !== newStep.length - 1 ? "flex items-center w-full" : "flex items-center justify-center"}>
            <div className='flex flex-col items-center relative text-sky-600'>
                <div className={`w-12 h-12 flex items-center justify-center py-3 rounded-full transition duration-500 ease-in-out border-2 border-gray-300 ${step.selected ? "bg-blue-600 text-white font-bold border border-blue-600" : ""}`}>
                    {step.Completed ? (
                        <span className='text-white font-bold text-xl'>✓</span>
                    ) : (index + 1)}
                </div>
                <div className={`w-12 m-16 text-xs font-medium uppercase absolute top-0 text-center ${step.highlighted ? "text-gray-900" : "text-gray-400"}`}>
                    {step.description}
                </div>
            </div>
            <div className={`flex-auto border-t-2 translate duration-500 ease-in-out ${step.Completed ? "border-blue-600" : "border-gray-300"}`}>
                {/* Display Step's line */}
            </div>
        </div>
    ));

    return (
        <div className='flex justify-between items-center px-7 pt-6 mt-5  '>
            {displaySteps}
        </div>
    );
};

export default Stepper;
