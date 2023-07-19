const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// const findContactById = async (id) => {
//   const contact = await getContactById(id);
//   console.log(contact);
// };

// findContactById("addssafdsdf");

// const removeContactByID = async (id) => {
//   const contact = await removeContact(id);
//   console.log(contact);
// };

// removeContactByID("e6ywwRe4jcqxXfCZOj_1e");

const addNewContact = async (data) => {
  const newContact = await addContact(data);
  console.log(newContact);
};

addNewContact({ name: "RAq", email: "Raq@gmail.com", phone: "03" });
