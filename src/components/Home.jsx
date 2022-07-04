import React from "react";
import Common from "./Common";
import HomeImage from "../images/headerImage.svg";

const Home = () => {
    return(
        <Common key={0}
        heading="Welcome to "
        name="Thapa14"
        image={HomeImage}
        visit="/"
        btnText="Get Started"/>
    )
}

export default Home;