import React, { Component } from 'react';
import Subjects from "./Subjects.js";

const url = "https://scpdatabase-95ef.restdb.io/rest/data";

class API extends Component {
  render() {
    return (
      <div>
            <div className="container-fluid bg-dark">
        <div className="row">
            <h1 className="text-White text-center">SCP Foundation</h1>
        </div>
    </div>
        <Subjects subjects={this.state.subjects} />
      </div>
    );
  }
  state = { subjects: [] }

  componentDidMount() {
    fetch(url, {
      method: 'GET',
      headers: {
        "cache-control": "no-cache",
        "x-apikey": "60c1ec9bf2a01c34b8ed371c",
        "content-type": "application/json"
      }
    })
      .then(result => result.json())
      .then(
        (data) => { this.setState({ subjects: data }) }
      )
      .catch(console.log);
  }
}

export default API;