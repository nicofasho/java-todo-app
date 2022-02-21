import { useState } from "react";

export default function ListTodosComponent() {
  const [todos, setTodos] = useState([
    { id: 1, description: "Learn React", done: false, targetDate: new Date() },
    { id: 2, description: "Learn Java", done: false, targetDate: new Date() },
    { id: 3, description: "Learn C++", done: false, targetDate: new Date() },
  ]);

  return (
    <div>
      <h1>List Todos</h1>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
              <th>target date</th>
              <th>done</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.targetDate.toDateString()}</td>
                <td>{todo.done.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
