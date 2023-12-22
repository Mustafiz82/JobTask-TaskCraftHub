import React, { useContext, useEffect } from 'react';
import banner from "../../assets/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const {user} = useContext(AuthContext)
    return (
        <div className="">
        <div
            className="hero items-start pt-10 bg-base-200 min-h-[500px]	"
            style={{
                backgroundImage: `url(${banner})`,
            }}
        >
            <div className="opacity-5"></div>
            <div className=" p-0  mt-6 text-center ">
                <div  className=" text-black justify-start p-5 rounded-full text-center">
                    <h1 data-aos="zoom-in" className="mb-5 max-w-xl mx-auto text-3xl md:text-4xl lg:text-6xl font-bold">
                    Organize your work and life, finally.                    </h1>
                    <p data-aos="zoom-out" className="mb-5 text-xl  md:text-2xl max-w-4xl">
                    Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.


                </p>

                    <div className={user?.email && "hidden"}>
                        <Link to="/login"><button className='btn btn-primary
                        '>Lets Explore</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;