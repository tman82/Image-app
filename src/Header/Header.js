import React from "react"
import IconPhoto from "../assets/images/foto3.png"
import "./Header.css"

const Header = () => {
        return (
            <div className="container-fluid container-div">
                <div className="row">
                    <div className="col">
                        <div className="header">
                            <span>
                                <img src={IconPhoto} alt="pic"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Header
