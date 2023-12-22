import React, { useEffect } from "react";
import image from "../../assets/360_F_65773762_Tiv309ycvMdoo1vRO8hx2YSdX83H9atS.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content text-center">
					<div className="max-w-2xl">
						<h1 data-aos="fade-left" className="text-5xl font-bold">About Us</h1>
						<p data-aos="fade-right"className="py-6 text-xl">
							At TaskCraft, our mission is to empower individuals
							and teams to achieve their goals with simplicity and
							efficiency. We believe in providing a seamless and
							intuitive to-do app that enhances productivity and
							brings clarity to your daily tasks.
						</p>
						<Link to="/Dashboard/DashboardHome">
							{" "}
							<button data-aos="zoom-out" className="btn btn-primary">
								View Dashboard
							</button>
						</Link>
					</div>
				</div>
			</div>

			<div className="h-[500px] flex flex-col md:flex-row gap-10 justify-center  items-center bg-base-100">
				<div className="text-5xl w-full  md:w-1/3  flex justify-center items-center">
					<div  data-aos="zoom-out" className="flex flex-col justify-center items-center">
						<img className="w-40" src={image} alt="" />
						<p className="-mt-5"> Our Story</p>
					</div>
				</div>
				<div data-aos="zoom-in" className="flex  justify-center items-center w-full md:w-1/3">
					<p>
						Founded in 2023,TaskCraft started as a passion project
						aimed at addressing the challenges of task management in
						today's fast-paced world. Fueled by the desire to
						simplify the way people organize their lives, our
						journey has been marked by innovation, collaboration,
						and a commitment to delivering a top-notch user
						experience.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
