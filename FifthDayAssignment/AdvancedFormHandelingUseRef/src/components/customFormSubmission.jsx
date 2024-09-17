import React, { useRef, useState } from 'react';

const CustomFormSubmission = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Capture the form values
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Custom validation before submission
    if (name.length < 3 || !email.includes('@') || password.length < 6) {
      alert('Form validation failed! Please check your inputs.');
    } else {
      // Custom form processing logic
      console.log({ name, email, password });
      setFormSubmitted(true);
    }
  };

  return (
    <div>
      <h2>Custom Form Submission</h2>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input ref={nameRef} type="text" placeholder="Enter your name" />
          </div>
          <div>
            <label>Email: </label>
            <input ref={emailRef} type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label>Password: </label>
            <input ref={passwordRef} type="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Form submitted successfully!</p>
      )}
    </div>
  );
};

export default CustomFormSubmission;
