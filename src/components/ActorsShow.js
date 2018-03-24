import React, { Component } from 'react'

class ActorsShow extends Component {
  componentDidMount() {
    this.props.fetchActors(this.props.id)
  }

  render() {
    return (
      <div>Hello</div>
    )
  }
}

export default ActorsShow;
