import { useHistory } from 'react-router-dom';
import { useQuery } from '../hooks'
import { Card } from '../components/Card'

export default function Movies() {
    const movieQuery = useQuery('http://localhost:5000/api/movies')

    return (
        <div className="container app">
            {movieQuery.loading ? (
                <Spinner />
            ) : (<div className="row">
                { movieQuery.data.map((x, i) => <Card {...x} key={i} />)}
            </div>)}
        </div>
    );
}
const Spinner = () => (
    <div className="spinner">
        <div className="spinner-border text-light" role="status"></div>
    </div>
)