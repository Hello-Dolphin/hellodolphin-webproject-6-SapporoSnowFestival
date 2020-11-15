import React from 'react';

    //รูปคนทำ
import frontEnd from '../assets/images/producer/about1.png';
import webDesign from '../assets/images/producer/about2.png';
import infra from '../assets/images/producer/about3.png';

    //ปุ่มซ้ายขวา
import left from '../assets/images/button/left 1.png';
import right from '../assets/images/button/right 1.png';
import hoverLeft from '../assets/images/button/left 2.png';
import hoverRight from '../assets/images/button/right 2.png';

import './Producer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class Producer extends React.Component{
    state={
        imgRefLeft : React.createRef("src", left),
        imgRefRight: React.createRef("src", right)
    }
    imgRefLeft = React.createRef();
    imgRefRight= React.createRef();

    changeHoverLeft=()=>{
        this.imgRefLeft.current.setAttribute("src", hoverLeft)
    }
    changeLeft=()=>{
        this.imgRefLeft.current.setAttribute("src", left)
    }
    changeHoverRight=()=>{
        this.imgRefRight.current.setAttribute("src", hoverRight)
    }
    changeRight=()=>{
        this.imgRefRight.current.setAttribute("src", right)
    }

    render(){
        return(
    <div>
    <div><h2 className="head">จัดทำโดย</h2><br/></div>

    <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">

        <div className="carousel-item active" data-interval="2000">
        <img src={frontEnd} className="d-block mx-auto" width="930px" height="430px" alt="frontEnd"/>
        </div>
        
        <div className="carousel-item" data-interval="2000">
        <img src={webDesign} className="d-block mx-auto"  width="930px" height="430px" alt="webDesign"/>
        </div>

        <div className="carousel-item" data-interval="2000">
        <img src={infra} className="d-block mx-auto" width="930px" height="430px" alt="infra"/>
        </div>
        
        </div>
        
        
        <button className="carousel" href="#carouselExampleInterval" role="button" data-slide="prev">
            <img 
                onMouseOver={()=>this.changeHoverLeft()} src={left} ref={this.imgRefLeft} className="slide" width="37px" height="40px"
                onMouseOut={()=>this.changeLeft()} className="slide" width="37px" height="40px"
            />
            
        </button>

        <button className="carousel1" href="#carouselExampleInterval" role="button" data-slide="next">
            <img 
                onMouseOver={()=>this.changeHoverRight()} src={right} ref={this.imgRefRight} className="slide" width="37px" height="40px"
                onMouseOut={()=>this.changeRight()} className="slide" width="37px" height="40px"
            />
       
        </button>
        
       
       
        
    </div>
    </div>
        )
    }
}

export default Producer;