import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Nav = () => {
	// const user = true

	const {user , logOut} = useContext(AuthContext);
    const navigate = useNavigate()
        // console.log(user?.user, "user");

	const ul = (
		<>
			{/* <NavLink
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
				to="/membership"
				className={({ isActive, isPending }) =>
					isPending
						? "pending"
						: isActive
						? "text-purple-600 font-bold"
						: " text-black"
				}
			>
				Membership
			</NavLink> */}
		</>
	);

	return (
		<div>
			<div className="navbar p-0 bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu space-y-4 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{ul}
						</ul>
					</div>
					<div className="btn p-0 flex gap-2  btn-ghost text-xl">
						<img className="w-8" src={logo} alt="" />
						<span>TaskCraftHub</span>
					</div>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="flex gap-5 px-1">{ul}</ul>
				</div>
				<div className="navbar-end">
					<div className=""></div>
					<div className="indicator mr-2">
						{/* <IoMdNotifications size={38} className="" />
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/> */}

						{/* <span className="badge badge-lg indicator-item">{data?.announcmentCount}</span> */}
					</div>

					{user?.email ? (
						<div className="dropdown dropdown-end">
							<label
								tabIndex={0}
								className="btn btn-ghost btn-circle avatar"
							>
								<div className="w-10 rounded-full">
									<img
										alt="Tailwind CSS Navbar component"
										src={
											user?.photoURL ? (
												user.photoURL
											) : (
												<CgProfile />
											)
										}
									/>
								</div>
							</label>
							<ul
								tabIndex={0}
								className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
							>
								<li>
									<p className="text-xl mx-auto">
										{user?.displayName}
									</p>
								</li>
								<li className="">
                                <Link
											className="text-xl my-4 btn"
											to="/Dashboard/DashboardHome"
										>
											Dashboard
										</Link>
								</li>
								<li> 
									<button
										onClick={() => {
                                            logOut()
                                            navigate("/")

                                        }}
										className="btn "
									>
										Logout
									</button>
								</li>
							</ul>
						</div>
					) : (
						<Link to="/login" className="btn">
							Join Us
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Nav;
