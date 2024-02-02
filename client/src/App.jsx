import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TaskPage } from "./pages/TaskPage";
import { TaskFormPage } from "./pages/TaskForm";
import { Navigation } from './components/navigation';
import {Toaster} from 'react-hot-toast'; //son las notificaciones

//Asi llamamos las rutas en react
function App(){
  return (
    <BrowserRouter>
      <Navigation/>
      <div className='container mx-auto'>
      <Routes>
        <Route path="/" element={<Navigate to="/tasks"/>} />
        <Route path="/tasks" element={<TaskPage />}/>
        <Route path="/tasks-create" element={<TaskFormPage />}/>
        <Route path="/tasks/:id" element={<TaskFormPage />}/>
      </Routes>
      </div>
      <Toaster/>
    </BrowserRouter>
  )
}

export  default App;
