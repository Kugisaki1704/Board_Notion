import React, { useEffect, useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi'; // Import the meatballs icon
import { FaHandPointLeft, FaPlus } from 'react-icons/fa'; // Import the plus icon


const ProjectBoard = ({ tasks, setTasks }) => {

  const [todos, setTodos] = useState ([]);
  const [inProgress, setInProgress] = useState ([]);
  const [closed, setClosed] = useState ([]);

  useEffect(()=>{
    const fTodos = tasks.filter(task=>task.status==='todo');
    const fInProgress = tasks.filter(task=>task.status==='inProgress');
    const fClosed = tasks.filter(task=>task.status==='closed');


    setTodos(fTodos);
    setInProgress(fInProgress);
    setClosed(fClosed);
  }, [tasks]);

  const statuses = ['todo', 'inProgress','closed']
  return (
    <div className='flex gap-16'>
      {statuses.map((status,index)=> 
      <Section key={index}
       status={status}
        tasks={tasks} 
        setTasks = {setTasks} 
        todos={todos}
         inProgress = {inProgress} 
         closed={closed}
         />
         )}
    </div>
  );
};

export default ProjectBoard;

const Section = ({ status, tasks, setTasks, todos, inProgress,closed })=>{

  let text="Not Started";
  let bg="bg-red-100";
  let tasksToMap = todos;


  if(status === 'inProgress'){
    text="In Progress"
    bg="bg-yellow-100"
    tasksToMap = inProgress;
  }
  if(status === 'closed'){
    text="Completed"
    bg="bg-blue-100"
    tasksToMap = closed;
  }

  return(
  <div className='w-64 flex justify-between items-center'>
  <Header text={text} bg={bg} count={tasksToMap.length}/>
    <div className="flex">
          <HiDotsVertical className='text-gray-600 cursor-pointer' /><FaPlus style={{ marginRight: '0' }} className=' text-gray-600 cursor-pointer' />
    </div>
    <div className="flex flex-col">
    {tasksToMap.length > 0 
    && 
    tasksToMap.map((task) => (
      <Task key={task.id} task={task} tasks = {tasks} setTasks={setTasks}/>)
    )};
    </div>
  </div>
  );
};

const Header = ({ text, bg, count })=>{
  return(
  <div>
   <h2 className="text-lg font-semibold mb-2 md:mb-0">
    <span className={`${bg}`}>{text}</span> {count}
    </h2>
  
  </div>
  );
};

const Task = ({ task, tasks, setTasks })=>{

const handleRemove = (id)=>{
  console.log(id);
}

  return(
  <div className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab flex flex-col`}>
   <p>{task.name}</p>
   <button className='absolute bottom-1 right-1 text-slate-400' onClick={()=>handleRemove(task.id)}>

   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

   </button>
  </div>
  );
};