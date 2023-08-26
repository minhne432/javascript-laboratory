// code mô phỏng trường hợp sử dụng Promise.all
// giả sử muốn lấy kết quả trả về của 2 Promise để thực hiện 1 công việc nào đó
// nhưng sẽ không chạy từng promise rồi đợi => sẽ phí nhiều thời gian
// giả sử ta có n Promise thì thời gian tối đa theo cách trên sẽ = n1 + n2 + n3
// trong đó thời ni là thời gian thực hiện xong promise ni
// nên dùng Promise.all() để chạy song song các promise => thời gian tối đa
// = thời gian của Promise có thời gian thực hiện lớn nhất


var promise1 = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve([1]);
        }, 2000)
    }
);

var promise2 = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve([2, 3]);
        }, 5000)
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


