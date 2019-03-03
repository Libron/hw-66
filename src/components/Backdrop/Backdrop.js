import React from 'react';
import './Backdrop.css';
import Spinner from "../Spinner/Spinner";

const Backdrop = props => {
    let backdrop = (
        <div className="Backdrop">
            {props.loading && <Spinner/>}
        </div>
    );

  return props.show ? backdrop : null;
};

export default Backdrop;