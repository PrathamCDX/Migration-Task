// POST   /posts     --createPost
// GET    /posts     --getPostById
// GET    /posts/:id --getAllPosts
// PUT    /posts/:id --updatePost
// DELETE /posts/:id --deletePost


import { CreationAttributes } from 'sequelize';

import Post from '../db/models/posts.model';
import PostRepository from '../repositories/post.repository';
import { NotFoundError } from '../utils/errors/app.error';

class PostService {
    private postRepository: PostRepository;

    constructor() {
        this.postRepository = new PostRepository(Post);
    }

    async createPost(postData: CreationAttributes<Post>) {
        return await this.postRepository.create(postData);
    }

    async getPostById(id: number ) {
        const post = await this.postRepository.findById(id);
        if (!post) {
            throw new NotFoundError('post.service/getPostById');
        }
        return post;
    }

    async getAllPosts() {
        return await this.postRepository.findAll();
    }

    async updatePost(id: number , updateData: CreationAttributes<Post>) {
        const [affectedCount, updatedPosts] = await this.postRepository.updateById(id, updateData);
        if (affectedCount === 0) {
            throw new NotFoundError('post.service/updatePost');
        }
        return updatedPosts[0];
    }

    async deletePost(id: number) {
        const deletedCount = await this.postRepository.deleteById(id);
        if (deletedCount === 0) {
            throw new NotFoundError('post.service/deletePost');
        }
        return true;
    }
}

export default PostService;
