"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_1 = require("./controllers/login");
const user_1 = require("./controllers/user");
const contact_1 = require("./controllers/contact");
const router = express_1.default.Router();
router.post("/login", login_1.login);
router.post("/user", user_1.createUser);
router.get("/user/:id", user_1.getCurrentUser);
router.get("/contacts", contact_1.getAllContacts);
router.get("/contacts/:id", contact_1.getContactById);
router.post("/contacts", contact_1.createContact);
router.delete("/contacts/:id", contact_1.deleteContact);
exports.default = router;
