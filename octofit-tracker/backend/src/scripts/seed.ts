import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/** Seed the octofit_db database with test data. */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      { name: 'Alex Morgan', email: 'alex@example.com', profile: { age: 29, fitnessLevel: 'intermediate' } },
      { name: 'Jordan Lee', email: 'jordan@example.com', profile: { age: 34, fitnessLevel: 'beginner' } },
      { name: 'Taylor Smith', email: 'taylor@example.com', profile: { age: 26, fitnessLevel: 'advanced' } },
    ]);
    const teams = await Team.insertMany([
      { name: 'Summit Squad', members: users.slice(0, 2).map((user) => user._id) },
      { name: 'Trail Blazers', members: [users[2]._id] },
    ]);
    await Activity.insertMany([
      { user: users[0]._id, type: 'running', duration: 32, calories: 310, date: new Date('2026-08-24') },
      { user: users[1]._id, type: 'cycling', duration: 45, calories: 390, date: new Date('2026-08-25') },
      { user: users[2]._id, type: 'strength', duration: 50, calories: 280, date: new Date('2026-08-26') },
    ]);
    await Leaderboard.insertMany([
      { user: users[0]._id, team: teams[0]._id, points: 820, rank: 1 },
      { user: users[2]._id, team: teams[1]._id, points: 760, rank: 2 },
      { user: users[1]._id, team: teams[0]._id, points: 640, rank: 3 },
    ]);
    await Workout.insertMany([
      { name: 'Foundation Run', type: 'running', difficulty: 'beginner', duration: 30, exercises: ['Warm-up walk', 'Steady run', 'Cool-down stretch'] },
      { name: 'Full Body Strength', type: 'strength', difficulty: 'intermediate', duration: 40, exercises: ['Squats', 'Push-ups', 'Rows', 'Plank'] },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
