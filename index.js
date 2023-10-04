const contacts = require("./contacts")
const argv = require('yargs').argv;

const invokeAction = async({action, id, name, email, phone}) => {
switch(action) {
case "list":
    const list = await contacts.listContacts();
    console.log(list)
    break;

    case "get":
        const oneContact = await contacts.getContactById(id);
        console.log(oneContact);
        break;

    case "add":
        const newContact = await contacts.addContact(id, name, email, phone);
        console.log(newContact);
        break;

    case "remove":
        const removedContact = await contacts.removeContact(id);
        console.log(removedContact);
        break;
    
}
}

invokeAction(argv);