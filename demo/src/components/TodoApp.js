import React from 'react';
import { Link } from 'react-router-dom';

function TodoApp({ task, tasks, inputTask, addTask, redirectToError }) {
    return (
        <div>
            <input type="text" onChange={e => inputTask(e.target.value)} />
            <input type="button" value="add" onClick={() => addTask(task)} />
            <ul>
                {
                    tasks.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))
                }
            </ul>
            <Link to="/error">
                <button>エラーページへ</button>
            </Link>
        </div>
    )
}

export default TodoApp;