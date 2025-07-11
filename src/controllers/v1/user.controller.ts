
import { Request, Response } from 'express';

import UserService from '../../services/user.service';
import { BadRequestError } from '../../utils/errors/app.error';


const userService = new UserService();

// POST /users
export const createUser = async (req: Request, res: Response) => {
    try {
        
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error: unknown) {
        throw new BadRequestError( JSON.stringify(error));
    }
};

// GET /users
export const getAllUsers = async ( res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error: unknown) {
        throw new BadRequestError( JSON.stringify(error));
    }
};

// GET /users/:id
export const getUserById = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        const user = await userService.getUserById(userId);
        res.status(200).json(user);
    } catch (error: unknown) {
        throw new BadRequestError( JSON.stringify(error));
    }
};

// PUT /users/:id
export const updateUser = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        const updatedUser = await userService.updateUser(userId, req.body);
        res.status(200).json(updatedUser);
    } catch (error: unknown) {
        throw new BadRequestError( JSON.stringify(error));
    }
};

// DELETE /users/:id
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        await userService.deleteUser(userId);
        res.status(204).send(); 
    } catch (error: unknown) {
        throw new BadRequestError( JSON.stringify(error));
    }
};
