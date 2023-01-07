import { createContext, useEffect, useState } from "react"
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);

    const createTask = (taskTitle, taskDescrition) => {
        const newTask = {
            id: tasks.length + 1,
            title: taskTitle,
            description: taskDescrition
        }
        setTasks([...tasks, newTask])
    }

    const deleteTask = (taskId) => setTasks(tasks.filter(t => t.id !== taskId))

    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider value={{
            tasks: tasks,
            deleteTask: deleteTask,
            createTask: createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}