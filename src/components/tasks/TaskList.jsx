import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { TaskCard } from "./TaskCard";

export function TaskList() {
    const contextProps = useContext(TaskContext)
    
    if (contextProps.tasks.length === 0) {
        return <h1 className="text-white font-bold text-4xl text-center p-20">No hay tareas</h1>
    }

    return (
        <div className="grid grid-cols-4 gap-2 p-4 rounded-md">
            {contextProps.tasks.map((task) =>
                <TaskCard key={task.id} task={task} deleteTask={contextProps.deleteTask} />
            )}
        </div>
    );
}