import React, { useState } from 'react';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoForm({ addTodo }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        if(!title) return;
        addTodo(title, description);
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <input
                type="text"
                className="todo-title-input"
                value={title}
                onChange={event => setTitle(event.target.value)}
                placeholder="Title"
                required
            />
            <input
                type="text"
                className="todo-description-input"
                value={description}
                onChange={event => setDescription(event.target.value)}
                placeholder="Description"
                required
            />
            <div className="bottom-sheet">
                <button className="add-todo-button" type="submit">
                    Add Task 
                </button>
            </div>
        </form>
    );
}

export default TodoForm;