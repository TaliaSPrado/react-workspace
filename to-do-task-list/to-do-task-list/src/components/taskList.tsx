// components/task-list.tsx
import type { Task } from "../App"
import { TaskItem } from "./taskItem"


type TaskListProps = {
	tasks: Task[];
	deleteTask: (taskId: string) => void;
	updateTask: (taskId: string) => void;
}

export const TaskList = ({ tasks, deleteTask, updateTask}: TaskListProps) => {

    // Se a condição for verdadeira, ele retorna um paragráfo
	if (tasks.length == 0) {
		return <p className="pt-10 text-center">Não há tarefas cadastradas.</p>
	}

	return (
		<ul className="pt-10 flex flex-col items-center gap-4">
			{tasks.map((task) => (
				<TaskItem 
					key={task.id} 
					task={task}
					deleteTask={deleteTask}
					updateTask={updateTask} 
				/>
			))}
		</ul>
	)
}