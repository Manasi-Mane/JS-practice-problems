const dataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received successfully");
    }, 2000);
});

dataPromise.then((message) => {
    console.log(message);
});

//rejection

const myPromise = new Promise((resolve, reject) => {
    reject("Something went wrong");
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


//condition
const username = "admin";

const login = new Promise((resolve, reject) => {

    if (username === "admin") {
        resolve("Login successful");
    } else {
        reject("Invalid username");
    }

});

login
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

//finally

const request = new Promise((resolve, reject) => {
    resolve("Data received");
});

request
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Request completed");
    });