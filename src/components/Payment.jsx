import React from "react";

let Payment =() =>
{
    return <>
        <div className="border-bottom text" data-aos="fade-up">
                <h1 className="text">Payment</h1>
        </div>
        <div className="container">
        <div className="row" data-aos="flip-left">
               <div className="table col-sm-11 col-lg-8">
                <p>Name :</p><input type="text" placeholder="Enter Name"/>
                <p>Email :</p><input type="text" placeholder="Enter Email"/>
                <p>Contact :</p><input type="text" placeholder="Enter Contact"/>
                <p>Price:</p><input type="text" value='10000'/>
                <button>Pay Now</button>
               </div>
        </div>
        </div>
    </>
}
export default Payment;