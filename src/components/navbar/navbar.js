import React, { useEffect, useState } from "react";
import './navbar.scss';
import {Person,EventNote,AddBox} from '@material-ui/icons';
import {Box, Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function Navbar(props){
    const [anchorEl, setAnchorEl] = useState(null);
    const [logValue, setLogValue] = useState("Login");

    useEffect(()=>{
        setLogValue(localStorage.getItem("currUser") ? "Logout" : "LogIn")
    }, [localStorage.getItem("currUser")])
  
    const handleClose = (event) => {
        setAnchorEl(null);
        let word = event.currentTarget.innerText.toLowerCase().replace(/\s/g, '_');
        props.onClick(word)
        console.log(localStorage.getItem("currUser"));
    };

    const handleLogOut = () => {
        if(localStorage.getItem("currUser")){
            localStorage.clear();
        }
    }


    const openMenu = (clickedOn,event) => {
        setAnchorEl(event.currentTarget)
        props.onClick(clickedOn)
    }
        return(
            <Box sx={{width: '100%',bgcolor:"primary.dark", display: 'flex', flexDirection: 'row',justifyContent : 'space-between' }}>
                <Box sx={{width:'400px', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent:"'space-between'"}}>
                    <Link to={'/'} >
                        <Button onClick={() => props.onClick('home')} color={props.currentPage==='home' ? "secondary":"primary"} className="hoverColor">HOME </Button>
                    </Link>
                    <Link to={'/hot-events'}>
                        <Button onClick={() => props.onClick('hot-events')} color={props.currentPage==='hot-events' ? "secondary":"primary"} className="hoverColor">HOT EVENTS</Button>
                    </Link>
                    <Link to={'/community'}>
                        <Button onClick={() => props.onClick('community')} color= {props.currentPage==='community' ? "secondary":"primary"} className="hoverColor">COMMUNITY</Button>
                    </Link>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                    <Link to={'/add-event'}>
                        <Button onClick={() => props.onClick('add-event')} color= {props.currentPage==='add-event' ? "secondary":"primary"} className="hoverColor"> <AddBox/> </Button>
                    </Link>
                    <Link to={'/my-events'}>
                    <Button onClick={() =>props.onClick('my-events')} color={props.currentPage==='my-events' ? "secondary":"primary"} className="hoverColor"> <EventNote/> </Button>
                    </Link>
                    <Button onClick={(event) => openMenu('account',event)} color={props.currentPage==='account' ? "secondary":"primary"} className="hoverColor"> <Person/> </Button>
                </Box>

                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={(event)=>handleClose(event)}
                >
                    <Link to={'/profile'} className="menuItem hoverColor">
                        <MenuItem onClick={(event)=>handleClose(event)}> Profile </MenuItem>
                    </Link>
                    <Link to={'/my_account'} className="menuItem hoverColor">
                    <MenuItem onClick={(event)=>handleClose(event)}>My account</MenuItem>
                    </Link>
                    <Link to={'/auth'} className="menuItem hoverColor">
                    <MenuItem onClick={(event)=>{handleClose(event); handleLogOut()}}>{logValue}</MenuItem>
                    </Link>
                </Menu>
            </Box>

        );
}

