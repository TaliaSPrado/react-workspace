import { useState } from "react";
import { Button } from "./button";

type HeadrerProps ={
  addTask: (taskName: string) => void
}

export const Header = ({ addTask }: HeadrerProps ) => {

  const [taskName, setTaskName] = useState("");
  // console.log(taskName);

    // Handle - lidar com a adição da tarefa
  const handleAddTask = () => {
    if (taskName.trim()){
      addTask(taskName);
    } else {
      return 
    }
  }

  // Utilizando Ternário
  // const handleAT = (taskName.trim() ? addTask(taskName): "")

  return (
    <header className="flex flex-col items-center pt-8 gap-16">
      <h1 className="text-3xl"> My Tasks </h1>
        <div className="flex gap-4">
          <input 
            type="text" 
            value={taskName}
            // e -> se refere a event
            onChange={(e) => (setTaskName(e.target.value))} // O alvo do evento é a própria tag input, por isso se chama target (sinônimo da própria tag)
            className="bg-white shadow w-80 h-12 text-xl py-2 px-4 outline-0 rounded-2xl" 
          />
          <Button onClick={handleAddTask}>+</Button>
        </div>
    </header>
  );
}

