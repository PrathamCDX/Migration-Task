import express from 'express';

import * as PostController from '../../controllers/v1/post.controller';

const postRouter = express.Router();




postRouter.post('/posts', PostController.createPost);

postRouter.get('/posts', PostController.getAllPosts);

postRouter.get('/posts/:id', PostController.getPostById);

postRouter.put('/posts/:id', PostController.updatePost);

postRouter.delete('/posts/:id', PostController.deletePost);



export default postRouter;