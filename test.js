// **** TRYING TO LOAD SCRIPT WITHOUT CALLBACK ****

// function loadScript(src) {
//   let script = document.createElement("script");
//   script.src = src;
//   document.head.append(script);
// }

// function useScript(src) {
//   alert(`Cool, the script ${src} is loaded`);
//   let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let size = 3;
//   let result = _.chunk(array, size);
//   alert(JSON.stringify(result));
// }
// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
// );
// useScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
// );

// **** TRYING TO LOAD SCRIPT WITH CALLBACK ****

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }

// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
//   (script) => {
//     alert(`Cool, the script ${script.src} is loaded`);
//     let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let size = 3;
//     let result = _.chunk(array, size);
//     alert(JSON.stringify(result));
//   }
// );

// **** CALLBACK HELL OR PYRAMID OF DOOM ****

// const { readFile } = require("fs");

// readFile("file1.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   readFile("file2.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     readFile("file3.txt", "utf8", (err, data) => {
//       if (err) throw err;
//       console.log(data);
//     });
//   });
// });

// **** USING PROMISES WITH THEN AND CATCH METHODS ****

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("this promise has been resolved"), 2000);
// });
// promise.then((data) => console.log(data)).catch((err) => console.error(err));

// **** ANOTHER EXAMPLE OF USING PROMISES ****

// function getData(url) {
//   return new Promise((res, rej) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => res(data))
//       .catch((err) => rej(err));
//   });
// }

// getData("https://jsonplaceholder.typicode.com/posts/1")
//   .then((data) => console.log(data))
//   .catch((err) =>
//     console.log(` an error accured , check your internet connection ${err}`)
//   );

// **** SOME SIMPLE PROMISE CHAINING ****

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000); // (*)
// })
//   .then(function (result) {
//     console.log(result); // 1
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(result * 10);
//       }, 2000);
//     });
//   })
//   .then(function (result) {
//     console.log(result); // 10
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result); // 20
//     return result * 2;
//   });

// **** EXAMPLE OF USING THE SECOND ARGUMENT AS THE CATCH METHOD ****

// var p = new Promise(function (resolve, reject) {
//   reject("Sorry");
// });

// var p2 = p.then(null, function (data) {
//   // callback returns a non-promise value
//   // in this case a string
//   console.log(data);
// });

// **** SIMPLE ASYNC AWAIT EXAMPLE ****

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await response.json();
//   console.log(data);
// }

// getData();

// **** A LITTLE ADVANCE EXAMPLE OF USING ASYNC AWAIT WITH ERROR HANDLING ****

// async function getData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     if (!response.ok) {
//       throw new Error(`an error occurred ${response.status}`);
//     }
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.log(`an error occurred ${error}`);
//     console.error(error);
//   }
// }

// getData();

// **** SOME BEST PRACTICES OF USING ASYNC AWAIT ****

// **** USE PROMISE.ALL() FOR PARALLEL EXECUTION ****

// **** BAD PRACTICE ****

// const { promisify } = require("util");
// const sleep = promisify(setTimeout);

// async function sayName() {
//   console.log("start of blocking code with await");
//   const name = await sleep(1000, "presto");
//   const type = await sleep(2000, "dog");

//   // some heavy computational operations
//   console.log("heavy computational operations start");

//   for (let i = 0; i < 1e10; i++) {
//     continue;
//   }

//   console.log(`${name} the ${type}`);
// }

// sayName();

// **** USE PROMISE.ALL() ****

// const { promisify } = require("util");
// const sleep = promisify(setTimeout);

// async function sayName() {
//   console.log("start of blocking code with await");
//   const [name, type] = await Promise.all([
//     sleep(1000, "Presto"),
//     sleep(2000, "Dog"),
//   ]);

//   // some heavy computational operations
//   console.log("heavy computational operations start");

//   for (let i = 0; i < 1e10; i++) {
//     continue;
//   }

//   console.log(`${name} the ${type}`);
// }

// sayName();

// **** USING SCHEDULING ****

// const { promisify } = require("util");
// const sleep = promisify(setTimeout);

// async function sayName() {
//   const pending = Promise.all([sleep(1000, "Presto"), sleep(2000, "Dog")]);

//   // some heavy computational operations
//   console.log("heavy computational operations start");

//   for (let i = 0; i < 1e10; i++) {
//     continue;
//   }

//   console.log("start of blocking code with await while scheduling");
//   const [name, type] = await pending;

//   console.log(`${name} the ${type}`);
// }

// sayName();
