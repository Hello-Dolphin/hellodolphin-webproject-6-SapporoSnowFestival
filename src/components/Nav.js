import styled from 'styled-components';
import NavItem from './NavItem';
// import './Nav.css';
import logoWhite from '../assets/images/logo/logo-white.png'

const NavLogo = styled.img`
 width: 84px;
 height: 84px;
`;

const NavMenu = styled.ul`
  position: sticky;
  top: 0;
  display: flex;
  height: 66px;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  background: #1c2b2dd0;
  /* backdrop-filter: blur(6px); */
  margin-right: auto;
  & li {
  font-size: 1.125em;
  font-weight: bold;
  color: white;
  height: 100%;
  }
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 4vmax;
    height: 100%;
    text-decoration: none;
    color: unset;
  }
  & a:active, & a:hover {
    background-color: #ff7e7e;
    color: #1c2b2d;
  }
  & .logo {
    position: absolute;
  }
`;

function Nav() {
	return (
		<NavMenu>
      <NavItem to="#Home">
        <NavLogo src={logoWhite}/>
      </NavItem>
      <NavItem to="#History" text="ความเป็นมา" />
      <NavItem to="#Locations" text="สถานที่" />
      <NavItem to="#Activities" text="กิจกรรม" />
      <NavItem to="#Outfits" text="การแต่งกาย" />
      <NavItem to="#About" text="เกี่ยวกับ" />
      <div></div>
    </NavMenu>
	)
}

export default Nav;