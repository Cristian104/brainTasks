import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TodoList.css'; // Include the CSS styles for transitions

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const tasksPerPage = 8;

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    if (!newTask) {
      alert("Please enter a task!");
      return;
    }
    try {
      const response = await axios.post('/api/tasks', { name: newTask });
      setTasks([...tasks, response.data]);
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(`/api/tasks/${id}`);
      if (response.status === 200) {
        setTasks(tasks.filter(task => task._id !== id));
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const nextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(tasks.length / tasksPerPage) - 1));
  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 0));
  };

  const currentTasks = tasks.slice(currentPage * tasksPerPage, (currentPage + 1) * tasksPerPage);

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add Task</button>
      <TransitionGroup component="ul">
        {currentTasks.map(task => (
          <CSSTransition key={task._id} timeout={500} classNames="task">
            <li>
              <span>{task.name}</span>
              <button onClick={() => deleteTask(task._id)}>Delete</button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div className="navigation-buttons">
        <button className="prev-next" onClick={prevPage} disabled={currentPage === 0}>Previous</button>
        <button className="prev-next" onClick={nextPage} disabled={(currentPage + 1) * tasksPerPage >= tasks.length}>Next</button>
      </div>
    </div>
  );
};

export default TodoList;
