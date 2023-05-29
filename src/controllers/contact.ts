const getAllContacts = (req: any, res: { send: (arg0: string) => void }) => {
  res.send("All  contacts");
};

const getContactById = (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Specific Contact");
};

const createContact = (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Create contact");
};

const deleteContact = (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Delete contact");
};

export { createContact, deleteContact, getAllContacts, getContactById };
