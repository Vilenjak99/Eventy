import {Grid} from "@material-ui/core";
import EventCard from "../event_card/eventCard";
export default function GridLayout() {
    return(
        <Grid container>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <EventCard title={"Lizard"} content={"Lizared is lorem ipsum smth and its good"}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <EventCard title={"Liki"} content={"Lizared is lorem ipsum smth and its good"}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <EventCard title={"Jasar"} content={"Lizared is lorem ipsum smth and its good"}/>
            </Grid>
        </Grid>
    );
}