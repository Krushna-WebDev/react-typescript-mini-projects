import React from "react";

interface TodoItem {
  name: string;
  completed: boolean;
}
interface TodoProps {
  todos: TodoItem[];
  toggleComplete: (index: number) => void;
  DeleteTodo: (index: number) => void;
  UpdateTodo: (todoName: string, index: number) => void;
}
const TodoItem = ({
  todos,
  toggleComplete,
  DeleteTodo,
  UpdateTodo,
}: TodoProps) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div
          key={index}
          className="flex flex-col mb-3 hover:scale-102  bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition"
        >
          <div className="flex justify-between items-center">
            <input
              type="checkbox"
              name="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
            />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.name}
            </span>
            <div className="flex gap-3">
              <button
                onClick={() => UpdateTodo(todo.name, index)}
                className="bg-blue-500 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-blue-600 transition"
              >
                ✏️ Update
              </button>
              <button
                onClick={() => DeleteTodo(index)}
                className="bg-red-500 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-red-600 transition"
              >
                🗑 Delete
              </button>
            </div>
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default TodoItem;
