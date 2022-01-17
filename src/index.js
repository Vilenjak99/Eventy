import React, { useState} from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar/navbar";
import DarkTheme from "./styling/themes/darkTheme";
import {ThemeProvider} from "@material-ui/core/styles"
import Footer from "./components/footer/footer";
import './styling/index.css';
import Event from "./routes/event/event";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./routes/home/home";
import PageNotFound from "./routes/page_not_found/pageNotFound";
import Grow from '@material-ui/core/Grow';
import Auth from "./routes/auth/auth";
import AddEvent from "./routes/add_event/addEvent";
import CarouselEvents from "./components/carousel/carouselEvents";
import MyEvents from "./routes/my_events/myEvents";



function App(){
    const [currentPage, setCurrentPage] = useState(null);
      
    const handleClick = (newValue) => {
        setCurrentPage(newValue);
    };

    return (
        <Router>
            <ThemeProvider theme={DarkTheme()}>
                <Navbar onClick={(newValue)=>handleClick(newValue)} currentPage={currentPage}/>

                <Switch>
                    <Route exact path={'/auth'}>
                        <Auth/>
                    </Route>
                    <Route exact path={'/hot-events'}>
                        <CarouselEvents/>
                    </Route>
                    <Route exact path={'/event:slug?'}>
                        <Event/>
                    </Route>   
                    <Route exact path={'/add-event'}>
                        <AddEvent/>
                    </Route>
                    <Route exact path={'/my-events'}>
                        <MyEvents/>
                    </Route>
                    <Route exact path={'/'}>
                        <Grow>
                            <Home/>
                        </Grow>
                    </Route>
                    <Route path={'/'}>
                        <PageNotFound/>
                    </Route>
                </Switch>

                <Footer onClick={(newValue)=>handleClick(newValue)} currentPage={currentPage}/>
            </ThemeProvider>
        </Router>

    );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
