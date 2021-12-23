import React from "react";
import './footer.css';
import BasicSelect from "../select/select";
import {Facebook,Instagram,Twitter} from '@material-ui/icons';
import  ButtonRipple from "../buttonRipple/buttonRipple";
import {Link} from "react-router-dom";
export default function Footer(props){

    return(

        <div className={'footerContainer'}>
            <div className={'upperSection'}>
                <div>
                    <p>Experience life with us</p>
                </div>
                <div className={'centerContent'}>
                    <ButtonRipple text={'REGISTER'}/>
                </div>
            </div>

            <div className={'middleSection'}>
                <div className={'middleLeftSection'}>
                    <h2>EXPLORE</h2>
                    <Link to={'/'} onClick={() => props.onClick('home')}>
                        <p className={'hoverColor hoverPadding'}>HOME</p>
                    </Link>
                    <Link to={'/hot-events'} onClick={() => props.onClick('hot-events')}>
                        <p className={'hoverColor hoverPadding'}>HOT EVENTS</p>
                    </Link>
                    <Link to={'/community'} onClick={() => props.onClick('community')}>
                        <p className={'hoverColor hoverPadding'}>COMMUNITY</p>
                    </Link>
                </div >
                <div className={'middleCenterSection centerContent'}>
                    <img className={'logo'} src={'images/logos/logo_white.png'} alt="Trulli"/>
                </div>
                <div className={'middleRightSection'}>
                    <div className={'info'}>
                        <h2>INFORMATION</h2>
                        <Link to={'/contact'} onClick={() => props.onClick('contact')}>
                            <p className={'hoverColor hoverPadding'}>CONTACT US</p>
                        </Link>
                        <Link to={'/careers'} onClick={() => props.onClick('careers')}>
                            <p className={'hoverColor hoverPadding'}>CAREERS</p>
                        </Link>
                        <Link to={'/blog'} onClick={() => props.onClick('blog')}>
                            <p className={'hoverColor hoverPadding'}>BLOG</p>
                        </Link>
                    </div>
                    <BasicSelect/>
                </div>
            </div>
            <div className={'bottomSection'}>
                <div className={'bottomLeftSection'}>
                    <p>#EVENTYGROUP</p>
                </div>
                <div className={'bottomMiddleSection'}>
                    <Facebook className={'hoverColor'} color={'primary'}/>
                    <Twitter className={'hoverColor'} color={'primary'}/>
                    <Instagram className={'hoverColor'} color={'primary'}/>
                </div>
                <div className={'bottomRightSection'}>
                    <p>© Copyrighted 2021</p>
                </div>
            </div>

        </div>

        // <Box sx={{display:'flex', flexDirection:'row', justifyContent : 'space-around', alignItems: 'center'}} bgcolor='primary.dark'>
        //     <Box sx={{ flexDirection:'column', alignSelf:'center'}}>
        //         <img src={'images/logo_white.png'} alt="Trulli"/>
        //     </Box>
        //     <Box>
        //         <p>lorem ups</p>
        //     </Box>
        //
        // </Box>
    );
}

