import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Pricing = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<section className="bg-white ">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className=" mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
					<h2
						data-aos="fade-right"
						className="mb-4 text-2xl md:text-4xl  tracking-tight font-extrabold text-gray-900 "
					>
						Choose the Perfect Plan for Your Productivity Journey
					</h2>
					<p
						data-aos="fade-left"
						className="mb-5 font-light text-gray-500 sm:text-xl "
					>
						This concise heading aims to convey the essence of
						choosing a plan to enhance productivity. Feel free to
						let me know if you have any specific preferences or
						themes you'd like to incorporate!
					</p>
				</div>
				<div className="space-y-8 grid  md:grid-cols-3 gap-6 xl:gap-10 lg:space-y-0">

					<div  data-aos="fade-up" className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8  ">
						<h3 className="mb-4 text-2xl font-semibold">Basic</h3>
						<p className="font-light text-gray-500 sm:text-lg ">
							A more feature-rich plan for users who need
							additional capabilities.
						</p>
						<div className="flex justify-center items-baseline my-8">
							<span className="mr-2 text-5xl font-extrabold">
								$29
							</span>
							<span className="text-gray-500 ">/month</span>
						</div>

						<ul role="list" className="mb-8 space-y-4 text-left">
							<li className="flex items-center space-x-3">
								<span>Unlimited task management</span>
							</li>
							<li className="flex items-center space-x-3">
								<span>Priority support</span>
							</li>
							<li className="flex items-center space-x-3">
								<span>Enhanced storage</span>
							</li>
						</ul>
						<a
							href="#"
							className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   dark:focus:ring-primary-900"
						>
							Get started
						</a>
					</div>

					<div  data-aos="fade-down" className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8  ">
						<h3 className="mb-4 text-2xl font-semibold">Premium</h3>
						<p className="font-light text-gray-500 sm:text-lg ">
							The premium plan with advanced features for power
							users.
						</p>
						<div className="flex justify-center items-baseline my-8">
							<span className="mr-2 text-5xl font-extrabold">
								$99
							</span>
							<span className="text-gray-500 ">/month</span>
						</div>

						<ul role="list" className="mb-8 space-y-4 text-left">
							<li className="flex items-center space-x-3">
								<span>Advanced task analytics</span>
							</li>
							<li className="flex items-center space-x-3">
								<span>Cloud synchronization</span>
							</li>
							<li className="flex items-center space-x-3">
								<span>24/7 premium support</span>
							</li>
						</ul>
						<a
							href="#"
							className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   dark:focus:ring-primary-900"
						>
							Get started
						</a>
					</div>

					<div  data-aos="fade-up" className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8  ">
						<h3 className="mb-4 text-2xl font-semibold">
							Enterpirce
						</h3>
						<p className="font-light text-gray-500 sm:text-lg ">
							Tailored for businesses or teams with specific
							needs.
						</p>
						<div className="flex justify-center items-baseline my-8">
							<span className="mr-2 text-5xl font-extrabold">
								$150
							</span>
							<span className="text-gray-500 ">/month</span>
						</div>

						<ul role="list" className="mb-8 space-y-4 text-left">
							<li className="flex items-center space-x-3">
								<span>Team collaboration tools</span>
							</li>
							<li className="flex items-center space-x-3">
								<span>Customizable dashboards</span>
							</li>
							<li className="flex items-center space-x-3">
								<span>Dedicated account manager </span>
							</li>
						</ul>
						<a
							href="#"
							className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center   dark:focus:ring-primary-900"
						>
							Get started
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
