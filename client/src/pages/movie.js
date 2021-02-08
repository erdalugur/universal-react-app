import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { useQuery } from '../hooks'
import { Button, Grid } from '@material-ui/core'
import { Spinner } from '../components/Spinner'

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
        <>
            {loading ? (
                <Spinner />
            ) : data && (
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card {...data} direction="back" />
                    </Grid>
                    <Grid item xs={8}>
                        <div className="col-4 mt-50">
                            <h3>{data.name}</h3>
                            <p className="mt-50">{data.overview}</p>
                            <div className="btn-group mt-50" role="group" aria-label="Basic example">
                                <Button type="button" onClick={decrement}>
                                    <span class="material-icons">
                                        remove
                                    </span>
                                </Button>
                                <Button type="button" className="btn btn-default">{ticket}</Button>
                                <Button type="button" className="btn btn-danger" onClick={increment}>
                                    <span class="material-icons">
                                        add
                                    </span>
                                </Button>
                            </div>
                            <br />
                            <Button variant="contained" color="primary" onClick={() => alert('Success')}>Buy Now</Button>
                        </div>
                    </Grid>
                </Grid>
            )}
        </>
    );
}


