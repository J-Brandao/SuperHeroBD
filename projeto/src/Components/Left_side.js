import React, {Component} from 'react';
import btMarvel from '../assets/Img/btmarvel.png';
import btDC from '../assets/Img/btdc.jpeg';

function Left_side() {

        return (
            <div className={"div-border-right"}>
                <div className={"botoes_esquerda"}>
                <button className={"Comic_button_Marvel"}><span className={"button_text"}>Marvel</span></button>
                <br/>
                <button className={"Comic_button_DC"}><span className={"button_text"}>DC Comics</span></button>
            </div>
            </div>
        );

}


export default Left_side;