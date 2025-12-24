import express from 'express';
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  toggleTaskStatus,
  deleteTask
} from '../controllers/task.controller.js';

const router = express.Router();

router.route('/')
  .get(getTasks)
  .post(createTask);

router.route('/:id')
  .get(getTask)
  .put(updateTask)
  .delete(deleteTask);

router.patch('/:id/toggle', toggleTaskStatus);

export default router;