class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 1000); 
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }

  async getUserWithRole(id, password) {
    try {
      const user = await this.loginUser(id, password);
      const userRole = await this.getRoles(user);
      alert (`Hello ${userRole.name}, your have a ${userRole.role} role`);
    } catch (error) {
      console.log(error);
    }
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.getUserWithRole(id, password)


// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');

// 이전 버전
// userStorage
//   .loginUser(id, password)
//   .then(userStorage.getRoles)
//   .then(user => alert(`Hello ${user.name}, your have a ${user.role} role`))
//   .catch(console.log);


// 뉴 버전
// async function login(id, password) {
//   try {
//     const user = await userStorage.loginUser(id, password);
//     const userRole = await userStorage.getRoles(user);
//     alert(`Hello ${userRole.name}, your have a ${userRole.role} role`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// login(id, password);

// // 어웃!!! ❤️ 저랑 비슷하게 작성하셨네요! 🙌

// class UserStorage {
//   // 이거 추가함
//   async getUserWithRole(user, password) {
//     const user = await this.loginUser(user, password);
//     const role = await this.getRoles(user);
//     return role;
//   }
// }
// // 그리고 쓸때는
// // promise chaining -> ✨ async/await ✨
// userStorage
//   .getUserWithRole() //
//   .catch(console.log)
//   .then(console.log);


