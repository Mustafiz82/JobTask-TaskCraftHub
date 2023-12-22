import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";

const DashboardLayout = () => {
    return (
        <div>
			<div className="drawer lg:drawer-open h-0">
				<input
					id="my-drawer-2"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content ">
					
					<label
						htmlFor="my-drawer-2"
						className="  drawer-button lg:hidden"
					>
						<FiMenu size={40}  className="m-5"/>

					</label>

                    <Outlet></Outlet>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer-2"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<ul className="menu text-lg p-4 w-80 space-y-4 min-h-full bg-base-200 text-base-content">
						{/* Sidebar content here */}
						<NavLink
							to="/"
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
									: isActive
									? "text-purple-600 font-bold"
									: "font-bold text-black"
							}
						>
							Home
						</NavLink>
						<NavLink
							to="/Dashboard/CreateTask"
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
									: isActive
									? "text-purple-600 font-bold"
									: " text-black"
							}
						>
							Create Task
						</NavLink>
						<NavLink
							to="/Dashboard/ToDo"
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
									: isActive
									? "text-purple-600 font-bold"
									: " text-black"
							}
						>
                            ToDo List
						</NavLink>
						<NavLink
							to="/Dashboard/DeleteToDo"
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
									: isActive
									? "text-purple-600 font-bold"
									: " text-black"
							}
						>
							Delete Task
						</NavLink>
					</ul>
				</div>
			</div>
		</div>
    );
};

export default DashboardLayout;