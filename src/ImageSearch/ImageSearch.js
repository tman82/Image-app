import React from "react"
import MainPhoto from "../assets/images/main-pic3.png"
import "./ImageSearch.css"


const ImageSearch = ({ handleGetRequest }) => {

    return (
        <div className="imageSearch" style={{ backgroundImage: "url("+ MainPhoto +")" }}>
            <h1 className="main-phrase">Get beautiful free stock photos</h1>
            <p>High resolution images added weekly. No copyright restrictions.</p>
            <form onSubmit={handleGetRequest} className="imageSearch__form">
                <input type="text" autoComplete="off" name="searchValue" placeholder="Search for images..."/>
                <button><i className="fa fa-search"></i></button>
            </form>
            <div className="bottom-buttons">
                <div className="buttons-div">
                    <a href="https://pixabay.com/"><button type="button" className="left-b">More Photos</button></a>
                    <a href="https://pixabay.com/"><button type="button" className="right-b">Trending</button></a>
                </div>
            </div>
            <div className="filler"></div>
        </div>
    )
}

export default ImageSearch