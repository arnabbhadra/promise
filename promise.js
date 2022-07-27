//Basic implementation of Promise.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 1000);
        if (randomNumber % 2 === 0)
            resolve("success");
        else
            reject("failed");
    }, 3000);

});

(function main() {
    console.log("Starting of Promise async call!");
    promise.then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("Promise Completed");
    })
    console.log("End of async call");
})();
