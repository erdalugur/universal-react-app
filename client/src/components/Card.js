import React from 'react'
import { useHistory } from 'react-router-dom'
import '../card.css'

export const Card = ({ rating, imageURL, name, overview, id, direction = "next" }) => {
    const history = useHistory()

    const action = () => direction === 'next' ? history.push(`/movie/${id}`) : history.goBack()
    return (
        <div className="col-4 card">
            <span
                className={direction}
                onClick={action}></span>
            <span className="rating">
                <span className="material-icons">
                    star_rate
                  </span>
                {rating}</span>
            <img className="border-radius-5" src={imageURL} />
        </div>
    )
}