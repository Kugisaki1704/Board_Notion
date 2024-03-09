import React, { useEffect, useState } from 'react';
import StartingPage from './components/StartingPage';
import ProjectBoard from './components/ProjectBoard';
import { Toaster } from 'react-hot-toast';

function App(){
  const [tasks, setTasks] = useState([]);

  console.log("tasks",tasks);
  useEffect(()=>{
    setTasks(JSON.parse(localStorage.getItem("tasks")))
  },[])


  return (
    <>
    <Toaster />
    <div className="w-screen h-screen flex flex-col items-center p-3 gap-16 pt-32">
      <StartingPage tasks={tasks} setTasks={setTasks}/> 
      <ProjectBoard tasks={tasks} setTasks={setTasks}/> 
      {/* props */}
    </div>
    
    </>
  )
}

export default App;
