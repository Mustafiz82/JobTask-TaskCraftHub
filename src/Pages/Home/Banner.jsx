import React from 'react';
import banner from "../../assets/loginbgImg.jpg"

const Banner = () => {
    return (
        <div className="">
        <div
            className="hero items-start pt-10 bg-base-200 min-h-[500px]	"
            // style={{
            //     backgroundImage: `url(${banner})`,
            // }}
        >
            <div className=""></div>
            <div className=" p-0  mt-6 text-center ">
                <div className=" text-black justify-start p-5 rounded-full text-center">
                    <h1 className="mb-5 max-w-xl mx-auto text-6xl font-bold">
                    Organize your work and life, finally.                    </h1>
                    <p className="mb-5  text-2xl max-w-4xl">
                    Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.


                    </p>
                    
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;