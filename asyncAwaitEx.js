// const getData = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 2000);
//     });
// };

// const fetchData = async () => {
//     const result = await getData();

//     console.log(result);
// };

// fetchData();

// const getData = () => {
//     return new Promise((resolve, reject) => {
//         reject("Unable to get data");
//     });
// };

// const fetchData = async () => {

//     try {
//         const result = await getData();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }

// };

// fetchData();

//login simulation

const loginUser = (username,password)=>{
    return new Promise((resolve,reject)=>{
        if(username==="admin" && password==="admin123"){
            resolve("Login successful");
        }else{
            reject("Invalid username or password");
        }
    })
}

const login = async ()=>{
    try{
        const result = await loginUser("admin","admin123");
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

login()