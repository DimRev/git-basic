var gInitBodyHtml
var gHoverTimers = [0, 0, 0, 0]
var gInterval = 0
var gCount = 0

function onBallClick(elBall, maxDiameter) {
  var currSize = parseInt(elBall.offsetWidth, 10)
  var rdmIncrement = getRandomIntegerInc(20, 60)

  elBall.style.backgroundColor = getRandomColor()

  if (currSize + rdmIncrement > maxDiameter) {
    handleBallGrowth(elBall, currSize, 100, 'exact')

    return
  }

  handleBallGrowth(elBall, currSize, rdmIncrement, 'grow')
}

function onSwapBalls() {
  const elBall1 = document.querySelector('.ball-1')
  const elBall2 = document.querySelector('.ball-2')

  var tempColor = elBall1.style.backgroundColor
  var ball1Size = parseInt(elBall1.offsetWidth, 10)
  var ball2Size = parseInt(elBall2.offsetWidth, 10)

  handleBallGrowth(elBall1, 0, ball2Size, 'exact')
  elBall1.style.backgroundColor = elBall2.style.backgroundColor

  handleBallGrowth(elBall2, 0, ball1Size, 'exact')
  elBall2.style.backgroundColor = tempColor
}

function onReduceBalls(minDiameter = 100) {
  const elBall1 = document.querySelector('.ball-1')
  const elBall2 = document.querySelector('.ball-2')

  var currSize1 = parseInt(elBall1.offsetWidth, 10)
  var currSize2 = parseInt(elBall2.offsetWidth, 10)

  var rdmIncrement = getRandomIntegerInc(20, 60)

  if (currSize1 - rdmIncrement > minDiameter) {
    handleBallGrowth(elBall1, currSize1, rdmIncrement, 'shrink')
    elBall1.style.backgroundColor = getRandomColor()
  }
  if (currSize2 - rdmIncrement > minDiameter) {
    handleBallGrowth(elBall2, currSize2, rdmIncrement, 'shrink')
    elBall2.style.backgroundColor = getRandomColor()
  }
}

function handleBallGrowth(elBall, currSize, Increment, mode) {
  switch (mode) {
    case 'grow':
      elBall.style.width = currSize + Increment + 'px'
      elBall.style.height = currSize + Increment + 'px'
      elBall.innerText = currSize + Increment
      break
    case 'shrink':
      elBall.style.width = currSize - Increment + 'px'
      elBall.style.height = currSize - Increment + 'px'
      elBall.innerText = currSize - Increment
      break
    case 'exact':
      elBall.style.width = Increment + 'px'
      elBall.style.height = Increment + 'px'
      elBall.innerText = Increment
      break
  }
}

function onBGCchange() {
  const elBody = document.querySelector('body')
  elBody.style.backgroundColor = getRandomColor()
}

function onResetClick(state) {
  if (state === 'init') {
    gInitBodyHtml = document.querySelector('body').innerHTML
    return
  }
  const elBody = document.querySelector('body')
  elBody.innerHTML = gInitBodyHtml
}

function onResetHover(mode) {
  if (mode === 'enter') {
    gHoverTimers[0] = setTimeout(() => {
      intervalCycle()
      gInterval = setInterval(() => {
        intervalCycle()
      }, 8000)
    }, 2000)
  }
  if (mode === 'leave') {
    gHoverTimers.forEach((gHoverTimer) => {
      clearTimeout(gHoverTimer)
    })
    clearInterval(gInterval)
  }
}

function intervalCycle() {
  const elBall1 = document.querySelector('.ball-1')
  onBallClick(elBall1, 400)
  gHoverTimers[1] = setTimeout(() => {
    const elBall2 = document.querySelector('.ball-2')
    onBallClick(elBall2, 300)
  }, 2000)
  gHoverTimers[2] = setTimeout(() => {
    onSwapBalls()
  }, 4000)
  gHoverTimers[3] = setTimeout(() => {
    onReduceBalls()
  }, 6000)
}
