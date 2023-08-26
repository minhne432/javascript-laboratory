//code mô phỏng trường hợp Promise.resolve("Success!") gọi đến .catch()


var promise = Promise.resolve("Success!"); //<----- promise mặc định là resolve



promise
    .then(
        (data) => {
            console.log('data: ', data);
            return new Promise((resolve, reject) => {
                reject("Reject");
            })
        }
    )
    .then(
        (data) => {
            console.log(".then() above resolve")
        }
    )
    .catch(
        //promise này chỉ gọi .catch() khi mà trong các .then() ở trên lại return về 1 promise bị reject
        (err) => {
            console.log('err: ', err);
        }
    )
