import express from 'express';

import pingRouter from './ping.route';
import postRouter from './post.route';
import userRouter from './user.route';

const v1Router = express.Router();

v1Router.use('/ping', pingRouter);
v1Router.use('/ping', userRouter);
v1Router.use('/ping', postRouter);

export default v1Router;