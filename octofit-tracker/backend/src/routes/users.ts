import { Router } from 'express';
import { User } from '../models/index.js';

const usersRouter = Router();

usersRouter.get('/', async (_request, response) => {
  response.json(await User.find().lean());
});

export default usersRouter;