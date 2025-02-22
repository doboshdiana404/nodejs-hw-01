import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const newContact = [];
  const prevContacts = await readContacts();
  for (let index = 0; index < number; index++) {
    newContact.push(createFakeContact());
  }
  const updatedContacts = [...prevContacts, ...newContact];
  writeContacts(updatedContacts);
  console.log(updatedContacts);
};

generateContacts(5);
