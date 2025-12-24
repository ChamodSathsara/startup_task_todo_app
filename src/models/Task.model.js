import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true
    },
    description: {
      type: String,
      trim: true,
      default: ''
    },
    status: {
      type: String,
      enum: ['Pending', 'Completed'],
      default: 'Pending'
    },
    scheduledAt: {
      type: Date,
      default: () => new Date().setHours(0, 0, 0, 0)
    }
  },
  {
    timestamps: true
  }
);

taskSchema.index({ scheduledAt: 1 });

const Task = mongoose.model('Task', taskSchema);

export default Task;