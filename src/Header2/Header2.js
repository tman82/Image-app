import React from "react"
import IconPhoto from "../assets/images/foto3.png"
import "../Header/Header.css"

const Header2 = () => {
        return (
            <div className="container-fluid container-div" style={{ marginTop: "20px" }}>
                <div className="row" style={{ marginTop: "0px", paddingTop: "10px" }}>
                    <div className="col">
                        <div className="header">
                            <span className="header2-span">
                                More info on this photo 
                            </span>
                            below!
                            <div className="ghost"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Header2