const Task = require('./models/task');

// Create Task
app.post('/tasks', async (req, res) => {
  const task = new Task({
    name: req.body.name,
  });
  await task.save();
  res.status(201).send(task);
});

// Get All Tasks
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

// Update Task by ID
app.put('/tasks/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(task);
});

// Delete Task by ID
app.delete('/tasks/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.send({ message: 'Task deleted' });
});

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

