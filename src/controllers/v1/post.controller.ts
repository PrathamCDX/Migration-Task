// controllers/PostController.ts
import { Request, Response } from 'express';

import PostService from '../../services/post.service';
import { BadRequestError } from '../../utils/errors/app.error';

const postService = new PostService();

// POST /posts
export const createPost = async (req: Request, res: Response) => {
    try {
        const newPost = await postService.createPost(req.body);
        res.status(201).json(newPost);
    } catch (error: unknown) {
        throw new BadRequestError( JSON.stringify(error));
    }
};

// GET /posts
export const getAllPosts = async (res: Response) => {
    try {
        const posts = await postService.getAllPosts();
        res.status(200).json(posts);
    } catch (error: unknown) {
        throw new BadRequestError( JSON.stringify(error));
    }
};

// GET /posts/:id
export const getPostById = async (req: Request, res: Response) => {
    try {
        const postId = parseInt(req.params.id, 10);
        const post = await postService.getPostById(postId);
        res.status(200).json(post);
    } catch (error: unknown) {
        throw new BadRequestError( JSON.stringify(error));
    }
};

// PUT /posts/:id
export const updatePost = async (req: Request, res: Response) => {
    try {
        const postId = parseInt(req.params.id, 10);
        const updatedPost = await postService.updatePost(postId, req.body);
        res.status(200).json(updatedPost);
    } catch (error: unknown) {
        throw new BadRequestError( JSON.stringify(error));
    }
};

// DELETE /posts/:id
export const deletePost = async (req: Request, res: Response) => {
    try {
        const postId = parseInt(req.params.id, 10);
        await postService.deletePost(postId);
        res.status(204).send();
    } catch (error: unknown) {
        throw new BadRequestError( JSON.stringify(error));
    }
};
