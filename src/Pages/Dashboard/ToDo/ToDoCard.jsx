import React from 'react';
import { useDrag } from 'react-dnd';
import { json } from 'react-router-dom';

const ToDoCard = ({item}) => {

  
    return (
        <div 
						key={item._id}
						className="card m-5 w-96 bg-base-100 shadow-xl"
					>
						<div className="card-body ">
							<div className="flex ">
								<h2 className="card-title">{item?.Title}</h2>
							</div>
							<p>{item?.Discription}</p>
							<p className="bold"></p>
							<p className="bold">
								{new Date(item?.DeadLIne).toLocaleDateString()}
								<span className="pl-4">
									{new Date(
										item?.DeadLIne
									).toLocaleTimeString()}
								</span>
							</p>
							<p>priroty :{item?.Priroty}</p>

							<div className="card-actions justify-end">
								<button className="btn btn-primary">
									Update
								</button>
							</div>
						</div>
					</div>
    );
};

export default ToDoCard;