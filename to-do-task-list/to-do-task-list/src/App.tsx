// App.tsx
import { useState } from "react";
import { Header } from "./components/header";
import { TaskList } from "./components/taskList";

// Estrutura de dados da tarefa
export type Task = {
  id: string;
  name: string;
  completed: boolean;
}

export function App() {
  // Criando o estado que armazena todas as tarefas, inicializada como uma lista vazia.
  const [tasks, setTasks] = useState<Task[]>([])

  // Função que adiciona a tarefa no estado.
  const addTask = (taskName: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(), // Gerando ID Aleatório.
      name: taskName,
      completed: false
    }

    setTasks([...tasks, newTask])
  }

  // Função para excluir a task, recebe o ID da task que vai excluir
  const deleteTask = (taskId: string) => {
    const taskToDelete = tasks.find((task) => task.id == taskId)

  if (!taskToDelete) {
    return
  }

  const otherTasks = tasks.filter((task) => task.id != taskId)
  setTasks(otherTasks)
  }

  const updateTask = (taskId: string) => {
    const taskToUpdate = tasks.find((task) => task.id == taskId)

    if (!taskToUpdate){
      return
    }

    taskToUpdate.completed = !taskToUpdate.completed
    const otherTasks = tasks.filter((task) => task.id != taskId)
    setTasks([...otherTasks, taskToUpdate])
  }
  
  // Visualize que as Tasks Estão Sendo Adicionadas
  console.log(tasks)

  return (
    <div className="bg-gray-100 h-screen">
      {/* Passando função "addTask" como prop para o Header */}
      <Header addTask={addTask} />
      <TaskList 
        tasks={tasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  )
}