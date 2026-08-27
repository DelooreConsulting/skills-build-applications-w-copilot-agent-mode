import { Router } from 'express';
import { Team } from '../models/index.js';

const teamsRouter = Router();

teamsRouter.get('/', async (_request, response) => {
  response.json(await Team.find().populate('members', 'name email').lean());
});

export default teamsRouter;