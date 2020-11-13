function NavItem(props) {
	return (
		<li>
      {/* <a href={props.to}> */}
      <span onClick={(e) => {
        let target = document.querySelector(props.to);
        if (!target) return null;
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }}>
        {props.text || props.children}
      </span>
    </li>
	)
}

export default NavItem;