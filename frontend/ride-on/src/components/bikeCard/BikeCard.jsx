import React from 'react'
import './BikeCard.css'

const BikeCard = (props) => {
  return (
    <>
        <div className="bikeCard">
            <div className="bikeCardContainer">
                <img src={props.image} alt={`Image of a ${props.make} ${props.model}`} />
                <div className="bikeTitle">
                    <h3>{props.make}</h3>
                    <h3>{props.model}</h3>
                </div>
                <div className="bikeDetails">
                    <p>{`${props.engine} cc`}</p>
                    <p>{props.transmission}</p>
                </div>
                <div className="bikeDayRate">
                    <h3>{`$${props.dayRate}`}</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default BikeCard