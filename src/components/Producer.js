import React from 'react';

    //รูปคนทำ
import frontEnd from '../assets/images/producer/about1.png';
import webDesign from '../assets/images/producer/about2.png';
import infra from '../assets/images/producer/about3.png';

    //ปุ่มซ้ายขวา
import left from '../assets/images/button/left1.png';
import right from '../assets/images/button/right1.png';
import hoverLeft from '../assets/images/button/left2.png';
import hoverRight from '../assets/images/button/right2.png';

import { Heading2, Paragraph } from './Typography';
import { SectionContainerBG, FlexColumnContainer } from './Containers';
import bg5 from '../assets/images/bg/bg5.png';
import styled from 'styled-components';

import './Producer.css'

const Image = styled.img`
  /* position: relative; */
  width: 64vw;
  /* bottom: -10vw; */
`;


/* const Imgage = styled.img.attrs(props => ({
  className: props.className,
  alt: props.alt
}))` */
const Button = styled.button`
  background-image: url(${props => props.bg});
  /* background-color: #FF7E7E ; */
  background-color: transparent;
  background-size: cover;
  background-position: center;
  position: relative;
  width: 6vw;
  height: 6vw;
  top: 2vw;
  outline: none;
  border: none;
  transition: 50ms;
  &:active, &:focus {
    outline: none;
    border: none;
  }
  &:active {
    transform: scale(.95);
    transition: 0s;
  }
  & + & {
    margin-left: 3vw;
  }
`;
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
    <SectionContainerBG bg={bg5} {...this.props}>
      <Heading2>จัดทำโดย</Heading2>

      <div id="carouselWeeeee" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active" data-interval="2000">
            <Image src={frontEnd} className="d-block mx-auto" alt="frontEnd"/>
          </div>
          
          <div className="carousel-item" data-interval="2000">
            <Image src={webDesign} className="d-block mx-auto" alt="webDesign"/>
          </div>

          <div className="carousel-item" data-interval="2000">
            <Image src={infra} className="d-block mx-auto" alt="infra"/>
          </div>
        
        </div>

        <Button bg={left} ref={this.imgRefLeft}
          onMouseOver={()=>this.changeHoverLeft()}
          onMouseOut={()=>this.changeLeft()}
          className="carousel" href="#carouselWeeeee" role="button"
          data-slide="prev"
        >
        </Button>

        <Button bg={right} ref={this.imgRefRight}
          onMouseOver={()=>this.changeHoverRight()}
          onMouseOut={()=>this.changeRight()}
          className="carousel" href="#carouselWeeeee" role="button"
          data-slide="next"
        >
        </Button>
      
        
          
      </div>
    </SectionContainerBG>
        )
    }
}

export default Producer;