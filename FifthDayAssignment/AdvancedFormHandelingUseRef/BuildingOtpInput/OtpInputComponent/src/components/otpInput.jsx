import React, { useRef, useState } from 'react';
// import './OtpInput.css'; // Create a CSS file for styling
// import '../App.css';

const OTPInput = ({ length = 6 }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.target.value;

    // Only allow one digit per box and move to the next input
    if (/^\d$/.test(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Move to next input box if not the last one
      if (index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (element, index) => {
    if (element.key === 'Backspace' && otp[index] === "") {
      // If current box is empty, move to previous box
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData('text').slice(0, length);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      
      // Move focus to the last filled input
      const nextIndex = newOtp.length >= length ? length - 1 : newOtp.length;
      inputRefs.current[nextIndex].focus();
    }
  };

  const handleSubmit = () => {
    // Perform form submission (e.g., console log the OTP)
    const enteredOtp = otp.join("");
    alert(`Entered OTP: ${enteredOtp}`);
  };
  
  const isOtpComplete = otp.every(digit => digit !== "");

  return (
    <div className="otp-container">
      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            onPaste={handlePaste}
            ref={el => inputRefs.current[index] = el}
          />
        ))}
      </div>
      <button 
        className="submit-btn" 
        onClick={handleSubmit} 
        disabled={!isOtpComplete}
      >
        Submit OTP
      </button>
    </div>
  );
};

export default OTPInput;
