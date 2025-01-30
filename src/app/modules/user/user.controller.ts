import { NextFunction, Request, Response } from "express";
import { findAll, insertOne } from "../../lib/dbQuery";

// Create user in this controller
const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body;
        const result = await insertOne('user', user);
        res.send({
            message: 'User created successfully',
            user: result, // Return the inserted document
        })
    } catch (error) {
        next(error);
    }
};

// Get users
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    // const result = await UserService.getAllUsers();
    try {
        const result = await findAll('user', {}, {}, { sortField: 'age', sortOrder: 'asc' });
        res.send({
            message: 'Users retrieved successfully',
            users: result, // Return all documents
        })
    } catch (error) {
        console.log(error)
    }
};

// These are accessible from different files.
export const userController = {
    createUser,
    getUsers,
};