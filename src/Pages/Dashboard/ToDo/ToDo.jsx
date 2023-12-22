import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../Context/AuthProvider";

const ToDo = () => {
	const [taskdata, settaskData] = useState([]);
	const axiosPublic = useAxiosPublic();
    const {user}  = useContext(AuthContext)

	useEffect(() => {
		axiosPublic.get(`/tasks/${user?.email}`).then((data) => {
			settaskData(data.data);
			console.log(data);
		});
	}, [user]);

	return (
		<div className="flex">
			<div className="border-2 fixed h-screen my-4 overflow-scroll border-purple-400  space-y-4">

                <h1 className="text-3xl text-center">Todo List</h1>
				{taskdata.map((item) => (
					<div
						key={item._id}
						className="card w-96 bg-base-100 shadow-xl"
					>
						<div className="card-body">
							<h2 className="card-title">{item?.Title}</h2>
							<p>{item?.Discription}</p>
							<p className="bold">{item?.Priroty}</p>
							<p className="bold">
								{new Date(item?.DeadLIne).toLocaleDateString()}
								<span className="pl-4">
									{new Date(
										item?.DeadLIne
									).toLocaleTimeString()}
								</span>
							</p>

							<div className="card-actions justify-end">
								<button className="btn btn-primary">
									Buy Now
								</button>
							</div>
						</div>
					</div>
				))}{" "}
			</div>
			<div>
				<div className="border-2 border-purple-400 ">
                    
                     </div>
				<div className="border-2 border-purple-400 "></div>
			</div>
		</div>
	);
};

export default ToDo;
