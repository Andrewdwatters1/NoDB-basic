import React, { Component } from 'react';
import axios from 'axios';

class Albums extends Component {
  constructor() {
    super()
    this.state = {
      albums: [],
      userInputArtist: "",
      userInputAlbum: "",
      userInputYear: "",
    }
  }

  componentWillMount = () => {
    axios.get(`/api/album`).then(result => {
      this.setState({
        albums: result.data
      })
    })
  }

  handleArtistChange = (text) => {
    this.setState({
      userInputArtist: text
    })
  }
  handleAlbumChange = (text) => {
    this.setState({
      userInputAlbum: text
    })
  }
  handleYearChange = (text) => {
    this.setState({
      userInputYear: text
    })
  }

  handleDelete = (elem) => {
    this.state.albums.splice(elem, 1)
    this.setState({
      albums: this.state.albums
    });
  }
  handleUpdate = (elem) => {
    let newInfo = {
      artist: this.state.userInputArtist,
      album: this.state.userInputAlbum,
      year: this.state.userInputYear,
    }
    this.state.albums.splice(elem, 1, newInfo)
    this.setState({
      albums: this.state.albums,
      userInputArtist: "",
      userInputAlbum: "",
      userInputYear: ""
    });
  }

  render() {
    if (this.state.albums.length > 0) {
      return (
        this.state.albums.map((e, i) => {
          return (
            <h2
              key={i}>
              {e.artist}<br />
              {e.album}<br />
              {e.year}<br />
              <button onClick={() => this.handleDelete(e.id - 1)}>Delete Item</button>
              <div>
                <input placeholder="update artist" onChange={(e) => this.handleArtistChange(e.target.value)}></input>
                <input placeholder="update album" onChange={(e) => this.handleAlbumChange(e.target.value)}></input>
                <input placeholder="update year" onChange={(e) => this.handleYearChange(e.target.value)}></input>
                <button onClick={() => this.handleUpdate(e.id - 1)}>Update Album Info</button>
              </div>
            </h2>
          )
        })

      )
    } else {
      return (null)
    }
  }
}

export default Albums;
