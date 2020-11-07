import React from "react"
import { NavLink } from "react-router-dom"
import Header2 from "../Header2/Header2"


import "./ImageView.css"


const ImageView = (props) => {
    
    const { largeImageURL: image, tags, user: owner, pageURL } = props.location.state.image
    return (
        <React.Fragment className="fragment">
            <Header2 />
            <div className="container view-box">
                <div className="row">
                    <div className="col-sm-12">

                        <div className="imageView__container">
                            <img src={image} alt={tags} className="imageView__img img-responsive"/>
                            <div className="imageView__copyright">
                                <p>&copy;pixabay</p>
                            </div>
                            <div className="imageView__text">
                                <h4>Credit: <span className="info-span">{owner}</span></h4>
                                <h4>Download: <span className="info-span"><a href={pageURL}>Go To Download</a></span></h4>
                                <button className="active-recipe__button">
                                    <NavLink to="/" activeClassName="home-active">Home</NavLink>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ImageView