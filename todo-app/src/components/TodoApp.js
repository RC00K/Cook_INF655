import React, { useState } from 'react';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (title, description) => {
        const newTodos = [...todos, { title, description }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index] = {
            ...todos[index],
            isDone: !todos[index].isDone
        }
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <h1 className="mt-5">Todo App</h1>
            <h4 className="mb-5 text-capitalize">Simple way to manage your tasks</h4>
            <div className="todo-container">
                <TodoForm addTodo={addTodo} />
                <div>
                    <div className="todo-list list-border">
                        {todos.map((todo, index) => (
                            <div key={index} className="mb-3">
                                <div>
                                    <TodoList 
                                        key={index} 
                                        index={index} 
                                        todo={todo} 
                                        completeTodo={completeTodo} 
                                        removeTodo={removeTodo} 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoApp;