import React from "react";
import { Contact, DeleteButton } from "./ContactItem.styled";
import PropTypes from "prop-types";

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <>
      <Contact>
        {contact.name}: {contact.number}
      </Contact>
      <DeleteButton onClick={() => onDeleteContact(contact.id)}>
        Delate
      </DeleteButton>
    </>
  );
};

ContactItem.propTypes = {
  Contact: PropTypes({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
