import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faTrashCan, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TodoList({ todo, index, completeTodo, removeTodo }) {
    return (
        <div className="todo">
            <p>
                <b><span className="todo-title" style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{ todo.title }</span></b>
                <br/>
                <span className="todo-description" style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{ todo.description }</span>
            </p>
            <div>
                <button className="complete-todo-button" onClick={() => completeTodo(index)}><FontAwesomeIcon icon={faCheckCircle} /></button>{' '}
                <button className="remove-todo-button" onClick={() => removeTodo(index)}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        </div>
    );
}

export default TodoList;