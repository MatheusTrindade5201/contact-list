import express from "express";
import { login } from "./controllers/login";
import { createUser, getCurrentUser } from "./controllers/user";
import {
  createContact,
  deleteContact,
  getAllContacts,
  getContactById,
} from "./controllers/contact";

const router = express.Router();

router.post("/login", login);

router.post("/user", createUser);

router.get("/user/:id", getCurrentUser);

router.get("/contacts", getAllContacts);

router.get("/contacts/:id", getContactById);

router.post("/contacts", createContact);

router.delete("/contacts/:id", deleteContact);

export default router;
