import React, { Component } from 'react'


class Subject extends Component {

  render() {
    const index = this.props.index
    const username = this.props.subject.username
    const selected = this.props.selected
    const app = this.props.subject.app
    const animal = this.props.subject.animal
    const myKingdom = this.props.myKingdom
    const currentUsername = this.props.currentUsername
    if (!animal) {
      return null
    }

    return (
      <div
        className={`card ${selected ? 'border-primary' : ''}`}
      >
      <img className="card-img-top"
        src={`${app}/animals/${animal.id}.jpg`}
        alt={animal.name}
      />
      <div className="card-body">
        <h4 className="card-title"><a href={ app }>{username}</a> the {animal.name}</h4>
        <p className="card-text">{animal.superpower}<br />
        See his/her content: <a href={ app }>{ app }</a>
        </p>
        {myKingdom ?
          <button className='btn btn-primary btn-block' onClick={(event) => this.props.removeSubject(event, index)}>Unfollow this User</button>
          :
          <a
            className='btn btn-primary btn-block'
            href={`${window.location.origin}/user/${currentUsername}?add=${app}/user/${username}`}  
          >Support this User
          </a>
        }
      </div>
    </div>
    )
  }
}

export default Subject
