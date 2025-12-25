import { useNavigate } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 h-screen">
      {/* back button */}
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <h1>OTP Verification</h1>
      <p>Please enter the OTP sent to your email.</p>
    </div>
  );
};

export default OTP;
