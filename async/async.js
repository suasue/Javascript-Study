// async & await
// clear style of using promise :)
// Promise와 async & await를 써야할 때가 따로 있다. 어느 것이 좋은 게 아님.


// 1. async
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network reqeust in 10 secs....
    resolve('ellie');
  }); 
}

async function fetchUser() {
    // do network reqeust in 10 secs....
    return 'ellie';
} // async 키워드를 함수 앞에 쓰면 코드 블럭이 자동으로 프로미스로 바뀐다!

const user = fetchUser(); 
console.log(user); // 프로미스 출력
user.then(console.log);

// 2. await ✨
// await이라는 키워는 async가 붙은 함수 안에서만 쓸 수 있음
// delay라는 함수는 Promise를 리턴하는데 정해진 ms가 지나면 resolve 호출하는 Promise 전달
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// await를 쓰게 되면 delay가 끝날 때까지 기다려 준다. 2초 있다가 사과를 리턴하는 Promise가 만들어짐.
async function getApple() {
  await delay(2000);
  // throw 'error';
  return '🍎';
}

// 얘도 1초 있다가 바나나를 리턴하는 함수
async function getBanana() {
  await delay(1000);
  return '🍌';
}

// 위 코드와 같은 기능을 하는 코드
// function getBanana() {
//   return delay(3000)
//   .then(() => '🍌');
// } 
// 이렇게 체이닝을 하는 것보다 동기적인 코드를 쓰는 것처럼 만들게 되면 쉽게 이해할 수 있다. 

// function pickFruits() {
//   return getApple()
//   .then(apple => {
//     return getBanana()
//     .then(banana => `${apple} + ${banana}`)
//   });
// }

// pickFruits().then(console.log);
// 이렇게 프로미스도 너무 중첩적으로 체이닝을 하면 콜백 지옥과 비슷한 문제 발생

// async로 위 코드를 간단하게 만들어보자.
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// // 에러 처리
// async function pickFruits() {
//   try {const apple = await getApple();
//   const banana = await getBanana();
//   } catch () {
    
//   }
//   return `${apple} + ${banana}`;
// }

// pickFruits().then(console.log);


// 사과와 바나나가 동시에, 병렬적으로 기능 수행
async function pickFruits() {
  const applePromise = getApple(); // 사과의 프로미스를 만들자마자 이 안의 코드가 실행
  const bananaPromise = getBanana(); // 바나나의 프로미스를 만들자마자 이 안의 코드가 실행
  const apple = await applePromise; 
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
// 위 코드를 간단하게 처리, API 이용
// 프로미스의 배열을 전달하게 되면 모든 프로미스들이 병렬적으로 다 받을 때까지 모아주는 역할

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits => 
    fruits.join(` + `)
  );
}

pickAllFruits().then(console.log);


// 번외: 비동기 처리중 먼저 리턴하는 녀석만 출력
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);