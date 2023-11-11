const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2')
const app = express();
const port = 3000;


// MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',  // MySQL host address
    user: 'root',   // MySQL username
    password: '', // MySQL password
    database: 'tasksdb'  // MySQL database name
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());

let tasks = [];


app.get('/', (req, res) => {
    connection.query('SELECT * FROM tasks', (err, results) => {
        if (err) {
            console.error('Error retrieving tasks:', err);
            return res.status(500).json({ message: 'Error retrieving tasks' });
        }
        res.json(results);

    });

});


app.post('/tasks', (req, res) => {
    const { title } = req.body;

    connection.query('INSERT INTO tasks S(title) VALUES (?)', [title], (err, results) => {
        if (err) {
            console.error('Error creating task:', err);
            return res.status(500).json({ message: 'Error creating task' });
        }

        const newTask = { id: results.insertId, title: title };
        res.status(201).json(newTask);

    });
    res.status(400).json({ message: 'Task is Added' });
});


app.patch('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTitle = req.body.title;


    connection.query('UPDATE tasks SET title = ? WHERE id = ?', [updatedTitle, taskId], (err, results) => {
        if (err) {
            console.error('Error updating task:', err);
            return res.status(500).json({ message: 'Error updating task' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
    });
    res.status(400).json({ message: 'Task title is updated!' })


});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);

    connection.query('DELETE FROM tasks WHERE id = ?', [taskId], (err, results) => {
        if (err) {
            console.error('Error deleting task:', err);
            return res.status(500).json({ message: 'Error deleting task' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
    });
    res.json({ message: 'Task deleted successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


