import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";
import './buttonRipple.css';
import React from "react";

export default function ButtonRipple(props){
    const rippleRef = React.useRef(null);
    const onRippleStart = (e) => {
        rippleRef.current.start(e);
    };
    const onRippleStop = (e) => {
        rippleRef.current.stop(e);
    };

    return(
        <button onMouseDown={onRippleStart}
                onMouseUp={onRippleStop}
                onMouseLeave={onRippleStop}
                style={{width:props.width}}
                onClick={props.onClick}
                className={`hoverColor rippleBtn ${props.variant} ${props.className}`}
                type={props.type}>
            {props.text}
            <TouchRipple ref={rippleRef} center={false} />
        </button>
    );
}