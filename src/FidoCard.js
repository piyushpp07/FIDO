import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './FidoCard.css'
function FidoCard() {
   const [people, setPeople] = useState([
      {
         name: "ALiean Musk",
         url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/330px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
      },
      {
         name: "Mugdha Agarwal",
         url: "https://scontent.fbho3-1.fna.fbcdn.net/v/t1.6435-9/119009734_1015274368922680_6615138297142341660_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=TC3WwZwM678AX8CKLsm&_nc_ht=scontent.fbho3-1.fna&oh=00_AT_GHz1qTRRRzK0E3ONmHixDm9HoL4haLYj13dKwr3tfsg&oe=62C6A2E8"
      }
   ])
   const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
      //setLastDirection(direction);
    };
   return (
      <div className="fidoCards">
         <div className="fidoCards__cardContainer" >
            {
               people.map((person) => (
                  <TinderCard
                  className="swipe"
                  key={person.name}
                  preventSwipe={["up", "down"]}
                  noSwipe={(dir) => swiped(dir, person.name)}
                  //noCardLeftScreen={() => outOfFrame(person.name)}
                >
                  <div
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card"
                  >
                    <h3>{person.name}</h3>
                  </div>
                </TinderCard>))
            }
         </div>
      </div>
   )
}

export default FidoCard