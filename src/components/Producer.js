import React from 'react';
import place1 from '../assets/images/place/place1.png';
import place2 from '../assets/images/place/place2.png';
import './Producer.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class Producer extends React.Component{
    render(){
        return(
    <div>
    <h2 className="head"><b>จัดทำโดย</b></h2><br/>

    <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">

        <div className="carousel-item active" data-interval="1000">
        <img src={place1} className="d-block mx-auto" width="450px" height="434px" alt="..."/>
        </div>
        
        <div className="carousel-item" data-interval="1000">
        <img src={place2} className="d-block mx-auto"  width="450px" height="434px" alt="..."/>
        </div>

        <div className="carousel-item">
        <img src="..." className="d-block img-winner" alt="..."/>
        </div>
        
        </div>
        
        
        <button className="carousel" href="#carouselExampleInterval" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel" href="#carouselExampleInterval" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>       
        </button>
        
        
    </div>
    </div>
        )
    }
}

export default Producer;