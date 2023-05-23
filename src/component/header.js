import React from "react";

export default function header({heading="", description=""}){
    return(
        <header classNameName="bg-dark py-5">
        <div classNameName ="container px-4 px-lg-5 my-5">
            <div classNameName="text-center text-white">
                <h1 classNameName="display-4 fw-bolder">{heading}</h1>
                <p className="lead fw-normal text-white-50 mb-0">{description}</p>
            </div>
        </div>
    </header>
    );
}