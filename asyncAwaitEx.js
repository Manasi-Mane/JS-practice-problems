const getData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
};

const fetchData = async () => {
    const result = await getData();

    console.log(result);
};

fetchData();