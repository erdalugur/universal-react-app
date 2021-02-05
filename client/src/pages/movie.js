import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { useQuery } from '../hooks'

export default function Movie() {
    const [ticket, setTicket] = useState(1)
    const params = useParams()
    const { data, loading } = useQuery(`http://localhost:5000/api/movie/${params.id}`)

    function increment() {
        setTicket(ticket + 1)
    }
    function decrement() {
        setTicket(ticket - 1)
    }
    return (
        <div className="container app">
            {loading ? (
                <div className="spinner">
                    <div className="spinner-border text-light" role="status"></div>
                </div>
            ) : data && (
                <div className="row">
                    <Card {...data} direction="back" />
                    <div className="col-4 mt-50">
                        <h3>{data.name}</h3>
                        <p className="mt-50">{data.overview}</p>
                        <div className="btn-group mt-50" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-danger" onClick={decrement}>
                                <span class="material-icons">
                                    remove
                                    </span>
                            </button>
                            <button type="button" className="btn btn-default">{ticket}</button>
                            <button type="button" className="btn btn-danger" onClick={increment}>
                                <span class="material-icons">
                                    add
                                    </span>
                            </button>
                        </div>
                        <br />
                        <button className="btn btn-warning mt-50" onClick={() => alert('Success')}>Buy Now</button>
                    </div>
                </div>
            )}
        </div>
    );
}


