// POST   /users
// GET    /users
// GET    /users/:id
// PUT    /users/:id
// DELETE /users/:id

import express from 'express';

import * as UserController from '../../controllers/v1/user.controller';


const userRouter = express.Router();

userRouter.post('/users', UserController.createUser);

userRouter.get('/users', UserController.getAllUsers);

userRouter.get('/users/:id', UserController.getUserById);

userRouter.put('/users/:id', UserController.updateUser);

userRouter.delete('/users/:id', UserController.deleteUser);



export default userRouter;