function onBallClick(elBall, maxDiameter) {
  var currSize = parseInt(elBall.offsetWidth, 10)
  var rdmIncrement = getRandomIntegerInc(20, 60)

  elBall.style.backgroundColor = getRandomColor()

  if (currSize + rdmIncrement > maxDiameter) {
    elBall.style.width = 100 + 'px'
    elBall.style.height = 100 + 'px'
    elBall.innerText = 100
    return
  }

  elBall.style.width = currSize + rdmIncrement + 'px'
  elBall.style.height = currSize + rdmIncrement + 'px'
  elBall.innerText = currSize + rdmIncrement
}

function onSwapBalls() {
  const elBall1 = document.querySelector('.ball-1')
  const elBall2 = document.querySelector('.ball-2')

  var tempSize
  var tempColor
  var tempInnerText

  tempSize = parseInt(elBall1.offsetWidth, 10)
  tempColor = elBall1.style.backgroundColor
  tempInnerText = elBall1.innerText

  elBall1.style.width = parseInt(elBall2.offsetWidth, 10) + 'px'
  elBall1.style.height = parseInt(elBall2.offsetHeight, 10) + 'px'
  elBall1.style.backgroundColor = elBall2.style.backgroundColor
  elBall1.innerText = elBall2.innerText

  elBall2.style.width = tempSize + 'px'
  elBall2.style.height = tempSize + 'px'
  elBall2.style.backgroundColor = tempColor
  elBall2.innerText = tempInnerText
}

function onReduceBalls(minDiameter = 100) {
  const elBall1 = document.querySelector('.ball-1')
  const elBall2 = document.querySelector('.ball-2')

  var currSize1 = parseInt(elBall1.offsetWidth, 10)
  var currSize2 = parseInt(elBall2.offsetWidth, 10)

  var rdmIncrement = getRandomIntegerInc(20, 60)

  if (currSize1 - rdmIncrement > 100) {
    elBall1.style.width = currSize1 - rdmIncrement + 'px'
    elBall1.style.height = currSize1 - rdmIncrement + 'px'
    elBall1.style.backgroundColor = getRandomColor()
    elBall1.innerText = currSize1 - rdmIncrement
  }
  if (currSize2 - rdmIncrement > 100) {
    elBall2.style.width = currSize2 - rdmIncrement + 'px'
    elBall2.style.height = currSize2 - rdmIncrement + 'px'
    elBall2.style.backgroundColor = getRandomColor()
    elBall2.innerText = currSize2 - rdmIncrement
  }
}
