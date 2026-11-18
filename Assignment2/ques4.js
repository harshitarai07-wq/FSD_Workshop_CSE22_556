/*Q4. (GET, POST, PUT, DELETE routes)
Create routes for a to-do list app: GET to see all tasks, POST to add a new task, PUT to mark a task as completed, and DELETE to remove a task. Store tasks in a simple array (no database needed).Q4. (GET, POST, PUT, DELETE routes)
*/
const express = require('express');
const app = express();

// Middleware to read JSON request bodies
app.use(express.json());

// In-memory array to store tasks
let tasks = [
    { id: 1, task: 'Learn Node.js', completed: false },
    { id: 2, task: 'Practice JavaScript', completed: false }
];

// GET: Display all tasks
app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});

// POST: Add a new task
app.post('/tasks', (req, res) => {
    const taskName = req.body.task;

    if (!taskName) {
        return res.status(400).json({ message: 'Please provide a task name.' });
    }

    const newTask = {
        id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
        task: taskName,
        completed: false
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT: Mark a task as completed
app.put('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: 'Task not found.' });
    }

    task.completed = true;
    res.status(200).json(task);
});

// DELETE: Remove a task
app.delete('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Task not found.' });
    }

    const deletedTask = tasks.splice(index, 1)[0];
    res.status(200).json(deletedTask);
});

// Start the server
app.listen(3000, () => {
    console.log('To-do API server running at http://localhost:3000');
});
