import { Router } from 'express';
import { Leaderboard } from '../models/index.js';

const leaderboardRouter = Router();

leaderboardRouter.get('/', async (_request, response) => {
  response.json(await Leaderboard.find().sort({ rank: 1 }).populate('user', 'name').populate('team', 'name').lean());
});

export default leaderboardRouter;