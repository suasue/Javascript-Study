'use strict';

// Promise is a JavaScript object for asynchronous operation. 
// 비동기적인 것을 수행할 때 콜백 대신 유용하게 쓰일 수 있음. 

// 2가지 포인트 
/* 1. state 상태
프로세스가 무거운 operation을 수행하고 있는 중인지, 
아니면 이 기능 수행 완료가 되어서 성공했는지, 실패했는지 상태에 대해 이해하는 게 중요.
*/
/* 2. producer와 consumer의 차이점 
우리가 원하는 데이터를 제공하는 사람과 
이 제공된 데이터를 쓰는 사람의 차이점을 잘 이해하는 게 중요
*/

// State: pending -> fulfilled or rejected
// pending : promise가 만들어져서 우리가 지정한 operation이 수행될 때
// fulfilled : operation을 성공적으로 끝낸 상태
// rejected : 파일을 찾을 수 없거나 네트워크의 문제가 생긴다면

// Producer vs Consumer
// producer : 원하는 기능을 수행해서 해당하는 데이터를 만들어내는 Promise object
// consumer : 원하는 데이터를 소비하는 Promise object

// 1. Producer
// 우리가 원하는 기능을 비동기적으로 실행하는 promise를 만들어보기로 하자. 
// promise는 클래스이기 때문에 new라는 키워드를 이용해서 object를 생성할 수 있다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files)
  // 네트워크에서 데이터를 받아오거나, 파일에서 큰 데이터를 읽어오는 과정은 비동기적으로 처리하는 게 좋다. 
  console.log('doing something...');
  setTimeout(()=> {
    // resolve('ellie');
    reject(new Error('no network')) // reject는 보통은 Error라는 object를 통해 값을 전달, Error는 JS에서 제공하는 클래스, 무언가 에러가 발생했다는 것을 나타내는 object, 보통 어떤 에러가 발생했는지 이유를 잘 명시해야 함. 
  }, 2000)
}); // 이 프로미스는 어떤 일을 2초 정도하다가 결국에는 일을 잘 마무리해서 resolve라는 콜백함수를 호출하면서 ellie라는 값을 전달

// Promise의 생성자를 보면 executor라는 콜백함수를 전달해줘야 함.
// 이 콜백함수에는 또 다른 2가지의 콜백함수를 받는다. 바로 resolve, reject
// resolve : 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달하는 콜백함수
// reject : 기능을 수행하다가 중간에 문제가 생기면 호출하게 될 콜백함수
// ===> promise 객체를 생성하려면? new 키워드 + resolve, reject를 받는 executor 콜백함수 전달!

// promise를 만드는 순간 우리가 전달한 executor라는 콜백함수가 바로 실행된다.
// 만약 이 promise 안에 네트워크 통신을 하는 코드를 작성했다면, promise가 만들어지는 순간 바로 네트워크 통신을 수행
// 그런데 만약 네트워크 요청을 사용자가 요구했을 때만 해야하는 경우라면? 사용자가 요구하지도 않았는데 불필요한 네크워크 통신이 발생할 수 있음.
// 프로미스를 만드는 순간 바로 executor라는 콜백함수가 바로 실행된다는 사실을 유의!!
// ---> when new Promise is created, the executor runs automatically.


// 2. Consumers: then, catch, finally
promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally')
  });
/* promise 값이 정상적으로 수행된다면(then) 
값(value)을 받아와서 원하는 기능을 수행하는 콜백함수를 전달해주면 된다.
value라는 파라미터에는 Promise가 정상적으로 수행되어서 resolve 콜백함수에서 전달된 ellie라는 값이 전달
즉, then이라는 것을 프로미스가 정상적으로 수행되어서 최종적으로 resolve라는 콜백함수를 통해 전달한 값이 value의 파라미터로 전달
*/

// 만약 reject를 쓰게 된다면?
// then을 호출하게 되면 then은 똑같은 promise를 리턴하기 때문에 그 리턴된 promise에 catch를 다시 호출할 수 있는 것. -> chaining

// 정리!!!
/* Promise object를 만들 때 우리가 비동기적으로 수행하고 싶은 기능들의 코드를 작성하고 나서 
성공적으로 잘 했다면 resolve를 호출, 실패헸다면 실패한 거와 왜 실패했는지 에러를 전달.
그래서 이 promise를 이용해서 then과 catch로 성공한 값 또는 실패한 에러를 받아와서 원하는 방식으로 처리해주면 된다! 
*/

// finally : 성공, 실패와 상관없이 무조건 호출되는 기능


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
}); // 1초 뒤에 숫자 1을 전달하는 프로미스

fetchNumber
  .then(num => num * 2) // 2
  .then(num => num * 3) // 6
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num -1), 1000); // 5
    }) // 숫자를 다른 서버에 보내서 다른 숫자로 변환된 값을 받아올 것임. 새로운 프로미스를 리턴. 이 프로미스는 다른 서버와 통신.
  })
  .then(num => console.log(num)); // 변환된 숫자를 출력, 5

// then은 값을 바로 전달해도 되고, Promise를 전달해도 된다!
// 최종적으로 소요되는 시간을 2초
// 이렇게 then, then, then 다른 비동기적인 아이들을 묶어서 처리할 수 있다. 


// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    // setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });


// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));

// getHen()
//   .then(hen => getEgg(hen))
//   .then(egg => cook(egg))
//   .then(meal => console.log(meal));

// 받아오는 값을 다른 함수로 전달해 호출하는 경우에는 생략 가능하다. 코드를 깔끔하게
getHen()
  .then(getEgg) 
  .catch(error => { // 달걀을 받아올 때 문제가 생긴다면 다른 재료로 대체를 하고 싶음. 에러 핸들링
    return '빵';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);