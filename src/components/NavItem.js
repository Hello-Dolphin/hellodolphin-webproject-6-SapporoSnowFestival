function NavItem(props) {
	return (
		<li className="nav-item">
      <a href={props.to}>
        {props.text || props.children}
      </a>
    </li>
	)
}

export default NavItem;