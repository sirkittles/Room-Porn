import React, { useState } from 'react';

const RegisterAccount = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const { username, email, password } = formData;
  const { error, handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}>
        {
          error &&
          <p>{error}</p>
        }
        {/* <label>
          First Name:
           <input
            type="text"
            value={firstName}
            name="First Name"
            onChange={handleChange}
          />
        </label>
        <label>Last Name:
         <input
            type="text"
            value={lastName}
            name="Last Name"
            onChange={handleChange}
          />
        </label> */}
        <label>Username:
         <input
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
          />
        </label>
        <label>Email:
         <input
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label>Password:
         <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default RegisterAccount;