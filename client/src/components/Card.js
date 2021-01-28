import React from 'react'
import { useHistory } from 'react-router-dom'

export const Card = ({ rating, imageURL, name, overview, id, direction = "next" }) => {
    const history = useHistory()
    return (
        <div className="col-4 card">
            <span className={direction}
                onClick={() => direction === 'next' ? history.push(`/movie/${id}`) : history.goBack()}></span>
            <span className="rating">
                <span className="material-icons">
                    star_rate
                  </span>
                {rating}</span>
            <img src={imageURL} />
        </div>
    )
}