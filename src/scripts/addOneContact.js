import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const newContact = createFakeContact();
  const prevContacts = await readContacts();
  readContacts()
    .then((elem) => {
      prevContacts.push(newContact);
      writeContacts(prevContacts);
    })
    .catch((error) => console.log(error));
};

addOneContact();
