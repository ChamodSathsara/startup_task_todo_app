import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/task.routes.js';
import userRoutes from './routes/user.routes.js';
import errorHandler from './middlewares/error.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Task Manager API is running' });
});

app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

export default app;