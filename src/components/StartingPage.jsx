// import React, { useState } from 'react';

function StartingPage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleNewTodoSubmit = () => {
    if (newTodo.trim() !== '') {
      setTodos((prevTodos) => [
        ...prevTodos,
        { text: newTodo, isEditing: false }
      ]);
      setNewTodo('');
    }
  };

  const handleNewButtonClick = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: '', isEditing: true }
    ]);
  };

  const handleTodoEdit = (index, newText) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index].text = newText;
      updatedTodos[index].isEditing = false;
      return updatedTodos;
    });
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo.isEditing ? (
            <div>
              <textarea
                value={todo.text}
                onChange={(e) => handleTodoEdit(index, e.target.value)}
                placeholder="Enter your new todo..."
                rows="3"
                cols="50"
              />
              <button
                onClick={() => handleTodoEdit(index, todo.text)}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          ) : (
            <div>
              <div>{todo.text}</div>
              <button
                onClick={() => handleNewButtonClick(index)}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
              >
                + New
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default StartingPage;
