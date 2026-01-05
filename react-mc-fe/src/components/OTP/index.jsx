import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OTP = ({ otpLen = 6 }) => {
  const navigate = useNavigate();

  const [otpInputFields, setOtpInputFields] = useState(
    new Array(otpLen).fill("")
  );
  const otpRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    const value = e.key;
    if (value === "ArrowLeft") {
      if (index > 0) otpRefs.current[index - 1].focus();
      return;
    }
    if (value === "ArrowRight") {
      if (index + 1 < otpInputFields.length) otpRefs.current[index + 1].focus();
      return;
    }
    const newOtpInputFields = [...otpInputFields];
    if (value === "Backspace") {
      newOtpInputFields[index] = "";
      setOtpInputFields(newOtpInputFields);
      if (index > 0) {
        otpRefs.current[index - 1].focus();
      }
      return;
    }
  };
  const handleChange = (e, index) => {
    const value = e.target.value[e.target.value.length - 1];
    if (isNaN(value)) return;
    const newOtpInputFields = [...otpInputFields];
    newOtpInputFields[index] = value;
    setOtpInputFields(newOtpInputFields);
    if (index + 1 < otpInputFields.length) otpRefs.current[index + 1].focus();
    return;
  };

  const handlePaste = (e, index) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text");
    const pasteDataArr = pasteData.split("");
    const newOtpInputFields = [...otpInputFields];
    for (
      let i = index;
      i < otpInputFields.length && pasteDataArr.length > 0;
      i++
    ) {
      const char = pasteDataArr.shift();
      if (isNaN(char)) continue;
      newOtpInputFields[i] = char;
    }
    setOtpInputFields(newOtpInputFields);
    const nextIndex = Math.min(
      index + pasteData.length,
      otpInputFields.length - 1
    );
    otpRefs.current[nextIndex].focus();
  };

  const handleShowOtp = () => {
    alert(otpInputFields.join(""));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 h-screen">
      {/* back button */}
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <h1 className="mb-4">OTP Verification</h1>
      <div className="otp-inputs mt-4 flex justify-center">
        {otpInputFields.map((value, index) => {
          return (
            <input
              key={index}
              ref={(ref) => (otpRefs.current[index] = ref)}
              type="text"
              className="otp-input w-12 h-12 text-center border border-gray-300 rounded mx-1"
              value={value}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onChange={(e) => handleChange(e, index)}
              onPaste={(e) => handlePaste(e, index)}
            />
          );
        })}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleShowOtp}
        >
          Submit OTP
        </button>
      </div>
    </div>
  );
};

export default OTP;
