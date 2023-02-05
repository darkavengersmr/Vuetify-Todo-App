import { ITask } from "@/interfaces"

const useTasks = () => {
    const fetchTasks = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        return await response.json() as ITask[]
    }
    return {
        fetchTasks
    }
}

export default useTasks