"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactById = exports.getAllContacts = exports.deleteContact = exports.createContact = void 0;
const getAllContacts = (req, res) => {
    res.send("All  contacts");
};
exports.getAllContacts = getAllContacts;
const getContactById = (req, res) => {
    res.send("Specific Contact");
};
exports.getContactById = getContactById;
const createContact = (req, res) => {
    res.send("Create contact");
};
exports.createContact = createContact;
const deleteContact = (req, res) => {
    res.send("Delete contact");
};
exports.deleteContact = deleteContact;
