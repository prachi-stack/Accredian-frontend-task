import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function ReferralForm({onClose}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    friendName: "",
    friendEmail: "",
    friendPhone: "",
    vertical: "",
    yourName: "",
    yourEmail: "",
    yourPhone: "",
  });
  const [errors, setErrors] = useState({});
  const [submissionError, setSubmissionError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.friendName) newErrors.friendName = "Friend's name is required";
    if (!formData.friendEmail) newErrors.friendEmail = "Friend's email is required";
    if (!formData.friendPhone) newErrors.friendPhone = "Friend's phone number is required";
    if (!formData.vertical) newErrors.vertical = "Vertical is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.yourName) newErrors.yourName = "Your name is required";
    if (!formData.yourEmail) newErrors.yourEmail = "Your email is required";
    if (!formData.yourPhone) newErrors.yourPhone = "Your phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://accredian-backend-task-90kg.onrender.com/api/referral", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Submission failed");
      }

      setStep(3);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionError(error.message);
    }
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2) {
      if (!validateStep2()) return;
      handleSubmit();
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500">
          <FaTimes size={20} />
        </button>

        {/* Error Message */}
        {submissionError && (
          <div className="text-red-500 text-center mb-4">{submissionError}</div>
        )}

        {/* Step 1: Friend's Details */}
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold text-center">
              Refer your <span className="text-blue-600">friend!</span>
            </h2>
            <div className="flex justify-center my-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div className="w-16 h-1 bg-gray-300 mx-1"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span className="font-semibold text-black">Friend's details</span>
              <span>Refer now</span>
            </div>

            {/* Form Fields */}
            <input
              type="text"
              name="friendName"
              placeholder="Enter friend's name"
              value={formData.friendName}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 my-2 focus:outline-none"
            />
            {errors.friendName && <p className="text-red-500 text-sm">{errors.friendName}</p>}

            <input
              type="email"
              name="friendEmail"
              placeholder="Enter friend's email"
              value={formData.friendEmail}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 my-2 focus:outline-none"
            />
            {errors.friendEmail && <p className="text-red-500 text-sm">{errors.friendEmail}</p>}

            <input
              type="tel"
              name="friendPhone"
              placeholder="+91 Friend's phone number"
              value={formData.friendPhone}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 my-2 focus:outline-none"
            />
            {errors.friendPhone && <p className="text-red-500 text-sm">{errors.friendPhone}</p>}

            <select
              name="vertical"
              value={formData.vertical}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 my-2 focus:outline-none text-gray-500"
            >
              <option value="">Select Vertical</option>
              <option value="tech">Technology</option>
              <option value="business">Business</option>
              <option value="marketing">Marketing</option>
            </select>
            {errors.vertical && <p className="text-red-500 text-sm">{errors.vertical}</p>}

            {/* Next Button */}
            <button
              onClick={nextStep}
              disabled={!formData.friendName || !formData.friendEmail || !formData.friendPhone || !formData.vertical}
              className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-lg mt-4 ${
                !formData.friendName || !formData.friendEmail || !formData.friendPhone || !formData.vertical
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Next
            </button>
          </>
        )}

        {/* Step 2: Your Details */}
        {step === 2 && (
          <>
            <button onClick={prevStep} className="text-blue-600 text-sm mb-2">
              &larr; Back
            </button>
            <h2 className="text-xl font-bold text-center">
              Refer your <span className="text-blue-600">friend!</span>
            </h2>
            <div className="flex justify-center my-4">
              <div className="flex items-center">
                <FaCheck className="text-blue-600" />
                <div className="w-16 h-1 bg-blue-600 mx-1"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span className="text-gray-500">Friend's details</span>
              <span className="font-semibold text-black">Refer now</span>
            </div>

            {/* Form Fields */}
            <input
              type="text"
              name="yourName"
              placeholder="Enter your name"
              value={formData.yourName}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 my-2 focus:outline-none"
            />
            {errors.yourName && <p className="text-red-500 text-sm">{errors.yourName}</p>}

            <input
              type="email"
              name="yourEmail"
              placeholder="Enter your email"
              value={formData.yourEmail}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 my-2 focus:outline-none"
            />
            {errors.yourEmail && <p className="text-red-500 text-sm">{errors.yourEmail}</p>}

            <input
              type="tel"
              name="yourPhone"
              placeholder="+91 Enter your phone number"
              value={formData.yourPhone}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 my-2 focus:outline-none"
            />
            {errors.yourPhone && <p className="text-red-500 text-sm">{errors.yourPhone}</p>}

            {/* Submit Button */}
            <button
              onClick={nextStep}
              disabled={!formData.yourName || !formData.yourEmail || !formData.yourPhone}
              className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-lg mt-4 ${
                !formData.yourName || !formData.yourEmail || !formData.yourPhone
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Refer Now
            </button>
          </>
        )}

        {/* Step 3: Thank You Screen */}
        {step === 3 && (
          <div className="text-center">
            <FaCheck className="text-green-500 mx-auto text-4xl mb-4" />
            <h2 className="text-2xl font-bold">Thank You!</h2>
            <p className="text-gray-600 my-2">
              Thank you for registering for our Referral Program! We will reach
              out to your referee soon and keep you updated on your reward
              status.
            </p>
            <button
              onClick={() => setStep(1)}
              className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg mt-4"
            >
              OK
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
