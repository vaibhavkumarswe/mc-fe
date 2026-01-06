import React from "react";
import { steps } from "./data";

const Stepper = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 h-screen self-center flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Stepper Component</h1>
      <p>This is a placeholder for the Stepper component.</p>
      <div className="flex mt-8">
        {/* Stepper implementation goes here */}
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center justify-start">
            <div className={`flex flex-row items-center justify-center`}>
              <p
                className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center  ${
                  index <= currentStep
                    ? "text-white bg-blue-500"
                    : "text-gray-500"
                }`}
              >
                {index + 1}
              </p>

              <div
                className={`w-[5rem] h-[2px] ${
                  index === steps.length - 1 ? "hidden" : ""
                }  ${index < currentStep ? " bg-blue-500" : "bg-gray-300 "}`}
              ></div>
            </div>
            <h2>{step.label}</h2>
          </div>
        ))}
      </div>

      <div className="border p-20 mt-10">{steps[currentStep].content}</div>
      <div className="mt-8 flex gap-4">
        <button
          className="border border-grey-300 rounded-lg p-4 hover:bg-slate-500 hover:text-white"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="border border-grey-300 rounded-lg p-4 hover:bg-slate-500 hover:text-white"
          onClick={handleNext}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Stepper;
