import express from 'express';
import {
  createUser,
  getUser,
  updateUser
} from '../controllers/user.controller.js';

console.log("User routes loaded");
const router = express.Router();

router.post('/', createUser);

router.route('/:id')
  .get(getUser)
  .put(updateUser);

export default router;