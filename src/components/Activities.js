import React, { useState } from 'react';
import ac1 from '../assets/images/activity/ac1.png'
import ac2 from '../assets/images/activity/ac2.png'
import ac3 from '../assets/images/activity/ac3.png'
import ac1sha from '../assets/images/activity/ac1sha.png'
import ac2sha from '../assets/images/activity/ac2sha.png'
import ac3sha from '../assets/images/activity/ac3sha.png'
import { SectionContainer, FlexColumnContainer, FlexRowContainer } from './Containers';
import { Heading2, Paragraph, SubHeading2 } from './Typography';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const allActivitiesSrc = {
  ac1,
  ac2,
  ac3,
  ac1sha,
  ac2sha,
  ac3sha,
}

const Activity = (props) => {
  const [active, setActive] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const setImageSrc = ({ target }, hover) => {
    if (active) return;
    target.setAttribute("src", allActivitiesSrc[`${target.id}${hover ? "sha" : ""}`]);
  }

  return (
    <FlexRowContainer>
      <img
        id={props.id}
        alt={props.alt}
        src={props.src}
        onMouseEnter={(e) => setImageSrc(e, true)}
        onMouseLeave={(e) => setImageSrc(e)}
        onMouseDown={(e) => setActive(!active)}
      />
      <CSSTransition
        in={active}
        timeout={500}
        classNames="content"
        onEnter={() => setShowContent(true)}
        onExited={() => setShowContent(false)}
      >
        <Paragraph pWidth="min(560px, 40vw)">
          {showContent && props.content}
        </Paragraph>
      </CSSTransition>
    </FlexRowContainer>
  )
}
const ActivityContainer = styled.div`
  padding: min(4vw, 100px);
  img {
    width: min(450px, 30vw);
    transition: 200ms;
  }
  img:hover {
    cursor: pointer;
  }
  img:active {
    transform: scale(.98);
    transition: 0s;
  }
  p {
    color: var(--color-light);
    margin-left: 3.5vw;
  }
  .content-enter {
    opacity: 0;
    transform: translateX(-5vw);
  }
  .content-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 500ms;
  }
  .content-exit {
    opacity: 1;
    transition: all 500ms;
  }
  .content-exit-active {
    opacity: 0;
  }
`;
class Activities extends React.Component{
    
  constructor(props) {
    super(props);
    this.state = {

    }
  }

render(){
    return(
        <SectionContainer {...this.props}>
          <FlexColumnContainer>
            <Heading2>มีกิจกรรมอะไรบ้าง</Heading2>
            <SubHeading2>*กดที่รูปภาพเพื่อดูรายละเอียด</SubHeading2>

            <ActivityContainer>
              <Activity
                src={ac1}
                content="เที่ยวชมประติมากรรมน้ำแข็ง หิมะสุดแสนอลังการจากศิลปินและนักแข่งขันทั่วโลก"
                id="ac1"
                alt="Activity 1"
              />
              <Activity
                src={ac2}
                content="ปั้นตุ๊กตาหิมะสุดพิเศษด้วยตัวเอง"
                id="ac2"
                alt="Activity 2"
              />
              <Activity
                src={ac3}
                content="สนุกสนานไปกับ Tube Slider , Snow rafting 
                และ Snow Stride"
                id="ac3"
                alt="Activity 3"
              />
            </ActivityContainer>

          </FlexColumnContainer>
        </SectionContainer>
    )
}

}
export default Activities;