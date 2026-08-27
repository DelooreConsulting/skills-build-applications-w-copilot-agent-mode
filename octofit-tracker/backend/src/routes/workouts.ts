import { Router } from 'express';
import { Workout } from '../models/index.js';

const workoutsRouter = Router();

workoutsRouter.get('/', async (_request, response) => {
  response.json(await Workout.find().lean());
});

export default workoutsRouter;