import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './EditMe.css'
import Card from './Card'
import Card2 from './Card2'
import { ANIMALS, TERRITORIES } from './constants'

class EditMe extends Component {

  constructor(props) {
    super(props)
    this.selectAnimal = this.selectAnimal.bind(this)
    this.state = {
      selectedAnimal: false
    }
  }

  selectAnimal(e, animal) {
    e.preventDefault()
    this.setState({selectedAnimal: true})
    this.props.saveMe(Object.assign({}, this.props.me, { animal }))
  }

  render() {
    const me = this.props.me
    let myAnimal = null
    let myTerritory = null
    if (me) {
      myAnimal = this.props.me.animal
      myTerritory = this.props.me.territory
    }
    const selectedAnimal = this.state.selectedAnimal
    const completed = selectedAnimal
    const username = this.props.username

    return (
      <div className="EditMe container">
      <h2>Your Type of Content</h2>
      <p>The type of content you will be creating and sharing with the world</p>
        <h3>Select your content type</h3>
        <div className="row card-deck">
        { ANIMALS.map((animal, index) => {
          const selected = myAnimal && myAnimal.id === animal.id
          return (
            <Card path='/animals/' key={index} item={animal} select={this.selectAnimal} selected={selected} />
                )
          })
        }
        </div>
        <h3 className="select-territory">Your Content</h3>
        <div className="card2-deck">
        { TERRITORIES.map((territory, index) => {
          // const selected = myTerritory && myTerritory.id === territory.id
          return (
            <Card2 path='/territories/' key={index} item={territory}
            //  select={this.selectTerritory} selected={selected} 
             />
                )
          })
        }
        </div>
        <div className="container row">
          <div className="col-lg-12 done">
            <p>
              <Link to={`/user/${username}`} className="btn btn-primary" disabled={!completed}>Done</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default EditMe
