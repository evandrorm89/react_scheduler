import React from "react";

export const ContactPicker = ({ contacts, handleSelect }) => {
  return (
    <select onChange={handleSelect}>
      <option defaultChecked >No contact</option>
      {contacts.map((contact) => <option>{contact.name}</option>)}
    </select>
  );
};
