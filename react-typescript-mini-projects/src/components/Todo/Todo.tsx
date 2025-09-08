import React, { use, useState } from "react";
import TodoTs from "./TodoTs";

interface TodoItem {
  name: string;
  completed: boolean;
}
type FilterInterface = "All" | "Completed" | "Pending";

const Todo = () => {
  const [input, setinput] = useState<string>("");
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [Model, setModel] = useState(false);
  const [editValue, setEditValue] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [FilterBy, setFilterBy] = useState<FilterInterface>("All");
  const AddTodo = () => {
    if (input === "") return alert("Input is Empty");
    setTodo([...todo, { name: input, completed: false }]);
    setinput("");
  };

  const DeleteTodo = (index: number): void => {
    const newTodos = todo.filter((_, i) => i !== index);
    setTodo(newTodos);
  };

  const UpdateTodo = (todoName: string, index: number) => {
    setModel(true);
    setEditValue(todoName);
    setEditIndex(index);
  };

  const handleUpdate = () => {
    if (editValue.trim() && editIndex !== -1) {
      const newTodos = [...todo];
      newTodos[editIndex].name = editValue;
      setTodo(newTodos);
      setModel(false);
      setEditIndex(-1);
    }
  };

  const toggleComplete = (index: number) => {
    const newTodos = [...todo];
    newTodos[index].completed = !newTodos[index].completed;
    setTodo(newTodos);
  };

  const FilterTodo = todo.filter((todo, index) => {
    if (FilterBy === "All") return true;
    if (FilterBy === "Completed") return todo.completed;
    if (FilterBy === "Pending") return !todo.completed;
    return true;
  });
  console.log(FilterTodo);
  return (
    <>
      <div className="bg-gray-700 min-h-screen text-white  text-center">
        <div>
          <h1 className="text-2xl text-center text-white font-bold">
            Todo Task With TS
          </h1>
        </div>
        <div className="mt-5 ">
          <span className="px-3 text-xl">Enter you task :-</span>
          <input
            type="text"
            onChange={(e) => setinput(e.target.value)}
            placeholder="Enter your Task"
            value={input}
            className="border-2 border-gray-500 px-2 py-1 rounded "
          />
          <div className="mt-5">
            <button
              onClick={AddTodo}
              className="px-2 py-1 font-bold rounded bg-gradient-to-l from-amber-300 to-amber-600"
            >
              Add todo
            </button>
            <select
              onChange={(e) => setFilterBy(e.target.value as FilterInterface)}
              className="bg-gray-700 mx-5 border-2 border-black px-2 py-1 rounded"
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div className="grid grid-cols-1 mx-auto max-w-xl justify-center mt-10">
            <TodoTs
              todos={FilterTodo}
              toggleComplete={toggleComplete}
              DeleteTodo={DeleteTodo}
              UpdateTodo={UpdateTodo}
            />
          </div>
          {Model && (
            <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50  ">
              <div className="bg-gray-800 ">
                <div className="m-5 rounded">
                  <div>
                    <h1 className="text-2xl my-5 inline-block">Update </h1>
                    <button onClick={() => setModel(false)} className="px-5">
                      X
                    </button>
                  </div>
                  <input
                    type="text"
                    onChange={(e) => setEditValue(e.target.value)}
                    value={editValue}
                    className="px-2 py-1 border border-gray-600 rounded"
                  />
                  <button
                    onClick={handleUpdate}
                    className="bg-blue-600 mx-5 px-2 py-1 rounded"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
