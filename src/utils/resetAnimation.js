const resetAnimation = (elem, animClass = "animate") => {
  elem.classList.remove(animClass);
  setTimeout(() => {
    elem.classList.add(animClass);
  }, 50);
}

export default resetAnimation;