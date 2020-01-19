import React, { Component } from 'react'
import './Card.css'


class Card2 extends Component {

  render() {
    const selected = this.props.selected
    const path = this.props.path
    const item = this.props.item
    
    return (
      <div
        className={`card2 ${selected ? 'border-primary' : ''}`}
        
      >
      <img className="card2-img-top" src={`${path}${item.id}.jpg`} alt={item.name} />
      <div className="card2-body">
        <h4 className="card2-title">{item.name}</h4>
        <p className="card2-text">{item.superpower}</p>
      </div>
    </div>
    )
  }
}

export default Card2
