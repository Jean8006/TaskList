import {useEffect, useState} from  'react';
import { getAllTasks } from '../api/tasks.api';
import { TaskCard } from './TaskCard';

export function TaskList(){
    const [tasks, setTasks] = useState([])
useEffect(() => {
    async function loadTasks() {
        const res = await getAllTasks(); //llamamos a la funcion que consume el api
        setTasks(res.data);
    }
    loadTasks(); //cargamos los datos traidos del ai
}, [])

    return <div className='grid grid-cols-3'>
        {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
        ))}
    </div>
}