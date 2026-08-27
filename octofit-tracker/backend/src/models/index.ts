import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profile: { age: Number, fitnessLevel: String },
}, { timestamps: true });

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

const activitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  calories: { type: Number, required: true },
  date: { type: Date, required: true },
}, { timestamps: true });

const leaderboardSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  points: { type: Number, required: true },
  rank: { type: Number, required: true },
}, { timestamps: true });

const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  difficulty: { type: String, required: true },
  duration: { type: Number, required: true },
  exercises: [{ type: String }],
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', userSchema, 'users');
export const Team = mongoose.models.Team || mongoose.model('Team', teamSchema, 'teams');
export const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema, 'activities');
export const Leaderboard = mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema, 'leaderboard');
export const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema, 'workouts');