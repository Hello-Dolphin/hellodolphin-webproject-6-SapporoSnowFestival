function NavItem(props) {
	return (
		<li>
      <a href={props.to}>
        {props.text || props.children}
      </a>
    </li>
	)
}

export default NavItem;