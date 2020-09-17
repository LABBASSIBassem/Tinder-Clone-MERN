import React, {useEffect, useState} from 'react'
import './TinderCard.css'
import TinderrCard from 'react-tinder-card'   
import axios from '../../axios.js'

const TinderCard = () => {
    const [people,setPeople]= useState([])
    useEffect(()=>{
          const  fetchData = async ()=>{
              const req = await axios.get('/tinder/cards')
              setPeople(req.data)
          }
          fetchData()
    },[])

 
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
      const swiped = (direction) => {
        console.log('You swiped: ' + direction)
      }
    return (
        <div className="tinderCards">
            <div className="tinderCards__container">
                {
                    people.map(person =>(
                        <TinderrCard className="swipe"
                        key={1}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir)=> swiped(dir,person.name)}
                        onCardLeftScreen={() => onCardLeftScreen(person.name)}
                        >
                        <div className="card" style={{backgroundImage: `url(${person.urlImg})`}}>
                            <h3>{person.name}</h3>
                            
                        </div>
                        </TinderrCard>
                       
                    ))
                }
            </div>
            
        </div>
    )
}

export default TinderCard
