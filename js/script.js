function onBallClick() {
  const elBall = document.querySelector('.ball')
  var currSize = parseInt(elBall.offsetWidth, 10)
  
  elBall.style.width = currSize + 50 + 'px'
  elBall.style.height = currSize + 50 + 'px'
}
