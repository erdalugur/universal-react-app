import { useQuery } from '../hooks'
import { Card } from '../components/Card'
import { Spinner } from '../components/Spinner'
import { Grid } from '@material-ui/core'

export default function Movies() {
    const movieQuery = useQuery('http://localhost:5000/api/movies')
    return (
        <>
            {movieQuery.loading ? (
                <Spinner />
            ) : (<Grid container spacing={2}>
                { movieQuery.data.map((x, i) => <Grid key={i} item xs={4}>
                    <Card {...x} />
                </Grid>)}
            </Grid>)}
        </>
    );
}