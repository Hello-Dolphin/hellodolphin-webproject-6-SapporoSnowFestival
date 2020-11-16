import React from 'react';
import './History.css';
import snowman from '../assets/images/mascot/mascot2.png'
import { Heading2, Paragraph } from './Typography';
import { SectionContainerBG, FlexColumnContainer } from './Containers';
import bg2f from '../assets/images/bg/bg2f.png';
import bg2b from '../assets/images/bg/bg2b.png';
import styled from 'styled-components';

const DetailContainer = styled(FlexColumnContainer)`
  /* top: 5vw; */
  /* left: 10vw; */
  /* width: min(600px, 35vw); */
  top: 7vw;
  right: 15vw;
  width: auto;
  align-items: flex-end;
  z-index: 1;
`;
const Foreground = styled(SectionContainerBG)`
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

class History extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      content: "เทศกาลหิมะนี้ เริ่มขึ้นมาในปี ค.ศ. 1950 โดยกลุ่มนักเรียน มัธยมที่มาช่วยกันปั้นตุ๊กตาหิมะมากมายในสวนสาธารณะโอโดริ ซึ่งเป็นสวนสาธารณะประจำเมือง นับแต่นั้นเป็นต้นมา ก็มีการ ปั้นหิมะมากขึ้นทุกปีๆ จนกลายมาเป็นเทศกาลใหญ่สุดอลังการ ในปัจจุบัน"
    }
  }
  render(){
      return(
        <SectionContainerBG className="history" bg={bg2b} {...this.props}>
          <Foreground bg={bg2f} sectionHeight={this.props.sectionHeight}/>
          {this.props.waypoint}
          <DetailContainer>
            <Heading2>ความเป็นมา</Heading2>
            <Paragraph
              pWidth="min(690px, 48vw)"
              pMaxWidth="48vw"
              pHeight="min(230px, 22vw)"
              textIndent="96px"
              justify
            >{this.state.content}</Paragraph>   
          </DetailContainer>
          <img className="snowman" alt="Snowman" src={snowman}></img>
        </SectionContainerBG>
      )
  }
    
}

export default History;