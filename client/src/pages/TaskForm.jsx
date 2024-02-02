import {useForm} from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import {useNavigate, useParams} from  "react-router-dom";
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export function TaskFormPage(){
    
    const {register,  handleSubmit, formState: {
        errors
    },
    setValue
    } = useForm();
    const navigate =useNavigate()
    const params =  useParams();
    console.log(params)
    //capturar la data para verla
    const onSubmit = handleSubmit(async data => {
        //al crear la tarea va a redireccionar
        if (params.id){
            console.log('Actualizando');
            await updateTask(params.id, data)
            toast.success('Tarea actualizada', {position: "bottom-right", style: {background: "#101010", color:"#fff"}})
        }else{
            await createTask(data) 
            toast.success('Tarea creada', {position: "bottom-right", style: {background: "#101010", color:"#fff"}})
        }
        navigate("/tasks")
    })

    useEffect(() => {
    async function loadTask() {
        if (params.id){
            const res = await getTask(params.id);
            setValue('title', res.data.title)
            setValue('description', res.data.description)
        }
    }
    loadTask();
    }, [])

    return (
        <div className='mas-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Title" {...register("title", {required:true})} className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'/>
                {errors.title && <span>This field is required</span>}
                <textarea name="description" id="" cols="30" rows="3" placeholder="Description" {...register("description", {required:true})} className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'></textarea>
                {errors.description && <span>This field is required</span>}
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Save</button>
            </form>
            <div className='flex justify-end'>
            {params.id && <button className='
            bg-red-500 p-3 rounded-lg w-48 mt-3' onClick={async () =>{
                const accepted = window.confirm('Desea eliminar esta tarea?')
                if (accepted){
                    await  deleteTask(params.id);
                    toast.success('Tarea actualizada', {position: "bottom-right", style: {background: "#101010", color:"#fff"}})
                    navigate('/tasks');
                }
            }}>Delete</button>}
            </div>
        </div>
    );
}