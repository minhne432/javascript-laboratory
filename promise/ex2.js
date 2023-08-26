// code mô phỏng trường hợp : trả về 1 promise, nhưng promise đó reject()

let sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

sleep(1000)
    .then(
        () => {
            console.log(1);
            return sleep(1000);
        }
    )
    .then(
        () => {
            //reject tại đây
            console.log(2);
            return new Promise((resolve, reject) => {
                reject("ERROR");
            })
        }
    ).then(
        () => {
            console.log(3);
            return sleep(1000);
        }
    ).then(
        () => {
            console.log(4);
        }
    )
    .catch(
        (err) => {
            console.log(err);
        }
    )