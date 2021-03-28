'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration이 제일 위로 올라가는 것.
// 결론 : 호이스팅이 된 이후부터 코드가 나타나는 순서대로 자동적으로 실행된다.

console.log('1'); // 동기 1

// setTimeout() : web api, 지정한 시간이 지나면 콜백함수(전달한 함수)를 호출하는 거, 콜백함수 - 우리가 전달한 함수를 나중에 불러줘!
// 브라우저 api는 먼저 브라우저에 요청을 보냄, 응답을 기다리지 않고, 넘어감.(내부발생 개념 : 메시지 큐, 스택, 마이크로 태스크)
// 비동기적인 실행방법
/* 전달하는 함수는 바로 실행되는 게 아니라 setTimeout 이라는 함수 안에 하나의 파라미터 인자로 전달됨. 
지금 바로 실행되지 않고 1초가 지난 뒤에 내 함수를 실행해줘, 나중에 call해 줘 전달하는 함수를 callback 함수라고 함. 
*/
setTimeout(() => console.log('2'), 1000) // 비동기 3
console.log('3'); // 동기 2

// 콜백도 비동기와 동기일 때로 나눠진다.
// Synchronous callback 즉각적으로 동기적으로 실행되는 콜백
function printImmediately(print) {
  print();
} // hoisting 

printImmediately(()=> console.log('hello')); // 동기 4

// Asynchronous callback 나중에 언제 실행될 지 예측할 수 없는 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
} // hoisting 
printWithDelay(() => console.log('async callback'), 2000); // 비동기 5


// =====================
// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000); // 로그인하는데 2초 걸린다. 
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

/* 
1. 사용자에게 id, password 입력 받아옴.
2. 로그인 시도, 로그인 성공하면 로그인한 사용자의 id를 받아옴
3. 그 id로 역할을 요청해서 받아옴.
4. 받아온다면 사용자의 object가 출력될 것임
*/ 

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id, 
  password,
  user => {
    userStorage.getRoles(
      user, 
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );  
  },
  error => {
    console.log(error);
  }  
);

