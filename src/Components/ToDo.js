import React, { useState } from 'react';

// Component responsible for tasks management (adding, marking done and deleting).

export function ToDo() {

  const [inputTask, setInputTask] = useState("");
  const [list, setList] = useState([]);

  const handleAddTask = () => {
    const newTask = {
      id: list.length + 1,
      task: inputTask,
      isDone: false
    };

    setList([...list, newTask]);
    setInputTask("");
  }

  const handleInputChange = (event) => {
    setInputTask(event.target.value);
  };

  const handleDeleteTask = (id) => {
    setList(list.filter((task) => task.id !== id));
  }

  const handleIsTaskDone = (id) => {
    setList(list.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !task.isDone
        }
      }
      return task;
    }));
  }

  return (
    <div className="todo-lists">
      <div className="todo-input">
        <input className="user-input" type="text" value={inputTask} onChange={handleInputChange}/>
        <button className="add-button" onClick={handleAddTask}>add</button>
      </div>
      <ul className="task-holder">
        { list.map((todo) => (
          <li key={todo.id}>
            <div className="single-task">
              <div className={todo.isDone ? "done-task" : ""}>{todo.task}</div>
              <div className="task-buttons">
                <button className="done-button" onClick={() => handleIsTaskDone(todo.id)}>done!</button>
                <button className="del-button" onClick={() => handleDeleteTask(todo.id)}>delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}