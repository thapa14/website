import react from "react";
import Common from "./Common";
import AboutImage from "../images/about.svg";

const About = () => {
return(
    <>
    <Common key={0}
    heading="Grow your buissness with"
    name="About page"
    image={AboutImage}
    btnText="Contact Now"
    visit="/service"/>
    </>    
)
}

export default About;