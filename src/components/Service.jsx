import React from "react";
import Card from "./Card";
import Data from "./Data";

const Service = () => {
    console.log(Data);
    return (
        <>
            <div>
                <div className="my-5">
                    <h1 className="text-center">Our services</h1>
                </div>

                <div className="container-fluid">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            {
                                Data.map((val, index) => {
                                    return (<Card key={index}
                                        image={val.img}
                                        heading={val.title} />)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;