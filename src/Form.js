import React from 'react'
import { useState,useEffect } from 'react';


function Form(){
    const [task, setTask] = useState(" ");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const localTasks = JSON.parse(localStorage.getItem("localTasks")) || [];
        setTasks(localTasks);
      }, []);
    
      useEffect(() => {
        localStorage.setItem("localTasks", JSON.stringify(tasks));
      }, [tasks]);

      const addTask = () => {
        if (task.trim()) {
            const newTask = {id:new Date().getTime().toString(), title:task  };
            setTasks([...tasks,newTask]);
            localStorage.setItem("localTasks", JSON.stringify([...tasks,newTask]));
            setTask("");

        }
    };
    const handleDelete=(id)=>{
        const deleted=tasks.filter((task)=>task.id !== id);
        setTasks(deleted);
        
    };




    

  return (
    
        <div className='container row'>
            <h1 className="mt-3 text-White">REMINDER APP</h1>

            <div className='col-8'>
            <input type="text" placeholder='ENTER A REMINDER' name="task" value={task} className='form-control' 
        onChange={(e)=>setTask(e.target.value)}></input>
        </div>



        <div className='col-4'>
        <button type="button"  className="btn btn-primary"  onClick= {addTask}> Add reminder</button>
        </div>

    


        <div className='badge'>
            You have
            {
                !tasks.length
                ?"no tasks"
                :tasks.length == 1 
                ? "1 task"
                :tasks.length >1 
                ? `${tasks.length} tasks`
                :null
            }
        </div>
        {tasks.map((task)=>(
            <React.Fragment key={task.id}>
                <div className='col-11'>
                    <span className='form-control bg-white btn mt-2'
                    style={{textAlign: "left",fontWeight:"bold"}}>
                        {task.title}
                    </span>
                </div>

                <div className="col-8">
            <input
              type="text"
              name="task"
              value={task.title}
              className="form-control"
              onChange={(e) => {
                const updatedTasks = tasks.map((t) =>
                  t.id === task.id ? { ...t, title: e.target.value } : t
                );
                setTasks(updatedTasks);
              }}
            />
          </div>

               

                <div className='col-1'>
                    <button className='mt-2 btn btn-warning material-icons'
                    onClick={()=>handleDelete(task.id)}>
                        delete
                    </button>
                </div>
            </React.Fragment>

        ))}

    </div>
  )
}

export default Form;

// import React, { useState, useEffect } from "react";

// function Form() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const localTasks = JSON.parse(localStorage.getItem("localTasks")) || [];
//     setTasks(localTasks);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("localTasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = () => {
//     if (task.trim()) {
//       const newTask = { id: new Date().getTime().toString(), title: task };
//       setTasks([...tasks, newTask]);
//       setTask("");
//     }
//   };

//   const handleDelete = (id) => {
//     const deleted = tasks.filter((task) => task.id !== id);
//     setTasks(deleted);
//   };

//   return (
//     <div className="container row">
//       <h1 className="mt-3 text-White">REMINDER APP</h1>

//       <div className="col-8">
//         <input
//           type="text"
//           placeholder="ENTER A REMINDER"
//           name="task"
//           value={task}
//           className="form-control"
//           onChange={(e) => setTask(e.target.value)}
//         />
//       </div>

//       <div className="col-4">
//         <button type="button" className="btn btn-primary" onClick={addTask}>
//           Add reminder
//         </button>
//       </div>

//       <div className="badge">
//         You have{" "}
//         {tasks.length === 0
//           ? "no tasks"
//           : tasks.length === 1
//           ? "1 task"
//           : `${tasks.length} tasks`}
//       </div>

//       {tasks.map((task) => (
//         <React.Fragment key={task.id}>
//           <div className="col-11">
//             <span
//               className="form-control bg-white btn mt-2"
//               style={{ textAlign: "left", fontWeight: "bold" }}
//             >
//               {task.title}
//             </span>
//           </div>

        //   <div className="col-8">
        //     <input
        //       type="text"
        //       name="task"
        //       value={task.title}
        //       className="form-control"
        //       onChange={(e) => {
        //         const updatedTasks = tasks.map((t) =>
        //           t.id === task.id ? { ...t, title: e.target.value } : t
        //         );
        //         setTasks(updatedTasks);
        //       }}
        //     />
        //   </div>

//           <div className="col-1">
//             <button
//               className="mt-2 btn btn-warning material-icons"
//               onClick={() => handleDelete(task.id)}
//             >
//               delete
//             </button>
//           </div>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

// export default Form;
