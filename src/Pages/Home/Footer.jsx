import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			<footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
				<nav className="grid grid-flow-col gap-4">
					<Link to="/About" className="link link-hover">
						About us
					</Link>
					<Link to="/Pricing" className="link link-hover">
						Contact
					</Link>
					<Link to="#" className="link link-hover">
						Jobs
					</Link>
					<Link to="#" className="link link-hover">
						Press kit
					</Link>
				</nav>
				<nav>
					<div className="grid grid-flow-col gap-4">
						<a href="https://web.facebook.com/mdmustafiz.rahman.988?_rdc=1&_rdr">
							<FaFacebook size={26} />
						</a>

						<a href="https://www.linkedin.com/in/mustafiz-rahman-8482632a4/">
							<FaLinkedinIn size={26} />
						</a>
                        <a href="https://twitter.com/?lang=en"><FaTwitter size={26}/></a>
					</div>
				</nav>
				<aside>
					<p>
						Copyright © 2023 - All right reserved by SCC Technovision Inc
					</p>
				</aside>
			</footer>
		</div>
	);
};

export default Footer;
