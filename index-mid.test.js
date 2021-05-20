const fs = require('fs')
const rateLimitApp = require('./src/rateLimitApp')

test('#01 promisify', async () => {
  const readFileAsync = myPromisify(fs.readFile)
  const response = await readFileAsync('.gitignore', 'utf-8')
  expect(typeof response).toEqual("string");

  readFileAsync('NOT_EXISTS', 'utf-8').catch(error => {
    expect(typeof error.message).toEqual("string");
  })
});


fs.writeFileSync('files/0.json', '{"0": 5, "2": 0}')
fs.writeFileSync('files/1.json', '{"1": 7, "2": 0}')

test('#02 Closure, Read json files in loop', (done) => {
  // Update the code to pass print the correct numbers
  // without removing readFile
  const result = []
  for (var i = 0; i < 2; i++) {
    fs.readFile(`files/${i}.json`, 'utf-8', function(err, text) {
      const response = JSON.parse(text)
      console.log(i)
      result.push(response[i])
    })
  }

  setTimeout(() => {
    done()
    expect(result).toEqual([5,7])
  }, 1000)
})


test('#03 sleep and rateLimitApp', async (done) => {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  await Promise.all([0,1,2,3].map(async function(number) {
    await sleep(1000)
    rateLimitApp()
  }))
  done()
})
