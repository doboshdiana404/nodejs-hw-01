import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
export const readContacts = async () => {
  const data = fs.readFile(PATH_DB, {
    encoding: 'utf-8',
  });
  return data
    .then((data) => JSON.parse(data))
    .catch((error) => {
      console.log(error);
    });
};
