import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../Context/AuthProvider";

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDrop } from 'react-dnd'

import ToDoCard from "./ToDoCard";
import Ongoin from "./Ongoin";
import { Link } from "react-router-dom";

const ToDo = () => {
	const [taskdata, settaskData] = useState([]);

	const axiosPublic = useAxiosPublic();
	const { user } = useContext(AuthContext);


   

	useEffect(() => {
		axiosPublic.get(`/tasks/${user?.email}`).then((data) => {
			settaskData(data.data);
			console.log(data);
		});
	}, [user]);


    if(taskdata.length == 0){
        return <div className="h-screen text-center flex-col justify-center flex items-center">
            <h1 className="text-xl">no task found</h1>
            <Link to="/Dashboard/CreateTask" className="btn ">Create a new task</Link>
        </div>
    }

	return (
		<div className="flex  flex-col md:flex-row m-5 ">
			<div className="border-4  rounded-xl md:w-1/3    h-[90vh] top-6 overflow-scroll border-red-400  space-y-4">
				<h1 className="text-3xl mt-4 text-center">Todo List</h1>
				{taskdata.map((item) => (
                    <ToDoCard item={item} key={item._id} ></ToDoCard>
				))}{" "}
			</div>
				
				<div className="border-4 md:w-1/3  h-[90vh] border-green-400  ">
                    <h1 className="text-3xl mt-4 text-center">Ongoing </h1>
                    
                </div>
				<div className="border-4 md:w-1/3  h-[90vh] border-purple-400  ">
                    <h1 className="text-3xl mt-4 text-center">Completed</h1>
                    
                </div>
		
		</div>
	);
};

export default ToDo;
