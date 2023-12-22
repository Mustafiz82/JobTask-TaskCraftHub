import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../Context/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateTask = () => {
    const {user} = useContext(AuthContext)

    const axiosPublic = useAxiosPublic()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();


    console.log(user?.email)
	const onSubmit = (data) => {
		console.log(data);

        // const inputDateTime = data?.DeadLIne
        // const localDate = new Date(inputDateTime);

        const DeadLIne =  new Date(data?.DeadLIne)


        const task = {
            DeadLIne,
            Discription : data.Discription,
            Priroty : data.Priroty,
            Title : data.Title,
            stutus: "toDo",
            email : user?.email

        }

        axiosPublic.post("/tasks" , task) 
        .then(data => {
            console.log(data.data);
            toast("Task Created Successfully");
        })

        



        console.log(task);
	};

	return (
		<div className="m-5">
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-4">
				<input
					type="text"
					name="title"
					placeholder=" Task Title"
					className="input input-bordered w-full "
					{...register("Title", {
						required: true,
					})}
				/>

				<textarea
					className="textarea textarea-bordered w-full h-40"
					placeholder="Task DescripTion"
					name="description"
					{...register("Discription", {
						required: true,
					})}
				></textarea>


                <div className="flex gap-3">
                    <span>DeadLine: </span>
                <input className="border-2" type="datetime-local" {...register("DeadLIne", {
						required: true,
					})}></input>
                </div>

               

				<div className="flex gap-3 items-center">
                    <span>priority</span>
                    <select className="border-2" {...register("Priroty", { required: true })}>
                    
					<option value="Low">Low</option>
					<option value="moderate">moderate</option>
					<option value="High">High</option>
				</select>
                </div>
				
				<button type="submit" className="block btn btn-primary">
					Create Task
				</button>
			</form>  <ToastContainer />
		</div>
	);
};

export default CreateTask;
