import React from "react";

const Step = () => {
	return (
		<div className="flex mx-4 overflow-hidden flex-col md:flex-row  justify-start items-center">
			<div data-aos="fade-left" className="w-full text-center  md:w-1/2">
				<h1 className="text-3xl font-medium">How to Use the ToDo Platform</h1>
				<p className="max-w-lg  mx-auto my-5 ">
					Welcome to our ToDo platform! Follow these simple steps to
					get started and make the most out of your task management
					experience:
				</p>
			</div>
			<div data-aos="fade-right" className=" w-full md:w-1/2 flex justify-center">
				<ul className=" steps h-96 steps-vertical">
					<li className="step step-primary">Login</li>
					<li className="step step-primary">Explore the Dashboard</li>
					<li className="step step-primary">Create Task</li>
					<li className="step step-primary">View your task on ToDo</li>
				</ul>
			</div> 
		</div>
	);
};

export default Step;
