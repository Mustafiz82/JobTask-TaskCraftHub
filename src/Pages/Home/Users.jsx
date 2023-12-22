import React from "react";

const Users = () => {
	const boxShadowStyle = {
		boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
	};
	return (
		<div className="my-10 ">
			<div className="text-center mb-10">
				<h1 className="text-3xl font-semibold  md:text-5xl mb-2">
					Users of this Site
				</h1>
				<p className="text-xl  md:text2xl">Who are being benefitted</p>
			</div>

			<div className="grid md:mx-4 overflow-hidden mb-16 grid-cols-1  lg:w-2/3 w-full lg:mx-auto gap-10 text-center md:grid-cols-4">
				<h1
					data-aos="fade-down-right"
					style={boxShadowStyle}
					className="text-2xl font-bold m-5 md:m-0 p-5 md:p-10 "
				>
					{" "}
					Developers
				</h1>
				<h1
					data-aos="fade-down"
					style={boxShadowStyle}
					className="text-2xl font-bold m-5 md:m-0 p-5 md:p-10 "
				>
					{" "}
					Students
				</h1>
				<h1
					data-aos="fade-down"
					style={boxShadowStyle}
					className="text-2xl font-bold m-5 md:m-0 p-5 md:p-10 "
				>
					{" "}
					Freelancers
				</h1>
				<h1
					data-aos="fade-down-left"
					style={boxShadowStyle}
					className="text-2xl font-bold m-5 md:m-0 p-5 md:p-10 "
				>
					{" "}
					Event Planners
				</h1>
				<h1
					data-aos="fade-up-right"
					style={boxShadowStyle}
					className="text-2xl font-bold m-5 md:m-0 p-5 md:p-10 "
				>
					{" "}
					Researchers
				</h1>
				<h1
					data-aos="fade-up"
					style={boxShadowStyle}
					className="text-2xl font-bold m-5 md:m-0 p-5 md:p-10 "
				>
					{" "}
					Teachers
				</h1>
				<h1
					data-aos="fade-up"
					style={boxShadowStyle}
					className="text-2xl font-bold m-5 md:m-0 p-5 md:p-10 "
				>
					{" "}
					Parents
				</h1>
				<h1
					data-aos="fade-up-left"
					style={boxShadowStyle}
					className="text-2xl font-bold m-5 p-5 md:m-0  "
				>
					{" "}
					Bankers
				</h1>
			</div>
		</div>
	);
};

export default Users;
