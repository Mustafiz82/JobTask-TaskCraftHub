import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import create from "../../../assets/create Task.png"
import delte from "../../../assets/DeleteTAsk.png"
import todo from "../../../assets/to-do-list.png"
import AOS from "aos";
import "aos/dist/aos.css";


const Dashboard = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const {user} = useContext(AuthContext)
    return (
        <div className=''>
            <div className="m-10 flex flex-col md:flex-row top-0 items-center gap-10 text-2xl  ">
				<div  className="flex justify-center relative rounded-full">
					<img 
						src={user?.photoURL}
						className={` w-64 p-2 rounded-full   border-4`}
						alt=""
					/>
					
				</div>

				<div className="space-y-4 mt-4 ">
					<div>
						<h1 className='font-bold'
							
						>
							Name
						</h1>
						<p>{user?.displayName}</p>
					</div>

					<div>
						<h1 className='font-bold'
							
						>
							Email
						</h1>
						<p>{user?.email}</p>
					</div>

					
				</div>
			</div>

            <div className="w-full  flex  md:flex-row justify-start items-center overflow-hidden">
			<div className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-5 md:gap-10 items-center ">
				<Link to="/Dashboard/CreateTask"  className="card p-10 bg-base-100 shadow-xl">
					<figure  className="w-full ">
						<img  data-aos="zoom-in"
							src={create}
							alt="Shoes"
                            className="w-44 md:w-28"
						/>
					</figure>
					<div className="card-body">
						<div className="text-xl text-center font-bold">Create Task</div>
					</div>
				</Link>
				<Link to="/Dashboard/ToDo"  className="card p-10 bg-base-100 shadow-xl">
					<figure>
						<img data-aos="zoom-in"
							src={todo}
							alt="Shoes"
                            className="w-44 "
						/>
					</figure>
					<div className="card-body">
						<p className="text-xl font-bold">To Do list</p>
					</div>
				</Link>
				<Link to="/Dashboard/DeleteToDo"  className="card p-10 bg-base-100 shadow-xl">
					<figure>
						<img data-aos="zoom-in"
							src={delte}
							alt="Shoes"
                            className="w-44 md:w-28"
						/>
					</figure>
					<div className="card-body">
						<p className="text-xl font-bold">Delete Task</p>
					</div>
				</Link>
				
			</div>
			</div>
        </div>
    );
};

export default Dashboard;