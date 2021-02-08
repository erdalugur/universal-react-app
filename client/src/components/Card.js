import React from 'react'
import { useHistory } from 'react-router-dom'
import '../card.css'
import { makeStyles } from '@material-ui/core/styles';
import { Card as MuiCard, CardActionArea, CardActions, CardMedia, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 420,
    },
    cardbottom: {
        justifyContent: 'space-between'
    }
});
export const Card = ({ rating, imageURL, name, overview, id, direction = "next" }) => {
    const history = useHistory()

    const action = () => direction === 'next' ? history.push(`/movie/${id}`) : history.goBack()

    const classes = useStyles();

    return (
        <MuiCard>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageURL}
                    title={name}
                />
            </CardActionArea>
            <CardActions className={classes.cardbottom}>
                <Typography>
                    <span className="material-icons">
                        star_rate
                    </span>
                    {rating}
                </Typography>
                <Button variant="contained" onClick={action} size="small" color="primary">
                    {direction === 'next' ? 'Detail' : 'Back'}
                </Button>
            </CardActions>
        </MuiCard>
    );
}



