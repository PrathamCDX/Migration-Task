// POST   /users     --createUser
// GET    /users     --getAllUsers
// GET    /users/:id --getUserById
// PUT    /users/:id --updateUser
// DELETE /users/:id --deleteUser


import { CreationAttributes } from 'sequelize';

import User from '../db/models/user.model';
import UserRepository from '../repositories/user.repository';
import { NotFoundError } from '../utils/errors/app.error';
class UserService {
    protected userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository(User);
    }

    async createUser(userData: CreationAttributes<User>) {
        return await this.userRepository.create(userData);
    }

    async getUserById(id: number ) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new NotFoundError('user.service/getUserById');
        }
        return user;
    }

    async getAllUsers() {
        return await this.userRepository.findAll();
    }

    async updateUser(id: number, updateData: CreationAttributes<User>) {
        const [affectedCount, updatedUsers] = await this.userRepository.updateById(id, updateData);
        if (affectedCount === 0) {
            throw new NotFoundError('user.service/updateUser');
        }
        return updatedUsers[0]; 
    }

    async deleteUser(id: number ) {
        const deletedCount = await this.userRepository.deleteById(id);
        if (deletedCount === 0) {
            throw new NotFoundError('user.service/deleteUser');
        }
        return true;
    }
}

export default UserService;