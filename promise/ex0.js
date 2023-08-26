

// trạng thái của promise
//1. pendding (chờ, rò rỉ bộ nhớ)
//2. fulfilled (hoàn thành)
//3. reject (thất bại)

//terminologies
//Promise chain => giải quyết callback hell
// truyền giá trị từ resolve(), reject() đến then() và catch()
// truyền giá trị từ then() ở trên đến then() ở dưới

var promise = new Promise(

    (resolve, reject) => { //<---- excutor
        var err = 1;
        if (err) {
            resolve(0);  // <----- success : call resolve()
        } else {
            reject("We have an error"); // <----- fail: call reject()
        };
    }
);


promise
    .then(
        (data) => {
            console.log(data);
            return 1;
        }
    )
    .then(
        (data) => {
            console.log(data);
        }
    )
    .catch(

        (error) => {
            console.log(error)
        }
    ).finally(
        () => {
            console.log("Done")
        }
    )