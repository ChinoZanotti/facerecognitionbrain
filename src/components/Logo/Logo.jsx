import React from "react";
import Tilt from 'react-parallax-tilt'
import './Logo.css';
import brain from './brain-logo.svg'

const Logo = () => {
    return(
        <div className="ma4 mt0" style={{maxWidth:'150px'}}>
            <Tilt 
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
                reset={false}
            >
                <div className='logo-tilt'>
                    <img src={ brain } alt="logo" />
                </div>
            </Tilt>
        </div>
    )
};

export default Logo;