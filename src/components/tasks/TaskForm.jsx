import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

export function TaskForm(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const contextProps = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        contextProps.createTask(title, description)
        setTitle('')
        setDescription('')
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-lg">
                <input className="bg-slate-300 placeholder:text-slate-600 font-bold p-3 w-full rounded-md" autoFocus onChange={(e) => setTitle(e.target.value)} placeholder="Escribre el titulo de la tarea." value={title} />
                <textarea className="bg-slate-300 placeholder:text-slate-600 font-bold p-3 w-full rounded-md" onChange={(e) => setDescription(e.target.value)} placeholder="Escribe la descripcion de la tarea." value={description}></textarea>

                <button className="bg-green-500 text-slate-100 px-3 py-1 rounded-md hover:bg-green-700">
                    Guardar
                </button>
            </form>
        </div>
    )
}