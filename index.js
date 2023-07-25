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

// const addNewContact = async (data) => {
//   const newContact = await addContact(data);
//   console.log(newContact);
// };

// addNewContact({ name: "RAq", email: "Raq@gmail.com", phone: "03" });

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const getContactsList = await listContacts();
      console.log(getContactsList);
      break;

    case "get":
      const getContactByID = await getContactById(id);
      console.log(getContactByID);
      break;

    case "add":
      const createNewContact = await addContact({ name, email, phone });
      console.log(createNewContact);
      break;

    case "remove":
      const removeContactById = await removeContact(id);
      console.log(removeContactById);
      break;

    default:
      console.warn("Unknown action type!!!");
  }
}

invokeAction(argv);
