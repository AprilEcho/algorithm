function login(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('1001')
    }, 600)
  })
}

function getData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === '1001') {
        resolve('Success');
      } else {
        reject('Fail')
      }
    }, 600)
  })
}

function test(username) {
  this.login(username)
    .then(this.getData)
    .then(result => {
      console.log(result)
    })
}

async function test2(username) {
  const userId = await this.login(username);
  const result = await this.getData(userId);
  console.log(result)

}

this.test();
this.test2();


