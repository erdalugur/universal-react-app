import { useState, useEffect } from 'react'
import { Card } from '../components/Card';
import { useQuery } from '../hooks'

export function Movies() {
    const movieQuery = useQuery('http://localhost:5000/api/movies')
    return (
        <div className="container app">
            {movieQuery.loading ? (
                <div className="spinner">
                    <div className="spinner-border text-light" role="status"></div>
                </div>
            ) : (
                    <div className="row">
                        { movieQuery.data.map((x, i) => <Card {...x} key={i} />)}
                    </div>
                )}
        </div>
    );
}


