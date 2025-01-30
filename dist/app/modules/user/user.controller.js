"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const dbQuery_1 = require("../../lib/dbQuery");
// Create user in this controller
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const result = yield (0, dbQuery_1.insertOne)('user', user);
        res.send({
            message: 'User created successfully',
            user: result, // Return the inserted document
        });
    }
    catch (error) {
        next(error);
    }
});
// Get users
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await UserService.getAllUsers();
    try {
        const result = yield (0, dbQuery_1.findAll)('user', {}, {}, { sortField: 'age', sortOrder: 'asc' });
        res.send({
            message: 'Users retrieved successfully',
            users: result, // Return all documents
        });
    }
    catch (error) {
        console.log(error);
    }
});
// These are accessible from different files.
exports.userController = {
    createUser,
    getUsers,
};
