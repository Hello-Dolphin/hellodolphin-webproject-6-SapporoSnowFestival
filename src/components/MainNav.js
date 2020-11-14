import styled from 'styled-components';
import NavItem from './NavItem';
import logoWhite from '../assets/images/logo/logo-white.png'
import logoDark from '../assets/images/logo/logo-dark.png'

const NavLogo = styled.a.attrs(props => ({
  href: props.to,
}))`
  position: absolute;
  left: 0;
  & img {
    width: 84px;
    height: 84px;
  }
`;
const StyledDiv = styled.div`
  position: absolute;
  /* top: 0; */
  /* left: 0; */
  width: 100%;
  height: ${props => props.height};
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
    font-size: 1.125em;
    text-decoration: none;
    color: unset;
  }
  & a:active, & a:hover, & span:active, & span:hover {
    background-color: var(--color-primary);
    color: var(--color-secondary);
    cursor: pointer;
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
	return (
    <StyledDiv height={props.height}>
    <NavBar>
      <NavLogo
        to="#Home"
        className="nav-logo"
        onMouseEnter={() => document.getElementById("logo").setAttribute("src", logoDark)}
        onMouseLeave={() => document.getElementById("logo").setAttribute("src", logoWhite)}
      >
        <img src={logoWhite} alt="Brand logo" id="logo"/>
      </NavLogo>
      <NavMenu>
        <NavItem to="#History" text="ความเป็นมา" />
        <NavItem to="#Sites" text="สถานที่" />
        <NavItem to="#Activities" text="กิจกรรม" />
        <NavItem to="#Outfits" text="การแต่งกาย" />
        <NavItem to="#About" text="เกี่ยวกับ" />
      </NavMenu>
      {/* <div className="dummy"></div> */}
    </NavBar>
    </StyledDiv>
	)
}

export default MainNav;