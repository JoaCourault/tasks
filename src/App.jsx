import { TaskList } from "./components/tasks/TaskList"
import { TaskForm } from "./components/tasks/TaskForm"

export function App() {
  return <div className="bg-zinc-900 h-screen">
    <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />
    </div>

  </div>
}