import react from "react";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
    // states 
    const [inputData, changeInputData] = useState(() =>{
       return {
        name: "",
        phone: "",
        email: "",
        message: ""
    }
    });
    const enterInput = (e) => {
        let {value,name} = e.target;
        changeInputData((preVal) => {
            return ({
                ...preVal,
                [name]: value
            })
        })
    }
    const submit = (e) => {
        e.preventDefault();
    }
    return (
        <>
                <div className="container my-3 ">
                    <h1 className="text-center">Contact Us</h1>
                </div>

                <div className="conatiner-fluid mt-4">
                    <div className="col-10 mx-auto">

                        <form className="about-div row g-3 needs-validation col-6 mx-auto fs-2 p-4" onSubmit={submit} noValidate>
                            <div className="text-secondary">
                                <label htmlFor="validationCustom01" className="form-label">First name</label>
                                <input type="text" name="name" className="form-control fs-4" id="validationCustom01" placeholder="Enter Name" onChange={enterInput} value={inputData.name} required />
                            </div>
                            <div className="text-secondary">
                                <label htmlFor="validationCustom01" className="form-label">Mobile</label>
                                <input type="tel" name="phone" className="form-control fs-4" id="validationCustom01" placeholder="888 888 8888" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxLength="12" title="Ten digits code" onChange={enterInput} value={inputData.phone} required />

                            </div>

                            <div className="mb-3 text-secondary">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control fs-4" id="exampleFormControlInput1" placeholder="name@example.com" onChange={enterInput} value={inputData.email}/>
                            </div>
                            <div className="mb-3 text-secondary">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control fs-4" name="message" id="exampleFormControlTextarea1" placeholder="Enter your message here" rows="5" onChange={enterInput} value={inputData.message}></textarea>
                            </div>
                            <div className="mb-4">
                                <button className="btn btn-primary btn-lg" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
        </>
    )
}

export default Contact;