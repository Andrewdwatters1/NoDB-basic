import React, { Component } from 'react';


export default class AddAlbum extends Component {
  constructor() {
    super()
    this.state = {
      userNewArtist: "",
      userNewAlbum: "",
      userNewYear: "",
      albums: [],
    }
  }

  handleNewArtist = (text) => {
    this.setState({
      userNewArtist: text
    })
  }
  handleNewAlbum = (text) => {
    this.setState({
      userNewAlbum: text
    })
  }
  handleNewYear = (text) => {
    this.setState({
      userNewYear: text
    })
  }

  handleNew = (art, alb, yr) => {
    let albumObj = {
      artist: art,
      album: alb,
      year: yr
    }
    this.setState({
      albums: [...this.state.albums, albumObj],
      userNewArtist: "",
      userNewAlbum: "",
      userNewYear: "",
    })
  }

  ifNew = () => {
    if (this.state.albums.length > 0) {
      for (let i = 0; i < this.state.albums.length; i++) {
        return (
          <div>
            <h2>{this.state.albums[i].artist}</h2>
            <h2>{this.state.albums[i].album}</h2>
            <h2>{this.state.albums[i].year}</h2>
          </div>
        )
      }
    }
  }

  render() {



    return (
      <div>
        <div>
          <input placeholder="new artist" onChange={(e) => this.handleNewArtist(e.target.value)}></input>
          <input placeholder="new album" onChange={(e) => this.handleNewAlbum(e.target.value)}></input>
          <input placeholder="new year" onChange={(e) => this.handleNewYear(e.target.value)}></input>
          <div>
          </div>
          {this.ifNew()}
        </div>
        <div>
          <button onClick={() => this.handleNew(this.state.userNewArtist, this.state.userNewAlbum, this.state.userNewYear)}>Add New Album</button>
        </div>
      </div>
    )
  }
}

