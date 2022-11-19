import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const { contacts, addContact } = props;
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    console.log(contacts);
    const findDuplicate = contacts.find((contact) => contact.name == name);
    if (findDuplicate) setDuplicate(true); else setDuplicate(false);
    console.log(duplicate);
  }, [name])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!duplicate) {
    addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tileList={contacts} />
      </section>
    </div>
  );
};
