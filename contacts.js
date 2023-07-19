const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const contactsPath = path.join(__dirname, "dl", "contacts.json");

async function listContacts() {
  // ...твой код. Возвращает массив контактов.
  const contacts = await fs.readFile(contactsPath, "utf-8");
  console.log(contacts);
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
  const contacts = await listContacts();
  const findContact = contacts.find((contact) => contact.id === contactId);
  return findContact || null;
}

async function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (contactIndex === -1) {
    return null;
  }
  const [result] = contacts.splice(contactIndex, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
}

async function addContact({ name, email, phone }) {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
  // ...твой код. Возвращает объект добавленного контакта.
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

// [
//   {
//     id: "AeHIrLTr6JkxGE6SN-0Rw",
//     name: "Allen Raymond",
//     email: "nulla.ante@vestibul.co.uk",
//     phone: "(992) 914-3792",
//   },
//   {
//     id: "qdggE76Jtbfd9eWJHrssH",
//     name: "Chaim Lewis",
//     email: "dui.in@egetlacus.ca",
//     phone: "(294) 840-6685",
//   },
//   {
//     id: "drsAJ4SHPYqZeG-83QTVW",
//     name: "Kennedy Lane",
//     email: "mattis.Cras@nonenimMauris.net",
//     phone: "(542) 451-7038",
//   },
//   {
//     id: "vza2RIzNGIwutCVCs4mCL",
//     name: "Wylie Pope",
//     email: "est@utquamvel.net",
//     phone: "(692) 802-2949",
//   },
//   {
//     id: "05olLMgyVQdWRwgKfg5J6",
//     name: "Cyrus Jackson",
//     email: "nibh@semsempererat.com",
//     phone: "(501) 472-5218",
//   },
//   {
//     id: "1DEXoP8AuCGYc1YgoQ6hw",
//     name: "Abbot Franks",
//     email: "scelerisque@magnis.org",
//     phone: "(186) 568-3720",
//   },
//   {
//     id: "Z5sbDlS7pCzNsnAHLtDJd",
//     name: "Reuben Henry",
//     email: "pharetra.ut@dictum.co.uk",
//     phone: "(715) 598-5792",
//   },
//   {
//     id: "C9sjBfCo4UJCWjzBnOtxl",
//     name: "Simon Morton",
//     email: "dui.Fusce.diam@Donec.com",
//     phone: "(233) 738-2360",
//   },
//   {
//     id: "e6ywwRe4jcqxXfCZOj_1e",
//     name: "Thomas Lucas",
//     email: "nec@Nulla.com",
//     phone: "(704) 398-7993",
//   },
//   {
//     id: "rsKkOQUi80UsgVPCcLZZW",
//     name: "Alec Howard",
//     email: "Donec.elementum@scelerisquescelerisquedui.net",
//     phone: "(748) 206-2688",
//   },
// ];
