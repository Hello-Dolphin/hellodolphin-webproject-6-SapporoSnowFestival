import React from 'react';
import './History.css';
import snowman from '../assets/images/mascot/mascot2.png'
import { Heading2, Paragraph } from './Typography';
import { SectionContainerBG, FlexColumnContainer } from './Containers';
import bg5 from '../assets/images/bg/bg5.png';
import styled from 'styled-components';

const DetailContainer = styled(FlexColumnContainer)`
  /* top: 5vw; */
  /* left: 10vw; */
  /* width: min(600px, 35vw); */
  top: 7vw;
  right: 15vw;
  width: auto;
  align-items: flex-end;
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
        <SectionContainerBG className="history" bg={bg5} {...this.props}>
          {this.props.waypoint}
          <DetailContainer>
            <Heading2>ความเป็นมา</Heading2>
            <Paragraph
              pWidth="min(690px, 48vw)"
              pHeight="min(230px, 22vw)"
              textIndent="96px"
              justify
            >{this.state.content}</Paragraph>   
          </DetailContainer>
          <img class ="snowman" alt="Snowman" src={snowman}></img>
        </SectionContainerBG>
      )
  }
    
}

export default History;