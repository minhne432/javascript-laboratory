// code mô phỏng trường hợp Promise.all() có 1 thằng bị reject ở giai đoạn nào đó


var promise1 = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve([1]);
        }, 2000)
    }
);

var promise2 = new Promise(
    (resolve, reject) => {
        reject("ERROR!");
    }
);


Promise.all([promise1, promise2]) //<---- bản chất thì Promise.all() này sẽ return về 1 Promise
    .then(
        (result) => {
            console.log(result);
            var result1 = result[0];
            var result2 = result[1];
            return result1.concat(result2);
        }
    )
    .then(
        (data) => {
            console.log(data);
        }
    )
    .catch(
        (err) => {
            console.log(err);
        }
    )


