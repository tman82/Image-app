import React from "react"
import Header from "./Header/Header"
import ImageSearch from "./ImageSearch/ImageSearch"
import ImageList from "./ImageList/ImageList"
import './styles/styles.css';


const API_KEY = "18141843-7b390e38f99f294f98f8bb771"

class App extends React.Component {

  state = {
    images: [],
    error: null
  }
  
  handleGetRequest = async (e) => {

    e.preventDefault()

    const searchTerm = e.target.elements.searchValue.value

    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`

    const request = await fetch(url)

    const response = await request.json()

    if(!searchTerm) {
      this.setState({ error: "Please provide a value" })
    } else {
      this.setState({ images: response.hits, error: null })
    }

  }

  render() {
    return (
      <div className="container-fluid app-container">
        <div className="row app-row">
          <div className="col">
          <Header />
          <ImageSearch handleGetRequest={this.handleGetRequest} />
          
            {
              this.state.error !== null ?
              <div style={{ color: "#fff", textAlign: "center" }}> { this.state.error } </div> :
              <ImageList images={this.state.images} />
            }
            <div className="by-div">
              By Martrell Leonard
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
