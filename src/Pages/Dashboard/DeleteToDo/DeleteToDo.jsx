import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const DeleteToDo = () => {

    const [taskdata, settaskData] = useState([]);
    const [ hidden , setHIdden] = useState(false)
	const axiosPublic = useAxiosPublic();
    const {user}  = useContext(AuthContext)

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

    
	const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosPublic.delete(`/tasks/${id}`)
              .then(() => {
                // Filter out the deleted item from the state
                settaskData((prevData) => prevData.filter(item => item._id !== id));
      
                Swal.fire({
                  title: "Deleted!",
                  text: "Your post has been deleted.",
                  icon: "success",
                });
              })
              .catch((error) => {
                console.error("Error deleting task:", error);
              });
          }
        });
      };
      


    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>DeadLIne</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>

        {
            taskdata.map((item, index) => <tr >
                <th>{index + 1}</th>
                <td>{item?.Title}</td>
               
                <td className="bold">
								{new Date(item?.DeadLIne).toLocaleDateString()}
								<span className="pl-4">
									{new Date(
										item?.DeadLIne
									).toLocaleTimeString()}
								</span>
							</td>
                <td><button className="btn" onClick={() => {handleDelete(item?._id)}} > Delete</button></td>
              </tr>)
        }
      {/* row 1 */}
      
      {/* row 2 */}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default DeleteToDo;