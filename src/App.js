import React, { PureComponent } from "react";
import { nanoid } from "nanoid";
import Phonebook from "../src/components/phonebook/Phonebook";
import Contacts from "../src/components/contacts/Contacts";
import Filter from "./components/Filter/Filter";

const filterContacts = (contacts, filter) =>
  contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

class App extends PureComponent {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  changeFilter = (event) => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  onDeleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  onSubmit = (data) => {
    const { contacts } = this.state;

    const addContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    if (contacts.find((contact) => contact.name.toLocaleLowerCase() === addContact.name.toLocaleLowerCase())) {
      alert(`${addContact.name} is already in contacts!`);
      return;
    }
    this.setState({
      contacts: [...contacts, addContact],
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContacts(contacts, filter);
    return (
      <div>
        <Phonebook onSubmit={this.onSubmit} />
        {contacts.length !== 0 && (
          <div>
            <h1 style={{ marginLeft: 80 }}>Contacts</h1>
            {contacts.length > 1 && (
              <Filter value={filter} onChangeFilter={this.changeFilter} />
            )}
            <Contacts
              contacts={filteredContacts}
              onDeleteContact={this.onDeleteContact}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
