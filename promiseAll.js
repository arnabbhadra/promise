// Implementation of promise all

// promise A shall success always
const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 1000);
        if (randomNumber % 1 === 0)
            resolve("promiseA success");
        else
            reject("promiseA failed");
    }, 3000);

});

const promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 1000);
        if (randomNumber % 3 === 0)
            resolve("promiseB success");
        else
            reject("promiseB failed");
    }, 3000);

});

const promiseC = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 1000);
        if (randomNumber % 3 === 0)
            resolve("promiseC success");
        else
            reject("promiseC failed");
    }, 3000);

});


// All resolve promise
const promiseD = Promise.resolve('succesD');
const number = 42;
const promiseE = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success D")
    }, 3000)
})

Promise.all([promiseD, number, promiseE]).then(data => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

Promise.all([11, 'arnab', ['A']]).then(data => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

// returns a array of resolves. rejects if any one of promises reject.
Promise.all([promiseA, promiseB, promiseC]).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})


