import React from "react";
import { ContactList, ContactListItem } from "./Contacts.styled";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ContactList>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id}>
          <ContactItem contact={contact} onDeleteContact={onDeleteContact} />
        </ContactListItem>
      ))}
    </ContactList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
