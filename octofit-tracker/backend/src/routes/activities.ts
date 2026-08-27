import { Router } from 'express';
import { Activity } from '../models/index.js';

const activitiesRouter = Router();

activitiesRouter.get('/', async (_request, response) => {
  response.json(await Activity.find().populate('user', 'name').lean());
});

export default activitiesRouter;