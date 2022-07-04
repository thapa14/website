import react from "react";
import { NavLink } from "react-router-dom";
import "./Common.css";

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex justify-content-center align-items-center  ">
                <div className="container-fluid nav_bg">
                    <div className="col-10 mx-auto ">
                        <div className="row gx-3">

                            <div className="col-md-6 pt-0 pt-md-5 mt-5 order-2 order-md-1 d-flex flex-column justify-content-center align-items-start">
                                <h1 className="text-secondary heading">{props.heading} <strong className="brand-name text-dark">{props.name}</strong></h1>
                                <h2 className=" fs-4 my-2 text-secondary">We are the team of talented developer making websites</h2>
                                <div className="mt-4">
                                    <NavLink className="btn btn-dark br-3 px-5 py-3 btn-get-started fs-4" to={props.visit}>{props.btnText}</NavLink>
                                </div>
                            </div>

                            <div className="col-md-6 pt-0 pt-md-5 mt-5 order-1 order-md-2 d-flex justify-content-center ">
                                <img src={props.image} alt="image" className="animated header-img" />
                            </div>
                        </div>

                    </div>
                    </div>
            </section>
        </>
    )
}

export default Common;