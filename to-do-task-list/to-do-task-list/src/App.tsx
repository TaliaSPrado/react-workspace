// App.tsx
import { useState } from "react";
import { Header } from "./components/header";

// Estrutura de dados da tarefa
type Task = {
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
  
  // Visualize que as Tasks Estão Sendo Adicionadas
  console.log(tasks)

  return (
    <div className="bg-gray-100 h-screen">
      {/* Passando função "addTask" como prop para o Header */}
      <Header addTask={addTask} />
    </div>
  )
}