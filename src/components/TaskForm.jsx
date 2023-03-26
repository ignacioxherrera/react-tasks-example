import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form action="" onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="mb-4 font-black text-2xl text-white">Crea tu Tarea</h1>
      <input
        placeholder="escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
      />
      <textarea
        placeholder="Escribe la descipcion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        className="bg-slate-300 p-3 w-full"
        value={description}
      ></textarea>
      <button className="bg-green-600 text-white font-bold px-2 py-1 mt-4 rounded-xl hover:bg-green-400">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
