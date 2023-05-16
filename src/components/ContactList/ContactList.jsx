import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

class ContactList extends React.Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <div>
        <ul>
          {contacts.map(contact => (
            <li className={css.ContactListItem} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={css.ContactListButton}
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
