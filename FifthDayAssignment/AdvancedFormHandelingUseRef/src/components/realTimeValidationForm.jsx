import React, { useRef, useState } from 'react';

const RealTimeValidationForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);

  const validateName = () => {
    const nameValue = nameRef.current.value;
    if (nameValue.length < 3) {
      setNameValid(false);
    } else {
      setNameValid(true);
    }
  };

  const validateEmail = () => {
    const emailValue = emailRef.current.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailPattern.test(emailValue));
  };

  return (
    <div>
      <h2>Real-time Input Validation</h2>
      <form>
        <div>
          <label>Name: </label>
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter your name"
            onInput={validateName}
            style={{ borderColor: nameValid ? 'black' : 'red' }}
          />
          {!nameValid && <p style={{ color: 'red' }}>Name must be at least 3 characters long</p>}
        </div>
        <div>
          <label>Email: </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter your email"
            onInput={validateEmail}
            style={{ borderColor: emailValid ? 'black' : 'red' }}
          />
          {!emailValid && <p style={{ color: 'red' }}>Invalid email format</p>}
        </div>
      </form>
    </div>
  );
};

export default RealTimeValidationForm;
