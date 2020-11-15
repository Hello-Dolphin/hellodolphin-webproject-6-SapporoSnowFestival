function NavItem(props) {
	return (
		<li>
      {/* <a href={props.to}> */}
      <span onClick={(e) => {
        let target = document.querySelector(props.to);
        if (!target) return null;
        // console.log(target.getBoundingClientRect())
        target.scrollIntoView();
        setTimeout(() => {
          props.onClick(props.to.slice(1))
        }, 20)
      }}
        className={props.active === props.to.slice(1) ? "active" : ""}
      >
        {props.text || props.children}
      </span>
    </li>
	)
}

export default NavItem;