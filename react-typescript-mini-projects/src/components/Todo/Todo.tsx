import React, { useEffect, useState } from "react";
import TodoTs from "./TodoTs";

interface TodoItem {
  name: string;
  completed: boolean;
}
type FilterInterface = "All" | "Completed" | "Pending";

const Todo = () => {
  const [input, setinput] = useState<string>("");
  const [SearchInput, setSearchinput] = useState<string>("");
  const [todo, setTodo] = useState<TodoItem[]>(()=>{
    const todos= localStorage.getItem("todos")
    return todos ? JSON.parse(todos) : []
});
  const [Model, setModel] = useState(false); 
  const [editValue, setEditValue] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [FilterBy, setFilterBy] = useState<FilterInterface>("All");
  const AddTodo = () => {
    const duplicate = [...todo].find((todo) => todo.name === input);
    if (duplicate) return alert("duplicate not allowed");
    if (input === "") return alert("Input is Empty");
    setTodo([...todo, { name: input, completed: false }]);
    setinput("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);
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

  const FilterTodo = todo.filter((todo) => {
    if (FilterBy === "All") return true;
    if (FilterBy === "Completed") return todo.completed;
    if (FilterBy === "Pending") return !todo.completed;
    return true;
  });
  const SearchTodo = FilterTodo.filter((todo) =>
    todo.name.toLowerCase().includes(SearchInput.toLowerCase().trim())
  );

  const todoLength = todo.length;
  const completedTodo = todo.filter((todo) => todo.completed === true).length;
  const PendingTodo = todo.filter((todo) => !todo.completed === true).length;

  return (
    <>
      <div className="bg-gray-800 min-h-screen text-white  text-center">
        <div>
          <h1 className="text-2xl text-center text-white font-bold">
            Todo Task With TS
          </h1>
        </div>
        <div className="mt-5 ">
          <div className="w-full max-w-2xl mx-auto p-6 bg-gray-900 rounded-2xl shadow-lg">
            <label className="block text-lg font-semibold text-gray-200 mb-2">
              Enter your task:
            </label>

            <div className="flex gap-3">
              <input
                type="text"
                onChange={(e) => setinput(e.target.value)}
                placeholder="Enter your Task"
                value={input}
                className="flex-1 border border-gray-700 bg-gray-800 text-gray-200 
                 focus:ring-2 focus:ring-amber-400 px-3 py-2 rounded-lg 
                 shadow-sm outline-none transition"
              />
              <button
                onClick={AddTodo}
                className="px-4 py-2 font-semibold rounded-lg bg-gradient-to-r 
                  from-teal-400 to-cyan-500 text-gray-900 shadow 
                 hover:opacity-90 transition"
              >
                Add
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <select
                onChange={(e) => setFilterBy(e.target.value as FilterInterface)}
                className="border border-gray-700 bg-gray-800 text-gray-200 
                 px-3 py-2 rounded-lg shadow-sm 
                 focus:ring-2 focus:ring-amber-400 outline-none"
              >
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>

              <div className="flex gap-2 flex-1">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearchinput(e.target.value)}
                  className="flex-1 border border-gray-700 bg-gray-800 text-gray-200 
                   px-3 py-2 rounded-lg shadow-sm 
                   focus:ring-2 focus:ring-amber-400 outline-none"
                />
                <button
                  className="px-4 py-2 font-semibold rounded-lg bg-gradient-to-r from-teal-400 to-cyan-500
 text-gray-900 shadow 
                         hover:opacity-90 transition"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 mx-auto max-w-2xl justify-center mt-10">
            <div className="flex justify-end">
              <div className="bg-gray-800 font-semibold rounded-full px-4 py-1 text-sm shadow-md flex gap-3">
                <span className="text-green-400">
                  {completedTodo}/{todoLength} Completed
                </span>
                <span className="text-yellow-400">{PendingTodo} Pending</span>
              </div>
            </div>

            <TodoTs
              todos={SearchTodo}
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
