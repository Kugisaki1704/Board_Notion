import React, { useState, useEffect } from 'react';
import { HiDotsVertical } from 'react-icons/hi'; // Import the meatballs icon
import { FaPlus } from 'react-icons/fa'; // Import the plus icon

function ProjectBoard({ listType }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [showNewTodoInput, setShowNewTodoInput] = useState(false);
  const [randomColorClass, setRandomColorClass] = useState('');

  const colorClasses = [
    'bg-blue-100',
    'bg-green-100',
    'bg-yellow-100',
    'bg-red-100',
    'bg-purple-100',
    // Add more color classes as needed
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    setRandomColorClass(colorClasses[randomIndex]);
  }, []);

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(listType)) || [];
    setTodos(storedTodos);
  }, [listType]);

  // Save todos to local storage whenever todos change
  useEffect(() => {
    localStorage.setItem(listType, JSON.stringify(todos));
  }, [listType, todos]);

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleNewTodoSubmit = () => {
    const trimmedTodo = newTodo.trim();
    if (trimmedTodo !== '') {
      setTodos([...todos, trimmedTodo]);
      setNewTodo('');
      setShowNewTodoInput(false);
    }
  };

  const handleNewButtonClick = () => {
    setShowNewTodoInput(true);
  };

  const handleRenameBoard = () => {
    const newName = prompt('Enter new board name:', listType);
    if (newName !== null) {
      localStorage.removeItem(listType);
      localStorage.setItem(newName, JSON.stringify(todos));
      setTodos([]);
      // Update listType state if needed
    }
  };

  const handleAddNewBoard = () => {
    // Implement functionality to add a new board
  };

  return (
    <div className="project-board">
      <div className="list bg-white-100 p-4 rounded border-none">
      <div className="flex items-center justify-between mb-2">
  <h2 className='text-lg font-semibold'>
    <span className={`${randomColorClass}`}>{listType}</span> {todos.length}
  </h2>
  <div className="flex">
    <button onClick={handleRenameBoard} className="mr-4 focus:outline-none">
      <HiDotsVertical className="text-gray-500 hover:text-gray-700 cursor-pointer" />
    </button>
    <button className="focus:outline-none">
      <FaPlus className="text-gray-500 hover:text-gray-700 cursor-pointer" />
    </button>
  </div>
</div>


        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="bg-white rounded shadow p-2 mb-2">{todo}</li>
          ))}
        </ul>
        {showNewTodoInput ? (
          <div className='mb-4'>
            <textarea
              value={newTodo}
              onChange={handleNewTodoChange}
              className="button-gray font-sm py-2 px-4 rounded border-none"
              placeholder="Enter your new todo..."
              rows="1"
              cols="50"
            />
            <button onClick={handleNewTodoSubmit} className='button-gray font-bold py-2 px-4 rounded'>Save</button>
          </div>
        ) : (
          <button onClick={handleNewButtonClick} className="button-gray font-bold py-2 px-4 rounded">+ New</button>
        )}
      </div>
    </div>
  );
}

export default ProjectBoard;
