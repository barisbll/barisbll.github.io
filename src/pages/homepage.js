import React from "react";
import photo from "../img/tmp2.png"
import "./homepage.css"

class homepage extends React.Component {
    render(){
        return(
            <div className="main-container">
                <div className="second-container">
                    <img src={photo} alt="Sponge-bob"></img>
                    <h1>Hello there! I am Baris</h1>
                </div>
            </div>
        );
    }
}

export default homepage;