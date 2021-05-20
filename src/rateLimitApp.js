let temp = 0
function rateLimitApp() {
  temp = temp + 1
  console.log(temp)
  if(temp >= 2) {
    throw new Error('rateLimit, you need wait 800 ms')
  }
  setTimeout(() => {
    temp = 0
  }, 800);
}

module.exports = rateLimitApp
