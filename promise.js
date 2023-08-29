const getData = new Promise((resolve, reject) => {
    const name = 'rasel sharif';
    if (name === 'rasel') {

        resolve("valid")
    }
    reject('Invalid user name')
});

getData
    .then(data => console.log(data))
    .catch(err => console.log("Error: ", err))