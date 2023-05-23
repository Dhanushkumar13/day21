import React from "react";
import "../styles/pricingdetails.css"
import PricingCard from "../component/pricingCard";

function pricingDetails(){
    const data = [
        {
            plan: "Essential",
            price: "₹200",
            user: "Single-user",
            storage: "20 GB",
        },
        {
            plan: "Extra",
            price: "₹500",
            user: "Upto 2-users",
            storage: "50 GB",

        },
        {
            plan: "Deluxe",
            price: "₹1000",
            user: "Upto 5-users",
            storage: "100 GB",
        },
    ];
    return(
        <section className="pricing py-5">
            <div className="container">
                <div className="row">
                    {data && 
                    data.map((details,index)=> (
                        <div key={`Pricing-details-${index}`} className="col-lg-4">
                            <PricingCard data={details}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default pricingDetails;