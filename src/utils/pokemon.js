export const getAllPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => resolve(data));
    // ↓ same
    // fetch(url)
    // .then((res) => resolve(res.json()));
  })
};

export const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      resolve(data);
    });
  })
};


//BEFORE:
// setTimeout(() => {
//   console.log('あなた:掃除が完了しました！');
// }, 10000)
// const cook = (message, time) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve()
//     }, time)
//   })
// }
// cook('娘:肉を切り終えた', 4000)
// .then(() => {
//   return cook('父:肉を炒めた', 3000)
// }).then(() => {
//   return cook('娘:肉に塩胡椒を振った', 1000)
// }).then(() => {
//   return cook('父:肉をお皿に盛った', 2000)
// })

//AFTER:
// setTimeout(() => {
//   console.log('あなた:掃除が完了しました！');
// }, 10000)
// const cook = (message, time) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve()
//     }, time)
//   })
// }
// async function executeCooking() {
//   await cook('娘:肉を切り終えた', 4000)
//   await cook('父:肉を炒めた', 3000)
//   await cook('娘:肉に塩胡椒を振った', 1000)
//   await cook('父:肉をお皿に盛った', 2000)
// }
// executeCooking();