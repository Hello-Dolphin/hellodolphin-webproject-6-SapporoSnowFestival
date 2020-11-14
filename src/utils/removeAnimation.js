const removeAnimation = (elem, animClass = "animate") => {
  elem.classList.remove(animClass);
  // elem.animation = "none"
}

export default removeAnimation;