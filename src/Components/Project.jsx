import React from "react"
import { useNavigate } from "react-router-dom";

const Project = () => {
    const navigate = useNavigate();

    function clickHandler() {
        //useNavigate hook is used to redirect the page without rendering 
        navigate("/about");
    }
    return (
        <div>
         <div>
           this is a project Page
         </div>
         <button onClick={clickHandler}>
            move to about
         </button>
        </div>
        
    )
}

export default Project;