import React from "react";
import './navbar.css';
import {Person,EventNote,AddBox} from '@material-ui/icons';
import {Box, Button} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function Navbar(props){
        return(
            <Box sx={{width: '100%',bgcolor:"primary.dark", display: 'flex', flexDirection: 'row',justifyContent : 'space-between' }}>
                <Box sx={{width:'400px', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent:"'space-between'"}}>
                    <Link to={'/'} >
                        <Button onClick={() => props.onClick('home')} color={props.currentPage==='home' ? "secondary":"primary"}>HOME </Button>
                    </Link>
                    <Link to={'/hot-events'}>
                        <Button onClick={() => props.onClick('hot-events')} color={props.currentPage==='hot-events' ? "secondary":"primary"}>HOT EVENTS</Button>
                    </Link>
                    <Link to={'/community'}>
                        <Button onClick={() => props.onClick('community')} color= {props.currentPage==='community' ? "secondary":"primary"}>COMMUNITY</Button>
                    </Link>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                    <Link to={'/add-event'}>
                        <Button onClick={() => props.onClick('add-event')} color= {props.currentPage==='add-event' ? "secondary":"primary"}> <AddBox/> </Button>
                    </Link>
                    <Button onClick={() =>props.onClick('my-events')} color={props.currentPage==='my-events' ? "secondary":"primary"}> <EventNote/> </Button>
                    <Button onClick={() => props.onClick('account')} color={props.currentPage==='account' ? "secondary":"primary"}> <Person/> </Button>
                </Box>
            </Box>

        );
}

