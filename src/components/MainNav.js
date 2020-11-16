import { useRef } from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';
import logoWhite from '../assets/images/logo/logo-white.png'
import logoDark from '../assets/images/logo/logo-dark.png'

const NavLogoContainer = styled.a`
  position: absolute;
  left: 0;
  & img {
    width: min(84px, 8vw);
    height: min(84px, 8vw);
    max-width: 8vw;
    max-height: 8vw;
  }
`;
const StyledDiv = styled.div`
  position: absolute;
  /* top: 0; */
  /* left: 0; */
  width: 100%;
  height: ${props => props.appHeight};
  
  /* z-index: 100; */
  
`;
const NavBar = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 66px;
  width: 100%;
  z-index: 100;
  background-color: var(--color-secondary);

  @media (max-width: 768px) {
    flex-direction: column;
    /* background-color: red; */
    max-height: 8vw;
    & a, & span {
      font-size: 2vw;
      padding: 0 1vw;
    }
  }

  & li {
    height: 100%;
    font-weight: bold;
    color: white;
  }
  & a, & span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 3vmax;
    height: 100%;
    font-size: min(1.125em, 2vw);
    text-decoration: none;
    color: unset;
  }
  & a:active, & a:hover, & span:active, & span:hover, & a.active, & span.active {
    background-color: var(--color-primary);
    color: var(--color-secondary);
    cursor: pointer;
    transition: 200ms;
  }
  & .nav-logo {
    padding: 0 1em;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  list-style: none;
`;

function MainNav(props) {
  const logoRef = useRef();

	return (
    <StyledDiv appHeight={props.appHeight}>
      {/* {console.log(props.height)} */}
    <NavBar>
      <NavLogoContainer
        className="nav-logo"
        onClick={() => {
          // console.log(123)
          let target = document.querySelector("#home");
          if (!target) return null;
          target.scrollIntoView();
          setTimeout(() => {
            props.onClick("home");
          }, 20)
        }}
        onMouseEnter={() => logoRef.current.setAttribute("src", logoDark)}
        onMouseLeave={() => logoRef.current.setAttribute("src", logoWhite)}
      >
        <img src={logoWhite} ref={logoRef} alt="Brand logo" id="logo"/>
      </NavLogoContainer>
      <NavMenu>
        <NavItem to="#history" text="ความเป็นมา" active={props.active} onClick={props.onClick}/>
        <NavItem to="#sites" text="สถานที่" active={props.active} onClick={props.onClick}/>
        <NavItem to="#activities" text="กิจกรรม" active={props.active} onClick={props.onClick}/>
        <NavItem to="#outfits" text="การแต่งกาย" active={props.active} onClick={props.onClick}/>
        <NavItem to="#producer" text="จัดทำโดย" active={props.active} onClick={props.onClick}/>
      </NavMenu>
      {/* <div className="dummy"></div> */}
    </NavBar>
    </StyledDiv>
	)
}

export default MainNav;