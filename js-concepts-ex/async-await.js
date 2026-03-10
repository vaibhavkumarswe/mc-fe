const promise = new Promise((resolve, reject) => {
  resolve("Promise-Response-Data");
});

async function getAsyncData() {
  return "Async-Response-Data";
}

const dataAsync = getAsyncData();

console.log(dataAsync);
dataAsync.then((res) => console.log(res));

async function getPromiseData() {
  return promise;
}

const dataPromise = getPromiseData();

console.log(dataPromise);

dataPromise.then((res) => console.log(res));

// way we handle promise before async await
console.log("before async-await");
function handlPromise() {
  return promise.then((res) => {
    return res;
  });
}
const data = handlPromise().then((res) => console.log("hola", res));

console.log("after async-await");
async function handleAsync() {
  const val = await promise;
  console.log(val);
  return val;
}

const data2 = handleAsync().then();
