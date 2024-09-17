import React, { useRef } from 'react';

const DynamicInputFocus = () => {
  const nameRef = useRef(null);  // Reference for the Name input field
  const emailRef = useRef(null); // Reference for the Email input field
  const passwordRef = useRef(null); // Reference for the Password input field

  const handleKeyDown = (e, nextFieldRef) => {
    if (e.key === 'Enter') {
      nextFieldRef.current.focus(); // Focus on the next field when Enter is pressed
    }
  };

  return (
    <div>
      <h2>Dynamic Form Input Focus</h2>
      <form>
        <div>
          <label>Name: </label>
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter your name"
            onKeyDown={(e) => handleKeyDown(e, emailRef)}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter your email"
            onKeyDown={(e) => handleKeyDown(e, passwordRef)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter your password"
          />
        </div>
      </form>
    </div>
  );
};

export default DynamicInputFocus;
