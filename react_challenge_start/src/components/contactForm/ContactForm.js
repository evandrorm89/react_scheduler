import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>name</label>
      <input type='text' value={name} onChange={handleNameChange} />
      <label>phone</label>
      <input type='tel' value={phone} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" onChange={handlePhoneChange} />
      <label>email</label>
      <input type='email' value={email} onChange={handleEmailChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
