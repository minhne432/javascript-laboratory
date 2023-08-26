//code mô phỏng trường hợp sử dụng Promise.resolve()


var promise = Promise.resolve("Success!"); //<----- promise mặc định là resolve



promise
    .then(
        (data) => {
            console.log('data: ', data);
        }
    )
    .catch(
        //promise này chỉ gọi .catch() khi mà trong các .then() ở trên lại return về 1 promise bị reject
        (err) => {
            console.log('err: ', err);
        }
    )
