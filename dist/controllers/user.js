"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getCurrentUser = void 0;
const getCurrentUser = (req, res) => {
    res.send("Current User");
};
exports.getCurrentUser = getCurrentUser;
const createUser = (req, res) => {
    res.send("Create User");
};
exports.createUser = createUser;
