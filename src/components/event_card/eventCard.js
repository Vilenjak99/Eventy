import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


export default function EventCard(props) {
    const useStyles = makeStyles(theme=>({
        root:{
            marginTop:1,
            minWidth:150,
            color: theme.palette.primary.main,
        },
        cardMedia:{
            height:140,
        },
        cardContent:{
            backgroundColor: theme.palette.primary.dark,
        },
        cardActions:{
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.main,
        },

    }));

    const classes = useStyles();
    return (
        <Card>
            <CardActionArea TouchRippleProps>
                <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    image={'images/beer-festival.webp'}
                    alt="skate"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2">
                        {props.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}