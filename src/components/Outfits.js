import { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { SectionContainerBG, FlexColumnContainer } from './Containers';
import bg4 from '../assets/images/bg/bg4.png';
import mascot1 from '../assets/images/mascot/mascot1.png'
import mascot3Hat from '../assets/images/mascot/mascot3/mascot3_hat.png'
import mascot3HatHover from '../assets/images/mascot/mascot3/mascot3_hat-hover.png'
import mascot3Jacket from '../assets/images/mascot/mascot3/mascot3_jacket.png'
import mascot3JacketHover from '../assets/images/mascot/mascot3/mascot3_jacket-hover.png'
import mascot3Glove_l from '../assets/images/mascot/mascot3/mascot3_glove_left.png'
import mascot3Glove_lHover from '../assets/images/mascot/mascot3/mascot3_glove_left-hover.png'
import mascot3Glove_r from '../assets/images/mascot/mascot3/mascot3_glove_right.png'
import mascot3Glove_rHover from '../assets/images/mascot/mascot3/mascot3_glove_right-hover.png'
import mascot3Shoes from '../assets/images/mascot/mascot3/mascot3_shoes.png'
import mascot3ShoesHover from '../assets/images/mascot/mascot3/mascot3_shoes-hover.png'
import { Heading2, SubHeading2, Paragraph } from './Typography';
import resetAnimation from '../utils/resetAnimation.js';

const detailFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-6vw);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const Mascot3PartContainer = styled.div`
  position: absolute;
  bottom: 58vw;
  left: 24vw;
  transform: scale(.85);
  img {
    position: absolute;
    width: 24vw;
  }
  & img:not(#mascot) {
    cursor: pointer;
    transform: scale(1);
    transition: .2s;
  }
  & img:active:not(#mascot) {
    transform: scale(0.97);
    transition: 0s;
  }
  & #mascot {
    cursor: unset;
    transition: 0;
  }
  & #hat {
    top: -5.4vw;
    left: 6.3vw;
    width: 12vw;
  }
  & #jacket {
    top: 10vw;
    left: 1.2vw;
    width: 21vw;
  }
  & #glove_l {
    top: 8.8vw;
    left: 18.3vw;
    width: 7.2vw;
  }
  & #glove_r {
    top: 8.9vw;
    left: -1.7vw;
    width: 7.4vw;
  }
  & #shoes {
    top: 25vw;
    left: 2vw;
    width: 20vw;
  }
`;
const DetailContainer = styled(FlexColumnContainer)`
  &.animate {
    animation: ${detailFade} .5s forwards;
  }
  top: 20vw;
  left: 50vw;
  width: min(450px, 35vw);
  align-items: flex-start;
  opacity: 0;
`;
const PartName = styled.h2`
  color: var(--color-light);
  font-size: min(48px, 3.8vw);
  margin-bottom: .3em;
`;

const mascot3Outfits = {
  mascot3Hat,
  mascot3HatHover,
  mascot3Jacket,
  mascot3JacketHover,
  mascot3Glove_l,
  mascot3Glove_lHover,
  mascot3Glove_r,
  mascot3Glove_rHover,
  mascot3Shoes,
  mascot3ShoesHover
}

const resolvePartPath = (part, hover) => {
  part = part.trim();
  return mascot3Outfits[`mascot3${part[0].toUpperCase()}${part.slice(1)}${hover ? "Hover" : ""}`];
}

const setImageSrc = ({ target }, hover) => {
  target.setAttribute("src", resolvePartPath(target.id, hover));
}

function OutfitPart(props) {
  return (
    <img
      id={props.id}
      class={props.className}
      src={resolvePartPath(props.id)}
      alt={props.alt || `Mascot ${props.id[0].toUpperCase()}${props.id.slice(1)}`}
      onMouseEnter={(e) => setImageSrc(e, true)}
      onMouseLeave={(e) => setImageSrc(e)}
      onMouseDown={(e) => props.onMouseDown(props.id)}
    />
  )
}

const allPartsContent = {
  hat: {
    name: "หมวก",
    desc: "เนื่องจากต้องอยู่กลางแจ้งเป็นเวลานาน จึงควรสวมหมวกไหมพรม และอาจจะใส่ที่ปิดหูด้วยก็ได้"
  },
  jacket: {
    name: "เสื้อผ้า",
    desc: "สวมใส่เสื้อผ้าที่กันหนาวได้ เช่น เสื้อโค้ท เสื้อสเวตเตอร์ กางเกงขายาว อาจจะสวม ผ้าพันคอเพื่อเพิ่มความอบอุ่น"
  },
  gloves: {
    name: "ถุงมือ",
    desc: "ควรสวมใส่ถุงมือเพื่อเพิ่มความอบอุ่นและสามารถสัมผัสกับหิมะได้"
  },
  shoes: {
    name: "รองเท้า",
    desc: "ทางเดินจะถูกปกคลุมไปด้วยหิมะ จึงควร สวมใส่รองเท้าบูท หรือรองเท้าที่กันลื่น และกันน้ำได้"
  }
}

function Outfits(props) {

  const [partContent, setPartContent] = useState({});
  const detailContainerRef = useRef();

  const changePartContent = (part) => {
    part = part.includes("glove") ? "gloves" : part;
    setPartContent(allPartsContent[part]);
    resetAnimation(detailContainerRef.current);
  }

  return (
    <SectionContainerBG bg={bg4} {...props}>
      <FlexColumnContainer absolute>
        <Heading2>การแต่งกาย</Heading2>
        <SubHeading2>* กดที่เครื่องแต่งกายเพื่อดูรายละเอียด</SubHeading2>
      </FlexColumnContainer>

      <DetailContainer ref={detailContainerRef} className="fade">
        <PartName>{partContent.name}</PartName>
        <Paragraph>{partContent.desc}</Paragraph>
      </DetailContainer>

      <Mascot3PartContainer>
        <img src={mascot1} alt="Mascot" id="mascot"/>
        <OutfitPart id="hat" onMouseDown={changePartContent}/>
        <OutfitPart id="jacket" onMouseDown={changePartContent}/>
        <OutfitPart id="glove_l" onMouseDown={changePartContent}/>
        <OutfitPart id="glove_r" onMouseDown={changePartContent}/>
        <OutfitPart id="shoes" onMouseDown={changePartContent}/>

      </Mascot3PartContainer>
    </SectionContainerBG>
  )
}

export default Outfits;