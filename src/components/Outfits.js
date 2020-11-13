import { useState } from 'react';
import styled from 'styled-components';
import SectionContainer from './SectionContainer';
import SectionContainerBG from './SectionContainerBG';
import bg4 from '../assets/images/bg/bg4.png';
import mascot1 from '../assets/images/mascot/mascot1.png'
import mascot3 from '../assets/images/mascot/mascot3/mascot3.png'
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

const Mascot3PartContainer = styled(SectionContainer)`
  position: absolute;
  top: 13vw;
  left: 20vw;
  img {
    position: absolute;
    width: 24vw;
    cursor: pointer;
  }
  & img:hover {
    /* transform: scale(1.05); */
  }
  & #mascot {
    cursor: unset;
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
    top: 9vw;
    left: -1.7vw;
    width: 7.4vw;
  }
  & #shoes {
    top: 25vw;
    left: 2vw;
    width: 20vw;
  }
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
    />
  )
}

function Outfits(props) {
  return (
    <SectionContainerBG bg={bg4} {...props}>
      <Mascot3PartContainer>
        <img src={mascot1} alt="Mascot" id="mascot"/>
        <OutfitPart id="hat"/>
        <OutfitPart id="jacket"/>
        <OutfitPart id="glove_l"/>
        <OutfitPart id="glove_r"/>
        <OutfitPart id="shoes"/>
        {/* <OutfitPart id="glove_r" class="gloves"/> */}

      </Mascot3PartContainer>
    </SectionContainerBG>
  )
}

export default Outfits;