function onBallClick() {
  const elBall = document.querySelector('.ball')
  var currSize = parseInt(elBall.offsetWidth, 10)
  var rdmIncrement = getRandomIntegerInc(20, 60)
  console.log(currSize)
  if (currSize > 400) {
    elBall.style.width = 100 + 'px'
    elBall.style.height = 100 + 'px'
    return
  }

  elBall.style.width = currSize + rdmIncrement + 'px'
  elBall.style.height = currSize + rdmIncrement + 'px'
  elBall.innerText = currSize + rdmIncrement
}
