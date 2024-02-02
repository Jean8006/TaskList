import axios from  'axios';



const tasksAPI = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})
//consumimos el api creada en django
export const getAllTasks = () => {
    //return axios.get('http://localhost:8000/tasks/api/v1/tasks/') esta manera seria sin crear la constante taskAPI
    return tasksAPI.get('/')
}
export const getTask   = (id) => tasksAPI.get(`/${id}/`)

export const createTask = (task) => {
    return tasksAPI.post('/', task);
}

export const deleteTask = (id) => tasksAPI.delete(`/${id}`)

export const updateTask = (id, task) => tasksAPI.put(`/${id}/`,task)